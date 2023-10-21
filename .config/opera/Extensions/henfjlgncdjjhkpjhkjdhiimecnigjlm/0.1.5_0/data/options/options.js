var background = (function () {
  var tmp = {};
  chrome.runtime.onMessage.addListener(function (request) {
    for (var id in tmp) {
      if (tmp[id] && (typeof tmp[id] === "function")) {
        if (request.path === "background-to-options") {
          if (request.method === id) tmp[id](request.data);
        }
      }
    }
  });
  /*  */
  return {
    "receive": function (id, callback) {tmp[id] = callback},
    "send": function (id, data) {chrome.runtime.sendMessage({"path": "options-to-background", "method": id, "data": data})}
  }
})();

var config = {
  "render": function (e) {
    if (window[e.pref]) {
      window[e.pref].value = e.value
    }
  },
  "load": function () {
    var prefs = [...document.querySelectorAll("*[data-pref]")];
    prefs.forEach(function (elem) {
      var pref = elem.getAttribute("data-pref");
      window[pref] = config.connect(elem, pref);
    });
    /*  */
    window.removeEventListener("load", config.load, false);
  },
  "connect": function (elem, pref) {
    var att = "value";
    if (elem) {
      if (elem.type === "checkbox") att = "checked";
      if (elem.localName === "select") att = "value";
      if (elem.localName === "number") att = "value";
      var pref = elem.getAttribute("data-pref");
      background.send("get", pref);
      /*  */
      elem.addEventListener("change", function () {
        background.send("changed", {
          "pref": pref,
          "value": this[att]
        });
      });
    }
    /*  */
    return {
      get value () {
        return elem[att];
      },
      set value (val) {
        if (elem.type === "file") return;
        elem[att] = val;
      }
    }
  }
};

background.receive("set", config.render);
window.addEventListener("load", config.load, false);