var core = {
  "start": function () {
    core.load();
  },
  "install": function () {
    core.load();
  },
  "load": function () {
    config.progress = false;
  },
  "stop": function (e, flag) {
    config.progress = false;
    app.button.icon(e.tabId, '');
    /*  */
    if (flag) {
      if (config.timeout.done) clearTimeout(config.timeout.inject);
      config.timeout.done = setTimeout(config.resolve, 300);
    }
  },
  "action": function () {
    if (config.screenshot.permission) {
      /* when - Screenshot for all tabs - is activated from the options page */
      
      /* Currently not supported in manifest version 3.
        chrome.permissions.request({"origins": ["<all_urls>"]}, function (granted) {
          if (granted) {
            if (chrome.tabs.captureVisibleTab) {
              core.inject(0);
            }
          }
        });
      */
    } else {
      core.inject(1);
    }
  },
  "inject": function () {
    var parameters = config.screenshot.permission ? {} : {"active": true};
    /*  */
    app.tab.query.all(parameters, async function (tabs) {
      if (tabs && tabs.length) {
        for (var i = 0; i < tabs.length; i++) {
          if (tabs[i]) {
            await new Promise(resolve => {
              app.tab.inject.js({
                "target": {"tabId": tabs[i].id}, 
                "files": ["data/content_script/inject.js"]
              }, function () {
                if (config.timeout.inject) clearTimeout(config.timeout.inject);
                /*  */
                if (config.progress) {
                  config.progress = false;
                  app.page.send("action", {"action": "finalize"}, tabs[i].id, null);
                } else {
                  config.progress = true;
                  config.timeout.inject = setTimeout(function () {
                    app.page.send("action", {"action": "start"}, tabs[i].id, null);
                    config.resolve = resolve;
                  }, 300); 
                }
              });
            });
          }
        }
      }
    }); 
  },
  "capture": function (e) {
    if (e.tabId) {
      app.tab.get(e.tabId, function (tab) {
        if (tab) {
          app.tab.update(tab.id, {"active": true}, function () {
            app.window.update(tab.windowId, {"focused": true}, async function () {
              app.button.icon(tab.id, config.progress ? "ON" : '');
              await new Promise(resolve => setTimeout(resolve, 300));
              app.button.icon(tab.id, config.progress ? "OFF" : '');
              /*  */
              if (config.progress) {
                app.tab.capture(tab.windowId, {
                  "format": config.screenshot.format, 
                  "quality": config.screenshot.quality
                }, function (dataURL) {
                  if (dataURL) {
                    app.page.post("action", {
                      "y": e.y,
                      "x": e.x,
                      "action": "draw",
                      "dataURL": dataURL,
                      "format": config.screenshot.format,
                      "delay": config.screenshot.delay < 500 ? 500 : config.screenshot.delay
                    }, tab.id, null);
                  }
                });
              }
            });
          });
        }
      });
    }
  }
};

app.button.on.clicked(core.action);

app.page.receive("stop", core.stop);
app.page.receive("capture", core.capture);

app.page.receive("done", function (e) {
  core.stop(e, true);
});

app.hotkey.on.pressed(function (e) {
  if (e === "capture") {
    core.action();
  }
});

app.options.receive("get", function (pref) {
  app.options.send("set", {
    "pref": pref,
    "value": config.get(pref)
  });
});

app.options.receive("changed", function (o) {
  config.set(o.pref, o.value);
  app.options.send("set", {
    "pref": o.pref, 
    "value": config.get(o.pref)
  });
});

app.on.startup(core.start);
app.on.installed(core.install);