"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[6942],{28040:(e,t,s)=>{s.d(t,{i:()=>c});var r=s(26263),i=s(21202),o=s(80444),n=s(77080),a=s(26350),l=s(35057),d=s(54642);async function c(e){const{environment:t,sudoModeStore:s,pageBlockId:c}=e,g=s.state.privatePageStore&&s.state.privatePageStore.id===c;if(t.device.isMobile||g||s.state.loading||s.state.error)return;if(!n.default.checkGate("enable_get_private_page_info_endpoint"))return;const{currentSpaceStore:u}=o.default.state,h=null==u?void 0:u.canAdmin();if(!(c&&h&&u&&(0,l.wP)()))return;s.setState({...s.state,loading:!0});const m=u.id,p=await d.getPrivatePageInfo(t,{id:c});if("failed"===p.type)return void s.setState({...s.state,loading:!1,error:p.error});const f=p.data,v=new r.Z({name:"sudoModeActions.privatePageRecordCache"});for(const r of f)switch(r.table){case"block":case"collection":v.setRecord({pointer:{spaceId:m,table:r.table,id:r.value.id},userId:t.currentUser.id},{role:"editor",value:r.value});break;case"team":v.setRecord({pointer:{spaceId:m,table:r.table,id:r.value.id},userId:t.currentUser.id},{role:"editor",value:r.value})}const x=new a.G(t,{table:i.iU,id:c},{inMemoryRecordCache:v});x.inMemoryRecordCache.addCacheFallback(t.defaultRecordCache.inMemoryRecordCache),s.setState({...s.state,privatePageStore:x,loading:!1,error:void 0})}},6020:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Ze});var r=s(67294),i=s(83355),o=s(13991),n=s(15145),a=s(8848),l=s(42875),d=s(69654),c=s(89971),g=s(60651),u=s(70954),h=s(62397),m=s(89101),p=s(23867),f=s(82990),v=s(31412),x=s(50906),y=s(90287),S=s(32603),M=s(97977),j=s(31304),P=s(75018),b=s(29974),k=s(28040),C=s(39634),w=s(28020),A=s(43250),B=s(33929),I=s(28125),F=s(18514),Z=s(77907),R=s(55081),E=s(10929),T=s(75538),L=s(28578),q=s(74948),W=s(80444),N=s(88632),_=s(80641),U=s(55899),O=s(33759),D=s(89403),H=s(96071),G=s(85974),V=s(5315),z=s(49085);class J extends z.default{getInitialState(){return{isCreatingSpace:!1}}}const Y=J;var K,Q=s(72014),$=s(88923),X=s(8675),ee=s(42922),te=s(61519),se=s(36488),re=s(16354),ie=s(84076),oe=s(63296),ne=s(89728),ae=s(31278),le=s(64369),de=s(36360),ce=s(67219),ge=s(42402),ue=s(63780),he=s(46457),me=s(12337),pe=s(54642),fe=s(33954),ve=s(87279),xe=s(61766),ye=s(1743),Se=s(74194),Me=s(78140),je=s(50506),Pe=s(53437),be=s(77137),ke=s(85893);const Ce=(0,v.defineMessages)({requestAccessMessagePlaceholder:{defaultMessage:"Message (optional)",id:"requestAccessForm.messageInput.placeholder"}});function we(){return(0,ke.jsx)(v.FormattedMessage,{defaultMessage:"Cancel",id:"requestAccessForm.cancelButton.label"})}class Ae extends i.Z{constructor(){super(...arguments),this.storeTypes={requestAttempt:z.default.createClass(0),message:z.default.createClass(void 0),buttonPopupStore:xe.Z},this.renderPopup=()=>this.isPhone?(0,ke.jsx)(Me.Z,{menuType:ve.og.Modal,whiteBackground:!0,title:(0,ke.jsx)(v.FormattedMessage,{id:"requestAccessForm.title.label",defaultMessage:"Request access"}),left:we(),onClickLeft:this.handleCloseClicked,right:(0,ke.jsx)(v.FormattedMessage,{id:"requestAccessForm.mobileSend.label",defaultMessage:"Send"}),onClickRight:this.handleSendRequestClicked,children:(0,ke.jsx)(ye.Z,{capture:!0,children:(0,ke.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"stretch",alignItems:"stretch",width:"100%",height:"100%"},children:(0,ke.jsx)(be.Z,{request:this.stores.requestAttempt.state,performRequest:this.submitRequest,render:this.renderRequest})})})}):(0,ke.jsx)(ye.Z,{capture:!0,children:(0,ke.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-evently",alignItems:"stretch",padding:"20px 28px 24px",width:"340px"},children:[(0,ke.jsx)(be.Z,{request:this.stores.requestAttempt.state,performRequest:this.submitRequest,render:this.renderRequest}),(0,ke.jsx)(oe.Z,{onClick:this.handleCloseClicked,children:we()})]})}),this.renderRequest=(e,t,s)=>{const r=Boolean(0===this.stores.requestAttempt.state||s&&t&&t.error);return(0,ke.jsxs)(ke.Fragment,{children:[!this.isPhone&&(0,ke.jsx)("div",{style:{fontSize:16,fontWeight:f.Z.fontWeight.semibold,marginBottom:16},children:(0,ke.jsx)(v.FormattedMessage,{defaultMessage:"Request access",id:"requestAccessForm.sendRequestButton.title"})}),(0,ke.jsx)(Se.Z,{format:this.isPhone?Se.Z.Format.Transparent:void 0,textarea:!0,value:this.stores.message.state||"",onChange:this.handleMessageChanged,disabled:!r,placeholder:this.props.intl.formatMessage(Ce.requestAccessMessagePlaceholder),style:{...this.isPhone?{...Ae.mobileTextAreaStyle,padding:"16px"}:{...Ae.marginBottomStyle,marginBottom:16,padding:"8px 12px",alignItems:"flex-start"}}}),!this.isPhone&&(0,ke.jsx)(ee.Z,{isLarge:!0,disabled:!r,onClick:this.handleSendRequestClicked,style:Ae.marginBottomStyle,children:(0,ke.jsx)(v.FormattedMessage,{defaultMessage:"Send request",id:"requestAccessForm.sendRequestButton.label"})}),(0,ke.jsx)(Ie,{result:t})]})},this.submitRequest=async e=>{if(0===e)return;const t=this.stores.message.state,s="current-actor-to-block"===this.props.type?await pe.requestAccess(this.environment,{type:"current-actor-to-block",block:this.props.block,message:t}):await pe.requestAccess(this.environment,{type:"current-actor-to-space-via-team",teamId:this.props.teamId,message:t});return"success"!==s.type?{error:(0,fe.wf)(this.props.intl,s)}:(x.dUJ(this.environment),this.stores.buttonPopupStore.reset(),{value:!0})},this.handleSendRequestClicked=()=>{this.stores.requestAttempt.update((e=>e+1))},this.handleMessageChanged=e=>{this.stores.message.setState(e.target.value)},this.handleOpenClicked=()=>this.stores.buttonPopupStore.setState({open:!0}),this.handleCloseClicked=()=>this.stores.buttonPopupStore.setState({open:!1})}renderComponent(){const e=this.stores.requestAttempt.state>0;return(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsx)(ee.Z,{isLarge:!0,disabled:e,onClick:this.handleOpenClicked,children:e?(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.requestAccessButton.requested",defaultMessage:"Requested access"}):(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.requestAccessButton.label",defaultMessage:"Request access"})}),this.isPhone?(0,ke.jsx)(Pe.ZP,{popupType:Pe.ZP.PopupType.SlideUp,open:this.stores.buttonPopupStore.state.open,render:this.renderPopup}):(0,ke.jsx)(je.Z,{open:this.stores.buttonPopupStore.state.open,onDismiss:this.handleCloseClicked,render:this.renderPopup})]})}get isPhone(){return this.environment.device.isPhone}}K=Ae,Ae.displayName="RequestAccessForm",Ae.marginBottomStyle={marginBottom:10},Ae.mobileTextAreaStyle={...K.marginBottomStyle,width:"100%",height:"100%",padding:10,alignItems:"top",borderRadius:0};const Be=(0,v.injectIntl)(Ae);function Ie(e){let{result:t}=e;return t&&t.error?(0,ke.jsx)("div",{style:{color:a.ZP.redWithAlpha(1),textAlign:"center",width:"100%"},children:t.error}):null}class Fe extends i.Z{constructor(){super(...arguments),this.didPerformAction=!1,this.storeTypes={store:Y,sudoModeStore:X.Z,inviteTargetsStore:U.ZP,loginModalStore:H.Z,loginStore:G.Z},this.handleHelpButtonClick=()=>{C.j({environment:this.environment,from:"page_error"})},this.handleGoBackClick=()=>{if(F.NW(this.environment))return void P.back(this.environment);const{currentUserRootStore:e,currentUserSettingsStore:t,currentSpaceViewStore:s}=W.default.state;e&&t?s?b.y3({environment:this.environment,spaceViewStore:s,userRootStore:e,userSettingsStore:t,pageVisitSource:n.tY.PageError}):b.L5({environment:this.environment,userRootStore:e,userSettingsStore:t,pageVisitSource:n.tY.PageError}):P.navigate({environment:this.environment,url:m._j.root,redirect:!0})},this.handleCreateAccountClick=async()=>{const{currentUserRootStore:e,currentUserStore:t}=W.default.state;e&&t&&(this.stores.store.setState({...this.stores.store.state,isCreatingSpace:!0}),await R.xN(this.environment),this.stores.store.setState({...this.stores.store.state,isCreatingSpace:!1}))},this.handleReturnToOnboarding=()=>{const e=T.default.state;e.isOnboarding?E.n0(e)?R.I1(this.environment,{type:"new-user",disableRedirectUrl:!0}):E.y7(e)?R.I1(this.environment,{type:"create-or-join",disableRedirectUrl:!0}):(T.default.reset(),P.navigate({environment:this.environment,url:m._j.root})):(T.default.reset(),P.navigate({environment:this.environment,url:m._j.root}))},this.handleContentClassificationProceed=()=>{const{mainEditorCurrentBlockStore:e}=W.default.state;e&&(_.Z.bypassPage(e.id),x.ux6(this.environment))}}willMount(){$.default.state.open&&j.E($.default.state.presenceStore,this.environment,Q.jx,$.default.state.target),j.E(W.default.state.presenceStore,this.environment,Q.$g,W.default.state.mainEditorCurrentBlockStore),q.cancelSidebarInitialRenderLog()}didMount(){if(super.didMount(),S.setInitialRenderCompleted(),this.environment.device.isElectron||this.environment.mobileNative){var e;const t=null===(e=this.props.publicPageData)||void 0===e?void 0:e.requireInterstitial;if(t){const e=t+window.location.hash;P.navigateToExternalURL({environment:this.environment,url:e}),P.back(this.environment)}}}willMountOrUpdate(){var e;k.i({environment:this.environment,sudoModeStore:this.stores.sudoModeStore,pageBlockId:null===(e=W.default.state.mainEditorCurrentBlockStore)||void 0===e?void 0:e.id})}renderComponent(){const{publicPageData:e}=this.props;if(!this.didPerformAction){if(N.Z.state.online){if("teamsInvite"===this.props.route.name&&this.isLoggedIn())return this.renderWorkspaceNoAccess({data:e,source:"teamsInvite",canJoinSpace:!0});if(e&&"onboarding"===this.props.route.name)return this.renderWorkspaceNoAccess({data:e,source:"onboarding",canJoinSpace:!1});if(null!=e&&e.spaceName){var t;const{currentUserRootStore:s,mainEditorCurrentBlockStore:r}=W.default.state,i=null==r||null===(t=r.getModel())||void 0===t?void 0:t.isNonverifiedContentClassification();if(i&&e.requireInterstitial)return this.render404();if(e.requireInterstitial)return this.renderIncorrectDomainInterstitialBlock({href:e.requireInterstitial+window.location.hash,urlToDisplay:e.requireInterstitial});if(i)return this.renderContentClassificationBlock();if(this.isLoggedIn()){if(!s||!s.isReady())return;const t=s.getSpaceViewStores();if(!t.every((e=>e.isReady())))return;return t.find((t=>t.getSpaceId()===e.spaceId))&&"page"===this.props.route.name?this.renderWorkspacePrivatePageNoAccess(e):e.canJoinSpace?"space"===this.props.route.name?(this.performJoinWorkspaceRedirect(e),null):this.renderWorkspaceNoAccess({data:e,source:"workspace",canJoinSpace:!0}):this.renderWorkspaceNoAccess({data:e,source:"workspace",canJoinSpace:!1})}return e.requireLogin,this.renderLoggedOutWorkspace(e)}return this.render404()}return this.renderOffline()}}renderOffline(){return this.logPageError("offline"),x.DCH(this.environment,{type:"page_error"}),(0,ke.jsx)("div",{style:this.getStyle(),children:(0,ke.jsxs)("div",{style:this.getGreetingStyle(),children:[(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.offlineError.message",defaultMessage:"Oops, you seem to be offline. Please go online to view this page."}),this.renderLoggedInFooter()]})})}renderContentClassificationBlock(){const e=this.isLoggedIn();return this.logPageError("content_classification_block"),(0,ke.jsxs)("div",{style:this.getStyle(),children:[(0,ke.jsx)(me.Z,{type:me.Z.Type.Unsafe}),(0,ke.jsx)("div",{style:this.getGreetingStyle(),children:(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.unsafePageError.title",defaultMessage:"This page has been flagged as unsafe"})}),(0,ke.jsx)(le.Z,{isSmall:!1,isSecondaryColor:!0,isMultiline:!0,style:{textAlign:"center",marginBottom:18,maxWidth:440},children:(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.unsafePageError.message",defaultMessage:"This page may contain spam, phishing, illegal, or inappropriate content. If you received this link from an unknown source, we suggest you to close this tab. <proceedanywaylink>Proceed anyway</proceedanywaylink>",values:{proceedanywaylink:e=>(0,ke.jsx)(ge.Z,{onClick:this.handleContentClassificationProceed,children:e})}})}),e&&this.renderNavigateButton("blue"),!e&&this.renderLoggedOutFooter()]})}renderIncorrectDomainInterstitialBlock(e){let{href:t,urlToDisplay:s}=e;return this.logPageError("incorrect_domain_interstitial_block"),(0,ke.jsxs)("div",{style:{position:"relative",height:"100%",width:"100%"},children:[(0,ke.jsxs)("div",{style:{...this.getStyle(),height:"100%"},children:[(0,ke.jsx)("div",{style:{...this.getGreetingStyle(),maxWidth:"240px"},children:(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.publicDomainInterstitial.title",defaultMessage:"Continue to external site by following the link below"})}),(0,ke.jsx)(le.Z,{isSmall:!1,isSecondaryColor:!0,isMultiline:!0,style:{textAlign:"center",marginBottom:18,maxWidth:440},children:(0,ke.jsx)(re.Z,{href:t,external:!1,style:{textDecoration:"underline",color:a.ZP.blue,overflowWrap:"anywhere"},children:s})})]}),(0,ke.jsx)("div",{style:{position:"fixed",width:"100%",bottom:0},children:this.renderMinimalInterstitialFooter()})]})}renderWorkspaceNoAccess(e){const{data:t,source:s,canJoinSpace:r}=e;if("onboarding"===s)this.logPageError("onboarding_error");else if("teamsInvite"===s)this.logPageError("team_invite_no_access");else if(t)return this.logPageError("team_no_access"),this.renderRequestAccessLoggedInPrivatePage(t);return(0,ke.jsxs)("div",{style:this.getStyle(),children:[this.environment.device.isElectron&&(0,ke.jsx)(de.Z,{title:B.default.getIntl().formatMessage({defaultMessage:"No access",id:"errorPage.workspaceNoAccess.title"})}),(0,ke.jsx)("div",{children:Re()}),(0,ke.jsx)("div",{style:this.getGreetingStyle(),children:r?(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.notInWorkspace.message",defaultMessage:"You are not in this workspace."}):(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.accessNotAllowed.message",defaultMessage:"You do not have access to this page."})}),"teamsInvite"===s?this.renderRequestSpaceAccessActions():this.renderNavigateButton("blue",r?t:void 0),this.renderLoggedInFooter()]})}renderWorkspacePrivatePageNoAccess(e){return this.logPageError("team_page_no_access"),this.renderRequestAccessLoggedInPrivatePage(e)}getPrivatePageTitle(){const e=this.stores.sudoModeStore.state.privatePageStore;if(!this.stores.sudoModeStore.shouldUserHaveAccessToPrivatePageBlock()||!e)return;const t=e.getModel();if(!t)return;const s=t.getRenderTitle({getRecordModel:e.getRecordModel,userTimeZone:(0,l.r)(),intl:B.default.getIntl()}),r=t.getRenderIcon({getRecordModel:e.getRecordModel});return(0,ke.jsxs)(ke.Fragment,{children:[r&&(0,ke.jsx)(ae.Z,{isEmptyPage:!0,disabled:!0,icon:r,size:24,style:{display:"inline-block",marginRight:4}}),s&&(0,ke.jsx)("span",{children:s})]})}renderChangingPermissionsHeading(){var e;const t=this.getPrivatePageTitle(),s=null===(e=W.default.state.currentSpaceStore)||void 0===e?void 0:e.getName();return(0,ke.jsxs)("div",{style:{background:this.theme.cardBackground,borderRadius:4,padding:18,margin:"24px auto 0",width:400},children:[(0,ke.jsx)("div",{style:{...this.getGreetingStyle(),fontWeight:f.Z.fontWeight.semibold,marginBottom:6},children:t?(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.changePermissions.titleWithPageName",defaultMessage:"Change permissions for {pageTitle}",values:{pageTitle:t}}):(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.changePermissions.title",defaultMessage:"Change permissions for this page"})}),(0,ke.jsx)(le.Z,{isMultiline:!0,style:{textAlign:"center"},children:s?(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.workspaceOwner.changePermissions.descriptionWithSpaceName",defaultMessage:"As a workspace owner for <b>{spaceName}</b>, you can change the permissions of this page.",values:{b:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,ke.jsx)("b",{children:t})},spaceName:s}}):(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.workspaceOwner.changePermissions.description",defaultMessage:"As an owner of this workspace, you can change the permissions of this page.",values:{b:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,ke.jsx)("b",{children:t})}}})})]})}renderRequestAccessLoggedInPrivatePageHeading(e){const t=this.getPrivatePageTitle(),s=e.canRequestAccess;return(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsx)("div",{children:Re()}),(0,ke.jsx)("div",{style:{...this.getGreetingStyle(),fontWeight:f.Z.fontWeight.semibold,marginBottom:6},children:s?t?(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.canRequestAccess.titleWithPageName",defaultMessage:"No access to {pageTitle}",values:{pageTitle:t}}):(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.canRequestAccess.title",defaultMessage:"No access to this page"}):(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.noAccess.title",defaultMessage:"Page not found"})}),(0,ke.jsx)("div",{style:{...this.getGreetingStyle(),color:this.theme.mediumTextColor,fontWeight:f.Z.fontWeight.regular,lineHeight:1.4},children:s?(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.canRequestAccess.message",defaultMessage:"You can access this page if someone approves your request."}):(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.cannotRequestAccess.message",defaultMessage:"Either this page doesn't exist or you don't have permission to access it."})})]})}renderRequestAccessLoggedInPrivatePage(e){const t=this.stores.sudoModeStore.shouldUserHaveAccessToPrivatePageBlock&&this.stores.sudoModeStore.shouldUserHaveAccessToPrivatePageBlock()&&this.stores.sudoModeStore.state.changePermissionsEnabled;return(0,ke.jsxs)("div",{style:this.getStyle(),children:[t?this.renderChangingPermissionsHeading():(0,ke.jsxs)(ke.Fragment,{children:[this.renderRequestAccessLoggedInPrivatePageHeading(e),this.renderRequestPageAccessActions()]}),this.stores.sudoModeStore.shouldUserHaveAccessToPrivatePageBlock()?this.renderPageBlockPermissionsMenu():null,this.renderLoggedInFooter()]})}renderLoggedOutWorkspace(e){var t,s;const{device:i,WindowSizeStore:o}=this.environment,n=i.isMobile||i.isMobileBrowser||o.state.width<852,l=null===(t=D.Z.getState())||void 0===t?void 0:t.inviteeEmail,g=null===(s=D.Z.getState())||void 0===s?void 0:s.inviterName,u=O.Z.isTemporaryPasscode()&&l===O.Z.state.email,h=(0,a.gh)({theme:"light"});return this.logPageError("team_login"),(0,ke.jsx)(se.Z,{capture:!0,render:t=>(0,ke.jsx)(ce.Z,{analyticsName:"team_login",hideNavItems:!0,hideNotificationBanner:!0,hideFooter:!0,children:(0,ke.jsxs)("div",{style:this.getFrontBaseStyle(),...t,children:[this.renderTitle({isElectron:this.environment.device.isElectron,publicPageData:e,showInvitationVersion:u,inviterName:g,greetingStyle:{color:h.regularTextColor},iconBoxInitialStyle:{background:h.regularDividerColor,color:h.mediumTextColor}}),u?(0,ke.jsx)("div",{style:{fontSize:"18px",fontWeight:400,width:"100%",maxWidth:358,textAlign:"center",color:"#535353",lineHeight:"145.34%",opacity:.78,marginBottom:24},children:(0,ke.jsx)(Te,{inviteeEmail:l})}):null,(0,ke.jsx)(ue.Z,{emailLabelType:"email",style:Fe.loginStyle,emailPasscodePlaceholderType:u?"paste_code":"enter_code",emailInputAutoFocus:!0,from:"pageError",loginStore:O.Z,showInvitationVersion:u,isSignup:u,showMobileLayout:n,themeOverride:h}),i.isMobile&&!i.isMobileNative&&!u&&(0,ke.jsxs)(r.Fragment,{children:[(0,ke.jsx)("div",{style:{height:1,width:"100vw",background:this.theme.regularDividerColor,marginTop:36,marginBottom:36}}),(0,ke.jsxs)(ee.Z,{style:{width:280},isLarge:!0,onClick:()=>{P.openInNativeApp({url:window.location.href,environment:this.environment})},children:[i.isIOS?(0,d.o)(Fe.storeIconStyle):(0,c.G)(Fe.storeIconStyle),(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.openInMobileAppButton.label",defaultMessage:"Open in mobile app"})]}),(0,ke.jsx)(ie.Z,{href:i.isIOS?m._j.appStore:m._j.playStore,external:!0,innerStyle:{marginTop:16},children:(0,ke.jsx)(le.Z,{isSmall:!0,style:{textDecoration:"underline",fontSize:14,color:h.mediumTextColor},children:(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.downloadMobileAppButton.label",defaultMessage:"Get mobile app"})})})]}),this.renderLoggedOutFooter({iconStyle:{fill:h.mediumTextColor},style:{color:h.mediumTextColor},pressedStyle:{background:h.buttonPressedBackground}})]})})})}render404(){const{device:e}=this.environment,t=this.isLoggedIn();return this.logPageError("404"),(0,ke.jsxs)("div",{children:[this.renderTopbar(),(0,ke.jsxs)("div",{style:{...this.getFrontBaseStyle(),marginTop:e.isMobile?0:"12vh",justifyContent:"start"},children:[(0,ke.jsx)(me.Z,{type:me.Z.Type.NotFound}),(0,ke.jsx)("div",{style:this.getGreetingStyle(),children:(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.contentDoesNotExist.title",defaultMessage:"This content does not exist"})}),!t&&this.renderLoggedOutFooter(),t&&this.renderNavigateButton("blue"),(0,ke.jsx)(Ee,{}),(0,ke.jsx)(le.Z,{isSmall:!0,style:{textAlign:"center"},children:(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.contentDoesNotExist.message",defaultMessage:"Having trouble? <helplink>Message support</helplink>",values:{helplink:e=>(0,ke.jsx)(ge.Z,{onClick:this.handleHelpButtonClick,children:e})}})})]})]})}renderWorkspaceOwnerPermissionsMenu(){return this.stores.sudoModeStore.shouldUserHaveAccessToPrivatePageBlock()&&this.stores.sudoModeStore.state.privatePageStore&&!this.stores.sudoModeStore.state.changePermissionsEnabled?(0,ke.jsxs)("div",{style:{background:this.theme.cardBackground,borderRadius:4,padding:18,margin:24,width:400},children:[(0,ke.jsx)(le.Z,{isMultiline:!0,style:{textAlign:"center"},children:(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.workspaceOwner.canChangePermissionsMessage",defaultMessage:"As a <b>workspace owner</b>, you can change the permissions of this page to add yourself or others. Any changes will appear in the audit log.",values:{b:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,ke.jsx)("b",{children:t})}}})}),(0,ke.jsxs)(oe.Z,{style:{fontWeight:f.Z.fontWeight.medium,justifyContent:"center",margin:"18px auto 12px"},onClick:()=>this.stores.sudoModeStore.setState({...this.stores.sudoModeStore.state,changePermissionsEnabled:!0}),children:[(0,h.I)({width:16,height:16,marginRight:6}),(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.workspaceOwner.canChangePermissionsMessageButton",defaultMessage:"Change permissions"})]})]}):null}renderPageBlockPermissionsMenu(){return this.stores.sudoModeStore.shouldUserHaveAccessToPrivatePageBlock()&&this.stores.sudoModeStore.state.privatePageStore&&this.stores.sudoModeStore.state.changePermissionsEnabled?(0,ke.jsx)("div",{style:{textAlign:"left",borderRadius:4,background:this.theme.modalBackground,position:"relative",boxShadow:this.theme.mediumBoxShadow,width:470,margin:"24px auto"},children:(0,ke.jsx)(Z.LazyShareMenuContainer,{store:this.stores.sudoModeStore.state.privatePageStore,sudoModeStore:this.stores.sudoModeStore,inviteTargetsStore:this.stores.inviteTargetsStore,location:"no_access_page",onClose:()=>L.ZP.reset()})}):null}renderRequestPageAccessActions(){const{publicPageData:e}=this.props;if(!e)return this.renderNavigateButton("blue");if(!e.canRequestAccess)return this.renderNavigateButton("blue");const{mainEditorCurrentBlockStore:t}=W.default.state;return t?(0,ke.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,ke.jsx)("div",{style:{marginTop:8},children:(0,ke.jsx)(Be,{type:"current-actor-to-block",block:{id:t.id,spaceId:(0,p.C)(t.pointer.spaceId)}})}),(0,ke.jsx)("div",{style:{width:10,height:10}}),this.renderNavigateButton("white")]}):this.renderNavigateButton("blue")}renderRequestSpaceAccessActions(){if("teamsInvite"!==this.props.route.name)return this.renderNavigateButton("blue");const{teamId:e}=this.props.route;return e?(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsx)("div",{style:{...this.getGreetingStyle(),color:this.theme.mediumTextColor,fontWeight:f.Z.fontWeight.regular,lineHeight:1.4},children:(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.canRequestWorkspaceAccess.message",defaultMessage:"You can access this workspace if someone approves your request."})}),(0,ke.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,ke.jsx)("div",{style:{marginTop:8},children:(0,ke.jsx)(Be,{type:"current-actor-to-space-via-team",teamId:e})}),(0,ke.jsx)("div",{style:{width:10,height:10}}),this.renderNavigateButton("white")]})]}):this.renderNavigateButton("blue")}renderNavigateButton(e,t){const{currentUserRootStore:s}=W.default.state,{isCreatingSpace:r}=this.stores.store.state,i=this.theme,o=t=>"blue"===e?(0,ke.jsx)(ee.Z,{...t}):(0,ke.jsx)(oe.Z,{backgroundColor:i.whiteButtonBackground,...t,style:{fontWeight:f.Z.fontWeight.medium,height:"auto",...t.style}});return t?(0,ke.jsx)(o,{isLarge:!0,style:{marginTop:8},onClick:()=>this.performJoinWorkspaceRedirect(t),children:(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.joinSpaceButton.label",defaultMessage:"Join the space"})}):"onboarding"===this.props.route.name?(0,ke.jsx)(o,{isLarge:!0,onClick:this.handleReturnToOnboarding,children:(0,ke.jsx)(v.FormattedMessage,{defaultMessage:"Back to onboarding",id:"fullPageError.returnToOnboardingButton.label"})}):s&&0===s.getSpaceViewPointers().length||r?(0,ke.jsx)(o,{isLarge:!0,onClick:this.handleCreateAccountClick,disabled:r,children:(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.createOrJoinWorkspaceButton.label",defaultMessage:"Create or join a workspace"})}):(0,ke.jsx)(o,{isLarge:!0,style:{marginTop:8},onClick:this.handleGoBackClick,children:(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.backToMyContentButton.label",defaultMessage:"Back to my content"})})}renderLoggedInFooter(){const e=(0,w.B7)(this.environment);let t;if(V.transactionQueue.hasTasks())t=(0,ke.jsx)(le.Z,{isSmall:!0,isMultiline:!0,style:{marginTop:4},children:(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.sendMessageForHelp.message",defaultMessage:"<sendmessagelink>Message support</sendmessagelink> for help.",values:{sendmessagelink:e=>(0,ke.jsx)(ge.Z,{onClick:this.handleHelpButtonClick,children:e})}})});else{const{mainEditorCurrentBlockStore:e}=W.default.state;e&&y._S({environment:this.environment,store:e}),t=(0,ke.jsx)(le.Z,{isSmall:!0,isMultiline:!0,style:{marginTop:4},children:(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.wrongAccountRequestAccess.message",defaultMessage:"You might need to <loginlink>log in</loginlink> with a different email.",values:{loginlink:e=>I.k(this.environment)?(0,ke.jsxs)(ge.Z,{onClick:()=>{this.stores.loginModalStore.setState({open:!0})},children:[e,(0,ke.jsx)(he._,{loginModalStore:this.stores.loginModalStore,loginStore:this.stores.loginStore,title:(0,ke.jsx)(v.FormattedMessage,{id:"sidebarSwitcherMultiAccount.addAccount.title",defaultMessage:"Add an account"}),description:(0,ke.jsx)(v.FormattedMessage,{id:"sidebarSwitcherMultiAccount.addAccount.description",defaultMessage:"Use an existing account, or sign up with a new email. Your current account will remain logged in."}),className:A.zYS})]}):(0,ke.jsx)(ge.Z,{href:m._j.logout,onClick:()=>M.logout(this.environment),children:e})}})})}return(0,ke.jsxs)("div",{style:{textAlign:"center"},children:[this.stores.sudoModeStore.shouldUserHaveAccessToPrivatePageBlock()?this.renderWorkspaceOwnerPermissionsMenu():(0,ke.jsx)(Ee,{}),(0,ke.jsx)(le.Z,{isSmall:!0,isMultiline:!0,style:{marginTop:4},children:(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.wrongLoggedInUserError.message",defaultMessage:"You're currently logged in as {currentlyLoggedInUser}",values:{currentlyLoggedInUser:(0,ke.jsx)("span",{style:{color:this.theme.regularTextColor},children:null==e?void 0:e.getEmail()})}})}),t]})}renderTitle(e){let{isElectron:t,publicPageData:s,showInvitationVersion:r,inviterName:i,greetingStyle:n,iconBoxInitialStyle:a}=e;return(0,ke.jsxs)(ke.Fragment,{children:[t&&(0,ke.jsx)(de.Z,{title:B.default.getIntl().formatMessage({defaultMessage:"Log in",id:"errorPage.loggedOutWorkspace.title"})}),r?(0,ke.jsx)("div",{style:{fontSize:28,fontWeight:700,maxWidth:358,letterSpacing:.364,lineHeight:1.2,textAlign:"center",fontFamily:f.Z.getCompositeFontFamily(o.SP).sans},children:i?(0,ke.jsx)("div",{children:(0,ke.jsx)(v.FormattedMessage,{id:"signupPage.title.showInvitationVersion",defaultMessage:"Verify your email to accept {inviter_name}'s invite",values:{inviter_name:i}})}):(0,ke.jsx)("div",{children:(0,ke.jsx)(v.FormattedMessage,{id:"signupPage.title.showInvitationVersion.noInviterName",defaultMessage:"Verify your email to accept the invite"})})}):(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsx)(me.Z,{type:me.Z.Type.NoAccess,publicPageData:s,iconBoxInitialStyle:a}),(0,ke.jsx)("div",{style:this.getGreetingStyle(n),children:(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.loggedOut.message",defaultMessage:"Welcome to {workspaceName} on Notion.",values:{workspaceName:(0,ke.jsx)("span",{style:Fe.headerBoldStyle,children:s.spaceName})}})})]})]})}renderMinimalInterstitialFooter(){return(0,ke.jsx)("div",{style:Fe.loggedOutFooterWrapStyle,children:(0,ke.jsx)(le.Z,{isSmall:!0,isSecondaryColor:!0,isMultiline:!1,style:{textAlign:"center",marginBottom:18,maxWidth:440},children:(0,ke.jsxs)("div",{style:{display:"flex"},children:[(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.somethingWrong.label",defaultMessage:"Something wrong?"}),(0,ke.jsx)(re.Z,{onClick:this.handleHelpButtonClick,style:{textDecoration:"underline",paddingLeft:"4px"},children:(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.reportAProblem.label",defaultMessage:"Report a problem"})})]})})})}renderLoggedOutFooter(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,ke.jsxs)("div",{style:Fe.loggedOutFooterWrapStyle,children:[(0,ke.jsx)(re.Z,{href:m.AR.product,external:!0,children:(0,ke.jsxs)(ne.Z,{isGray:!0,...e,children:[(0,g.h)({width:16,height:16,marginRight:8}),(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.whatIsNotionButton.label",defaultMessage:"What is Notion?"})]})}),(0,ke.jsx)(ne.Z,{onClick:this.handleHelpButtonClick,...e,style:{marginLeft:4,...e.style},isGray:!0,children:(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.sendMessageButton.label",defaultMessage:"Message support"})}),(0,ke.jsx)(re.Z,{href:m._j.termsAndPrivacy,external:!0,style:{marginLeft:4},children:(0,ke.jsx)(ne.Z,{isGray:!0,...e,children:(0,ke.jsx)(v.FormattedMessage,{id:"fullPageError.termsAndPrivacyButton.label",defaultMessage:"Terms"})})})]})}renderTopbar(){const{isMobile:e}=this.environment.device;return(0,ke.jsxs)("div",{style:{display:"flex",alignItems:"center",maxWidth:1300,height:80,paddingLeft:20,paddingRight:20},children:[(0,u.C)({width:e?28:30,height:e?28:30,marginRight:10,flexShrink:0}),(0,ke.jsx)("div",{style:{fontWeight:f.Z.fontWeight.medium,fontSize:16},children:"Notion"})]})}isLoggedIn(){return!!this.environment.currentUser.id}performJoinWorkspaceRedirect(e){this.didPerformAction=!0;const{currentUserRootStore:t,currentUserSettingsStore:s}=W.default.state;if(t&&s&&e.spaceId){const r=e.spaceId;b.j({environment:this.environment,userRootStore:t,spaceId:r,navigate:!0,analyticsFrom:"page_error",userSettingsStore:s})}}logPageError(e){x.AMz(this.environment,{type:e})}getStyle(){const{device:e}=this.environment;return{width:"100vw",paddingLeft:e.isMobile?16:30,paddingRight:e.isMobile?16:30,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}getFrontBaseStyle(e){const{device:t}=this.environment;return{width:"100vw",paddingLeft:t.isMobile?16:30,paddingRight:t.isMobile?16:30,display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",paddingTop:t.isTablet?"20vh":e?0:"12vh"}}getGreetingStyle(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{device:t}=this.environment;return{fontSize:t.isMobile?18:20,marginBottom:10,textAlign:"center",color:this.theme.regularTextColor,fontWeight:500,maxWidth:350,...e}}}Fe.displayName="PageError",Fe.headerBoldStyle={fontWeight:f.Z.fontWeight.bold},Fe.loginStyle={maxWidth:280},Fe.storeIconStyle={width:14,height:14,marginRight:6,flexShrink:0},Fe.loggedOutFooterWrapStyle={display:"flex",justifyContent:"center",marginBottom:16,marginTop:16,flexWrap:"wrap"};const Ze=Fe;function Re(){return(0,u.C)({width:50,height:50,marginBottom:16})}function Ee(){return(0,ke.jsx)(te.Z,{size:48,innerStyle:{maxWidth:280}})}function Te(e){let{inviteeEmail:t}=e;return t?(0,ke.jsx)(v.FormattedMessage,{id:"signupPage.subtitle.invitationVersion",defaultMessage:"Please check {invitee_email} for your temporary login code.",values:{invitee_email:(0,ke.jsx)("b",{children:t})}}):null}},46457:(e,t,s)=>{s.d(t,{_:()=>m});var r=s(67294),i=s(480),o=s(86628),n=s(24405),a=s(31412),l=s(87279),d=s(77907),c=s(78140),g=s(40721),u=s(7184),h=s(85893);function m(e){let{loginModalStore:t,loginStore:s,title:n,description:a,isSignup:m,disableLoginLink:v,redirectURL:x,className:y,onDismiss:S}=e;window.__c={n:"LoginModal"};const M=(0,i.O7)(),j=(0,o.VK)((()=>t.state.open),[t]),P=(0,r.useId)(),b=(0,r.useId)(),k={loginStore:s,title:n,description:a,isSignup:m,redirectURL:x,disableLoginLink:v,titleAriaId:P,descriptionAriaId:b};if(M.device.isMobile){const e=()=>f({loginModalStore:t,loginStore:s,onDismiss:S});return(0,h.jsx)(c.Z,{menuType:l.og.Modal,left:(0,h.jsx)(g.CancelMenuText,{}),onClickLeft:e,onCancel:e,whiteBackground:!0,title:n,children:(0,h.jsx)(d.LazyLoginModalContent,{...k})})}return(0,h.jsx)(u.c,{ariaLabelledBy:P,ariaDescribedBy:b,isOpen:j,onDismiss:()=>{f({loginModalStore:t,loginStore:s,onDismiss:S})},areaConstraint:{width:{min:480,max:480},height:{scroll:!0}},children:(0,h.jsxs)("div",{className:y,children:[!M.device.isMobile&&(0,h.jsx)(p,{loginModalStore:t,loginStore:s,onDismiss:S}),(0,h.jsx)(d.LazyLoginModalContent,{...k})]})})}function p(e){let{loginModalStore:t,loginStore:s,onDismiss:r}=e;window.__c={n:"CancelButton"};const i=(0,n.Fg)();return(0,h.jsx)("div",{style:{fontSize:14,color:i.mediumTextColor,position:"absolute",right:0,marginTop:16,marginRight:16,cursor:"pointer"},onClick:()=>{f({loginModalStore:t,loginStore:s,onDismiss:r})},children:(0,h.jsx)(a.FormattedMessage,{defaultMessage:"Cancel",id:"sidebarSwitcherMultiAccount.addAccountModal.cancelButton.label"})})}function f(e){const{loginModalStore:t,loginStore:s,onDismiss:r}=e;s.reset(),t.setState({open:!1}),r&&r()}},55899:(e,t,s)=>{s.d(t,{KU:()=>o,ZP:()=>a,fZ:()=>i});var r=s(49085);function i(e){return"existingUser"===e.type}function o(e){return"newUser"===e.type&&"email"!==e.source}class n extends r.default{getInitialState(){return{tokenQuery:"",inviteTargets:[]}}}const a=n},8675:(e,t,s)=>{s.d(t,{Z:()=>l});var r=s(49085),i=s(80444),o=s(77080),n=s(26350);class a extends r.default{getInitialState(){return{changePermissionsEnabled:!1,privatePageStore:void 0,loading:!1,error:void 0}}shouldSaveTransactionWithSudoMode(e){const t=e===this.state.privatePageStore,s=o.default.checkGate("enable_get_private_page_info_endpoint"),r=this.doesUserAlreadyHaveEditorAccessOnBlock(e.id);return t&&s&&this.state.changePermissionsEnabled&&!r}shouldUserHaveAccessToPrivatePageBlock(){var e,t;const s=null===(e=i.default.state.currentSpaceStore)||void 0===e?void 0:e.canAdmin(),r="enterprise"===(null===(t=i.default.state.currentSpaceStore)||void 0===t?void 0:t.getSubscriptionTier());return this.state.privatePageStore&&s&&r}doesUserAlreadyHaveEditorAccessOnBlock(e){const t=i.default.state.currentSpaceStore;if(!t)return!1;return n.G.createChildStore(t,{table:"block",id:e}).canAdmin()}}const l=a},96071:(e,t,s)=>{s.d(t,{Z:()=>o});var r=s(49085);class i extends r.default{getInitialState(){return{open:!1}}}const o=i},89971:(e,t,s)=>{s.d(t,{G:()=>o});s(67294);var r=s(45238),i=s(85893);const o=(0,r.I)("googlePlay",{viewBox:"0 0 14 14",svg:(0,i.jsx)("path",{d:"M3.41741,13.7929001 L13.0843,8.42241009 C14.2002,7.80245009 14.2002,6.19755009 13.0843,5.57759009 L3.41741,0.207109087 C2.33284,-0.395426913 1,0.388821087 1,1.62952009 L1,12.3705001 C1,13.6112001 2.33284,14.3954001 3.41741,13.7929001 Z"})})},62397:(e,t,s)=>{s.d(t,{I:()=>o});s(67294);var r=s(45238),i=s(85893);const o=(0,r.I)("settingsSecurity",{viewBox:"0 0 11 20",svg:(0,i.jsx)("path",{d:"M4.92129 19.3231C5.26719 19.627 5.74092 19.6649 6.07178 19.3383L8.38779 16.9913C8.71865 16.6571 8.70361 16.1558 8.38027 15.8292L7.2749 14.7127L8.92168 13.0569C9.2375 12.7379 9.22998 12.229 8.90664 11.8948L7.41026 10.3757C9.44805 9.35026 10.5985 7.64127 10.5985 5.62847C10.5985 2.78016 8.32012 0.486328 5.49277 0.486328C2.66543 0.486328 0.394531 2.77257 0.394531 5.62847C0.394531 7.67166 1.54502 9.50217 3.37979 10.3301V17.4622C3.37979 17.7357 3.4625 18.0471 3.69561 18.2446L4.92129 19.3231ZM5.49277 17.9863L4.68066 17.166V9.34266C2.95869 8.9629 1.73301 7.4438 1.73301 5.62847C1.73301 3.53972 3.40986 1.84592 5.49277 1.84592C7.57569 1.84592 9.24502 3.53212 9.24502 5.62847C9.24502 7.42101 8.01181 8.96289 6.13194 9.38824V11.0289L7.57569 12.4872L6.03418 14.0214V15.3887L7.04931 16.3989L5.49277 17.9863ZM5.49277 5.67405C6.23721 5.67405 6.83877 5.06641 6.83877 4.32205C6.83877 3.5777 6.23721 2.97005 5.49277 2.97005C4.74834 2.97005 4.1543 3.5701 4.1543 4.32205C4.1543 5.06641 4.75586 5.67405 5.49277 5.67405Z"})})}}]);