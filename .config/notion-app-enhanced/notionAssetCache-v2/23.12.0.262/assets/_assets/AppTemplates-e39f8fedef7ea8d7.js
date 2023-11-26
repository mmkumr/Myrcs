"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[7310],{54885:(e,t,i)=>{i.d(t,{X3:()=>s,XD:()=>l,XE:()=>n,d_:()=>a});var r=i(24215),o=i(77080);function n(e,t){r.j(e,"app_preset_selection_shown",t),o.default.logEvent("app_preset_selection_shown",t.app_uri,t)}function s(e,t){r.j(e,"onboarding_app_selection",t),o.default.logEvent("onboarding_app_selection",t.preset,t)}function a(e,t){r.j(e,"app_preset_selection",t),o.default.logEvent("app_preset_selection",t.preset_uri,t)}function l(e,t){r.j(e,"app_preset_accepted",t),o.default.logEvent("app_preset_accepted",t.preset_uri,t)}},39849:(e,t,i)=>{i.d(t,{Z:()=>d});i(67294);var r=i(83355),o=i(8848),n=i(82990),s=i(85893);let a=function(e){return e[e.Red=0]="Red",e[e.Gray=1]="Gray",e}({});class l extends r.Z{renderComponent(){const{count:e}=this.props,t=this.props.color===a.Red;if(e&&!(e<=0))return(0,s.jsx)("div",{style:{...l.style,...this.props.style,...e>99&&{width:void 0,padding:2},background:t?this.theme.redBadgeBackground:this.theme.lightIconColor},children:this.renderNumber()})}renderNumber(){const{count:e}=this.props;if(e)return 1===e?(0,s.jsx)("span",{style:{marginLeft:-.5,...this.props.numberStyle},children:"1"}):e>99?(0,s.jsx)("span",{style:{letterSpacing:-.5,...this.props.numberStyle},children:"99+"}):e>9?(0,s.jsx)("span",{style:{letterSpacing:-.5,marginLeft:-.5,...this.props.numberStyle},children:e}):(0,s.jsx)("span",{style:{...this.props.numberStyle},children:e})}}l.displayName="MentionsBadge",l.Color=a,l.style={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:16,height:16,fontSize:10,textAlign:"center",fontWeight:n.Z.fontWeight.semibold,borderRadius:4,color:o.ZP.white,position:"static",marginLeft:6,WebkitFontSmoothing:"auto"};const d=l},17202:(e,t,i)=>{i.r(t),i.d(t,{getMobilePreviewTemplates:()=>h,getSuggestedTemplates:()=>g});var r=i(21202),o=i(11002),n=i(84465),s=i(73314),a=i(86282),l=i(33929),d=i(27249),c=i(77080),p=i(65435),u=i(29949);function g(e,t){const i=l.default.getIntl(),n=[o.Y.weeklyTodoV2,o.Y.habitTrackerV2,o.Y.personalHomeV3];let p=[];switch(e){case"variant_1":case"variant_3":p=n;break;case"variant_2":case"variant_4":p=function(e){if(!e)return[];return(0,d.gh)(e,c.default)}(t);break;default:return[]}return p.map((t=>{const o=(0,s.G)(t,i);return{name:o.name,iconFn:()=>t.emoji,type:"page_with_icon",shouldShow:()=>!0,onClick:(n,l)=>{switch(e){case"variant_1":case"variant_2":((e,t,o)=>{const n=o.sources["en-US"],l=(0,s.G)(o,i);a.Hp({environment:e,pageStore:t,isOnboarding:!1,copyBlock:{id:n.rootId,spaceId:n.spaceId,table:r.iU},item:{id:l.id,name:l.name,previewRootId:n.previewRootId,rootId:n.rootId,spaceId:n.spaceId}})})(n,l,t);break;case"variant_3":case"variant_4":(e=>{u.Z.open({analyticsFrom:"new_page_suggested_templates",cloneTo:"current_page",selectedTemplate:{type:"pageTemplate",template:e}})})(o)}},from:"new_page_suggested_templates"}}))}function h(e){return Object.entries((0,p.it)(e)).map((e=>{let[t,i]=e;return{category:t,sectionHeaderMessage:n._5[t],templates:i}}))}},75272:(e,t,i)=>{i.d(t,{Z:()=>S});i(67294);var r=i(480),o=i(86628),n=i(24405),s=i(7525),a=i(63261),l=i(31412),d=i(43250),c=i(34700),p=i(12534),u=i(74948),g=i(38676),h=i(23063),f=i(73063),m=i(58261),v=i(26388),x=i(39849),b=i(92955),y=i(85893);function S(){window.__c={n:"TopbarSidebarButton"};const e=(0,r.O7)(),t=(0,r.Fy)(),i=(0,l.useIntl)(),S=(0,o.VK)((()=>g.TC.state),[]),w=(0,n.yK)((e=>({root:{...(0,c.X)({noDrag:t.isElectronMac}),flexShrink:0,width:48,height:48,margin:-12,padding:12,marginRight:-6},button:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:24,height:24,borderRadius:4},buttonWrapper:{position:"absolute",top:0,left:0,willChange:"opacity"},svg:{width:16,height:16,fill:e.regularIconColor},keyboardShortcut:{color:e.mediumInvertedTextColor}})),[t.isElectronMac]),C=e=>{(0,p.ZP)({event:e,context:p.Af.SidebarMouseMove,callback:()=>{const t=e.currentTarget.getBoundingClientRect();g.Ic.setState(t.right),u.open()}})},k=i.formatMessage({defaultMessage:"Lock sidebar open",id:"sidebarExpandButton.tooltip"});return(0,y.jsx)("div",{style:w.root,onMouseEnter:C,onMouseMove:C,children:(0,y.jsxs)("div",{style:{position:"relative"},children:[(0,y.jsx)(h.Z,{isVisible:!0,animationStyle:{opacity:S?0:1},render:()=>(0,y.jsx)("div",{style:w.buttonWrapper,children:(0,y.jsxs)("div",{style:w.button,children:[(0,a._)(w.svg),(0,y.jsx)(b.Z,{type:"allSpaces",color:x.Z.Color.Red,style:{position:"absolute",top:-1,right:-4}})]})})}),(0,y.jsx)(h.Z,{isVisible:!0,animationStyle:{opacity:S?1:0},render:()=>(0,y.jsx)("div",{style:w.buttonWrapper,children:(0,y.jsx)(v.Z,{renderTooltip:()=>(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{children:k}),(0,y.jsx)(m.Z,{style:w.keyboardShortcut,name:"toggleSidebar"})]}),placement:v.Z.Placement.Right,alignment:v.Z.Alignment.Start,delayThreshold:0,originGap:6,render:t=>(0,y.jsx)(f.Z,{ariaLabel:k,icon:s.t,style:{position:"relative"},iconStyle:{width:16,height:16},isDarkIconColor:!0,onClick:()=>u.setExpand({environment:e,isExpanded:!0,from:"topbar_sidebar_button"}),className:d.exn,...t})})})})]})})}},1927:(e,t,i)=>{i.r(t),i.d(t,{AppInitializationOverlay:()=>A});var r=i(67294),o=i(13991),n=i(480),s=i(86628),a=i(24405),l=i(33635),d=i(95538),c=i(77058),p=i(21202),u=i(15047),g=i(29369),h=i(82990),f=i(51454),m=i(31412),v=i(54885),x=i(9284),b=i(81924),y=i(86282),S=i(39699),w=i(28020),C=i(34045),k=i(93959),j=i(54258),Y=i(24646),_=i(80444),B=i(82136),I=i(26350),V=i(42922),L=i(64921),M=i(62896),T=i(28451),Z=i(68785),W=i(31192),P=i(75272),R=i(85893);function A(e){var t;window.__c={n:"AppInitializationOverlay"};const{collectionViewBlockStore:i}=e,A=(0,n.O7)(),D=(0,a.yK)((e=>({overlay:{position:"absolute",top:0,left:0,overflow:"visible",height:"100vh",width:"100%",zIndex:f.mJ,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:e.sidebarBackground,borderLeft:`1px solid ${e.lightDividerColor}`},welcome:{maxWidth:375,minWidth:320,maxHeight:"100%",flex:1,display:"flex",flexDirection:"column",alignItems:"stretch",marginLeft:"10%",marginRight:"10%",padding:"64px 16px"},welcomeLogo:{height:48,width:48},welcomeTitle:{marginTop:24,color:e.regularTextColor,fontFamily:h.Z.getHeaderFontFamily({locale:o.SP}),fontWeight:h.Z.fontWeight.bold,fontSize:28,flex:0,display:"flex",flexDirection:"row",alignItems:"center"},welcomeSubtitle:{marginTop:6,fontSize:18,color:e.mediumTextColor,fontWeight:400,flex:0},presets:{marginTop:32,marginBottom:32,gap:12,display:"flex",flexDirection:"column"},presetSelected:{background:"dark"===e.mode?e.popoverBackground:e.buttonBackground,boxShadow:e.outlineBlueInputBoxShadow},presetSelectedCheckmark:{width:24,height:24,color:e.blueButtonBackground,opacity:0,transform:"scale(0.8)",transition:"all 0.2s ease"},presetSelectedCheckmarkShown:{opacity:1,transform:"scale(1)"},preset:{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-start",padding:"16px 14px 16px 16px",background:"dark"===e.mode?e.accentColors.gray[200]:e.buttonBackground,borderRadius:7,boxShadow:e.elevatedButtonBoxShadow,cursor:"pointer",transition:"box-shadow 0.1s ease, background 0.1s ease"},scroller:{overflow:"auto",padding:4},presetHovered:{background:"dark"===e.mode?e.accentColors.gray[200]:e.accentColors.gray[30]},presetTextContainer:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",flex:1},presetIcon:{flexShrink:0,marginTop:2,marginBottom:2,width:20,height:20,marginRight:12},presetTitle:{color:e.regularTextColor,fontWeight:h.Z.fontWeight.medium,fontSize:14,marginBottom:1},presetSubtitle:{color:e.mediumTextColor,fontWeight:h.Z.fontWeight.regular,fontSize:14},previewContainer:{flex:1,overflow:"auto",height:"70%",borderRadius:"8px 0 0 8px",border:e.lightDividerColor,boxShadow:e.largeLightBoxShadow,background:e.popoverBackground},previewImage:{width:"100%",height:"100%"},actionButton:{flex:0,zIndex:f.mJ+1},hamburgerButton:{position:"absolute",zIndex:f.mJ+1,margin:5}})),[]),[H,z]=r.useState(!1),E=(0,s.VK)((()=>_.default.state.currentSpaceViewStore),[]),U=(0,s.VK)((()=>{const e=i.getFormatStore().getKeyStore("app_config_uri").getValue();if(!e)return;return(0,k.Wo)((0,C.appConfigs)(),e)}),[i]),[F,K]=r.useState(void 0);r.useEffect((()=>{K(i.getFormatStore().getKeyStore("app_template_preset").getValue())}),[i,K]);const O=(0,s.VK)((()=>{var e;return(null==U||null===(e=U.presets)||void 0===e?void 0:e.filter((e=>"core"===e.type)))??[]}),[null==U?void 0:U.presets]),[G,N]=r.useState(F);r.useEffect((()=>{N(F)}),[F,N]),r.useEffect((()=>{U&&v.XE(A,{app_uri:U.uri})}),[U,A]);const X=r.useMemo((()=>null==U?void 0:U.presets.find((e=>e.uri===F))),[U,F]),$=r.useMemo((()=>{if(U&&X&&U.uri===l.Vr)return(0,j.L)(X)}),[U,X]),J=r.useMemo((()=>{if(!U)return;const t={};return U.presets.forEach((i=>{var r;const o=U.uri===l.Vr?(0,j.L)(i):null===(r=i.previews)||void 0===r?void 0:r.find((e=>"previewRootId"in e));o&&(t[i.uri]=I.G.createChildStore(e.collectionViewBlockStore,{id:o.previewRootId,table:p.iU,spaceId:o.spaceId}))})),t}),[U,e.collectionViewBlockStore]),q=(0,s.VK)((()=>{const e=(0,w.ui)(A);return{left:e,right:e,bottom:W.Z.paddingBottom(A),coverHeight:W.Z.defaultPageCoverHeight(A)}}),[A]),Q=(0,s.VK)((()=>{var e;const t=null==X||null===(e=X.previews)||void 0===e?void 0:e.find((e=>"url"in e&&!(0,d.xL)(e)));if(t&&"url"in t)return t.url}),[null==X?void 0:X.previews]),ee=(0,s.VK)((()=>A.device.isPhone),[A]),te=(0,s.VK)((()=>!!A.device.isMobileBrowser||!A.device.isMobileNative&&!(0,Y.in)(A)),[A]);return r.useEffect((()=>{"rendered"!==_.default.state.renderPhase&&_.default.setState({..._.default.state,renderPhase:"rendered"})}),[]),U?(0,R.jsxs)(T.P,{calloutId:"better_template_initialization",children:[te&&(0,R.jsx)("div",{style:D.hamburgerButton,children:(0,R.jsx)(P.Z,{})}),(0,R.jsxs)("div",{style:D.overlay,children:[(0,R.jsxs)("div",{style:D.welcome,children:[(0,R.jsxs)("div",{style:D.scroller,children:[(0,R.jsx)("div",{style:D.welcomeLogo,children:(0,R.jsx)("img",{src:U.logo,style:{height:"100%",width:"100%"}})}),(0,R.jsx)("div",{style:D.welcomeTitle,children:U.welcomeTitle??(0,R.jsx)(m.FormattedMessage,{id:"apps.AppInitializationOverlay.welcomeTitle.default",defaultMessage:"Welcome to {appName}",values:{appName:U.name}})}),(0,R.jsx)("div",{style:D.welcomeSubtitle,children:U.welcomeSubtitle??""}),(0,R.jsx)("div",{style:D.presets,children:O.map(((e,t)=>{var i;const r=null!==(i=e.icon)&&void 0!==i&&i.startsWith("/")?(0,R.jsx)("img",{src:e.icon,style:{height:"100%",width:"100%"}}):(0,R.jsx)(M.Z,{children:e.icon??""});return(0,R.jsxs)(L.Z,{style:{height:"auto",...D.preset,...F===e.uri?D.presetSelected:{}},disabled:H,hoveredStyle:D.presetHovered,onClick:()=>{K(e.uri),v.d_(A,{preset_uri:e.uri})},onMouseEnter:A.device.isMobile?void 0:()=>N(e.uri),onMouseLeave:A.device.isMobile?void 0:()=>N(F),children:[(0,R.jsx)("div",{style:D.presetIcon,children:r}),(0,R.jsxs)("div",{style:D.presetTextContainer,children:[(0,R.jsx)("div",{style:D.presetTitle,children:e.name}),(0,R.jsx)("div",{style:D.presetSubtitle,children:e.description})]}),(0,R.jsx)("div",{children:(0,c.$)({...D.presetSelectedCheckmark,...F===e.uri?D.presetSelectedCheckmarkShown:void 0})})]},t)}))})]}),(0,R.jsx)("div",{style:{padding:`0 4px ${A.device.isIOS?"32px":0} 4px`,alignSelf:"stretch"},children:(0,R.jsxs)(V.Z,{style:{alignSelf:"stretch",height:36,width:"100%"},disabled:H,onClick:async()=>{if(F){if(z(!0),$){const{currentSpaceStore:t,currentSpaceViewStore:i}=_.default.state;t&&i&&await y.Lf({environment:A,item:$,isPrivate:!1,spaceStore:t,spaceViewStore:i,useMinimalTemplates:!1,initializeStore:e.collectionViewBlockStore})}else{const t=e.collectionViewBlockStore.getParentStore();!t||t.table!==u.bx&&t.table!==g.e0&&t.table!==p.iU||S.createAndCommit({userAction:"initializeApp",environment:A,perform:i=>{if(E){const r=x.initializeApp({environment:A,spaceViewStore:E,appUri:U.uri,presetUri:F,appParentStore:t,temporaryContainerBlockStore:e.collectionViewBlockStore,transaction:i,from:"app_onboarding"});b.createSprintPage({environment:A,spaceViewStore:E,appParentStore:t,transaction:i,blockStores:r,creationEntryPoint:{type:"preset",presetUri:F}})}}})}v.XD(A,{preset_uri:F})}},children:[(0,R.jsx)(m.FormattedMessage,{id:"apps.AppInitializationOverlay.startButton",defaultMessage:"Get started"}),H&&(0,R.jsx)(Z.Z,{style:{marginLeft:5},isWhite:!0})]})})]}),!ee&&(0,R.jsx)("div",{style:D.previewContainer,children:J&&G&&J[G]?(0,R.jsxs)("div",{style:{width:"108%",minWidth:900,height:"auto",minHeight:"100%",position:"relative",paddingTop:$?0:"10%"},children:[(0,R.jsx)("div",{style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:1,zIndex:999}}),(0,R.jsx)(W.Z,{store:J[G],loadingContainerStore:void 0,context:B.S.InAppTemplatePreview,titleStyle:{fontSize:28},paddingBottom:q.bottom,paddingLeft:q.left,paddingRight:q.right,pageCoverHeight:q.coverHeight,disabled:!0},null===(t=J[G])||void 0===t?void 0:t.id)]}):(0,R.jsx)("img",{src:Q,style:D.previewImage})})]})]}):null}},99134:(e,t,i)=>{i.r(t),i.d(t,{AppsSetup:()=>R});var r=i(67294),o=i(13991),n=i(480),s=i(86628),a=i(24405),l=i(66673),d=i(72126),c=i(21202),p=i(82990),u=i(31412),g=i(54885),h=i(9284),f=i(28020),m=i(34045),v=i(93959),x=i(54258),b=i(55081),y=i(75538),S=i(18245),w=i(80444),C=i(82136),k=i(26350),j=i(42922),Y=i(68785),_=i(31192),B=i(64275),I=i(75071),V=i(98519),L=i(64921),M=i(85893);function T(e){window.__c={n:"AppSelector"};const{appTemplate:t,isSelected:i}=e,[o,n]=(0,r.useState)(!1),l=(0,s.VK)((()=>(0,v.iX)((0,m.appConfigs)(),t.uri)),[t.uri]),d=(0,a.yK)((e=>({container:{position:"relative",display:"flex",flexDirection:"column",alignItems:"center"},appButton:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:62,height:62,backgroundColor:e.whiteButtonBackground,boxShadow:e.lightBoxShadow,borderRadius:12,background:"dark"===e.mode?e.accentColors.gray[200]:e.whiteButtonBackground},selectedWrapper:{boxShadow:e.outlineBlueInputBoxShadow,background:"dark"===e.mode?e.accentColors.gray[200]:e.buttonBackground},logo:{width:32,height:32},logoSelected:{filter:"invert(41%) sepia(77%) saturate(2017%) hue-rotate(191deg) brightness(93%) contrast(89%)"},badge:{width:26,height:26,display:"inline-flex",alignItems:"center",justifyContent:"center",backgroundColor:e.invoiceGreen,borderRadius:50,position:"absolute",top:-9,right:-9,border:`2px solid ${e.sidebarBackground}`,webkitBackdropFilter:"blur(12px)",opacity:1,transform:"scale(1)",transition:"opacity 0.2s ease, transform 0.2s ease, background-color 0.1s linear"},selectBadge:{backgroundColor:e.invoiceGreen},selectedBadge:{backgroundColor:e.blueButtonBackground},deselectBadge:{backgroundColor:e.redBadgeBackground},appName:{marginTop:8,fontSize:14,fontWeight:500,textAlign:"center"},buttonBadgeIcon:{width:16,height:16,fill:"white"}})),[]),c=(0,r.useCallback)((()=>{i?e.onDeSelect(t.uri):e.onSelect(t.uri),n(!1)}),[t.uri,i,e]);return(0,M.jsxs)("div",{style:d.container,onMouseEnter:()=>{n(!0),e.onHover()},onMouseLeave:()=>{n(!1),e.onUnhover()},children:[(0,M.jsx)(L.Z,{style:{...d.appButton,...i?d.selectedWrapper:{}},onClick:c,ignoreLocalHoverState:!0,children:(0,M.jsx)("img",{style:{...d.logo,...i?d.logoSelected:{}},src:l?l.logo:t.icon})}),(0,M.jsx)(L.Z,{style:{...d.badge,...i?o?d.deselectBadge:d.selectedBadge:o?d.selectBadge:{opacity:0,transform:"scale(0.4)"}},onClick:c,ignoreLocalHoverState:!0,children:i?o?(0,B.D)({width:16,height:16,fill:"white"}):(0,V.k)({width:15,height:15,fill:"white"}):(0,I.f)({width:16,height:16,fill:"white"})}),(0,M.jsx)("div",{style:d.appName,children:l?l.name:t.shortName})]})}const Z=d.oA(m.DEFAULT_PRESETS.map((e=>{var t;return null===(t=(0,v.iX)((0,m.appConfigs)(),e))||void 0===t?void 0:t.presets.find((t=>t.uri===e))})));function W(e){window.__c={n:"AppPreview"};const t=(0,n.O7)(),i=(0,s.VK)((()=>{const e=(0,f.ui)(t);return{left:e,right:e,bottom:_.Z.paddingBottom(t),coverHeight:_.Z.defaultPageCoverHeight(t)}}),[t]),o=r.useMemo((()=>{const e={};return Z.forEach((i=>{var r;const o=i.uri.startsWith("notion://wiki")?(0,x.L)(i):null===(r=i.previews)||void 0===r?void 0:r.find((e=>"previewRootId"in e));o&&(e[i.uri]=new k.G(t,{id:o.previewRootId,table:c.iU,spaceId:o.spaceId}))})),e}),[t]),a=e.presetUri.startsWith("notion://wiki"),l=o[e.presetUri];return l?(0,M.jsxs)("div",{style:{minWidth:900,height:"100%",position:"relative",paddingTop:a?0:"10%"},children:[(0,M.jsx)(_.Z,{store:l,loadingContainerStore:void 0,context:C.S.InAppTemplatePreview,titleStyle:a?{fontSize:28}:void 0,paddingBottom:i.bottom,paddingLeft:i.left,paddingRight:i.right,pageCoverHeight:i.coverHeight,disabled:!0},l.id),(0,M.jsx)("div",{style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:1,zIndex:999,cursor:"pointer"}})]}):null}function P(e){window.__c={n:"Carousel"};const t=(0,r.useCallback)(((e,t)=>(e%t+t)%t),[]),i=(0,l.Kt)(e.forceIndex,200,((e,t)=>e===t)),[o,n]=(0,r.useState)(0);(0,r.useEffect)((()=>{if(void 0===i)return;const r=t(-o,e.items.length),s=t(i-r,e.items.length);n((e=>e-s))}),[o,n,i,t,e.items.length]),(0,r.useEffect)((()=>{const t=setInterval((()=>{void 0===i&&n((e=>e-1))}),e.rotationDelayMs??2500);return()=>{clearInterval(t)}}),[n,i,e.rotationDelayMs]);const s=(0,a.yK)((e=>({item:{position:"absolute",top:0,left:0,bottom:0,right:0,background:"white",borderRadius:"8px 0 0 8px",border:"1px solid rgba(0, 0, 0, 0.05)",boxShadow:"0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",overflow:"hidden",transition:"transform 0.5s ease-in-out, opacity 0.5s ease-out"}})),[]),c=e.items.length,p=t(-o,c),u=e.items[t(p-1,c)].node,g=e.items[p].node,h=[...d.DZ(c,(e=>({key:`before${e}`,node:null}))),...e.items,...d.DZ(c,(e=>({key:`after${e}`,node:null})))],f=h.map(((i,r)=>{let{key:n}=i;const a=t(r+o,h.length),l=a>=c&&a<2*c,d=`translateX(${(a-c)*(e.offset??12)}px) translateY(${(a-c)*(e.offset??16-1.5*(a-c))}px)`,p=l?1-.15*(a-c):0;return(0,M.jsx)("div",{style:{...s.item,zIndex:h.length-a,transform:d,opacity:p},children:a===c?g:a===c-1?u:void 0},n)}));return(0,M.jsx)("div",{style:{position:"relative",...e.style},children:f})}function R(e){window.__c={n:"AppsSetup"};const[t]=(0,s.AF)(y.default),{currentUserRootStore:i,currentSpaceViewStore:l,currentSpaceStore:c,currentUserSettingsStore:f}=(0,s.VK)((()=>{const{currentUserRootStore:e,currentSpaceViewStore:t,currentSpaceStore:i,currentUserSettingsStore:r}=w.default.state;return{currentUserRootStore:e,currentSpaceViewStore:t,currentSpaceStore:i,currentUserSettingsStore:r}}),[]),m=(0,n.O7)(),[v,x]=(0,r.useState)(!1),[C,_]=(0,r.useState)(void 0),B=(0,a.yK)((e=>({container:{backgroundColor:e.sidebarBackground,width:"100%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",borderLeft:`1px solid ${e.lightDividerColor}`},left:{maxWidth:375,minWidth:320,maxHeight:"100%",flex:1,display:"flex",flexDirection:"column",alignItems:"stretch",marginLeft:"10%",marginRight:"10%",padding:"42px 16px",overflowX:"visible",overflowY:"auto"},right:{flex:1,height:"70%",overflow:"visible"},header:{position:"relative",textAlign:"left",paddingBottom:42},title:{fontWeight:p.Z.fontWeight.semibold,fontSize:28,lineHeight:1.2,color:e.regularTextColor,fontFamily:p.Z.getHeaderFontFamily({locale:o.SP}),marginBottom:16,width:"90%"},subtitle:{fontSize:18,lineHeight:1.45,paddingTop:2,color:e.mediumTextColor,fontWeight:p.Z.fontWeight.regular},apps:{marginBottom:48,display:"inline-flex",flexWrap:"wrap",justifyContent:"space-between"},previewImage:{width:"100%",height:"100%"}})),[]),I=(0,s.VK)((()=>m.device.isPhone),[m]);if(!l||!i||!f)return null;if(!t.isOnboarding||"workspace_setup"!==t.stage)return null;const V=e=>{const i=d.jj([...t.selectedPresets,e]),r=d.MR(i,(e=>Z.findIndex((t=>t.uri===e))));y.default.setState({...t,selectedPresets:r}),g.X3(m,{action:"select",preset:e})},L=e=>{const i=t.selectedPresets.filter((t=>t!==e));y.default.setState({...t,selectedPresets:i}),g.X3(m,{action:"deselect",preset:e})},R=t.selectedPresets.length>0?t.selectedPresets:Z.map((e=>e.uri)),A=R.findIndex((e=>(null==C?void 0:C.uri)===e)),D=(0,M.jsx)(P,{style:{width:"100%",height:"100%"},items:R.map((e=>({key:e,node:(0,M.jsx)(W,{presetUri:e})}))),forceIndex:A>-1?A:void 0});return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)("div",{style:B.container,children:[(0,M.jsx)("div",{style:B.left,children:(0,M.jsxs)("div",{style:{display:"flex",alignItems:"stretch",flexDirection:"column"},children:[(0,M.jsxs)("div",{style:B.header,children:[(0,M.jsx)("div",{style:B.title,children:(0,M.jsx)(u.FormattedMessage,{id:"apps.workspacesetup.header.title",defaultMessage:"Get started with Notion"})}),(0,M.jsx)("div",{style:B.subtitle,children:(0,M.jsx)("div",{children:(0,M.jsx)(u.FormattedMessage,{id:"apps.workspacesetup.header.description",defaultMessage:"Add templates to your workspace, and customize them in a few simple steps."})})})]}),(0,M.jsx)("div",{style:B.apps,children:Z.map(((e,i)=>(0,M.jsx)(T,{appTemplate:e,isSelected:t.selectedPresets.includes(e.uri),onSelect:V,onDeSelect:L,onHover:()=>_(e),onUnhover:()=>_(void 0)},i)))}),t.selectedPresets.length>0?(0,M.jsx)(j.Z,{isLarge:!0,style:{height:40},onClick:async()=>{var e;if(!c||!l)return;x(!0);const i=S.default.mark("continue_with_apps"),r=null===(e=l.getTeamsStores()[0])||void 0===e?void 0:e.id,o=k.zX.createChildStore(c,{table:"team",id:r,spaceId:c.id}),n=l.getCreatedOnboardingTemplates()?[]:await h.installAppsInTeam({environment:m,presets:t.selectedPresets,spaceStore:c,spaceViewStore:l,teamStore:o});n.length>0&&(t.redirectData={type:"redirect_page",pageId:n[0].id,spaceId:c.id},y.default.setState(t)),await b.lp(m,t),S.default.measure(i,{environment:m,data:{appsSelected:t.selectedPresets}})},disabled:v,children:v?(0,M.jsx)(Y.Z,{isWhite:!0}):(0,M.jsx)(u.FormattedMessage,{id:"apps.workspacesetup.button.continueWithChosenApps",defaultMessage:"{num, plural, one {Continue with 1 template} other {Continue with {num} templates}}",values:{num:t.selectedPresets.length}})}):(0,M.jsx)(j.Z,{isLarge:!0,style:{height:40},onClick:async()=>{x(!0),await b.lp(m,t)},disabled:v,children:v?(0,M.jsx)(Y.Z,{isWhite:!0}):(0,M.jsx)(u.FormattedMessage,{id:"apps.workspacesetup.button.continueWithoutChoosingApps",defaultMessage:"I'll add templates later"})})]})}),!I&&(0,M.jsx)("div",{style:B.right,children:D})]})})}},92955:(e,t,i)=>{i.d(t,{Z:()=>l});i(67294);var r=i(86628),o=i(97880),n=i(19034),s=i(39849),a=i(85893);function l(e){window.__c={n:"UnreadMentionsBadge"};const{type:t,...i}=e,l=(0,r.VK)((()=>{switch(t){case"currentSpace":return n.Z.getUnreadCountForCurrentSpace().mentions;case"otherSpaces":return n.Z.getUnreadMentionsCountForOtherSpaces();case"allSpaces":return n.Z.getTotalUnreadMentionsCount();default:(0,o.t1)(t)}}),[t]);return(0,a.jsx)(s.Z,{count:l,...i})}},34700:(e,t,i)=>{function r(e){return"drag"in e&&e.drag?{WebkitAppRegion:"drag"}:"noDrag"in e&&e.noDrag?{WebkitAppRegion:"no-drag"}:{}}i.d(t,{X:()=>r})},27249:(e,t,i)=>{i.d(t,{CN:()=>d,H_:()=>a,OJ:()=>c,gh:()=>l});var r=i(11002),o=i(84465),n=i(94952),s=i(73314);function a(e){let{persona:t,defaultToLife:i}=e;if(!t)return;if(t in o._5)return t;const r={customer_support:"support",designer:"design",educator:"student",entrepreneur:"hr",freelancer:"design",hr_recruiting:"hr",it:"eng",marketing_sales:"marketing",media:"marketing",operations:"hr",operations_hr:"hr",personal:"life",product_manager:"product",programmer:"eng",other:i?"life":void 0,unfilled:i?"life":void 0,undefined:i?"life":void 0,creative:"design",founderCeo:"hr",internalCommunication:"hr",productDesign:"design",projectProgramMgmt:"product",finance:void 0,itAdmin:"eng",knowledgeManagement:"hr"};return(null==r?void 0:r[t])??void 0}function l(e,t){const i=a({persona:e,defaultToLife:!1});return(i?null===o.J9||void 0===o.J9?void 0:o.J9[i]:[]).filter((e=>(0,n.G)(e,t)))}function d(e,t,i){return l(e,t).map((e=>(0,s.G)(e,i)))}function c(e,t,i){return function(e,t){const i=a({persona:e,defaultToLife:!1});return(i?null==p?void 0:p[i]:[]).filter((e=>(0,n.G)(e,t)))}(e,t).map((e=>(0,s.G)(e,i)))}const p={product:[r.Y.productWiki,r.Y.productSpec,r.Y.productLaunchBrief],marketing:[r.Y.blogEditorialCalendar,r.Y.brandAssets,r.Y.moodBoard],sales:[r.Y.salesWikiV2,r.Y.salesAssets,r.Y.salesCRM],eng:[r.Y.engineeringTechSpec,r.Y.engineeringWiki]}},56638:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(49085);class o extends r.default{getInitialState(){return{open:!1}}}const n=new o},65435:(e,t,i)=>{i.d(t,{D2:()=>x,Io:()=>h,JL:()=>m,it:()=>f,oO:()=>u,vY:()=>v});var r=i(84465),o=i(94952),n=i(73314),s=i(97880),a=i(95477),l=i(33929),d=i(27249),c=i(77080),p=i(59307);function u(e){var t;const{data:i}=p.Z.state;if(i&&null!==(t=i.topCategories)&&void 0!==t&&t.length)return i.topCategories.find((t=>t.id===e))}const g=Object.keys(r.J9);function h(e){let{userPersona:t,subscriptionTier:i}=e;return[...g].sort(((e,r)=>function(e,t,i,r){const o=void 0!==r&&["free","personal_free","student","personal"].includes(r),n=(0,d.H_)({persona:i,defaultToLife:o});if("suggested"===e||"suggested"===t)return"suggested"===e?-1:1;if(n===e||n===t)return n===e?-1:1;if(("life"===e||"life"===t)&&o)return"life"===e?-1:1;if(("student"===e||"student"===t)&&function(e){let{persona:t,isPersonalishPlan:i}=e;return(i?["other","unfilled","personal","undefined"]:["personal"]).includes(t??"undefined")}({persona:i,isPersonalishPlan:o}))return"student"===e?-1:1;return 0}(e,r,t,i)))}function f(e){let{userPersona:t,subscriptionTier:i}=e;const s=l.default.getIntl();return Object.fromEntries(h({userPersona:t,subscriptionTier:i}).map((e=>[e,[...r.J9[e].filter((e=>(0,o.G)(e,c.default))).map((e=>(0,n.G)(e,s)))]])).filter((e=>{let[t,i]=e;return(null==i?void 0:i.length)>0})))}function m(e){const t=(0,s.Yd)(e).map((e=>[e,!0]));return Object.fromEntries(t)}function v(e){var t;const{data:i}=p.Z.state;if(!i||null===(t=i.topCategories)||void 0===t||!t.length)return;const r=i.topCategories.find((t=>{var i;return null===(i=t.subcategories)||void 0===i?void 0:i.find((t=>{var i;return null===(i=t.templates)||void 0===i?void 0:i.find((t=>"pageTemplate"===t.type&&t.template.rootId===e||"preset"===t.type&&t.uri===e))}))}));return null==r?void 0:r.id}function x(e){return`${a.default.domainBaseUrl}/@${e}`}},59307:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(49085);class o extends r.default{getInitialState(){return{}}getTopTemplateCategories(){var e;const{data:t}=this.state;return t&&null!==(e=t.topCategories)&&void 0!==e&&e.length?Array.from(t.topCategories).filter((e=>{const t=e.subcategories||[];for(const r of t){var i;if(null!==(i=r.templates)&&void 0!==i&&i.length)return!0}return!1})):[]}}const n=new o},77058:(e,t,i)=>{i.d(t,{$:()=>n});i(67294);var r=i(45238),o=i(85893);const n=(0,r.I)("checkmark",{viewBox:"0 0 20 20",svg:(0,o.jsx)("path",{d:"M10.0693 18.166C14.7759 18.166 18.6606 14.2812 18.6606 9.58301C18.6606 4.88477 14.7676 1 10.061 1C5.36279 1 1.48633 4.88477 1.48633 9.58301C1.48633 14.2812 5.37109 18.166 10.0693 18.166ZM9.13965 13.6836C8.82422 13.6836 8.56689 13.5508 8.33447 13.2437L6.30078 10.7783C6.15137 10.5874 6.07666 10.3965 6.07666 10.189C6.07666 9.75732 6.41699 9.40869 6.84863 9.40869C7.10596 9.40869 7.30518 9.5 7.521 9.77393L9.11475 11.791L12.5347 6.3125C12.7173 6.02197 12.9497 5.88086 13.2153 5.88086C13.6387 5.88086 14.0205 6.17139 14.0205 6.61133C14.0205 6.80225 13.9209 7.00977 13.8047 7.19238L9.91162 13.2437C9.729 13.5342 9.45508 13.6836 9.13965 13.6836Z"})})},64275:(e,t,i)=>{i.d(t,{D:()=>n});i(67294);var r=i(45238),o=i(85893);const n=(0,r.I)("closeSmall",{viewBox:"0 0 16 16",svg:(0,o.jsx)("path",{d:"M3.732 11.052c-.303.308-.32.877.011 1.202.33.33.894.32 1.203.011L8 9.21l3.05 3.05c.32.325.872.32 1.197-.011a.857.857 0 00.01-1.197L9.21 8.002l3.05-3.056a.857.857 0 00-.01-1.197.857.857 0 00-1.198-.01L8 6.788 4.946 3.732c-.31-.303-.878-.32-1.203.01-.325.331-.314.895-.01 1.203l3.055 3.056-3.056 3.05z"})})},27961:(e,t,i)=>{i.d(t,{z:()=>n});i(67294);var r=i(45238),o=i(85893);const n=(0,r.I)("collectionDescriptionSmall",{viewBox:"0 0 14 14",svg:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 4.667C6.69049 4.667 6.39366 4.54405 6.17481 4.32519C5.95595 4.10634 5.833 3.80951 5.833 3.5C5.833 3.19049 5.95595 2.89366 6.17481 2.67481C6.39366 2.45595 6.69049 2.333 7 2.333C7.30951 2.333 7.60634 2.45595 7.82519 2.67481C8.04405 2.89366 8.167 3.19049 8.167 3.5C8.167 3.80951 8.04405 4.10634 7.82519 4.32519C7.60634 4.54405 7.30951 4.667 7 4.667V4.667ZM8 11C8 11.2652 7.89464 11.5196 7.70711 11.7071C7.51957 11.8946 7.26522 12 7 12C6.73478 12 6.48043 11.8946 6.29289 11.7071C6.10536 11.5196 6 11.2652 6 11V7C6 6.73478 6.10536 6.48043 6.29289 6.29289C6.48043 6.10536 6.73478 6 7 6C7.26522 6 7.51957 6.10536 7.70711 6.29289C7.89464 6.48043 8 6.73478 8 7V11ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0V0Z"})})},7525:(e,t,i)=>{i.d(t,{t:()=>n});i(67294);var r=i(45238),o=i(85893);const n=(0,r.I)("doubleChevronRight",{viewBox:"0 0 16 16",svg:(0,o.jsx)("path",{d:"M2.25781 14.1211C2.47656 14.1211 2.66797 14.0391 2.81836 13.8887L8.14355 8.67969C8.32812 8.49512 8.41699 8.29688 8.41699 8.06445C8.41699 7.8252 8.32812 7.62012 8.14355 7.44922L2.81836 2.24023C2.66797 2.08984 2.4834 2.00781 2.25781 2.00781C1.81348 2.00781 1.46484 2.35645 1.46484 2.80078C1.46484 3.0127 1.55371 3.21777 1.7041 3.375L6.50977 8.05762L1.7041 12.7539C1.55371 12.9043 1.46484 13.1094 1.46484 13.3281C1.46484 13.7725 1.81348 14.1211 2.25781 14.1211ZM8.36914 14.1211C8.58789 14.1211 8.77246 14.0391 8.92285 13.8887L14.2549 8.67969C14.4395 8.49512 14.5283 8.29688 14.5283 8.06445C14.5283 7.8252 14.4326 7.62012 14.2549 7.44922L8.92285 2.24023C8.77246 2.08984 8.58789 2.00781 8.36914 2.00781C7.9248 2.00781 7.56934 2.35645 7.56934 2.80078C7.56934 3.0127 7.66504 3.21777 7.81543 3.375L12.6211 8.05762L7.81543 12.7539C7.66504 12.9043 7.56934 13.1094 7.56934 13.3281C7.56934 13.7725 7.9248 14.1211 8.36914 14.1211Z"})})},63261:(e,t,i)=>{i.d(t,{_:()=>n});i(67294);var r=i(45238),o=i(85893);const n=(0,r.I)("hamburgerMenu",{viewBox:"0 0 14 14",svg:(0,o.jsx)("path",{d:"M0,1.25 L14,1.25 L14,2.75 L0,2.75 L0,1.25 Z M0,6.25 L14,6.25 L14,7.75 L0,7.75 L0,6.25 Z M0,11.25 L14,11.25 L14,12.75 L0,12.75 L0,11.25 Z"})})},75071:(e,t,i)=>{i.d(t,{f:()=>n});i(67294);var r=i(45238),o=i(85893);const n=(0,r.I)("plusThick",{viewBox:"0 0 14 14",svg:(0,o.jsx)("path",{d:"M2 7.16357C2 7.59692 2.36011 7.95093 2.78735 7.95093H6.37622V11.5398C6.37622 11.9731 6.73022 12.3271 7.16357 12.3271C7.59692 12.3271 7.95093 11.9731 7.95093 11.5398V7.95093H11.5398C11.9731 7.95093 12.3271 7.59692 12.3271 7.16357C12.3271 6.73022 11.9731 6.37622 11.5398 6.37622H7.95093V2.78735C7.95093 2.36011 7.59692 2 7.16357 2C6.73022 2 6.37622 2.36011 6.37622 2.78735V6.37622H2.78735C2.36011 6.37622 2 6.73022 2 7.16357Z"})})},35840:(e,t,i)=>{i.d(t,{R:()=>n,T:()=>o});i(67294);var r=i(45238);const o=(0,i(85893).jsx)("path",{d:"M.281 6.438c0-.875.164-1.696.492-2.461a6.484 6.484 0 011.375-2.032A6.237 6.237 0 016.64.078 6.2 6.2 0 019.11.57c.77.328 1.447.787 2.03 1.375a6.374 6.374 0 011.368 2.032c.333.765.5 1.586.5 2.46 0 .688-.107 1.342-.32 1.961a6.28 6.28 0 01-.868 1.696l3.563 3.578c.11.104.19.226.242.367.057.14.086.29.086.445 0 .22-.05.417-.149.594a1.122 1.122 0 01-1 .57c-.156 0-.307-.028-.453-.086a1.058 1.058 0 01-.382-.25l-3.586-3.585c-.5.333-1.047.596-1.641.789a6.089 6.089 0 01-1.86.28 6.237 6.237 0 01-2.468-.491 6.4 6.4 0 01-2.024-1.367A6.509 6.509 0 01.773 8.913a6.256 6.256 0 01-.492-2.476zm1.664 0c0 .65.12 1.26.36 1.828a4.775 4.775 0 001.015 1.5c.433.427.933.763 1.5 1.007a4.548 4.548 0 001.82.368c.652 0 1.261-.123 1.829-.368a4.747 4.747 0 002.508-2.507 4.567 4.567 0 00.367-1.829c0-.645-.123-1.252-.367-1.82a4.776 4.776 0 00-1.016-1.5A4.578 4.578 0 008.469 2.11a4.567 4.567 0 00-1.828-.367c-.646 0-1.253.123-1.82.367a4.667 4.667 0 00-1.5 1.008c-.433.432-.772.932-1.016 1.5a4.633 4.633 0 00-.36 1.82z"}),n=(0,r.I)("search",{viewBox:"0 0 16 16",svg:o})},84465:(e,t,i)=>{i.d(t,{J9:()=>l,_5:()=>s,gh:()=>a});var r=i(45433),o=i(11002),n=i(98251);const s={suggested:n.sY.suggestedCategory,design:n.sY.designer,eng:n.sY.engineering,product:n.sY.productManagement,marketing:n.sY.marketing,sales:n.sY.sales,support:n.sY.support,hr:n.sY.hr,life:n.sY.life,student:n.sY.student},a={suggested:[r.Ll,r.Yb,r.tt,r.KW,r.r],product:[r.tt],design:[r.Yb],eng:[r.tt],marketing:[r.Yb],hr:[r.Yb],sales:[r.Yb],support:[r.Yb],life:[],student:[]},l={suggested:[o.Y.defaultWiki],product:[o.Y.oneOnOneNotes,o.Y.productWiki,o.Y.productSpec,o.Y.visionAndStrategy,o.Y.presentation,o.Y.investorUpdate,o.Y.userResearch,o.Y.experimentResults,o.Y.brainstorm,o.Y.productLaunchBrief],design:[o.Y.designSprint,o.Y.designSystem,o.Y.designPortfolio,o.Y.userResearch,o.Y.brainstorm],eng:[o.Y.engineeringWiki,o.Y.engineeringTechSpec,o.Y.experimentResults,o.Y.brainstorm],marketing:[o.Y.presentation,o.Y.brandAssets,o.Y.brainstorm,o.Y.contentCalendar,o.Y.blogEditorialCalendar,o.Y.socialMediaCalendar,o.Y.campaignBrief,o.Y.moodBoard,o.Y.mediaList],hr:[o.Y.companyHome,o.Y.newHireOnboarding,o.Y.employeeBenefits,o.Y.interviewGuide,o.Y.recruitingTracker,o.Y.jobBoard,o.Y.applicantTracker,o.Y.peopleDirectory],sales:[o.Y.salesWiki,o.Y.salesCRM,o.Y.salesAssets,o.Y.competitiveAnalysis],support:[o.Y.productFAQs,o.Y.helpCenter],life:[o.Y.readingListV2,o.Y.habitTrackerV2,o.Y.simpleBudgetV2,o.Y.weeklyTodoV2,o.Y.travelPlannerV2,o.Y.journalV2,o.Y.resumeV2,o.Y.personalHomeV3,o.Y.quickNoteV2,o.Y.jobApplicationsV2,o.Y.lifeWikiV2,o.Y.moodBoardV2,o.Y.blogPostV2,o.Y.personalCRMV2],student:[o.Y.studentDashboardV2,o.Y.classNotesV2,o.Y.courseScheduleV2,o.Y.gradeCalculatorV2,o.Y.cornellNotesSystemV2,o.Y.syllabusV2,o.Y.lessonPlansV2,o.Y.classDirectoryV2,o.Y.classroomHomeV2,o.Y.clubHomepageV2]}}}]);