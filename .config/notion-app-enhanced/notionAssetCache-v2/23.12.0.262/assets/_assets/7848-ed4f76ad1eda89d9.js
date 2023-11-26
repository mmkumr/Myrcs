"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[7848],{12448:(e,t,i)=>{i.d(t,{pD:()=>m,qu:()=>g});var o=i(87586),n=i(86488),s=i(31412),r=i(50906),c=i(97977),a=i(70782),l=i(55081),d=i(97852),u=i(88632),p=i(62967);const h=(0,s.defineMessages)({joinOrCreateWorkspace:{id:"sidebarSwitcherMultiAccount.singleAccountMenu.joinOrCreateWorkspace.label",defaultMessage:"Join or create workspace"},logOut:{id:"sidebarSwitcherMultiAccount.singleAccountMenu.logOut.label",defaultMessage:"Log out"}});function g(e){return(0,p.cN)({key:"join or create a workspace",displayName:h.joinOrCreateWorkspace,analyticsName:h.joinOrCreateWorkspace.defaultMessage,svg:n.p,validators:[],closeParentMenu:!0,action:t=>{let{environment:i}=t;d.Z.reset(),i.currentUser.id!==e?a.x({environment:i,newCurrentUserId:e}).then((e=>{l.xN(e)})):l.xN(i)}})}function m(e){return(0,p.cN)({key:"log out of a single account",displayName:h.logOut,analyticsName:h.logOut.defaultMessage,svg:o.B,validators:[],closeParentMenu:!0,action:t=>{let{environment:i}=t;const{online:o}=u.Z.state;o&&(c.logoutSingleAccount({environment:i,userId:e}),r.HYP(i))}})}},1101:(e,t,i)=>{i.d(t,{Z:()=>m});i(67294);var o=i(83355),n=i(56666),s=i(82990),r=i(87279),c=i(61766),a=i(48019),l=i(64921),d=i(31945),u=i(78140),p=i(72495),h=i(85893);class g extends o.Z{constructor(){super(...arguments),this.storeTypes={buttonPopupStore:c.Z}}renderComponent(){const{device:e}=this.environment;let t;return t=e.isMobile?{menuType:r.og.ActionSheet}:{menuType:r.og.Popup},(0,h.jsxs)("div",{style:this.getContainerStyle(),children:[(0,h.jsx)("div",{style:this.getTextStyle(),children:this.props.emailAddress}),(0,h.jsx)(d.ZP,{popupType:e.isMobile?d.Z4.SlideUp:d.Z4.Popup,buttonPopupStore:this.stores.buttonPopupStore,renderOrigin:e=>{if(!this.props.disabled)return(0,h.jsx)(l.Z,{...e,style:this.getButtonStyle(),children:(0,n.o)(this.getButtonIconStyle())})},render:()=>(0,h.jsx)(u.Z,{...t,children:(0,h.jsx)(a.Z,{sections:[{key:"option section",render:e=>(0,h.jsx)(p.Z,{...e}),actions:this.props.accountActions}],context:{environment:this.environment,blocks:[],publicEditMode:void 0}})})})]})}getButtonStyle(){const{device:e}=this.environment;return{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:e.isMobile?24:20,height:e.isMobile?24:20,borderRadius:4}}getButtonIconStyle(){const{device:e}=this.environment;return{width:e.isMobile?18:12,height:e.isMobile?18:12}}getContainerStyle(){return{marginTop:this.environment.device.isMobile?20:8,marginLeft:12,marginRight:12,display:"flex",alignItems:"center",justifyContent:"space-between",color:this.theme.mediumTextColor}}getTextStyle(){return{fontSize:this.environment.device.isMobile?14:11,lineHeight:s.Z.lineHeight.UISmall.desktop,fontWeight:s.Z.fontWeight.medium}}}g.displayName="SidebarAccountHeader";const m=g},27177:(e,t,i)=>{i.d(t,{Z:()=>b});i(21703),i(67294);var o=i(83355),n=i(31412),s=i(50906),r=i(75018),c=i(52275),a=i(31945),l=i(46457),d=i(43250),u=i(88632),p=i(96071),h=i(30278),g=i(85974),m=i(91190),C=i(78861),x=i(85893);class M extends o.Z{constructor(){super(...arguments),this.storeTypes={loginStore:g.Z,loginPermissionsStore:h.Z,loginModalStore:p.Z},this.renderAccountActionModal=(e,t)=>{let i,o;switch(e){case"add-account":i=(0,x.jsx)(n.FormattedMessage,{id:"sidebarSwitcherMultiAccount.addAccount.title",defaultMessage:"Add an account"}),o=(0,x.jsx)(n.FormattedMessage,{id:"sidebarSwitcherMultiAccount.addAccount.description",defaultMessage:"Use an existing account, or sign up with a new email. Your current account will remain logged in."});break;case"create-work":i=(0,x.jsx)(n.FormattedMessage,{id:"sidebarSwitcherMultiAccount.createWork.title",defaultMessage:"Create a work account"}),o=(0,x.jsx)(n.FormattedMessage,{id:"sidebarSwitcherMultiAccount.createWork.description",defaultMessage:"We’ll check if your teammates are already on Notion. If not, we’ll create a new home for you and your team."});break;default:throw new Error(this.props.intl.formatMessage({defaultMessage:"Unexpected createType in SidebarSwitcherMultiAccount",id:"sidebarSwitcherMultiAccount.errorMessage"}))}return(0,x.jsx)(l._,{loginModalStore:this.stores.loginModalStore,loginStore:this.stores.loginStore,title:i,description:o,disableLoginLink:this.props.disableLoginLink,className:d.zYS,redirectURL:this.props.redirectURL,onDismiss:t})},this.supportsNativeHomeOnPhone=()=>{const{mobileNative:e}=this.environment;return(null==e?void 0:e.supportsNativeHomeOnPhone())||!1},this.getAccountActionStyle=()=>{const{device:e}=this.environment;return{display:"flex",color:this.theme.mediumTextColor,whiteSpace:"nowrap",fontSize:e.isMobile?16:12}}}willMount(e){super.willMount(e);const{loginStore:t}=this.stores;"email"===t.state.loginType&&this.environment.device.isMobile&&t.setState({...t.state,loginType:"google"})}renderComponent(){const{online:e}=u.Z.state,{device:t}=this.environment,{createType:i}=this.props,o=this.supportsNativeHomeOnPhone();return t.isMobile?(0,x.jsx)(a.ZP,{popupType:a.Z4.SlideUp,hidesMobileNativeBottomBar:o,preventSlideUpTransition:o,buttonPopupStore:"add-account"===i?m.C:m.E,alignmentToOrigin:a.vR.Start,placementToOrigin:a.pO.Top,originGap:0,isFullWidthOnMobile:!0,render:e=>this.renderAccountActionModal(i,(()=>{this.supportsNativeHomeOnPhone()?r.navigateToHomeTab(this.environment,e.close):e.close()})),preventScaleTransition:!0,renderOrigin:t=>(0,x.jsx)(c.Z,{focused:!1,disabled:!e,title:this.renderMenuButtonLoginTitle(i),icon:this.props.icon,...t})}):(0,x.jsxs)("div",{onClick:()=>{e&&(s.D6i(this.environment,{createType:i}),C.Z.setState({...C.Z.getState(),createType:i}),this.stores.loginModalStore.setState({open:!0}))},children:[(0,x.jsx)(c.Z,{focused:!1,disabled:!e,title:this.renderMenuButtonLoginTitle(i),icon:this.props.icon}),this.renderAccountActionModal(i)]})}renderMenuButtonLoginTitle(e){switch(e){case"create-work":return(0,x.jsx)("div",{style:this.getAccountActionStyle(),children:(0,x.jsx)(n.FormattedMessage,{defaultMessage:"Create work account",id:"sidebarSwitcherMultiAccount.menuItem.createWorkAccountButton.label"})});case"add-account":return(0,x.jsx)("div",{style:this.getAccountActionStyle(),children:(0,x.jsx)(n.FormattedMessage,{defaultMessage:"Add another account",id:"sidebarSwitcherMultiAccount.addAccountButton.label"})})}}}M.displayName="SidebarSwitcherLoginModal";const b=(0,n.injectIntl)(M)},77062:(e,t,i)=>{i.d(t,{Z:()=>C});i(67294);var o=i(83355),n=i(47453),s=i(98519),r=i(64921),c=i(5145),a=i(31278),l=i(26388),d=i(64369),u=i(39849),p=i(87279),h=i(4023),g=i(85893);class m extends o.Z{renderComponent(){const{device:e}=this.environment,{id:t,onClick:i,focused:o,isAddButton:n,title:c,caption:a,shortcut:u,tooltipMessage:p,disableTooltip:m,disabled:C,showDragHandle:x}=this.props,M=this.environment.device.isMobile,b=this.props.isCheck;return(0,g.jsx)(l.Z,{renderTooltip:()=>p,disableTooltip:m,placement:h.u.Bottom,render:t=>(0,g.jsxs)(r.Z,{...t,mobileFeedback:this.environment.device.isMobile,onClick:i,hovered:o,disabled:C,style:this.getStyle(),children:[x&&this.renderDragHandle(),n?this.renderAddIcon():this.renderIcon(),(0,g.jsxs)("div",{style:{marginLeft:12,marginRight:u||b?12:0,minWidth:0},children:[(0,g.jsx)(d.Z,{className:"notranslate",isMobile:e.isMobile,children:c}),a&&(0,g.jsx)(d.Z,{isSmall:!0,isMobile:e.isMobile,children:a})]}),b&&(0,s.k)({width:14,height:14,marginLeft:"auto"}),this.props.right,u&&!M&&!b&&(0,g.jsx)("div",{style:this.getShortcutStyle(),children:u})]})},`sidebarswitchermenuitem-tooltip-${t}`)}renderDragHandle(){return(0,g.jsx)(c.ZP,{iconSize:12,style:{marginLeft:-6,marginRight:4,visibility:this.props.isAddButton?"hidden":"visible"}})}renderIcon(){const e=this.environment.device.isMobile;return(0,g.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,g.jsxs)("div",{style:{position:"relative"},children:[this.props.id&&(0,g.jsx)(a.Z,{disabled:!0,icon:this.props.icon,isEmptyPage:!1,title:this.props.spaceName,size:e?m.mobileIconSize:m.desktopIconSize,isLarge:!0}),(0,g.jsx)(u.Z,{color:u.Z.Color.Red,count:this.props.unreadMentions,style:{position:"absolute",top:-5,right:-5}})]})})}renderAddIcon(){const e=this.environment.device.isMobile?m.mobileIconSize:m.desktopIconSize;return(0,g.jsx)("div",{style:{...this.getIconWrapStyle(),width:e,height:e},children:this.getPlusIcon()})}getStyle(){const e=this.environment.device.isMobile,{WindowSizeStore:t}=this.environment,{disabled:i,removeDefaultMargin:o}=this.props,n=o?0:4;return{display:"flex",alignItems:"center",lineHeight:"120%",width:0===n?"100%":`$calc(100% - ${2*n}px)`,marginLeft:n,marginRight:n,borderRadius:4,paddingTop:e?8:4,paddingBottom:e?8:4,paddingLeft:e?t.getSafePaddingLeftCSS(16):14,paddingRight:e?t.getSafePaddingRightCSS(16):14,...e&&{boxShadow:`0 1px 0 ${this.theme.regularDividerColor}`},marginBottom:o?0:1,fontSize:e?16:14,...e&&{background:this.theme.popoverBackground},height:e?54:44,...this.props.isAddButton&&!e&&{boxShadow:"none",marginBottom:0},...i&&{opacity:.4}}}getPlusIcon(){return(0,n.R)({flexGrow:0,flexShrink:0,width:16,height:16,fill:this.theme.popoverBackground})}getIconWrapStyle(){return{width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",background:this.theme.lightIconColor,borderRadius:4,flexShrink:0}}getShortcutStyle(){return{color:this.theme.lightTextColor,fontSize:12,whiteSpace:"nowrap",marginLeft:"auto",flexShrink:0}}}m.displayName="SidebarSwitcherMenuItem",m.contextTypes={...p.mw,...o.w},m.mobileIconSize=36,m.desktopIconSize=32,m.dragHandleEffectiveWidth=16;const C=m},76453:(e,t,i)=>{i.d(t,{Ax:()=>X,ZP:()=>q,bM:()=>ce,rR:()=>ae});i(57658);var o=i(67294),n=i(480),s=i(86628),r=i(24405),c=i(16691),a=i(47453),l=i(72126),d=i(606),u=i(89101),p=i(23867),h=i(77858),g=i(66079),m=i(31412),C=i(12448),x=i(50906),M=i(97977),b=i(29974),S=i(39699),f=i(64921),v=i(52275),w=i(79131),y=i(88198),Z=i(16354),j=i(78140),k=i(32163),I=i(40721),A=i(72495),V=i(1101),H=i(14694),L=i(28125),T=i(87279),P=i(38755),B=i(55081),O=i(5162),N=i(80444),U=i(88632),R=i(24042),W=i(81236),F=i(26350),_=i(32856),z=i(24646),D=i(19034),E=i(97852),K=i(78861),$=i(27177),G=i(77062),Y=i(85893);function q(e){window.__c={n:"SidebarSwitcherMultiAccountPopup"};const{parent:t,redirectURL:i,disableLoginLink:o,onSpaceClick:s,loginStore:r,loginPermissionsStore:c}=e;let a;const l=(0,n.O7)(),d=(0,n.Fy)(),u=K.Z.getUserIds(l),p=(0,Y.jsx)(ee,{redirectURL:i,disableLoginLink:o,loginStore:r,loginPermissionsStore:c});return a=d.isMobile?{menuType:T.og.Modal,title:(0,Y.jsx)(m.FormattedMessage,{defaultMessage:"Accounts & Workspaces",id:"sidebarSwitcherMultiAccount.mobileMenu.title"}),right:(0,Y.jsx)(I.DoneMenuText,{}),onClickRight:t.close}:{menuType:T.og.Popup,minWidth:270,maxWidth:360,footer:p},(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(_.D,{experimentId:"quick_workspace_creation",groups:{on:(0,Y.jsx)(J,{})}}),(0,Y.jsxs)(j.Z,{...a,children:[u.map(((e,t)=>(0,Y.jsx)(Q,{userId:e,isLastUser:t===u.length-1,onSpaceClick:s},e))),d.isMobile&&p]})]})}function J(){window.__c={n:"CreateOrJoinButton"};const e=(0,n.O7)(),t=(0,r.yK)((e=>({button:{boxShadow:`0 -1px 0 ${e.regularDividerColor}`},sidebarItem:{color:e.mediumTextColor,height:45},plusIconContainer:{display:"flex",alignItems:"center",justifyContent:"center"},plusIcon:{fill:e.mediumIconColor,width:16,height:16}})),[]);return(0,Y.jsx)(f.Z,{onClick:()=>function(e){E.Z.reset(),B.xN(e),x.iSD(e)}(e),style:t.button,children:(0,Y.jsx)(H.Z,{style:t.sidebarItem,left:(0,Y.jsx)("div",{style:t.plusIconContainer,children:(0,a.R)(t.plusIcon)}),children:(0,Y.jsx)(m.FormattedMessage,{id:"sidebarSwitcherMultiAccount.singleAccountMenu.joinOrCreateWorkspace.label",defaultMessage:"Join or create workspace"})})})}function Q(e){window.__c={n:"UserSpaceViewList"};const{userId:t,isLastUser:i,onSpaceClick:a}=e,d=(0,n.O7)(),u=(0,n.Fy)(),h=(0,r.yK)((e=>({menuListMobile:{paddingTop:10},menuListNotLast:{borderBottom:`1px solid ${e.lightDividerColor}`}})),[]),g=(0,s.VK)((()=>[...K.Z.getSpaceViewStores(d,t).map((e=>e.pointer)).map((e=>({id:e.id,spaceId:(0,p.C)(e.spaceId)}))).map(c.vY),"create-workspace-row"]),[d,t]),{currentUserRootStore:C,currentSpaceStore:M}=(0,s.VK)((()=>N.default.state),[]),{isElectronUsingCommandNumber:b}=(0,s.VK)((()=>R.Z.state),[]),S=(0,s.VK)((()=>K.Z.getSpaceViewStores(d,t)),[d,t]),f=(0,s.VK)((()=>K.Z.getAllSpaceViewStores(d)),[d]),v=(0,m.useIntl)(),y=(0,s.VK)((()=>{if(!C||!M)return[];const e=[];for(const[i,o]of S.entries()){const i=o.getSpaceStore();if(i){const n=t===C.id&&i.id===M.id,{results:s}=D.Z.state,r=s.find((e=>e.spaceId===i.id)),c=l.cx(f,(e=>e.id===o.id))+1,p=(0,P.rn)(d,i),h=ce(d,v,i),g=ae(d,v,i);e.push({key:o.id,render:e=>{const{online:o}=U.Z.state,s=!ie({userId:t,environment:d})&&!u.isMobile;return(0,Y.jsx)(G.Z,{...e,id:i.id,icon:(0,P.Wd)(d,i),spaceName:p,title:h,caption:g,isCheck:n,unreadMentions:t===d.currentUser.id&&r&&r.spaceId!==M.id&&r.unread.mentions>0?r.unread.mentions:void 0,showDragHandle:s,shortcut:le({isElectronMac:u.isElectronMac,isElectronUsingCommandNumber:b,shortcutIndex:u.isElectron?c:void 0}),disabled:!o&&d.currentUser.id!==t,disableTooltip:!0})},action:async e=>{let{event:t}=e;se(),n||await a({event:t,spaceViewStore:o}),x.sos(d)}})}}return e}),[f,M,C,u,d,v,b,a,S,t]),Z=0===y.length?[]:[{key:"spaces",render:e=>(0,Y.jsx)(A.Z,{...e,disableMobilePadding:!0,topBorder:u.isMobile,children:u.isMobile?e.children:(0,Y.jsx)(o.Fragment,{children:(0,Y.jsx)(w.ZP,{direction:"vertical",keys:g,renderKey:t=>e.children[g.indexOf(t)],onDrop:re({userId:t,environment:d}),style:{marginBottom:1}})})}),items:y}];return Z.length>0?(0,Y.jsxs)(o.Fragment,{children:[(0,Y.jsx)(te,{userId:t}),(0,Y.jsx)("div",{style:u.isMobile?h.menuListMobile:i?{}:h.menuListNotLast,children:(0,Y.jsx)(k.Z,{type:k.i.Vertical,sections:Z,initialFocus:void 0})})]},t):null}function X(e){const{isMobile:t,theme:i}=e;return t?{}:{backgroundColor:i.sidebarSwitcherFooterBackground}}function ee(e){window.__c={n:"Footer"};const{redirectURL:t,disableLoginLink:i,loginStore:o,loginPermissionsStore:c}=e,a=(0,n.Fy)().isMobile,l=(0,r.yK)((e=>({footer:X({isMobile:a,theme:e})})),[a]),d=(0,n.O7)(),u=(0,s.VK)((()=>K.Z.hasAtLeastOneTeamPlan(d)),[d]),p=(0,Y.jsxs)(Y.Fragment,{children:[!u&&(0,Y.jsx)($.Z,{createType:"create-work",redirectURL:t,disableLoginLink:i,loginStore:o,loginPermissionsStore:c}),!(0,O.Y)("supportsNativeHome")&&(0,Y.jsx)($.Z,{createType:"add-account",redirectURL:t,disableLoginLink:i,loginStore:o,loginPermissionsStore:c})]});return(0,Y.jsxs)("div",{style:l.footer,children:[(0,Y.jsxs)(A.Z,{topBorder:!0,children:[L.k(d)&&p,(0,Y.jsx)(oe,{})]}),!a&&(0,Y.jsx)(A.Z,{topBorder:!0,children:(0,Y.jsx)(ne,{})})]})}function te(e){window.__c={n:"AccountHeader"};const{userId:t}=e,{online:i}=(0,s.VK)((()=>U.Z.state),[]),o=(0,n.O7)(),r=(0,s.VK)((()=>K.Z.getUserEmailAddress(o,t)),[o,t]);return r?(0,Y.jsx)(V.Z,{emailAddress:r,userId:t,disabled:!i,accountActions:[(0,C.qu)(t),(0,C.pD)(t)]}):null}function ie(e){const{userId:t,environment:i}=e;return 1===(t?K.Z.getSpaceViewStores(i,t):K.Z.getAllSpaceViewStores(i)).length}function oe(){window.__c={n:"LogoutAll"};const e=(0,s.VK)((()=>U.Z.state.online),[]),t=(0,n.O7)(),i=t.device.isMobile,c=(0,s.VK)((()=>K.Z.getUserIds(t)),[t]).length>1,a=(0,r.yK)((e=>({accountAction:{display:"flex",color:e.mediumTextColor,whiteSpace:"nowrap",fontSize:i?16:12,paddingLeft:0}})),[i]),l=(0,o.useCallback)((()=>{const{online:e}=U.Z.state;e&&(E.Z.setState({...E.Z.state,open:!1}),x.HYP(t),M.logout(t))}),[t]);return(0,Y.jsx)(v.Z,{onClick:l,focused:!1,disabled:!e,title:(0,Y.jsx)("div",{style:a.accountAction,children:(0,Y.jsx)(m.FormattedMessage,{defaultMessage:"{isLoggedIntoMultipleAccounts, select, true {Log out all accounts} other {Log out}}",id:"sidebarSwitcherMultiAccount.menuItem.logoutAllButton.label",values:{isLoggedIntoMultipleAccounts:c}})})})}function ne(){window.__c={n:"DownloadApps"};const e=(0,n.O7)(),t=(0,n.Fy)(),i=t.isElectron,s=(0,r.yK)((e=>({title:{color:e.mediumTextColor,fontSize:12}})),[]),c=(0,o.useCallback)((()=>{se(),t.isWindows?x.dyr(e,{from:"sidebar",app_platform:"windows"}):x.dyr(e,{from:"sidebar",app_platform:"mac"})}),[t.isWindows,e]),a=(0,o.useCallback)((()=>{se(),x.YY6(e,{from:"sidebar"})}),[e]);return i?(0,Y.jsx)(Z.Z,{external:!0,href:u.AR.mobile,onClick:a,children:(0,Y.jsx)(v.Z,{focused:!1,title:(0,Y.jsx)("div",{style:s.title,children:(0,Y.jsx)(m.FormattedMessage,{defaultMessage:"Get iOS & Android app",id:"sidebarMultiSwitcher.desktopAppGetMobileApp.prompt"})})})}):(0,Y.jsx)(Z.Z,{external:!0,href:u.AR.desktop,onClick:c,children:(0,Y.jsx)(v.Z,{focused:!1,title:(0,Y.jsx)("div",{style:s.title,children:t.isWindows?(0,Y.jsx)(m.FormattedMessage,{defaultMessage:"Get Windows app",id:"sidebarMultiSwitcher.windowsAppButton.text"}):(0,Y.jsx)(m.FormattedMessage,{defaultMessage:"Get Mac app",id:"sidebarMultiSwitcher.macAppButton.text"})})})})}function se(){E.Z.setState({...E.Z.state,open:!1})}function re(e){const{userId:t,environment:i}=e;return function(e){const o=e.filter((e=>"create-workspace-row"!==e)).map(c.Vg).map((e=>d.dr.fromSpaceShardRecordId(e,h.zU))),n=new F.r9(i,{table:g.dx,id:t},{userId:t});S.createAndCommit({userAction:"SidebarSwitcherMultiAccount.handleDraggableListDrop",environment:i,perform:e=>{b._Q({userRootStore:n,transaction:e,spaceViewIds:o.map((e=>e.id)),spaceViewPointers:o})},userId:t}),x.Q4L(i,{workspace_count:e.length})}}function ce(e,t,i){const o=(0,P.rn)(e,i),n=W.Z.getPublicSpaceData(e,i.id);return n&&"none"===n.role?(0,Y.jsxs)("div",{style:{display:"flex"},children:[(0,Y.jsx)("span",{style:{flexShrink:1,textOverflow:"ellipsis",overflow:"hidden"},children:o}),(0,Y.jsx)("div",{style:{marginLeft:"8px",alignSelf:"center"},children:(0,Y.jsx)(y.b,{})})]}):o}function ae(e,t,i){const o=W.Z.getPublicSpaceData(e,i.id);if(!o||"none"===o.role)return;const n=(0,z.em)(o.subscriptionTier),s=t.formatNumber(o.memberCount),r=t.formatMessage(n);return t.formatMessage(z.js.workspaceSubtitleWithMembers,{numberOfWorkspaceMembers:s,planType:r})}function le(e){if(e.shortcutIndex&&!(e.shortcutIndex>9))return e.isElectronMac?e.isElectronUsingCommandNumber?`⌃⇧${e.shortcutIndex}`:`⌘${e.shortcutIndex}`:e.isElectronUsingCommandNumber?`alt+shift+${e.shortcutIndex}`:`ctrl+${e.shortcutIndex}`}},32856:(e,t,i)=>{i.d(t,{D:()=>s});var o=i(86628),n=i(77080);function s(e){window.__c={n:"ExperimentSwitch"};const{experimentId:t,groups:i,disableExposureLogging:s}=e;return i[function(e){const{experimentId:t,disableExposureLogging:i,defaultGroup:s}=e;return(0,o.VK)((()=>n.default.getEligibleGroup({experimentId:t,defaultGroup:s??"control",disableExposureLogging:i})),[t,i,s])}({experimentId:t,disableExposureLogging:s})]}},87586:(e,t,i)=>{i.d(t,{B:()=>s});i(67294);var o=i(45238),n=i(85893);const s=(0,o.I)("circleCross",{viewBox:"0 0 30 30",svg:(0,n.jsx)("path",{d:"M15 28.354c7.305 0 13.354-6.049 13.354-13.354 0-7.292-6.062-13.354-13.367-13.354C7.695 1.646 1.646 7.708 1.646 15c0 7.305 6.062 13.354 13.354 13.354zm0-2.226A11.075 11.075 0 013.885 15c0-6.166 4.922-11.128 11.102-11.128 6.18 0 11.128 4.962 11.141 11.128A11.078 11.078 0 0115 26.128zm-4.477-5.577a.99.99 0 00.746-.327l3.718-3.731 3.731 3.73c.197.197.445.328.747.328.576 0 1.047-.484 1.047-1.06a.979.979 0 00-.314-.747l-3.718-3.718 3.73-3.744c.223-.223.315-.445.315-.733 0-.59-.471-1.048-1.047-1.048-.275 0-.498.092-.72.315l-3.771 3.744-3.744-3.731c-.184-.21-.432-.301-.72-.301-.577 0-1.048.445-1.048 1.034a.97.97 0 00.314.733l3.719 3.731-3.719 3.732a.951.951 0 00-.314.733c0 .576.471 1.06 1.048 1.06z"})})},40462:(e,t,i)=>{i.d(t,{o:()=>s});i(67294);var o=i(45238),n=i(85893);const s=(0,o.I)("globe2",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM3.88477 3.76465C4.56836 3.11523 5.39551 2.61621 6.31836 2.34277C5.83301 2.82812 5.42285 3.51172 5.11523 4.3457C4.63672 4.19531 4.22656 3.99707 3.88477 3.76465ZM9.68848 2.34961C10.6045 2.62305 11.4316 3.11523 12.1084 3.76465C11.7734 4.00391 11.3633 4.19531 10.8848 4.35254C10.5771 3.51172 10.167 2.82812 9.68848 2.34961ZM8.47852 2.56836C9.0459 2.8418 9.56543 3.58008 9.93457 4.58496C9.4834 4.66699 8.99805 4.71484 8.47852 4.73535V2.56836ZM6.06543 4.58496C6.44141 3.58008 6.9541 2.8418 7.52148 2.56836V4.73535C7.00195 4.71484 6.5166 4.66699 6.06543 4.58496ZM2.05273 7.58594C2.14844 6.42383 2.58594 5.35059 3.25586 4.46875C3.67285 4.77637 4.21289 5.04297 4.8418 5.24121C4.66406 5.95215 4.54785 6.74512 4.51367 7.58594H2.05273ZM11.4863 7.58594C11.4521 6.74512 11.3359 5.95215 11.1582 5.24121C11.7871 5.04297 12.3271 4.7832 12.7373 4.46875C13.4141 5.35059 13.8516 6.42383 13.9473 7.58594H11.4863ZM5.49121 7.58594C5.52539 6.84082 5.62793 6.12988 5.78516 5.4873C6.33203 5.59668 6.91309 5.66504 7.52148 5.69238V7.58594H5.49121ZM8.47852 7.58594V5.69238C9.08691 5.66504 9.66797 5.59668 10.2148 5.4873C10.3721 6.12988 10.4746 6.84082 10.5088 7.58594H8.47852ZM2.05273 8.54297H4.51367C4.54785 9.39746 4.66406 10.1973 4.8418 10.915C4.21973 11.1133 3.68652 11.373 3.27637 11.6807C2.59277 10.792 2.14844 9.71191 2.05273 8.54297ZM5.49121 8.54297H7.52148V10.4707C6.91992 10.498 6.33203 10.5664 5.79199 10.6689C5.62793 10.0195 5.51855 9.29492 5.49121 8.54297ZM8.47852 10.4707V8.54297H10.5088C10.4814 9.29492 10.3721 10.0195 10.208 10.6689C9.66797 10.5664 9.08691 10.498 8.47852 10.4707ZM11.1582 10.915C11.3428 10.1973 11.4521 9.39746 11.4863 8.54297H13.9473C13.8516 9.71191 13.4072 10.792 12.7236 11.6807C12.3135 11.373 11.7803 11.1133 11.1582 10.915ZM8.47852 11.4277C8.99121 11.4482 9.47656 11.4961 9.9209 11.5781C9.55176 12.5625 9.03906 13.2939 8.47852 13.5605V11.4277ZM6.0791 11.5781C6.52344 11.4961 7.00879 11.4482 7.52148 11.4277V13.5605C6.96094 13.2939 6.44824 12.5625 6.0791 11.5781ZM3.90527 12.3848C4.24023 12.1523 4.65039 11.9609 5.12207 11.8105C5.42969 12.6309 5.83301 13.3008 6.30469 13.7793C5.40234 13.5059 4.58203 13.0205 3.90527 12.3848ZM10.8779 11.8105C11.3496 11.9609 11.7598 12.1523 12.0947 12.3848C11.418 13.0205 10.5977 13.5059 9.69531 13.7793C10.167 13.3008 10.5703 12.6309 10.8779 11.8105Z"})})},49364:(e,t,i)=>{i.d(t,{R:()=>s});i(67294);var o=i(45238),n=i(85893);const s=(0,o.I)("openTeam",{viewBox:"0 0 28 28",svg:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("path",{d:"M3.24121 21.4326C3.24121 22.4082 3.80371 23.0322 4.7002 23.0322H22.4629C23.3506 23.0322 23.9131 22.4082 23.9131 21.4326V10.2178C23.9131 9.24219 23.3506 8.61816 22.4629 8.61816H17.2334V5.89355C17.2334 4.91797 16.6709 4.29395 15.7832 4.29395H4.7002C3.80371 4.29395 3.24121 4.91797 3.24121 5.89355V21.4326ZM4.65625 21.1074V6.21875C4.65625 5.86719 4.81445 5.70898 5.16602 5.70898H15.3174C15.6602 5.70898 15.8184 5.86719 15.8184 6.21875V21.1074C15.8184 21.4502 15.6602 21.6172 15.3174 21.6172H13.2959V19.0244C13.2959 18.2686 12.9619 17.917 12.2412 17.917H8.2334C7.5127 17.917 7.17871 18.2686 7.17871 19.0244V21.6172H5.16602C4.81445 21.6172 4.65625 21.4502 4.65625 21.1074ZM7.31934 9.5498H9.0332C9.24414 9.5498 9.39355 9.40918 9.39355 9.18945V7.52832C9.39355 7.31738 9.24414 7.16797 9.0332 7.16797H7.31934C7.1084 7.16797 6.97656 7.31738 6.97656 7.52832V9.18945C6.97656 9.40918 7.1084 9.5498 7.31934 9.5498ZM11.4414 9.5498H13.1465C13.3574 9.5498 13.5068 9.40918 13.5068 9.18945V7.52832C13.5068 7.31738 13.3574 7.16797 13.1465 7.16797H11.4414C11.2217 7.16797 11.0898 7.31738 11.0898 7.52832V9.18945C11.0898 9.40918 11.2217 9.5498 11.4414 9.5498ZM17.2334 21.4326V10.0332H21.9971C22.3398 10.0332 22.498 10.2002 22.498 10.543V21.1074C22.498 21.4502 22.3398 21.6172 21.9971 21.6172H17.2246C17.2334 21.5557 17.2334 21.4941 17.2334 21.4326ZM7.31934 13.0303H9.0332C9.24414 13.0303 9.39355 12.8896 9.39355 12.6699V11.0088C9.39355 10.7979 9.24414 10.6484 9.0332 10.6484H7.31934C7.1084 10.6484 6.97656 10.7979 6.97656 11.0088V12.6699C6.97656 12.8896 7.1084 13.0303 7.31934 13.0303ZM11.4414 13.0303H13.1465C13.3574 13.0303 13.5068 12.8896 13.5068 12.6699V11.0088C13.5068 10.7979 13.3574 10.6484 13.1465 10.6484H11.4414C11.2217 10.6484 11.0898 10.7979 11.0898 11.0088V12.6699C11.0898 12.8896 11.2217 13.0303 11.4414 13.0303ZM19.1582 13.4521H20.5732C20.749 13.4521 20.8721 13.3291 20.8721 13.1533V11.7822C20.8721 11.6064 20.749 11.4834 20.5732 11.4834H19.1582C18.9736 11.4834 18.8682 11.6064 18.8682 11.7822V13.1533C18.8682 13.3291 18.9736 13.4521 19.1582 13.4521ZM7.31934 16.5107H9.0332C9.24414 16.5107 9.39355 16.3613 9.39355 16.1504V14.4893C9.39355 14.2695 9.24414 14.1289 9.0332 14.1289H7.31934C7.1084 14.1289 6.97656 14.2695 6.97656 14.4893V16.1504C6.97656 16.3613 7.1084 16.5107 7.31934 16.5107ZM11.4414 16.5107H13.1465C13.3574 16.5107 13.5068 16.3613 13.5068 16.1504V14.4893C13.5068 14.2695 13.3574 14.1289 13.1465 14.1289H11.4414C11.2217 14.1289 11.0898 14.2695 11.0898 14.4893V16.1504C11.0898 16.3613 11.2217 16.5107 11.4414 16.5107ZM19.1582 16.8096H20.5732C20.749 16.8096 20.8721 16.6865 20.8721 16.5107V15.1396C20.8721 14.9639 20.749 14.8408 20.5732 14.8408H19.1582C18.9736 14.8408 18.8682 14.9639 18.8682 15.1396V16.5107C18.8682 16.6865 18.9736 16.8096 19.1582 16.8096ZM19.1582 20.167H20.5732C20.749 20.167 20.8721 20.0439 20.8721 19.8682V18.4971C20.8721 18.3213 20.749 18.1982 20.5732 18.1982H19.1582C18.9736 18.1982 18.8682 18.3213 18.8682 18.4971V19.8682C18.8682 20.0439 18.9736 20.167 19.1582 20.167ZM8.33008 19.3496C8.33008 19.165 8.42676 19.0684 8.61133 19.0684H11.8633C12.0566 19.0684 12.1445 19.165 12.1445 19.3496V21.6172H8.33008V19.3496Z"})})})},86488:(e,t,i)=>{i.d(t,{p:()=>s});i(67294);var o=i(45238),n=i(85893);const s=(0,o.I)("squarePlus",{viewBox:"0 0 30 30",svg:(0,n.jsx)("path",{d:"M7.059 27.052H22.94c2.75 0 4.11-1.361 4.11-4.059V7.007c0-2.697-1.36-4.059-4.11-4.059H7.059c-2.736 0-4.111 1.349-4.111 4.059v15.986c0 2.71 1.375 4.06 4.11 4.06zm.026-2.108c-1.31 0-2.03-.694-2.03-2.055V7.112c0-1.362.72-2.056 2.03-2.056h15.83c1.296 0 2.029.694 2.029 2.056v15.777c0 1.361-.733 2.055-2.03 2.055H7.085zm7.895-3.758c.707 0 1.113-.484 1.113-1.243V16.08h4.111c.733 0 1.231-.392 1.231-1.086 0-.707-.471-1.113-1.23-1.113h-4.112V9.769c0-.759-.406-1.243-1.113-1.243-.694 0-1.073.51-1.073 1.243v4.112H9.822c-.773 0-1.257.405-1.257 1.112 0 .694.523 1.087 1.257 1.087h4.085v3.863c0 .733.38 1.243 1.073 1.243z"})})}}]);