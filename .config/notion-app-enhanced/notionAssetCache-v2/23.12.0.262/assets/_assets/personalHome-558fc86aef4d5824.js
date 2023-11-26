"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[7078],{55535:(e,t,n)=>{n.d(t,{W:()=>s,Z:()=>l});var o=n(67294),i=n(51077),r=n(85893);const s=16;function a(e){let{icon:t,style:n,size:o=s}=e;return(0,r.jsx)(i.Z,{type:"notion_icon",size:o,icon:`/icons/${t}_lightgray.svg`,largeIcon:!0,style:n})}const l=o.memo(a)},72395:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(67294),i=n(480),r=n(24405),s=n(82990),a=n(75024),l=n(94841),d=n(55535),c=n(85893);function u(e){let{children:t,title:n,icon:u,panelStyle:m,headerStyle:g,actions:p,right:h,disableRightFadeIn:f}=e;window.__c={n:"PersonalHomePanelPreview"};const[x,y]=(0,o.useState)(!1),C=(0,i.O7)(),S=Boolean(h),w=(0,r.yK)((e=>{const t=`0 0 0 1px ${e.personalHomeTileBorder}`;return{panel:{zIndex:1,position:"relative",margin:1,width:"calc(100% - 1px)",display:"flex",flexDirection:"column",background:e.personalHomeTileBackground,borderRadius:6,padding:l.A5,paddingBottom:20,boxShadow:"dark"===e.mode?t:`${t}, 0 12px 40px rgba(0, 0, 0, 0.025)`,...m},headerContainer:{flexShrink:0,display:"flex",justifyContent:"space-between",alignItems:"center",height:l.jX,marginTop:-l.A5,...g},panelTitleAndIcon:{display:"flex",alignItems:"center",fontSize:(0,a.yv)(C,"UISmall"),fontWeight:s.Z.fontWeight.medium,color:e.text.secondary,flexShrink:0,maxWidth:S?200:"100%"},title:{...s.Z.textOverflowStyle},panelIconContainer:{display:"flex",alignItems:"center",justifyContent:"center",width:d.W,height:d.W,marginRight:8,marginTop:1},actions:{display:"flex",flexDirection:"row",paddingLeft:6,opacity:x?1:0,transition:"opacity 200ms ease-in"},right:{opacity:f||x?1:0,transition:f?"":"opacity 200ms ease-in",overflow:"hidden",marginRight:8}}}),[g,m,x,f,S,C]);return(0,c.jsxs)("div",{style:w.panel,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),children:[(0,c.jsxs)("div",{style:w.headerContainer,children:[(0,c.jsxs)("div",{style:w.panelTitleAndIcon,children:[(0,c.jsx)("div",{style:w.panelIconContainer,children:u}),(0,c.jsx)("span",{style:w.title,children:n}),(0,c.jsx)("span",{style:w.actions,children:p})]}),S&&(0,c.jsx)("div",{style:w.right,children:h})]}),t]})}const m=o.memo(u)},87259:(e,t,n)=>{n.r(t),n.d(t,{PersonalHomeContainer:()=>kt});var o=n(67294),i=n(480),r=n(24405),s=n(49902),a=n(25821),l=n(30120),d=n(86628),c=n(8848),u=n(72126),m=n(70203),g=n(97880),p=n(82990),h=n(31412),f=n(80444),x=n(31792),y=n(94841),C=n(64788),S=n(58188),w=n(68709),v=n(89728),j=n(74169),k=n(28020),b=n(85893);function M(e){let{headerMouseStore:t}=e;window.__c={n:"PersonalHomeCover"};const n=(0,i.O7)(),s=(0,i.Fy)(),a=(0,d.VK)((()=>t.state.mouseEntered),[t]),l=(0,d.VK)((()=>{const e=f.default.state.currentSpaceViewStore;return e&&(0,y.Al)(e)}),[]),c=(0,d.VK)((()=>null==l?void 0:l.hasCover()),[l]),u=(0,d.VK)((()=>{const{WindowSizeStore:e}=n,t=(0,k.ui)(n);return{paddingLeft:e.getSafePaddingLeftCSS(t),paddingRight:e.getSafePaddingRightCSS(t),width:e.state.width}}),[n]),m=(0,o.useCallback)((async()=>{await S.Rt({environment:n,personalHomeStore:l})}),[n,l]),g=(0,r.yK)((e=>({controls:{opacity:a?1:0,transition:"opacity 100ms ease-out",marginBottom:-28},pageCover:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0,flexGrow:0,height:0}})),[a]);return l?c?(0,b.jsx)(w.p,{allowSelectionWithin:!1,style:g.pageCover,children:(0,b.jsx)(j.Z,{height:230,store:l,disabled:!1,paddingLeft:u.paddingLeft,paddingRight:u.paddingRight,proxyWidth:u.width})}):(0,b.jsx)(v.Z,{style:g.controls,isLightGray:!0,onClick:m,icon:C.P,children:s.isSmallPhone?(0,b.jsx)(h.FormattedMessage,{id:"pageViewBlock.add.pageCoverMobile",defaultMessage:"Cover"}):(0,b.jsx)(h.FormattedMessage,{id:"pageViewBlock.add.pageCover",defaultMessage:"Add cover"})},"add-cover"):null}const T=o.memo(M);var I=n(26388),P=n(60682),H=n(14976),Z=n(9953),V=n(98104),_=n(39699),A=n(49085);class B extends A.default{getInitialState(){return{open:!1}}}const K=new B;function R(e){let{environment:t}=e;K.reset(),V.ZH(t)}var F=n(78140),N=n(53437),L=n(64369),G=n(65187),W=n(87279),O=n(75024);function U(e){let{origin:t}=e;window.__c={n:"PersonalHomeRenamePopup"};const n=(0,i.O7)(),o=(0,d.VK)((()=>K.state.open),[]),r=(0,d.VK)((()=>f.default.state.currentUserSettingsStore),[]),s=(0,i.MO)();return r?(0,b.jsx)(N.ZP,{popupType:s?N.ZP.PopupType.SlideUp:N.ZP.PopupType.Popup,open:o,origin:t,placementToOrigin:N.ZP.Placement.Bottom,alignmentToOrigin:N.ZP.Alignment.Center,originGap:4,onDismiss:()=>R({environment:n}),render:()=>(0,b.jsx)(D,{userSettingsStore:r})}):null}function D(e){let{userSettingsStore:t}=e;window.__c={n:"PersonalHomeRenameMenu"};const[n,s]=(0,o.useState)(!1),a=(0,i.O7)(),l=(0,h.useIntl)(),c=(0,d.VK)((()=>{var e;return null===(e=f.default.state.currentUserStore)||void 0===e?void 0:e.getDisplayName(l)}),[l]),u=(0,i.MO)(),m=(0,o.useCallback)((()=>s(!0)),[]),g=(0,o.useCallback)((()=>s(!1)),[]),p=(0,o.useCallback)((()=>R({environment:a})),[a]),x=(0,o.useCallback)((()=>function(e){let{environment:t}=e;const n=K.state;if(!n.open)return;const o=n.originalNickname;R({environment:t});const{currentUserSettingsStore:i}=f.default.state;if(!i)return;const r=i.getNicknameStore();_.createAndCommit({environment:t,userAction:"nicknameMenuActions.revertToOldNickname",perform:e=>{Z.sO({store:r,value:o,transaction:e})}})}({environment:a})),[a]),y=(0,r.yK)((e=>({menu:{width:300},menuContainer:{paddingTop:12,paddingBottom:12,paddingLeft:14,paddingRight:14},inputContainer:{display:"flex",alignItems:"center",color:e.regularTextColor,fontSize:(0,O.yv)(a,"UIRegular")},input:{display:"block",flexGrow:1,fontSize:14,lineHeight:"20px",width:"100%",borderRadius:4,boxShadow:n?e.outlineBlueInputBoxShadow:e.inputBoxShadow,background:e.inputBackground,cursor:"text",position:"relative",marginTop:8,paddingTop:4,paddingBottom:4,paddingLeft:10,paddingRight:10}})),[a,n]);let C;return C=u?{menuType:W.og.ActionSheet}:{menuType:W.og.Popup,width:300},(0,b.jsx)(F.Z,{...C,children:(0,b.jsxs)("div",{style:y.menuContainer,children:[(0,b.jsx)(L.Z,{isSecondaryColor:!0,children:(0,b.jsx)(h.FormattedMessage,{id:"personalHomeRenamePopup.title",defaultMessage:"Edit nickname"})}),(0,b.jsx)("div",{style:y.inputContainer,children:(0,b.jsx)(G.Z,{style:y.input,store:t.getSettingsStore().getKeyStore("nickname"),disabled:!1,onEsc:x,onFocus:m,onBlur:g,onEnter:p,placeholder:c,pasteBehavior:"inline",disableEmojiCommands:!1,disableStyleAnnotations:!1,disableSlashCommands:!0,disableComment:!0,disableDateMentions:!0,disableMentions:!0,disableDateReminderMentions:!0,disableDrag:!0,disableEmbedMenu:!0,disableEquationInteraction:!0,disableMobileActionBar:!0,disableShiftEnter:!0,disableTemplateVariableMentions:!0,disableSelectAllBlocks:!0,disableSelectionDrag:!0})})]})})}const z=o.memo(U);function E(e){let{nickname:t}=e;window.__c={n:"PersonalHomeRenameButton"};const n=(0,i.O7)(),o=(0,r.Fg)(),s=(0,d.VK)((()=>K.state.open),[]),a=(0,d.VK)((()=>{var e;return null===(e=f.default.state.currentUserSettingsStore)||void 0===e?void 0:e.getNicknameStore()}),[]),l=(0,d.VK)((()=>{var e;const i=f.default.state.currentUserSettingsStore,r=null===(e=f.default.state.currentSpaceStore)||void 0===e?void 0:e.id;if(i&&r)return(0,H.IY)({environment:n,textValue:t&&r?{value:t,spaceId:r}:void 0,parentStore:i,disableLinks:!0,disableHover:!1,disableStyleAnnotations:!1,disableDateStyleAnnotations:!1,disabled:!0,theme:o,emojiType:(0,P.e_)(n),katex:void 0,formulaValueTypes:[],stopLinkPropagation:!0})}),[n,t,o]),c=(0,r.yK)((()=>({button:{height:"100%",flexShrink:1,fontSize:"inherit",fontWeight:"inherit",display:"flow",paddingTop:2,paddingBottom:2,marginLeft:-6,marginRight:-6,paddingLeft:6,paddingRight:6,...p.Z.textOverflowStyle,color:void 0,lineHeight:void 0}})),[]);return a?(0,b.jsx)(z,{origin:(0,b.jsx)(I.Z,{render:e=>(0,b.jsx)(v.Z,{...e,hovered:!!s||void 0,style:c.button,onClick:()=>function(e){let{originalNicknameStore:t}=e;V.Z5({store:t,selection:{startIndex:0,endIndex:(0,m.eeV)(t.getValue()).length}}),K.setState({open:!0,originalNickname:t.getValue()})}({originalNicknameStore:a}),children:l}),renderTooltip:()=>(0,b.jsx)(h.FormattedMessage,{id:"personalHomeHeader.changeNameTooltip",defaultMessage:"Edit nickname"})})}):null}const $=o.memo(E);function Y(e){let{layoutGapSize:t}=e;window.__c={n:"PersonalHomeHeader"};const n=(0,h.useIntl)(),s=(0,i.MO)(),a=(0,d.qz)(void 0,x.Z),{name:m,loaded:C}=(0,d.VK)((()=>function(e){let{currentUserStore:t,currentUserSettingsStore:n,intl:o}=e;if(null==n||!n.isReady())return{name:void 0,loaded:!1};const i=n.getNickname();if(i&&q(i))return{name:i,loaded:!0};const r=null==t?void 0:t.getDisplayName(o),s=Boolean(null==t?void 0:t.isReady());return{name:r?[[r]]:void 0,loaded:s}}({currentUserStore:f.default.state.currentUserStore,currentUserSettingsStore:f.default.state.currentUserSettingsStore,intl:n})),[n]),S=(0,d.VK)((()=>{var e;return(null===(e=f.default.state.currentSpaceStore)||void 0===e?void 0:e.isReady())??!1}),[]),w=(0,o.useCallback)((()=>{a.setState({...a.state,mouseEntered:!0})}),[a]),v=(0,o.useCallback)((()=>{a.setState({...a.state,mouseEntered:!1})}),[a]),j=u.P2(w,100),k=u.Ds(v,100),M=C&&S,I=function(){const e=l.ou.now().hour;return e<2||e>=22?"night":e<12?"morning":e<18?"afternoon":"evening"}(),P=function(e){let{timeOfDay:t,name:n}=e;if("morning"===t)return n?(0,b.jsx)(h.FormattedMessage,{id:"personalHomeHeader.goodMorningUserName",defaultMessage:"<NoShrink>Good morning,</NoShrink>{nbsp}{userName}",values:{nbsp:(0,b.jsx)(b.Fragment,{children:" "}),NoShrink:e=>(0,b.jsx)("span",{style:{flexShrink:0},children:e}),userName:n}}):(0,b.jsx)(h.FormattedMessage,{id:"personalHomeHeader.goodMorningNoUserName",defaultMessage:"Good morning"});if("afternoon"===t)return n?(0,b.jsx)(h.FormattedMessage,{id:"personalHomeHeader.goodAfternoonUserName",defaultMessage:"<NoShrink>Good afternoon,</NoShrink>{nbsp}{userName}",values:{nbsp:(0,b.jsx)(b.Fragment,{children:" "}),NoShrink:e=>(0,b.jsx)("span",{style:{flexShrink:0},children:e}),userName:n}}):(0,b.jsx)(h.FormattedMessage,{id:"personalHomeHeader.goodAfternoonNoUserName",defaultMessage:"Good afternoon"});if("evening"===t||"night"===t)return n?(0,b.jsx)(h.FormattedMessage,{id:"personalHomeHeader.goodEveningUserName",defaultMessage:"<NoShrink>Good evening,</NoShrink>{nbsp}{userName}",values:{nbsp:(0,b.jsx)(b.Fragment,{children:" "}),NoShrink:e=>(0,b.jsx)("span",{style:{flexShrink:0},children:e}),userName:n}}):(0,b.jsx)(h.FormattedMessage,{id:"personalHomeHeader.goodEveningNoUserName",defaultMessage:"Good evening"});(0,g.t1)(t)}({timeOfDay:I,name:q(m)?(0,b.jsx)($,{nickname:m}):void 0}),H=(0,d.VK)((()=>{const e=f.default.state.currentSpaceViewStore;return e&&(0,y.Al)(e)}),[]),Z=(0,d.VK)((()=>null==H?void 0:H.hasCover()),[H]),V=function(e){switch(e){case"morning":case"afternoon":case"evening":return"🌤️";case"night":return"🌙";default:(0,g.t1)(e)}}(I),_=(0,r.yK)((e=>({container:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",opacity:M?1:0,transition:"opacity 0.3s 0.5s"},headerTextContainer:{width:"100%",height:"100%",marginTop:Z?96:24,zIndex:1,paddingLeft:2*t,paddingRight:2*t},headerText:{height:"100%",fontSize:s?24:30,lineHeight:1.2,fontWeight:p.Z.fontWeight.semibold,color:Z?c.ZP.white:e.regularTextColor,textShadow:Z?"1px 1px 22px rgba(55, 53, 47)":"",display:"flex",alignItems:"center",justifyContent:s?"start":"center"},mobileGreetingContainer:{display:"flex",flexDirection:"column"},mobileIconContainer:{fontSize:30}})),[M,s,Z,t]),A=(0,b.jsxs)("div",{style:_.headerText,children:[V," ",P]}),B=(0,b.jsxs)("div",{style:_.mobileGreetingContainer,children:[(0,b.jsx)("div",{style:_.mobileIconContainer,children:V}),(0,b.jsx)("div",{style:_.headerText,children:P})]});return(0,b.jsxs)("div",{style:_.container,onMouseEnter:j,onMouseMove:j,onMouseLeave:k,children:[(0,b.jsx)(T,{headerMouseStore:a}),(0,b.jsx)("div",{style:_.headerTextContainer,children:s?B:A})]})}function q(e){return!!(0,g.$K)(e)&&0!==(0,m.eeV)(e).length}const J=o.memo(Y);var X=n(77080),Q=n(15145),ee=n(60310),te=n(56666),ne=n(44643),oe=n(47453),ie=n(50906),re=n(49865),se=n(75018),ae=n(64921),le=n(52275),de=n(31945),ce=n(32163),ue=n(72495),me=n(75079),ge=n(14063),pe=n(33687),he=n(53336),fe=n(34859),xe=n(45589);function ye(e){let{store:t,style:n,scrollContainerStyle:o,...i}=e;window.__c={n:"PersonalHomeCollectionView"};const s=(0,d.qz)(void 0,xe.Z),a=(0,r.yK)((()=>({container:{position:"relative",display:"flex",flexDirection:"column",width:"100%",height:"100%",marginTop:-ge.vt,marginLeft:-y.A5/2,marginRight:-y.A5/2,paddingBottom:0,...n},scrollContainer:{width:`calc(100% + ${y.A5/2}px)`,height:"100%",paddingRight:y.A5/2,paddingBottom:y.A5/2-ge.xv,zIndex:0,...o}})),[o,n]);return(0,b.jsxs)("div",{style:a.container,children:[(0,b.jsx)(Ce,{scrollerStore:s}),(0,b.jsx)(he.Z,{type:fe.Z.All,style:a.scrollContainer,store:s,children:t&&(0,b.jsx)(pe.default,{store:t,disabled:!1,hideHeader:!0,isFullScreen:!1,hideHeaderActions:!0,overrideViewType:"list",...i})})]})}function Ce(e){let{scrollerStore:t}=e;window.__c={n:"ScrollShadowContainer"};const n=(0,d.VK)((()=>0===t.state.scrollTop),[t]),o=(0,r.yK)((e=>{const t="linear-gradient(black 0%, transparent 100%)";return{shadowGradient:{width:"100%",position:"absolute",top:-1,left:0,zIndex:1,height:n?0:12,transition:"height 0.2s",background:e.personalHomeTileBackground,maskImage:t,WebkitMaskImage:t}}}),[n]);return(0,b.jsx)("div",{style:o.shadowGradient})}const Se=o.memo(ye);var we=n(55535),ve=n(58810),je=n(73063),ke=n(33929);function be(e){let{viewAllBlockStore:t,pageVisitSource:n,onClick:s,renderAsIcon:a,...l}=e;window.__c={n:"HomeViewAllButton"};const d=(0,i.O7)(),c=(0,r.yK)((e=>({viewAllButton:{color:e.mediumTextColor}})),[]),u=(0,o.useCallback)((e=>{e.metaKey||e.ctrlKey?se.navigateToBlock({environment:d,store:t,pageVisitSource:n,openInNew:"tab"}):se.navigateToBlock({environment:d,store:t,pageVisitSource:n}),null==s||s()}),[d,s,n,t]),m=(0,h.defineMessages)({viewAllLabel:{id:"personalHomePanelPreview.viewAllButton",defaultMessage:"View all"}}),g=ke.default.formatMessage(m.viewAllLabel);return a?(0,b.jsx)(je.Z,{ariaLabel:g,onClick:u,icon:ve.Z,iconStyle:{width:16},...l}):(0,b.jsx)(v.Z,{onClick:u,style:c.viewAllButton,...l,children:g})}const Me=o.memo(be);var Te=n(72395);function Ie(e){window.__c={n:"MoreMenu"};const t=(0,i.O7)(),n=(0,r.yK)((e=>({buttonStyle:{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,height:24,width:24},threeDotIcon:{width:12,height:12,fill:e.mediumIconColor},hideButtonIcon:{height:17,width:17}})),[]),o=e.intl.formatMessage({defaultMessage:"View options",id:"AssignedToMeHomePanel.moreDropdownButton.tooltip"}),s=(0,d.VK)((()=>f.default.state.currentSpaceViewStore),[]),a=[{key:"all",render:e=>(0,b.jsx)(ue.Z,{...e}),items:[{key:"hide",render:e=>(0,b.jsx)(le.Z,{...e,icon:(0,ne.L)(n.hideButtonIcon),title:(0,b.jsx)(h.FormattedMessage,{id:"AssignedTomeHomePanel.moreDropdown.hide.title",defaultMessage:"Hide from home"})}),action:()=>s&&S.aG({environment:t,currentSpaceViewStore:s,feature:"tasks",from:"tasks_more_menu"})}]}];return(0,b.jsx)(de.ZP,{popupType:de.Z4.Popup,alignmentToOrigin:de.vR.Center,originGap:2,renderOrigin:e=>(0,b.jsx)(ae.Z,{ariaLabel:o,style:n.buttonStyle,mobileFeedback:!1,...e,children:(0,te.o)(n.threeDotIcon)}),render:e=>(0,b.jsx)(F.Z,{menuType:W.og.Popup,children:(0,b.jsx)(ce.Z,{type:ce.i.Vertical,sections:a,initialFocus:void 0})})})}function Pe(e){window.__c={n:"AddTaskButton"};const{intl:t,collectionContextStore:n}=e,s=(0,i.O7)(),a=(0,r.yK)((e=>({buttonStyle:{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,height:24,width:24},threeDotIcon:{width:14,height:14,fill:e.mediumIconColor}})),[]),l=(0,d.VK)((()=>{if(!n)return!0;const e=n.collectionStoresStore.state;return!e||0===e.length}),[n]),c=(0,o.useCallback)((()=>{n&&_.createAndCommit({userAction:"AssignedToMePanel.handleAddItemClick",environment:s,perform:e=>{const t=re.IW({environment:s,collectionContextStore:n,groupsPointer:[],insertAtIndex:0,coerce:!0,initializeDefaultTemplate:!0,transaction:e,from:"home_tile_tasks"});if(!t)return;se.peekBlock({environment:s,store:t.newStore,peekMode:"center_peek",showMoveTo:!0,resultsStore:void 0,collectionContextStore:n,pageVisitSource:Q.tY.PersonalHomeTileTasksCreate});const o=t.newStore.getParentCollectionId();ie.W2j(s,{from:"home_tile_tasks",type:"page",collection_id:o,new_page_id:t.newStore.id,...me.Pn(n,o)})}})}),[n,s]);if(!n)return null;const u=t.formatMessage({defaultMessage:"New task",id:"AssignedToMeHomePanel.addNewTask.tooltip"});return(0,b.jsx)(I.Z,{textWrap:!1,renderTooltip:()=>u,placement:I.Z.Placement.Top,render:e=>(0,b.jsx)(ae.Z,{...e,ariaLabel:u,style:a.buttonStyle,mobileFeedback:!1,onClick:c,disabled:l,disabledFeedback:l,children:(0,oe.R)(a.threeDotIcon)})})}const He=function(){window.__c={n:"AssignedToMeHomePanel"};const e=(0,h.useIntl)(),t=(0,r.yK)((e=>({panel:{paddingRight:0,paddingBottom:0},collectionContainerStyle:{height:y.WB}})),[]),[n,i]=o.useState(null),s=(0,d.VK)((()=>{const e=(0,y.J2)("myTasks");if(null!=e&&e.isCollectionView())return e}),[]);return(0,b.jsx)(Te.Z,{title:e.formatMessage(ee.CN.myTasks),actions:[(0,b.jsx)(Ie,{intl:e},"more"),(0,b.jsx)(Pe,{intl:e,collectionContextStore:n},"add")],right:s&&(0,b.jsx)("span",{style:{paddingRight:8},children:(0,b.jsx)(I.Z,{render:e=>(0,b.jsx)(Me,{...e,renderAsIcon:!0,viewAllBlockStore:s,pageVisitSource:Q.tY.PersonalHomeTileTasks}),renderTooltip:()=>(0,b.jsx)(h.FormattedMessage,{id:"AssignedTomeHomePanel.viewAllButton.tooltip",defaultMessage:"View all tasks"})})}),icon:(0,b.jsx)(we.Z,{icon:"inbox",size:we.W-2}),panelStyle:t.panel,children:(0,b.jsx)(Se,{store:s,isFirstItem:!0,isLastItem:!0,overridePaddingLeft:0,overridePaddingRight:0,setCollectionContextStore:e=>i(e),style:t.collectionContainerStyle})})};var Ze=n(42853),Ve=n(74207),_e=n(45959),Ae=n(65598),Be=n(74016);function Ke(e){let{panelStyle:t}=e;window.__c={n:"PersonalHomeTrendingPanel"};const[n,i]=o.useState(void 0),s=(0,d.VK)((()=>{const{currentSpaceStore:e,currentUserStore:t}=f.default.state;if(!e||!t)return;const n=(0,y.J2)("trending");return null!=n&&n.isCollectionView()?n:void 0}),[]),a=(0,r.yK)((e=>({icon:{width:20,height:20,margin:-2,fill:e.mediumIconColor}})),[]);return(0,b.jsx)(Te.Z,{title:(0,b.jsx)(h.FormattedMessage,{id:"personalHomePanelConfig.workspaceActivityPanelTitle.trending",defaultMessage:"Trending"}),right:n&&(0,b.jsx)(Re,{collectionContextStore:n}),disableRightFadeIn:!0,icon:(0,Ve.X)(a.icon),panelStyle:t,children:(0,b.jsx)(Se,{store:s,setCollectionContextStore:e=>i(e)})})}function Re(e){let{collectionContextStore:t}=e;window.__c={n:"TrendingTargetSelector"};const n=(0,i.O7)(),{currentSpaceViewStore:r,currentSpaceStore:s}=(0,d.VK)((()=>{const{currentSpaceViewStore:e,currentSpaceStore:t}=f.default.state;return{currentSpaceViewStore:e,currentSpaceStore:t}}),[]),a=(0,d.VK)((()=>(null==r?void 0:r.getTeamsStores())??[]),[r]),l=(0,d.VK)((()=>t.collectionViewStore()),[t]),c=(0,d.VK)((()=>{if(!s)return;const e=null==l?void 0:l.getCollectionSource();if("trending"!==(null==e?void 0:e.type))return;const t=e.teamId;return t?a.find((e=>e.id===t)):s}),[a,s,l]),u=(0,o.useCallback)((e=>{S.Lg({environment:n,currentSpaceViewStore:r,selectedStore:e,collectionContextStore:t})}),[n,t,r]),m=(0,d.VK)((()=>{if(!s)return{};const e={};return e[s.id]=null==s?void 0:s.getName(),a.forEach((t=>{e[t.id]=t.getName()})),e}),[s,a]);return r&&s&&c?(0,b.jsx)(_e.Z,{items:[s,...a],getKey:e=>e.id,selectedItem:c,onSelect:u,renderItem:e=>{const t=e.value;return(0,b.jsx)(le.Z,{...e,title:m[t.id],icon:(0,b.jsx)(Be.p,{store:t,size:16,disabled:!0})})},renderOrigin:e=>(0,b.jsx)(Fe,{...e,selectedStore:c}),width:300}):null}function Fe(e){window.__c={n:"TrendingDropdownMenuItem"};const t=(0,i.O7)(),{device:n}=t,{selectedStore:o,...s}=e,a=(0,r.yK)((e=>({dropdownButton:{width:"100%",borderRadius:3,padding:"6px 8px",color:e.text.secondary,fontSize:(0,O.yv)(t,"UISmall"),display:"inline-flex",justifyContent:"end",alignItems:"center"},dropdownIcon:{width:10,marginLeft:4,fill:e.lightIconColor},dropdownText:{display:"inline-flex",alignItems:"center",fontWeight:p.Z.fontWeight.medium,overflow:"hidden"}})),[t]);return(0,b.jsxs)(ae.Z,{mobileFeedback:n.isMobile,style:a.dropdownButton,...s,children:[(0,b.jsx)("div",{style:a.dropdownText,children:(0,b.jsx)(Ne,{selectedStore:o})}),(0,Ze.i)(a.dropdownIcon)]})}function Ne(e){let{selectedStore:t}=e;window.__c={n:"SelectorTitle"};const n=(0,d.VK)((()=>null==t?void 0:t.getName()),[t]),o=(0,r.yK)((()=>({icon:{marginLeft:4,marginRight:4},spaceOrTeamName:{...p.Z.textOverflowStyle}})),[]),i=(0,b.jsx)(Be.p,{store:t,size:16,disabled:!0,style:o.icon});return n?(0,b.jsx)(h.FormattedMessage,{id:"personalHomePanelConfig.workspaceActivityPanelDropdownTitle.withWorkspaceOrTeamName",defaultMessage:"In {spaceOrTeamIcon} {spaceOrTeamName}",values:{spaceOrTeamIcon:i,spaceOrTeamName:(0,b.jsx)("div",{style:o.spaceOrTeamName,children:n})}}):(0,Ae.Y)(t)?(0,b.jsx)(h.FormattedMessage,{id:"personalHomePanelConfig.workspaceActivityPanelDropdownTitle.withoutTeamName",defaultMessage:"In your teamspace"}):(0,b.jsx)(h.FormattedMessage,{id:"personalHomePanelConfig.workspaceActivityPanelDropdownTitle.withoutWorkspaceName",defaultMessage:"In your workspace"})}const Le=o.memo(Ke);var Ge=n(54497),We=n(10912),Oe=n(84076),Ue=n(31278),De=n(76798),ze=n(84210),Ee=n(98742),$e=n(15447),Ye=n(88923),qe=n(98567),Je=n(4023);function Xe(e){let{store:t,...n}=e;window.__c={n:"WithPagePreviewOnHover"};const i=(0,o.useCallback)((e=>(0,b.jsx)(qe.E5,{store:t,events:e})),[t]);return(0,b.jsx)(I.Z,{noStyle:!0,delayThreshold:400,placement:Je.u.Bottom,renderTooltip:i,...n})}const Qe=o.memo(Xe);function et(){window.__c={n:"HardcodedRecentsGalleryPrototype"};const e=(0,d.VK)((()=>$e.X4.state),[]),t=Math.max(Math.min(e.length,20),8),n=[...Array(t)].map(((t,n)=>n>=e.length?(0,b.jsx)(ot,{},n):(0,b.jsx)(it,{store:e[n].store},n)));return(0,b.jsx)(a.i2,{hideScrollbar:!0,children:(0,b.jsx)(tt,{children:n})})}function tt(e){return(0,b.jsx)("div",{style:{display:"flex",gap:12,width:"100%",marginTop:4,paddingLeft:y.A5,paddingRight:y.A5},children:e.children})}const nt={userSelect:"none",WebkitUserSelect:"none",display:"flex",flexDirection:"column"};function ot(){window.__c={n:"EmptyGalleryItem"};const e=(0,r.yK)((e=>({container:{borderRadius:8,overflow:"hidden",transition:"background 100ms ease-out",width:144,height:144,flexShrink:0,fontSize:26,border:`1px solid ${e.personalHomeGalleryItemBorder}`,background:e.personalHomeGalleryCoverBackground},inner:nt})),[]);return(0,b.jsx)(Oe.Z,{style:e.container,innerStyle:e.inner,disabled:!0})}function it(e){let{store:t}=e;window.__c={n:"GalleryItem"};const n=(0,i.O7)(),s=(0,o.useRef)(null),a=(0,r.yK)((e=>({container:{borderRadius:8,overflow:"hidden",transition:"background 100ms ease-out",width:144,height:144,flexShrink:0,fontSize:26,border:`1px solid ${e.personalHomeGalleryItemBorder}`,background:e.personalHomeGalleryItemBackground},inner:nt,hovered:{border:`1px solid ${e.personalHomeGalleryItemBorderHovered}`,background:e.personalHomeGalleryItemBackground},pressed:{background:e.cardPressedBackground},emptyGalleryCoverStyle:{border:`1px solid ${e.personalHomeGalleryCoverBackground}`,background:e.personalHomeGalleryCoverBackground}})),[]),l=(0,d.VK)((()=>(0,ze.ZP)({store:t,fullyQualified:!1,pageVisitSource:Q.tY.PersonalHomeTileRecents,peekMode:(0,Ye.getUrlParamFromPeekMode)(Ye.PeekModeCenter)})),[t]),c=(0,o.useCallback)((e=>{e.metaKey||(se.peekBlock({environment:n,store:t,pageVisitSource:Q.tY.PersonalHomeTileRecents,peekMode:Ye.PeekModeCenter,resultsStore:void 0,collectionContextStore:void 0}),e.preventDefault())}),[n,t]);return(0,b.jsx)(Qe,{store:t,render:e=>(0,b.jsxs)(Oe.Z,{style:a.container,innerStyle:a.inner,hoveredStyle:a.hovered,pressedStyle:a.pressed,href:l,metaHref:l,ref:s,...(0,Ee.Z)(e,{onClick:c}),children:[(0,b.jsx)(We.Z,{variant:"gallery",store:t,coverFormat:{type:"page_cover"},showEmptyGalleryCover:!0,onLoadProxiedImage:e=>{},emptyGalleryCoverStyle:a.emptyGalleryCoverStyle}),(0,b.jsx)(rt,{store:t})]})})}function rt(e){let{store:t}=e;window.__c={n:"GalleryItemTitle"};const n=(0,i.O7)(),o=(0,i.MO)(),s=(0,r.yK)((e=>{const t=p.Z.fontSize.UIRegular.desktop;return{recordIcon:{position:"absolute",top:-18,left:10,marginRight:4,marginLeft:-2,marginTop:o?0:2},titleText:{fontWeight:p.Z.fontWeight.medium,fontSize:t,lineHeight:1.5,minHeight:1.5*t,width:"auto",paddingTop:12,whiteSpace:"pre-wrap",...(0,O.pd)(2)},progressContainer:{top:14,bottom:"unset",right:"unset",fontSize:(0,O.yv)(n,"UISmall")},titleWrap:{width:"100%",height:"50%",minHeight:72,paddingTop:8,paddingLeft:10,paddingRight:10,paddingBottom:10,position:"relative"},warningIcon:{fill:e.accentColors.orange[500],width:o?20:16,marginLeft:o?2:4,marginRight:o?4:6,paddingBottom:6,paddingTop:6,display:"inline-block",verticalAlign:"bottom"}}}),[n,o]),a=(0,d.VK)((()=>t.hasIcon()||!t.isEmptyPage()),[t]),l=(0,d.VK)((()=>t.hasError()),[t]),c=(0,d.VK)((()=>t.getIcon()),[t]),u=(0,d.VK)((()=>t.isEmptyPage()),[t]),m=(0,d.VK)((()=>o?24:32),[o]),g=(0,b.jsx)(Ue.Z,{disabled:!0,bucket:"secure",style:s.recordIcon,progressContainerStyle:s.progressContainer,icon:c,store:t,size:m,isEmptyPage:u});return(0,b.jsxs)("div",{style:s.titleWrap,children:[a&&!l&&g,l&&(0,Ge.t)(s.warningIcon),(0,b.jsx)(De.Z,{style:s.titleText,store:t})]})}const st=function(){window.__c={n:"RecentsHomePanel"};const e=(0,r.yK)((()=>({container:{width:`calc(100% + ${2*y.A5}px)`,marginLeft:-y.A5,marginRight:-y.A5}})),[]);return(0,b.jsx)(Te.Z,{title:(0,b.jsx)(h.FormattedMessage,{id:"RecentsHomePanel.Title",defaultMessage:"Recently visited"}),icon:(0,b.jsx)(we.Z,{icon:"clock-alternate"}),children:(0,b.jsx)("div",{style:e.container,children:(0,b.jsx)(et,{})})})};function at(e){let{panelStyle:t}=e;window.__c={n:"SimilarUsersHomePanel"};const n=(0,d.VK)((()=>{const e=(0,y.J2)("similarUsers");if(null!=e&&e.isCollectionView())return e}),[]);return(0,b.jsx)(Te.Z,{title:(0,b.jsx)(h.FormattedMessage,{id:"personalHomePanelConfig.similarUsersActivityPanelTitle.withWorkspaceName",defaultMessage:"Suggested for you"}),icon:(0,b.jsx)(we.Z,{icon:"light-bulb"}),panelStyle:t,children:(0,b.jsx)(Se,{store:n})})}const lt=o.memo(at);var dt=n(41892),ct=n(13148),ut=n(29665),mt=n(24600),gt=n(42922),pt=n(63296),ht=n(11059);function ft(e){let{}=e;window.__c={n:"TipsHomePanel"};const t=(0,d.VK)((()=>f.default.state.currentSpaceViewStore),[]),n=(0,i.O7)(),s=(0,h.useIntl)(),a=(0,o.useCallback)((()=>t&&S.aG({environment:n,currentSpaceViewStore:t,feature:"tips",from:"tips_dismiss_button"})),[t,n]),l=(0,o.useCallback)((()=>{}),[]),c=(0,o.useCallback)((()=>{}),[]),u=(0,o.useCallback)((()=>{}),[]),m=(0,o.useCallback)((()=>{}),[]),g=(0,o.useCallback)((()=>{}),[]),p=(0,r.yK)((e=>({hideButton:{marginRight:-7},container:{display:"flex",justifyContent:"stretch",alignContent:"stretch",flexWrap:"wrap",gap:16},containerItem:{minWidth:300,minHeight:186,flexShrink:1,flexGrow:1,flexBasis:0,borderRadius:6}})),[]),x=s.formatMessage({id:"tipsHomePanel.closeTips.AriaLabel",defaultMessage:"Hide tips from Home"});return(0,b.jsx)(Te.Z,{title:(0,b.jsx)(h.FormattedMessage,{id:"TipsHomePanel.Title",defaultMessage:"Tips"}),icon:(0,b.jsx)(we.Z,{icon:"book",size:we.W-2}),right:(0,b.jsx)(je.Z,{icon:ct.U,ariaLabel:x,onClick:a,style:p.hideButton}),children:(0,b.jsxs)("div",{style:p.container,children:[(0,b.jsx)("div",{style:p.containerItem,children:(0,b.jsx)(xt,{onLearnBasicsClick:l,onFindATopicClick:c})}),(0,b.jsx)("div",{style:p.containerItem,children:(0,b.jsx)(yt,{onClickTryProjects:u,onClickTrySlack:m,onClickImport:g})})]})})}function xt(e){let{onLearnBasicsClick:t,onFindATopicClick:n}=e;window.__c={n:"LearnItem"};const o=(0,i.O7)(),s=(0,r.yK)((e=>({container:{borderRadius:6,background:e.personalHomeTipsBackground,display:"flex",alignItems:"flex-start",gap:16,justifyContent:"stretch",height:"100%",width:"100%",padding:24},emojiContainer:{flexGrow:0,flexShrink:0},contentContainer:{display:"flex",flexDirection:"column",justifyContent:"flex-start",flexGrow:1,flexShrink:1,fontSize:(0,O.yv)(o,"UIRegular")},contentTitle:{fontWeight:p.Z.fontWeight.medium,color:e.regularTextColor},contentDescription:{fontWeight:p.Z.fontWeight.regular,color:e.mediumTextColor,marginTop:8},buttonPair:{marginTop:16,display:"flex",justifyContent:"flex-start",alignContent:"stretch",gap:8},button:{height:32}})),[o]);return(0,b.jsxs)("div",{style:s.container,children:[(0,b.jsx)("div",{style:s.emojiContainer,children:(0,b.jsx)(ht.Z,{char:"💪",size:32})}),(0,b.jsxs)("div",{style:s.contentContainer,children:[(0,b.jsx)("div",{style:s.contentTitle,children:(0,b.jsx)(h.FormattedMessage,{id:"tipsHomePanel.learnMoreItem.title",defaultMessage:"Unlock the full power of Notion"})}),(0,b.jsx)("div",{style:s.contentDescription,children:(0,b.jsx)(h.FormattedMessage,{id:"tipsHomePanel.learnMoreItem.description",defaultMessage:"From basic functions like creating a new block, to advanced features such as databases, automation, and templates."})}),(0,b.jsxs)("div",{style:s.buttonPair,children:[(0,b.jsx)(gt.Z,{onClick:t,style:s.button,children:(0,b.jsx)(h.FormattedMessage,{id:"tipsHomePanel.learnMoreItem.learnBasicsButton",defaultMessage:"Learn basics"})}),(0,b.jsx)(pt.Z,{onClick:n,style:s.button,children:(0,b.jsx)(h.FormattedMessage,{id:"tipsHomePanel.learnMoreItem.findATopicButton",defaultMessage:"Find a topic"})})]})]})]})}function yt(e){let{onClickTryProjects:t,onClickTrySlack:n,onClickImport:o}=e;window.__c={n:"TryItem"};const i=(0,h.useIntl)().formatMessage({id:"TipsHomePanel.asanaIconAriaLabel",defaultMessage:"Asana icon"}),s=(0,r.yK)((e=>({container:{display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"space-between"},asanaIcon:{flexShrink:0,width:30,height:30,borderRadius:4,background:c.ZP.white},slackIcon:{width:30,height:30},projectsIcon:{fill:e.blueColor}})),[]);return(0,b.jsxs)("div",{style:s.container,children:[(0,b.jsx)(Ct,{icon:(0,ut.B)(s.projectsIcon),title:(0,b.jsx)(h.FormattedMessage,{id:"TipsHomePanel.tryNotionProjects.title",defaultMessage:"Try Notion Projects"}),description:(0,b.jsx)(h.FormattedMessage,{id:"TipsHomePanel.tryNotionProjects.description",defaultMessage:"AI-powered project management"}),CTA:(0,b.jsx)(h.FormattedMessage,{id:"TipsHomePanel.tryNotionProjects.cta",defaultMessage:"Try it"}),onClick:t}),(0,b.jsx)(Ct,{icon:(0,mt.P)(s.slackIcon),title:(0,b.jsx)(h.FormattedMessage,{id:"TipsHomePanel.connectSlack.title",defaultMessage:"Connect Slack"}),description:(0,b.jsx)(h.FormattedMessage,{id:"TipsHomePanel.connectSlack.description",defaultMessage:"See Slack messages directly in Notion"}),CTA:(0,b.jsx)(h.FormattedMessage,{id:"TipsHomePanel.connectSlack.cta",defaultMessage:"Connect"}),onClick:n}),(0,b.jsx)(Ct,{icon:(0,b.jsx)("img",{style:s.asanaIcon,src:dt.Z.images.import.asanaPng,"aria-label":i}),title:(0,b.jsx)(h.FormattedMessage,{id:"TipsHomePanel.import.title",defaultMessage:"Import data"}),description:(0,b.jsx)(h.FormattedMessage,{id:"TipsHomePanel.import.description",defaultMessage:"From Asana, Jira, Confluence and more"}),CTA:(0,b.jsx)(h.FormattedMessage,{id:"TipsHomePanel.import.cta",defaultMessage:"Import"}),onClick:o})]})}function Ct(e){let{icon:t,title:n,description:o,CTA:s,onClick:a}=e;window.__c={n:"TryItemRow"};const l=(0,i.O7)(),d=(0,r.yK)((e=>({rowContainer:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:16,paddingLeft:16,paddingRight:16,paddingTop:13,paddingBottom:13,minHeight:62},iconContainer:{width:32,height:32,flexShrink:0,flexGrow:0,display:"flex",alignItems:"center",justifyContent:"center"},textContainer:{flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"flex-start"},title:{fontWeight:p.Z.fontWeight.medium,fontSize:(0,O.yv)(l,"UIRegular")},description:{color:e.mediumTextColor,fontWeight:p.Z.fontWeight.regular,fontSize:(0,O.yv)(l,"UISmall"),lineHeight:1.2},buttonContainer:{justifySelf:"flex-end",flexShrink:0,flexGrow:0,height:32}})),[l]);return(0,b.jsxs)("div",{style:d.rowContainer,children:[(0,b.jsx)("div",{style:d.iconContainer,children:t}),(0,b.jsxs)("div",{style:d.textContainer,children:[(0,b.jsx)("div",{style:d.title,children:n}),(0,b.jsx)("div",{style:d.description,children:o})]}),(0,b.jsx)(pt.Z,{style:d.buttonContainer,children:s})]})}const St=o.memo(ft);function wt(){window.__c={n:"PersonalHomePage"};const e=(0,r.yK)((()=>({sideBySideTile:{height:270,paddingRight:0}})),[]),t=(0,d.VK)((()=>{const e=f.default.state.currentSpaceViewStore,t=(null==e?void 0:e.getHomeEnabledFeatures())??{};return{tasks:t.tasks,tips:X.default.checkGate("home_show_tips")&&t.tips}}),[]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a.bU,{children:(0,b.jsx)(st,{})}),t.tasks&&(0,b.jsx)(a.bU,{children:(0,b.jsx)(He,{})}),(0,b.jsx)(a.Cq,{minWidth:300,left:(0,b.jsx)(lt,{panelStyle:e.sideBySideTile}),right:(0,b.jsx)(Le,{panelStyle:e.sideBySideTile})}),t.tips&&(0,b.jsx)(a.bU,{children:(0,b.jsx)(St,{})})]})}const vt=o.memo(wt);function jt(){window.__c={n:"PersonalHomeContainer"};const{isPhone:e}=(0,i.Fy)(),t=(0,r.yK)((e=>({container:{width:"100%",height:"100%",overflowY:"scroll",background:e.personalHomeBackground,cursor:"default"}})),[]);return(0,o.useEffect)((()=>{s.j({name:"open_home"})}),[]),(0,b.jsx)("div",{style:t.container,className:"home-content",children:(0,b.jsxs)(a.Ar,{type:e?"home-phone":"home",gap:16,withBottomPadding:!0,children:[(0,b.jsx)(a.hy,{children:(0,b.jsx)(J,{layoutGapSize:16})}),(0,b.jsx)(vt,{})]})})}const kt=o.memo(jt)},40462:(e,t,n)=>{n.d(t,{o:()=>r});n(67294);var o=n(45238),i=n(85893);const r=(0,o.I)("globe2",{viewBox:"0 0 16 16",svg:(0,i.jsx)("path",{d:"M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM3.88477 3.76465C4.56836 3.11523 5.39551 2.61621 6.31836 2.34277C5.83301 2.82812 5.42285 3.51172 5.11523 4.3457C4.63672 4.19531 4.22656 3.99707 3.88477 3.76465ZM9.68848 2.34961C10.6045 2.62305 11.4316 3.11523 12.1084 3.76465C11.7734 4.00391 11.3633 4.19531 10.8848 4.35254C10.5771 3.51172 10.167 2.82812 9.68848 2.34961ZM8.47852 2.56836C9.0459 2.8418 9.56543 3.58008 9.93457 4.58496C9.4834 4.66699 8.99805 4.71484 8.47852 4.73535V2.56836ZM6.06543 4.58496C6.44141 3.58008 6.9541 2.8418 7.52148 2.56836V4.73535C7.00195 4.71484 6.5166 4.66699 6.06543 4.58496ZM2.05273 7.58594C2.14844 6.42383 2.58594 5.35059 3.25586 4.46875C3.67285 4.77637 4.21289 5.04297 4.8418 5.24121C4.66406 5.95215 4.54785 6.74512 4.51367 7.58594H2.05273ZM11.4863 7.58594C11.4521 6.74512 11.3359 5.95215 11.1582 5.24121C11.7871 5.04297 12.3271 4.7832 12.7373 4.46875C13.4141 5.35059 13.8516 6.42383 13.9473 7.58594H11.4863ZM5.49121 7.58594C5.52539 6.84082 5.62793 6.12988 5.78516 5.4873C6.33203 5.59668 6.91309 5.66504 7.52148 5.69238V7.58594H5.49121ZM8.47852 7.58594V5.69238C9.08691 5.66504 9.66797 5.59668 10.2148 5.4873C10.3721 6.12988 10.4746 6.84082 10.5088 7.58594H8.47852ZM2.05273 8.54297H4.51367C4.54785 9.39746 4.66406 10.1973 4.8418 10.915C4.21973 11.1133 3.68652 11.373 3.27637 11.6807C2.59277 10.792 2.14844 9.71191 2.05273 8.54297ZM5.49121 8.54297H7.52148V10.4707C6.91992 10.498 6.33203 10.5664 5.79199 10.6689C5.62793 10.0195 5.51855 9.29492 5.49121 8.54297ZM8.47852 10.4707V8.54297H10.5088C10.4814 9.29492 10.3721 10.0195 10.208 10.6689C9.66797 10.5664 9.08691 10.498 8.47852 10.4707ZM11.1582 10.915C11.3428 10.1973 11.4521 9.39746 11.4863 8.54297H13.9473C13.8516 9.71191 13.4072 10.792 12.7236 11.6807C12.3135 11.373 11.7803 11.1133 11.1582 10.915ZM8.47852 11.4277C8.99121 11.4482 9.47656 11.4961 9.9209 11.5781C9.55176 12.5625 9.03906 13.2939 8.47852 13.5605V11.4277ZM6.0791 11.5781C6.52344 11.4961 7.00879 11.4482 7.52148 11.4277V13.5605C6.96094 13.2939 6.44824 12.5625 6.0791 11.5781ZM3.90527 12.3848C4.24023 12.1523 4.65039 11.9609 5.12207 11.8105C5.42969 12.6309 5.83301 13.3008 6.30469 13.7793C5.40234 13.5059 4.58203 13.0205 3.90527 12.3848ZM10.8779 11.8105C11.3496 11.9609 11.7598 12.1523 12.0947 12.3848C11.418 13.0205 10.5977 13.5059 9.69531 13.7793C10.167 13.3008 10.5703 12.6309 10.8779 11.8105Z"})})},74207:(e,t,n)=>{n.d(t,{X:()=>r});n(67294);var o=n(45238),i=n(85893);const r=(0,o.I)("trendingArrow",{viewBox:"0 0 20 20",svg:(0,i.jsx)("path",{d:"M3.76208 13.6882L2.71619 12.6491L5.81287 9.49773C5.98604 9.32 6.15466 9.19467 6.31873 9.12175C6.48735 9.04428 6.66052 9.00554 6.83826 9.00554C7.01599 9.00554 7.18917 9.04428 7.35779 9.12175C7.53097 9.19923 7.69958 9.32455 7.86365 9.49773L10.2494 11.986C10.3086 12.0453 10.3679 12.0749 10.4271 12.0749C10.4909 12.0749 10.5524 12.0453 10.6117 11.986L13.2367 9.29949L12.2181 8.28093C12.1088 8.17156 12.0518 8.05307 12.0472 7.92547C12.0472 7.79786 12.0905 7.68393 12.1771 7.58367C12.2683 7.47885 12.3913 7.40593 12.5463 7.36492L16.5726 6.33269C16.7094 6.29623 16.837 6.30763 16.9554 6.36687C17.0785 6.42612 17.1696 6.51498 17.2289 6.63347C17.2881 6.74741 17.2995 6.87501 17.2631 7.01629L16.224 11.0495C16.183 11.2044 16.1101 11.3275 16.0052 11.4186C15.9004 11.5052 15.7842 11.5485 15.6566 11.5485C15.5336 11.544 15.4174 11.487 15.308 11.3776L14.2758 10.3386L11.4525 13.1755C11.1198 13.5081 10.778 13.6745 10.4271 13.6745C10.2494 13.6745 10.0739 13.6358 9.90076 13.5583C9.72758 13.4762 9.56124 13.3486 9.40173 13.1755L7.01599 10.694C6.9613 10.6302 6.90206 10.5983 6.83826 10.5983C6.77901 10.5983 6.71977 10.6302 6.66052 10.694L3.76208 13.6882Z"})})}}]);