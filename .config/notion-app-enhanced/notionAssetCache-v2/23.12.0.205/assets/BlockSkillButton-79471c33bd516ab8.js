"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[6212],{27784:(e,t,n)=>{n.r(t),n.d(t,{BlockSkillButton:()=>x});var i=n(23174),o=n.n(i),r=n(10434),l=n.n(r),a=n(67294),s=n(480),c=n(86628),d=n(24405),p=n(42853),u=n(20669),m=n(72126),k=n(96802),v=n(39699),S=n(57819),g=n(94715),h=n(33932),y=n(70771),Z=n(5175),w=n(85264),b=n(74822),C=n(87279),f=n(80444),P=n(61766),A=n(57559),_=n(48019),E=n(52275),N=n(31945),B=n(78140),F=n(89728),K=n(53437),V=n(72495);function x(e){window.__c={n:"BlockSkillButton"};const{blockStore:t}=e,n=(0,s.O7)(),i=(0,c.VK)((()=>{var e;return null===(e=f.default.state.currentSpaceStore)||void 0===e?void 0:e.id}),[]),r=(0,c.qz)(void 0,P.Z),x=(0,c.VK)((()=>(0,b.Qv)()),[]),H=(0,c.VK)((()=>{const e=t.getFormatStore().getKeyStore("ai_skill_pointer").getValue();if(!e)return;const n=A.Vf.createChildStore(t,e);return(0,b.WE)(n)}),[t]),O=(0,c.VK)((()=>(null==H?void 0:H.skillStore.getName())??""),[null==H?void 0:H.skillStore]),R=(0,a.useCallback)((e=>{v.createAndCommit({userAction:"assistant.setHeaderBlockSkill",environment:n,perform:n=>{k.FH({stores:[t],update:{ai_skill_pointer:e.pointer},transaction:n})}})}),[n,t]),T=(0,d.Fg)(),Q=[{key:0,render:e=>a.createElement(V.Z,e),actions:m.oA(x.map((e=>{if(!(0,b.Zh)(e))return;const{skillStore:t}=e;return{key:t.id,displayName:O,analyticsName:O,searchName:O,render:e=>a.createElement(E.Z,l()({title:t.getName()},e)),action:()=>{R(t)},closeParentMenu:!0}})))}],I=(0,c.VK)((()=>{const e=null==H?void 0:H.skillStore,n=null==e?void 0:e.getParentPointer(),i=t.getSpaceShardedPointer();return!!n&&(n.id===i.id&&(null==n?void 0:n.table)===i.table)}),[null==H?void 0:H.skillStore,t]);return o()(N.ZP,{popupType:n.device.isMobile?K.kQ.SlideUp:K.kQ.Popup,renderOrigin:e=>a.createElement(F.Z,l()({style:{marginLeft:8,marginTop:3,color:H?T.aiPurpleColor:T.lightIconColor}},e),(0,u.y)({width:16})),render:e=>o()("div",{style:{width:300}},void 0,o()(V.Z,{title:"Skills"},void 0,o()(N.ZP,{popupType:N.Z4.Popup,render:e=>o()(B.Z,{menuType:C.og.Popup,maxHeight:"50vh"},void 0,o()(_.Z,{context:{blocks:[],environment:n,publicEditMode:void 0},sections:Q,initialFocus:void 0,onAccept:()=>e.close()})),renderOrigin:e=>a.createElement(F.Z,e,H?a.createElement(a.Fragment,null,b.AN[H.type],o()(Z.Z,{clientSkill:H})):"Select a skill",(0,p.i)({width:16}))}),H?o()(w.Z,{clientSkill:H,buttonPopupStore:r,renderOrigin:e=>a.createElement(F.Z,e,"Edit")}):o()(F.Z,{onClick:()=>{const{performResult:e}=v.createAndCommit({userAction:"assistant.createNewHeaderBlockSkill",environment:n,perform:e=>(0,y.Fv)({environment:n,transaction:e,parent:t.getSpaceShardedPointer()})});R(e),r.setState({...r.state,open:!0}),(0,b.Qv)()}},void 0,"New Skill"),o()(F.Z,{onClick:()=>{v.createAndCommit({userAction:"assistant.setHeaderBlockSkill",environment:n,perform:e=>{k.FH({stores:[t],update:{ai_skill_pointer:void 0},transaction:e})}})}},void 0,"Remove"),o()(F.Z,{isBlue:!0,disabled:!H,onClick:async()=>{const i=t.getRecordStoreUIRoot(),o=(0,S.Dj)(i);h.O({view:"chat"}),e.close(),i&&i instanceof A.G&&(await g.resetAssistantStore({environment:n,completionContext:{type:"blockSelection",stores:[t],currentPage:i,origin:t,scrollerStore:o},clientSkill:H}),await g.sampleNextAssistantSteps({environment:n}),await g.commitPreviewAssistantStep({environment:n}),await g.applyUncommittedOperations({environment:n}))}},void 0,"Run")),H&&!I&&o()("div",{style:{color:T.accentColors.red[500],fontSize:14}},void 0,"This skill isnt parented by the current block. Duplicating this block will not copy this skill.")),onClick:()=>{i&&(0,y.K7)({environment:n,spaceId:i})}})}}}]);