"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[4935],{50167:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});r(57658);var o=r(72126),n=r(11799),i=r(4615),l=r(21202),a=r(76462),s=r(15047),u=r(19889),d=r(92338),c=r(97880),v=r(54642),g=r(39699),p=r(37181),f=r(80444),m=r(77080),b=r(88923),h=r(27724),S=r(7339),y=r(42198),P=r(48141);function C(e){let{environment:t,config:r}=e;const i=(e,r)=>{var o;const n=x(e,r),i=t.defaultRecordCache.inMemoryRecordCache.getRecord({pointer:n,userId:t.currentUser.id});if(void 0===(null==i?void 0:i.value))return`${n.table}: ${n.id}`;const l="type"in i.value?i.value.type:n.table;return"name"in(null==i?void 0:i.value)?`${l} ${i.value.id} ${i.value.name}`:"properties"in(null==i?void 0:i.value)&&(0,c.$K)(i.value.properties)&&"title"in i.value.properties&&(0,c.$K)(null==i?void 0:i.value.properties.title)?`${l} ${i.value.id} ${i.value.properties.title.join(" ").slice(0,30)}`:`${l} ${null==i||null===(o=i.value)||void 0===o?void 0:o.id}`},a=(e,r)=>{const o=x(e,r);return t.defaultRecordCache.inMemoryRecordCache.getRecord({pointer:o,userId:t.currentUser.id})},C=(e,t)=>{const r=x(e,t),o=a(e,t),n={title:i(e,t),raw:null==o?void 0:o.value,parent:void 0,id:r,children:[]};if(void 0!==(null==o?void 0:o.value)&&"parent_table"in(null==o?void 0:o.value)&&"parent_id"in(null==o?void 0:o.value)){var l,s;const e=x(null===(l=o.value)||void 0===l?void 0:l.parent_id,null===(s=o.value)||void 0===s?void 0:s.parent_table);n.parent=e}if(null!=o&&o.value&&"content"in(null==o?void 0:o.value)){var u;const e=(null==o||null===(u=o.value)||void 0===u?void 0:u.content)||[];for(const t of e){const e=x(t,"block"),o=a(t,"block"),l={title:i(t,"block"),raw:null==o?void 0:o.value,parent:r,id:e,children:[]};n.children.push(l)}}return n},V=(e,t)=>`${r.adminUrl}/__admin/${e}/${t}`,A=(e,t)=>{window.open(V(e,t))},D=()=>b.default.state.open?(console.warn("Returning peek view page, if you want the underlying page, please close it and try again"),b.default.state.target):f.default.state.mainEditorCurrentBlockStore?f.default.state.mainEditorCurrentBlockStore:void console.error("No current mainEditorCurrentBlockStore"),$=function(e){var r;let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;const l="string"==typeof e?{query:{text:e,filters:(0,d.u4)(),sort:{field:"relevance"}},limit:20,debug:o}:e;return{environment:t,input:l,spaceId:null===(r=f.default.state.currentSpaceStore)||void 0===r?void 0:r.id,publicAccessPermissionAncestorBlockId:P.bC(t).publicAccessPermissionAncestorBlockId,searchExperimentOverrides:i,forcedClusterPattern:n,source:"debugging"}},w={id:"root0000-0000",table:"block"};return{getRecordFromApi:async(e,r)=>{var o,n;const i=x(e,r),l=[];l.push({pointer:i,version:-1});const a=await v.syncRecordValues(t,{requests:l},null===(o=f.default.state.currentUserStore)||void 0===o?void 0:o.id);return"success"===a.type?null===(n=a.data.recordMap[i.table])||void 0===n?void 0:n[i.id]:void 0},getRecordFromCache:a,getAdminUrl:V,getSelectedBlocks:()=>h.default.state.stores,openInAdmin:A,openSelectedBlocksInAdmin:()=>{if(0!==h.default.state.stores.length)return h.default.state.stores.forEach((e=>{A(l.iU,e.id)}));console.error("No selected block")},openCurrentPageCreatorInAdmin:()=>{var e;const t=(()=>{var e,t;const r=null===(e=D())||void 0===e?void 0:e.getCreatedById(),o=null===(t=D())||void 0===t?void 0:t.getCreatedByTable();if(r&&o)return a(r,o);console.error("no created_by_id or created_by_table for this page")})(),r=null==t||null===(e=t.value)||void 0===e?void 0:e.id;r?A(u.KJ,r):console.error("no current page Creator, not opening")},getCurrentPage:D,openCurrentPageInAdmin:()=>{var e;const t=null===(e=D())||void 0===e?void 0:e.id;t?A(l.iU,t):console.error("Not opening")},openCurrentSpaceInAdmin:()=>{f.default.state.currentSpaceStore?A(s.bx,f.default.state.currentSpaceStore.id):console.error("No current space")},quickFind:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;const n=$(e,t,r,o),i=P.MS(n);return i&&i.then((e=>"success"===e.type?e.data:e))},quickFindRequest:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;return $(e,t,r,o)},quickFindCollections:function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",o=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;const i="string"==typeof e?{query:{text:e,filters:(0,d.u4)(),sort:{field:"relevance"}},limit:20,debug:r}:e,l=f.default.state.currentSpaceStore,{query:a,limit:s}=i;if(!l)return;const u=v.search(t,{type:d.n8.CollectionsInSpace,query:a.text.trim(),spaceId:l.id,limit:s,filters:d.u4({excludeTemplates:!0,requireEditPermissions:!0}),sort:{field:"relevance"},debug:r,searchExperimentOverrides:n,forcedClusterPattern:o});return u.then((e=>"success"===e.type?e.data:e))},getCurrentPageDetail:()=>{var e;const t=null===(e=D())||void 0===e?void 0:e.id;if(t)return C(t,"block");console.error("Not opening")},getRecordDetail:C,getRecordTitle:i,getRecordTree:e=>{const t=new n.Z;e.map((e=>{const r=x(e.id,e.table),o=i(e.id,e.table),n=a(e.id,e.table),l={title:o,parent:(e=>{var t;if(void 0!==(null==e||null===(t=e.value)||void 0===t?void 0:t.parent_id))return x(e.value.parent_id,e.value.parent_table)})(n),id:r,raw:null==n?void 0:n.value,children:[]};t.set(r,l)}));const r={title:"root",parent:void 0,id:w,raw:void 0,children:[]};return e.map((e=>{const o=x(e.id,e.table),n=t.get(o);var i;void 0!==(null==n?void 0:n.parent)&&t.has(n.parent)?null===(i=t.get(n.parent))||void 0===i||i.children.push(n):void 0!==n?r.children.push(n):r.children.push({title:"Failed to load Record",parent:void 0,id:o,raw:void 0,children:[]})})),r},overrideStatsigLocalExperiment:(e,t)=>{const r="Failed to override Statsig local experiment";if(!m.default.isStatsigEnabled()||!S.C.isInitialized())return console.error(r),!1;try{return S.C.updateLocalOverrideConfig(e,t),!0}catch(o){return console.error(r),!1}},overrideStatsigLocalFeatureGate:(e,t)=>{const r="Failed to override Statsig local feature gate";if(!m.default.isStatsigEnabled()||!S.C.isInitialized())return console.error(r),!1;try{return S.C.updateLocalOverrideGate(e,t),!0}catch(o){return console.error(r),!1}},removeAllStatsigLocalOverrides:()=>{const e="Failed to remove all Statsig local overrides";if(!m.default.isStatsigEnabled()||!S.C.isInitialized())return console.error(e),!1;try{return S.C.removeAllLocalOverrides(),!0}catch(t){return console.error(e),!1}},getCurrentSpaceId:()=>{var e;return null===(e=D())||void 0===e?void 0:e.getSpaceId()},getCurrentUserId:()=>{var e;return null===(e=f.default.state.currentUserStore)||void 0===e?void 0:e.id},getAutomationsForSelectedBlocks:()=>h.default.state.stores.map((e=>k(e))).filter(c.$K),getAutomationsForCurrentPage:()=>k(D()),generateTutorialData:(e,t,n)=>{const i=r.env;if("development"!==i&&"local"!==i)return;const l=n??f.default.state.mainEditorCurrentBlockStore,a=null==l?void 0:l.getType(),s=null==l?void 0:l.getProperties(),u=null==l?void 0:l.getFormat();if(!(l&&a&&s&&u))return void console.log(`Missing one of these: ${JSON.stringify({rootBlockStore:l,type:a,properties:s,format:u})}`);const d=[{uri:e,type:"block",parentUri:t,parentType:"collection",blockValue:{type:a,properties:s,format:u}},...function e(t,r){const n=r.getContentStores();return o.xH(n.map(((r,o)=>{const n=r.getType(),i=r.getProperties(),l=r.getFormat();if(!n||!i||!l)return;return[{uri:`${t}/${o}`,type:"block",parentUri:t,parentType:"block",blockValue:{type:n,properties:i,format:l}},...e(`${t}/${o}`,r)]}))).filter(c.$K)}(e,l)];function v(t){const r=t.replace(e,"").split("/");return o.eV(e)+r.join("_")}const g={},p=d.map((t=>{const r=t.uri;return JSON.stringify(t,((o,n)=>{if("uri"===o||"parentUri"===o)return["<<<START>>>","`",n.replace(e,"${uri}"),"`","<<<END>>>"].join("");if("title"===o&&Array.isArray(n)&&"image"!==t.blockValue.type){const e=[];for(const[t,o]of n.entries()){if(o.length>1&&"a"===o[1][0][0])return o;const n=v(`${r}/${t}`),i=[["<<<START>>>",`LocalizationHelper.formatMessage(messages.${n})`,"<<<END>>>"].join(""),...o.slice(1)];g[n]={defaultMessage:o[0],id:n},e.push(i)}return e}return n}))})).map((e=>e.replace(/"<<<START>>>/g,"").replace(/<<<END>>>"/g,"").replace(/<<<QUOTE>>>/g,'"')));return`\n\t\t\tconst messages = defineMessages({\n\t\t\t\t${(0,c.qP)(g).map((e=>{let[t,r]=e;return`"${t}": {\n\t\t\t\t\t\t\t\t\tid: "${r.id}",\n\t\t\t\t\t\t\t\t\tdefaultMessage: \`${r.defaultMessage}\`,\n\t\t\t\t\t\t\t\t\tdescription: "${r.description}",\n\t\t\t\t\t\t\t\t}`})).join(",\n")}\n\t\t\t})\n\t\t\tconst uri = "${e}"\n\t\t\treturn [\n\t\t\t\t${p.join(", ")}\n\t\t\t]`},resetQnAOnboarding:()=>{const e=f.default.state.currentUserSettingsStore;e?g.createAndCommit({userAction:"debuggingHelpers.clearQnAOnboarding",environment:t,userId:e.id,perform:t=>{p.d2({userSettingsStore:e,data:{ai_qna_intro_onboarding_phase:void 0},transaction:t})}}):console.error("Could not find current user settings")},getAllUserSignals:()=>{var e,t,r,o,n,i;const a=null===(e=f.default.state.currentSpaceStore)||void 0===e?void 0:e.getSpaceId(),s=null===(t=f.default.state.currentUserStore)||void 0===t?void 0:t.userId;if(!a||!s)return;const d=y.default.getUserSignals({spaceId:a,userId:s});return{similarUser1dRecentPages:[...(null==d||null===(r=d.similarUserRecentPages)||void 0===r||null===(r=r.pagesMetadata)||void 0===r?void 0:r.keys())||[]].map((e=>{var t;const r=null==d||null===(t=d.similarUserRecentPages)||void 0===t?void 0:t.pagesMetadata.get(e);return{...r,users:null==r?void 0:r.userIds.map((e=>C(u.KJ,e))),mostSimilarUser:C(u.KJ,null==r?void 0:r.mostSimilarUser),page:C(l.iU,e)}})),topPages7dPageView:[...(null==d||null===(o=d.topPages7dPageView)||void 0===o?void 0:o.keys())||[]].map((e=>{var t;return{pageAuthority:null==d||null===(t=d.topPages7dPageView)||void 0===t?void 0:t.get(e),record:C("block",e)}})),editedPages1d:[...(null==d||null===(n=d.editedPages1d)||void 0===n?void 0:n.keys())||[]].map((e=>{var t;return{editedAt:null==d||null===(t=d.editedPages1d)||void 0===t?void 0:t.get(e),record:C("block",e)}})),similarUsersEditedPages1d:[...(null==d||null===(i=d.similarUsersEditedPages1d)||void 0===i?void 0:i.keys())||[]].map((e=>{var t;return{editedAt:null==d||null===(t=d.similarUsersEditedPages1d)||void 0===t?void 0:t.get(e),record:C("block",e)}})),allSignals:d}},loadAllUserSignals:()=>{var e,r;const o=null===(e=f.default.state.currentSpaceStore)||void 0===e?void 0:e.getSpaceId(),n=null===(r=f.default.state.currentUserStore)||void 0===r?void 0:r.userId;o&&n&&y.default.initializeAndLoadAllUserSignals({spaceId:o,userId:n,environment:t})},getLocalSearchableCache:async()=>{const{currentSpaceStore:e,currentSpaceViewStore:r}=f.default.state;if(e){const o=await P.hb({environment:t,currentSpaceStore:e,currentSpaceViewStore:r}),n=new Map;return o.blocks.forEach((e=>{e.source.forEach((t=>{const r=n.get(t)||[];r?n.set(t,[...r,e]):n.set(t,[e])}))})),{...o,groupedPages:n}}}}}function x(e,t){return"string"==typeof e&&"string"==typeof t?Object.keys(a.OC).includes(e)?{table:e,id:(0,i.xP)(t)||t}:{table:t,id:(0,i.xP)(e)||e}:"string"!=typeof e||t?"object"==typeof e?e:t:{table:"block",id:(0,i.xP)(e)||e}}function k(e){if(!e)return;const t=e.getValue();if(e.isCollectionView()){const r=[],o=e.getCollectionStore(),n=null==o?void 0:o.getValue(),i=(null==o?void 0:o.getAutomationStores())??[];r.push(...i.map((e=>V(e))).filter(c.$K));const l=(null==o?void 0:o.getTemplatePageStores())??[];if(r.push(...l.map((e=>{const t=e.getAutomationStore();if(t)return V(t)})).filter(c.$K)),t&&n)return{block:t,collection:n,automations:r}}else{const r=V(e.getAutomationStore());if(t&&r)return{...r,block:t}}}function V(e){if(!e)return;const t=null==e?void 0:e.getValue(),r=((null==e?void 0:e.getActionStores())??[]).map((e=>e.getValue())).filter(c.$K),o=null==e?void 0:e.getCreatedByPointer(),n=(null==o?void 0:o.table)===u.KJ&&(null==e?void 0:e.getRecordModel(o));return null!=t&&t.alive&&n?{automation:t,actions:r,createdBy:n}:void 0}},50479:(e,t,r)=>{r.r(t),r.d(t,{loadConsoleHelpers:()=>n});var o=r(95477);async function n(e){const{transactionQueue:t,environment:n}=e,i=await Promise.resolve().then(r.bind(r,88923)),l=await Promise.resolve().then(r.bind(r,86486)),[a,{default:s},{default:u},{default:d},{default:c},{default:v},{default:g},{initialize:p},f,m]=await Promise.all([Promise.resolve().then(r.bind(r,92595)),Promise.resolve().then(r.bind(r,80444)),Promise.resolve().then(r.bind(r,27724)),Promise.resolve().then(r.bind(r,24666)),Promise.resolve().then(r.bind(r,78291)),Promise.resolve().then(r.bind(r,58455)),Promise.resolve().then(r.bind(r,77080)),Promise.resolve().then(r.bind(r,44198)),Promise.resolve().then(r.bind(r,48317)),Promise.resolve().then(r.bind(r,27370))]);p(n);const b=await Promise.resolve().then(r.bind(r,54642)),[h]=await Promise.all([Promise.resolve().then(r.t.bind(r,73935,19))]);a.exposeDebugValue("environment",n),a.exposeDebugValue("api",b),a.exposeDebugValue("AppStore",s),a.exposeDebugValue("PeekStore",i),a.exposeDebugValue("SelectionStore",u),a.exposeDebugValue("TextSelectionStore",d),a.exposeDebugValue("performanceHelpers",f),a.exposeDebugValue("SubscriptionDataStore",c),a.exposeDebugValue("config",o.default),a.exposeDebugValue("AnalyticsStore",v),a.exposeDebugValue("ExperimentStore",g),a.exposeDebugValue("defaultRecordCache",n.defaultRecordCache),a.exposeDebugValue("SelectableHoverMenuStore",l),a.exposeDebugValue("ReactDOM",h);const[{default:S},{default:y},{default:P},{default:C},{default:x},{default:k},{default:V},{default:A}]=await Promise.all([Promise.resolve().then(r.bind(r,16772)),Promise.resolve().then(r.bind(r,76967)),Promise.resolve().then(r.bind(r,55320)),Promise.resolve().then(r.bind(r,30857)),Promise.resolve().then(r.bind(r,75538)),Promise.resolve().then(r.bind(r,1302)),Promise.resolve().then(r.bind(r,50167)),Promise.resolve().then(r.bind(r,42198))]);a.exposeDebugValue("CompletionsStore",S),a.exposeDebugValue("RevisionStore",y),a.exposeDebugValue("RenderQueue",k),a.exposeDebugGetter("LocalTransactionQueue",(()=>t)),a.exposeDebugValue("SearchMenuStore",P),a.exposeDebugValue("SearchSessionMetricsStore",C),a.exposeDebugValue("OnboardingStore",x),a.exposeDebugValue("debugging",V({environment:n,config:o.default})),a.exposeDebugValue("resetTutorials",(()=>{m.resetTutorials(n)})),a.exposeDebugValue("UserSignalsStore",A);(await Promise.resolve().then(r.bind(r,36769))).setEnvironment(n),r.e(7218).then(r.bind(r,57218))}},35868:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(49085);class n extends o.default{getInitialState(){return{open:!1}}}const i=new n},44198:(e,t,r)=>{r.r(t),r.d(t,{initialize:()=>s});var o=r(92595),n=r(75233),i=r(79420),l=r(88536),a=r(35868);function s(e){o.exposeDebugValue("RecordSubscriptions",i.Z),o.exposeDebugValue("RecordEvictor",n.Z),o.exposeDebugValue("messageStoreDiagnosticPing",(()=>(0,l.cO)({environment:e,logToConsole:!0}))),o.exposeDebugGetter("messageStoreStatistics",(()=>(0,l.ZN)(Date.now()))),o.exposeDebugValue("toggleMessageStoreDebugPanel",(()=>{a.Z.setState({open:!a.Z.state.open})})),o.exposeDebugValue("recordMessageStoreConnectionCounters",(e=>{if(!e)return void console.error("Please provide an amount of time in ms as an argument.");const t=(0,l.mb)();console.log(`Recording connection counter changes in the next ${e} ms.`),window.setTimeout((()=>{const e=(0,l.C$)(t);e?console.log("Connection counters delta:",e):console.log("Connection was reset since recording started.")}),e)}))}},30857:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var o=r(49085);class n extends o.default{getInitialState(){return{selectedQueryResult:!1,numKeystrokes:0,numServerRequests:0,numLocalRequests:0,hadMetaClick:!1,firstKeyStrokeTimeMs:void 0}}}const i=new n},11799:(e,t,r)=>{r.d(t,{Z:()=>u});var o=r(67266),n=r.n(o),i=r(72126);let l;const a=new WeakMap;function s(e){let t=a.get(e);return void 0!==t||(t=n()(e),a.set(e,t)),t}l=Symbol.iterator;class u{constructor(){let{getKey:e=s,from:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.map=new Map,this.getKey=void 0,this.getKey=e,t)for(const[r,o]of t)this.set(r,o)}get size(){return this.map.size}set(e,t){return this.map.set(this.getKey(e),[e,t])}get(e){const t=this.map.get(this.getKey(e));if(t)return t[1]}has(e){return this.map.has(this.getKey(e))}delete(e){return this.map.delete(this.getKey(e))}*entries(){for(const e of this.map.values())yield e}[l](){return this.entries()}*keys(){for(const e of this.map.keys())yield JSON.parse(e)}*values(){for(const[e,t]of this.map.values())yield t}valuesArray(){return Array.from(this.values())}compactedValuesArray(){return i.oA(Array.from(this.values()))}}}}]);