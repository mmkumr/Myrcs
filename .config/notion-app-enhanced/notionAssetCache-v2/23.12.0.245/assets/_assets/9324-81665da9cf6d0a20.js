"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[9324],{89845:(e,t,i)=>{i.d(t,{Z:()=>v});i(67294);var r=i(83355),o=i(13991),n=i(8848),s=i(7057),a=i(53877),d=i(42875),l=i(36700),h=i(63143),c=i(5366),u=i(26388),p=i(85893);class m extends r.Z{constructor(){super(...arguments),this.reminderTimer=void 0}willMountOrUpdate(){this.createReminderTimer()}willUnmount(){this.clearReminderTimer()}createReminderTimer(){const e=this.props.value;if(!e)return;const t=a.KR(e,(0,d.r)());if(!t)return;const i=t.valueOf(),r=i-Date.now();r<0||r>h.A0||this.reminderTimer&&this.reminderTimer.timestamp===i||(this.reminderTimer&&clearTimeout(this.reminderTimer.timer),this.reminderTimer={timestamp:i,timer:setTimeout(this.enqueueForceUpdate,r)})}clearReminderTimer(){this.reminderTimer&&(clearTimeout(this.reminderTimer.timer),this.reminderTimer=void 0)}renderComponent(){const{value:e,withComma:t}=this.props;if(!e)return;const i=a.NK(e,(0,d.r)(),o.SP);let r;if(e.reminder){const t=a.Nm(e,(0,d.r)());r=t?{color:this.theme.errorText}:{color:n.ZP.blue}}const h=(0,p.jsxs)(p.Fragment,{children:[(0,s.ZV)({value:e,date_format:this.props.dateFormat,time_format:this.props.timeFormat,userTimeZone:(0,d.r)(),allowRelativeDates:!0,intl:this.props.intl,shortenDateAndRange:this.props.shortenDateAndRange,displayInUserTimezone:this.props.displayInUserTimezone}),e.reminder&&(0,l.m)({display:"inline-block",width:"1em",marginLeft:6,marginRight:2,paddingBottom:4,verticalAlign:"middle"}),t?", ":null]});return this.props.disableTooltip?(0,p.jsx)("div",{style:{...this.props.style,...r},children:h}):(0,p.jsx)(u.Z,{renderTooltip:()=>(0,p.jsxs)(p.Fragment,{children:[this.props.tooltipHeader,(0,p.jsxs)("div",{style:this.getTooltipStyle(),children:[this.getTooltipFormattedTime(i.start),i.end?` → ${this.getTooltipFormattedTime(i.end)}`:""]})]}),render:e=>(0,p.jsx)("div",{style:{...this.props.style,...r},...e,children:h}),placement:this.props.tooltipPlacement})}getTooltipFormattedTime(e){return(0,s.ZW)(e,"medium_with_time")}getTooltipStyle(){return this.props.tooltipHeader?{color:this.theme.mediumInvertedTextColor}:{}}}m.displayName="DateBox";const v=(0,c.injectIntl)(m)},13658:(e,t,i)=>{i.d(t,{Z:()=>l});i(67294);var r=i(83355),o=i(49085),n=i(5366),s=i(64921),a=i(85893);class d extends r.Z{constructor(){super(...arguments),this.storeTypes={open:o.default.createClass(!1)},this.handleOpen=()=>{this.stores.open.setState(!0)}}renderComponent(){return this.stores.open.state||this.props.items.length<=this.props.visible?(0,a.jsx)("div",{children:this.props.items}):(0,a.jsxs)("div",{children:[this.props.items.slice(0,this.props.visible),(0,a.jsx)(s.Z,{onClick:this.handleOpen,style:this.getStyle(),children:(0,a.jsx)(n.FormattedMessage,{defaultMessage:"View {moreCount} more",id:"activity.viewMoreButton.label",values:{moreCount:this.props.items.length-this.props.visible}})})]})}getStyle(){return{display:"flex",alignItems:"center",height:28,fontSize:12,color:this.theme.lightTextColor,padding:0,paddingLeft:52,paddingRight:16}}}d.displayName="ViewMore";const l=d},92559:(e,t,i)=>{i.d(t,{Z:()=>s});i(67294);var r=i(24405),o=i(8848),n=i(85893);function s(){window.__c={n:"BlockHighlighterBar"};const e=(0,r.yK)((()=>({blockContext:{flexShrink:0,display:"flex",width:3,borderRadius:3,marginLeft:2,marginRight:8,minHeight:24,background:o.DB}})),[]);return(0,n.jsx)("div",{style:e.blockContext})}},12472:(e,t,i)=>{i.d(t,{D:()=>u,Z:()=>c});i(67294);var r=i(24405),o=i(5366),n=i(19719),s=i(17659),a=i(39699),d=i(62385),l=i(22649),h=i(85893);function c(e){var t;window.__c={n:"NotificationActions"};const{isMobile:i,environment:o,rootStore:n,activity:s,tabArgs:a,useInboxRedesign:d}=e,{source:c}=a,p=Boolean(null===(t=a.notification)||void 0===t?void 0:t.visited),m=(0,r.yK)((()=>({container:{paddingLeft:d?void 0:(0,l.c3)({source:c,isMobile:i})-8,paddingTop:4}})),[i,c,d]);return p?(0,h.jsx)("div",{style:m.container,children:(0,h.jsx)(u,{tabArgs:a,environment:o,rootStore:n,activity:s})}):null}function u(e){window.__c={n:"UnarchiveButton"};const{tabArgs:t,environment:i,rootStore:c,activity:u}=e,{notification:p,tab:m}=t,v=(0,r.yK)((e=>({secondaryButton:(0,l._W)(e)})),[]);return Boolean(null==p?void 0:p.visited)?(0,h.jsx)(d.Z,{onClick:()=>{p&&(a.createAndCommit({userAction:"Activity.handleUnarchive",environment:i,perform:e=>{s.E1({notificationId:p.id,visited:!1,rootStore:c,transaction:e})}}),n.F5({environment:i,activity:u,tab:m,notificationId:p.id,alreadyRead:p.read}))},style:v.secondaryButton,children:(0,h.jsx)(o.FormattedMessage,{defaultMessage:"Unarchive",id:"activity.actions.unarchiveButton.label"})}):null}},36081:(e,t,i)=>{i.d(t,{Z:()=>c});var r=i(67294),o=i(24405),n=i(5366),s=i(97880),a=i(31278),d=i(22649),l=i(85893);function h(e){let t,i,{permissionGroup:h,spaceId:c}=e;window.__c={n:"PermissionGroupTitle"},h?(t=h.icon,i=h.name||(0,l.jsx)(n.FormattedMessage,{defaultMessage:"Untitled group",id:"activity.permissionGroupTitles.untitledGroup"})):i=(0,l.jsx)(n.FormattedMessage,{defaultMessage:"Deleted group",id:"activity.permissionGroupTitles.deletedGroup"});const u=void 0!==t,p=(0,o.yK)((()=>({title:(0,d.TL)(u)})),[u]),m=(0,r.useMemo)((()=>(0,s.$K)(t)?{icon:t,pointer:{table:"space",id:c}}:void 0),[t,c]);return(0,l.jsxs)("span",{children:[m&&(0,l.jsx)(a.Z,{disabled:!0,icon:m,isEmptyPage:!1,size:18,style:d.e9}),(0,l.jsx)("span",{style:p.title,children:i})]})}const c=r.memo(h)},78976:(e,t,i)=>{i.d(t,{Z:()=>M});var r=i(67294),o=i(480),n=i(86628),s=i(24405),a=i(15145),d=i(1800),l=i(26825),h=i(21202),c=i(6287),u=i(15047),p=i(29369),m=i(97880),v=i(5366),g=i(62820),f=i(9867),y=i(84076),x=i(31278),b=i(76798),S=i(64369),C=i(17022),j=i(22649),A=i(85893);function T(e){window.__c={n:"Title"};const{titledRecordStore:t,getRecordModel:i,activity:T,tabArgs:M,permissionRole:w,shouldRenderEmpty:k}=e,Z=(0,n.VK)((()=>t.getModel()),[t]),I=(0,o.O7)(),B=(0,v.useIntl)(),R=(0,n.VK)((()=>null==Z?void 0:Z.getRenderIcon({getRecordModel:i})),[Z,i]),L=(0,s.yK)((()=>({container:w?{...j.lS,display:"flex",alignItems:"center"}:j.lS,icon:j.e9,recordTitle:(0,j.TL)(void 0!==R),role:{marginLeft:4,padding:0},titleAndRole:{display:"flex",flexFlow:"row",padding:1}})),[R,w]),P=(0,r.useCallback)((()=>{const e=t.table;switch(e){case h.iU:case c.v:case u.bx:(0,C.V3)({environment:I,activity:T,...M});break;case p.e0:(0,C.dG)({environment:I,activity:T,...M}),f.hI({environment:I,teamStore:t,shouldScroll:!0}),g.Z.setState({...g.Z.state,open:!1});break;default:(0,m.t1)(e)}}),[T,I,M,t]),U=(0,n.VK)((()=>Z&&Z.table!==p.e0?Z.getRenderUrl({getRecordModel:i,pageVisitSource:a.tY.Notification}):k&&t.table===h.iU?(0,d.Z)({pageId:t.id,pageVisitSource:a.tY.LinkInPage}):void 0),[Z,i,k,t.table,t.id]);if(!Z&&!k)return null;const O=w?(0,A.jsxs)("div",{style:L.titleAndRole,children:[(0,A.jsx)(b.Z,{store:t,style:L.recordTitle}),(0,A.jsx)(S.Z,{style:L.role,isSecondaryColor:!0,children:`(${B.formatMessage((0,l.kD)(w,h.iU)).toLocaleLowerCase()})`})]}):(0,A.jsx)(b.Z,{store:t,style:L.recordTitle});return(0,A.jsxs)(y.Z,{href:U,onClick:P,external:!1,innerStyle:L.container,inline:!0,children:[(R||k)&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(x.Z,{disabled:!0,icon:R,isEmptyPage:!1,size:18,style:L.icon}),(0,A.jsx)("span",{children:" "})]}),O]})}const M=r.memo(T)},74970:(e,t,i)=>{i.d(t,{BE:()=>_,Hy:()=>V,ZP:()=>N,hZ:()=>F,of:()=>D});i(67294);var r=i(83355),o=i(480),n=i(53150),s=i(49085),a=i(8848),d=i(36700),l=i(69651),h=i(30134),c=i(94308),u=i(8504),p=i(21202),m=i(97880),v=i(17659),g=i(37834),f=i(39699),y=i(43250),x=i(12534),b=i(33929),S=i(16402),C=i(35661),j=i(4761),A=i(73063),T=i(86176),M=i(26388),w=i(70301),k=i(45653),Z=i(67706),I=i(30573),B=i(32469),R=i(93963),L=i(85893);class P extends r.Z{constructor(){super(...arguments),this.titleAriaId=(0,n.Z)(),this.storeTypes={hovered:s.default.createClass(!1),hoveredOverInboxActionsMenu:s.default.createClass(!1)},this.handleMouseOver=()=>{this.stores.hovered.setState(!0)},this.handleMouseLeave=()=>{this.stores.hovered.setState(!1)},this.handleMouseEnterInboxActions=()=>{this.stores.hoveredOverInboxActionsMenu.setState(!0)},this.handleMouseLeaveInboxActions=()=>{this.stores.hoveredOverInboxActionsMenu.setState(!1)},this.handleArchive=()=>{const{notification:e,rootStore:t,onArchiveClicked:i}=this.props;i(),e&&f.createAndCommit({userAction:"ActivityUpdateSection.handleArchive",environment:this.environment,perform:i=>{v.aZ({notification:e,rootStore:t,transaction:i})}})},this.handleMarkAsRead=e=>{const{notification:t,rootStore:i,onNotificationFrameClicked:r}=this.props;t&&!t.read&&(this.stores.hoveredOverInboxActionsMenu.state||(0,x.ZP)({event:e,context:x.Af.NotificationClick,callback:()=>{r(),f.createAndCommit({userAction:"ActivityUpdateSection.handleMarkAsRead",environment:this.environment,perform:e=>{v.$h({notification:t,rootStore:i,transaction:e,read:!0})}})}}))},this.handleOpenSnapshot=()=>{if(this.props.navigableBlockId){const e=C.G.createChildStore(this.props.rootStore,{table:p.iU,id:this.props.navigableBlockId});g.jN({environment:this.environment,blockStore:e,openSnapshotNearTimestamp:this.props.timestamp.toString(),from:"activity"})}}}renderComponent(){const{children:e}=this.props,t="mentions"===j.ZP.state.currentTab;return(0,L.jsxs)("article",{onMouseOver:this.handleMouseOver,onMouseLeave:this.handleMouseLeave,onClick:this.handleMarkAsRead,"aria-labelledby":this.titleAriaId,tabIndex:0,children:[this.renderInboxActions(),(0,L.jsxs)("div",{style:{...P.wrapStyle,paddingBottom:e?12:8,paddingLeft:this.environment.device.isMobile?this.environment.WindowSizeStore.state.paddingLeftCSS:0,paddingRight:this.environment.device.isMobile?this.environment.WindowSizeStore.state.paddingRightCSS:0,...this.shouldShowReadNotificationStyle()&&{opacity:.7}},children:[(0,L.jsxs)("div",{style:this.getHeaderAndAvatarStyle(),children:[(0,L.jsxs)("div",{className:y.FoE,style:this.avatarAndStatusDotStyle(),children:[(0,L.jsx)("div",{style:{marginRight:4},children:t&&(0,L.jsx)("div",{style:{marginRight:this.environment.device.isMobile?3:2},children:this.renderStatusDot({opacity:1})})}),this.props.icon]}),this.renderHeader(),this.renderSnapshotButton(),this.renderPrivate()]}),e&&this.renderChildren()]}),this.renderDivider()]})}renderDivider(){const{isLast:e}=this.props;if(!e)return(0,L.jsx)("div",{style:this.getBorderBottomStyle()})}renderHeader(){const{timestamp:e,header:t}=this.props,i=(0,S.IS)(e),r=(0,S.uy)(e);return(0,L.jsxs)("div",{style:P.headerStyle,children:[(0,L.jsx)("div",{id:this.titleAriaId,className:y.NFf,children:t}),(0,L.jsxs)("div",{style:{display:"flex",marginTop:4,marginBottom:this.props.children?8:4},children:[(0,L.jsx)("div",{style:this.getTimeStyle(),className:y.CZG,children:(0,L.jsx)(Z.Z,{text:i,tooltipText:r,icon:l.C})}),this.props.navigableBlockId&&this.props.rootStore&&(0,L.jsx)(T.Z,{isLink:!0,innerStyle:this.getPathStyle(),store:C.G.createChildStore(this.props.rootStore,{table:p.iU,id:this.props.navigableBlockId}),left:(0,L.jsx)("div",{style:this.getSeparatorDotStyle(),children:"·"}),onClick:this.props.onBacklinkClicked})]})]})}renderSnapshotButton(){if(!this.props.showSnapshotButton)return;if(this.props.timestamp<new Date("2018-10-26").getTime())return;const e=b.default.getIntl().formatMessage({defaultMessage:"View version for this update",id:"activitySection.viewVersionForUpdate.tooltip"});return this.props.navigableBlockId?(0,L.jsx)(M.Z,{renderTooltip:()=>e,render:t=>(0,L.jsx)(A.Z,{ariaLabel:e,onClick:this.handleOpenSnapshot,icon:u.J,...t})}):void 0}renderInboxActions(){const{notification:e,rootStore:t,onArchiveClicked:i,onMarkAsReadClicked:r,onMarkAsUnreadClicked:o}=this.props,{currentTab:n}=j.ZP.state;if("mentions"===n&&e&&!e.visited)return(0,L.jsx)("div",{style:this.getStatusLabelContainerStyle(),onMouseEnter:this.handleMouseEnterInboxActions,onMouseLeave:this.handleMouseLeaveInboxActions,children:(0,L.jsx)("div",{style:this.getInboxActionsStyle(),children:(0,L.jsx)(I.Z,{notification:e,rootStore:t,onArchiveClicked:i,onMarkAsReadClicked:r,onMarkAsUnreadClicked:o,useInboxRedesign:!1})})})}renderStatusDot(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!this.isSeen()&&(0,L.jsx)(R.z,{style:{...this.getStatusDotStyle(),...e}})}renderPrivate(){if(this.props.isPrivate&&!this.props.notification)return(0,L.jsx)(B.Z,{style:{marginTop:1,marginBottom:4,marginLeft:8}})}renderChildren(){return(0,L.jsx)("div",{className:y.nU_,children:this.props.children})}isSeen(){const{notification:e}=this.props;return!e||e.read}shouldShowReadNotificationStyle(){const{currentTab:e}=j.ZP.state;return this.isSeen()&&"mentions"===e&&!this.props.showSnapshotButton&&this.props.notification}avatarAndStatusDotStyle(){return{display:"flex",alignItems:"flex-start",position:"relative"}}getHeaderAndAvatarStyle(){return{display:"flex",paddingLeft:16,paddingRight:16+("mentions"!==j.ZP.state.currentTab||this.props.showSnapshotButton?0:I.N+5)}}getBorderBottomStyle(){return{borderBottom:`1px solid ${this.theme.regularDividerColor}`}}getPathStyle(){return{fontSize:12,color:this.theme.lightTextColor}}getTimeStyle(){return{fontSize:12,color:this.theme.lightTextColor,whiteSpace:"nowrap"}}getSeparatorDotStyle(){return{fontSize:12,color:this.theme.lightTextColor,marginLeft:4,marginRight:4}}getStatusLabelContainerStyle(){return{display:"flex",alignItems:"flex-start",marginTop:1,marginBottom:4,position:"relative",marginLeft:this.environment.device.isMobile?23:8}}getStatusDotStyle(){return{position:"absolute",opacity:this.stores.hovered.state?0:1,left:-7,top:10}}getInboxActionsStyle(){const{isMobile:e}=this.environment.device;return{transition:"opacity 100ms ease-out",opacity:e||this.stores.hovered.state?1:0,position:"absolute",right:16,top:12,zIndex:1}}}P.displayName="ActivityUpdateSection",P.wrapStyle={paddingTop:12},P.headerStyle={fontSize:14,lineHeight:1.4,flexGrow:1,minWidth:0};const U={marginTop:2,marginRight:8,flexShrink:0};function O(e){let{actor:t,environment:i}=e;const r=i.currentUser.id===t.id;return Number(t.isBot())+Number(r)}function _(e){window.__c={n:"AuthorIcon"};const{authors:t,style:i,showAvatarShadow:r}=e,n=(0,o.O7)(),s=t.sort(((e,t)=>O({actor:e,environment:n})-O({actor:t,environment:n})))[0],a={...U,...i};return s?s.isBot()?(0,L.jsx)(w.Z,{botValue:s,style:a,size:24}):s.isUser()?(0,L.jsx)(k.Z,{userValue:s,style:a,size:24,avatarShouldShowShadow:r??!0}):s.isAgent()?null:void(0,m.t1)(s):null}function F(){return(0,L.jsx)("div",{style:{display:"flex",backgroundColor:a.ZP.red,height:28,width:28,borderRadius:"100%",...U},children:(0,d.m)({height:16,width:16,fill:a.ZP.white,marginLeft:6,marginTop:5})})}function D(){return(0,L.jsx)("div",{style:{height:25,width:25,...U},children:(0,c.f)({height:25,width:25})})}function V(){return(0,L.jsx)("div",{style:{height:25,width:25,...U},children:(0,h.c)({height:25,width:25})})}const N=P},17022:(e,t,i)=>{i.d(t,{BE:()=>p,ME:()=>h,V3:()=>u,dG:()=>c,h9:()=>v});var r=i(15145),o=i(82813),n=i(64002),s=i(50906),a=i(19719),d=i(24215),l=i(4761);function h(e){return(0,n.SK)(e,{[r.$X]:r.tY.Notification})}function c(e){const t=e.mightCloseTab??!0;m({target:"body",...e,mightCloseTab:t})}function u(e){const t=e.mightCloseTab??!0;m({target:"title",...e,mightCloseTab:t})}function p(e){m({target:"add_reaction",...e,mightCloseTab:!1})}function m(e){const{target:t,environment:i,activity:r,notification:n,source:h,tab:c,mightCloseTab:u}=e,p="notifications_tab"===h?l.ZP.state.sessionId:void 0,m="notifications_tab"===h?l.ZP.isFilteredToUnreadOnly():void 0;s.CgP(i,{target:t,activity_id:r.id,notification_id:null==n?void 0:n.id,sessionId:p,is_filtered:m,tab:c}),u&&a.pw({environment:i,target:t}),n&&o.e((0,d.mc)(i),{alreadyRead:n.read,notificationId:n.id,activityId:n.activity_id,from:t,sessionId:p})}function v(e){const{notification:t,activity:i,environment:r,tab:o}=e,n={environment:r,activity:i,notificationId:null==t?void 0:t.id,alreadyRead:Boolean(null==t?void 0:t.read),tab:o};return{onBacklinkClicked:e=>a.EQ({...n,backlinkPageId:e}),onArchiveClicked:()=>a._b(n),onMarkAsReadClicked:()=>a.cC(n),onMarkAsUnreadClicked:()=>a.u_(n),onNotificationFrameClicked:()=>a.ix(n)}}},90060:(e,t,i)=>{i.d(t,{uA:()=>U,XW:()=>P,P6:()=>L,cr:()=>F,jC:()=>_,N8:()=>O});var r=i(66897),o=i(67294),n=i(5366),s=(i(41892),i(8848)),a=i(7057),d=(i(30134),i(94308),i(24211)),l=(i(54368),i(77420)),h=i(19889),c=(i(97880),i(82990)),u=i(15145),p=i(76725),m=i(72126),v=i(59753),g=i(63306),f=i(64002),y=i(85893);const x=function(e){const t={display:e.inline?"inline":"block",color:s.ZP.inherit,textDecoration:"none",cursor:"pointer",...e.style},{href:i}=e;return(0,y.jsx)("a",{href:(0,f.Nm)({str:i,allowNoProtocol:!0}),style:t,className:"notion-email-button-hover",onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,children:e.children})};class b extends o.PureComponent{render(){const e=this.getPathWithoutDomain();return e.length>0?(0,y.jsxs)("div",{children:[this.props.left,(0,p.Z)(e,(e=>(0,y.jsx)("span",{style:{paddingLeft:4,paddingRight:4},children:"/"},`slash:${e}`))),this.props.right]}):null}getPathWithoutDomain(){const{getRecordValue:e,blockId:t,intl:i}=this.props,r=g.uJ({table:"block",id:t},e),o=v.om.fromGetRecordValueFn(e);return m.nn(r.reverse()).map((e=>{const t=v.kk.fromBlock(e),r=t.getRenderTitle({getRecordModel:o,userTimeZone:this.props.userTimeZone,intl:i})||i.formatMessage({id:"recordPath.untitledBlock.placeholder",defaultMessage:"Untitled"}),n=t.getRenderUrl({getRecordModel:o,pageVisitSource:u.tY.Email});return(0,y.jsx)(x,{href:`${this.props.baseUrl}${n}`,style:{display:"inline-block",maxWidth:120,verticalAlign:"top",...c.Z.textOverflowStyle},children:r},e.id)}))}}const S=(0,n.injectIntl)(b);i(43593),i(17755),i(58102);class C extends o.PureComponent{constructor(){super(...arguments),this.theme=(0,s.gh)({theme:"light"})}render(){const{children:e}=this.props;return(0,y.jsxs)("table",{style:{paddingTop:12,paddingBottom:e?0:8,borderSpacing:0,width:"100%",borderCollapse:"separate"},children:[(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{style:{verticalAlign:"top",width:C.avatarSize+6,minWidth:C.avatarSize+6,paddingTop:2},children:this.props.icon}),(0,y.jsx)("td",{children:this.renderHeader()})]}),(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{}),(0,y.jsx)("td",{style:{maxWidth:400},children:e&&this.renderChildren()})]}),this.renderDivider()]})}renderDivider(){const{isLast:e}=this.props;if(!e)return(0,y.jsx)("tr",{children:(0,y.jsx)("td",{colSpan:2,children:(0,y.jsx)("div",{style:this.getBorderBottomStyle()})})})}renderHeader(){const{timestamp:e,header:t,intl:i}=this.props,r=(0,a.Yx)(Math.min(e,Date.now()),"medium_with_time",(0,d.E2)(i),this.props.userTimeZone);return(0,y.jsxs)("div",{style:C.headerStyle,children:[(0,y.jsx)("div",{children:t}),(0,y.jsx)("table",{style:{...this.getPathAndTimeStyle(),marginTop:4,marginBottom:this.props.children?8:4,borderSpacing:0},children:(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{children:r}),(0,y.jsx)("td",{children:this.props.navigableBlockId&&(0,y.jsx)(S,{getRecordValue:this.props.getRecordValue,blockId:this.props.navigableBlockId,baseUrl:this.props.baseUrl,left:(0,y.jsx)("span",{style:this.getDotStyle(),children:"·"}),userTimeZone:this.props.userTimeZone})})]})})]})}renderChildren(){return(0,y.jsx)("div",{children:this.props.children})}getBorderBottomStyle(){return{borderBottom:`1px solid ${this.props.theme.regularDividerColor}`,marginBottom:4}}getPathAndTimeStyle(){return{fontSize:12,color:this.theme.lightTextColor,whiteSpace:"nowrap"}}getDotStyle(){return{color:this.theme.lightTextColor,marginLeft:4,marginRight:4}}}C.avatarSize=28,C.headerStyle={fontSize:14,lineHeight:1.4};const j={fontWeight:c.Z.fontWeight.semibold};(0,n.injectIntl)(C);var A=i(21202),T=i(6287),M=i(33709),w=i(15047),k=i(70203),Z=i(33929),I=i(67669),B=i(80444),R=i(35661);function L(e){const{edits:t,rootStore:i}=e,r=m.sv(t.flatMap((e=>e.authors||[])),m.Xy);return m.oA(r.map((e=>U(e,i))))}function P(e,t){const{currentUserStore:i}=B.default.state,o=null==i?void 0:i.id;return function(e,t,i,o){const s=t.find((e=>e.id===i)),a=t.map((t=>(0,r.$4)(e,t))),d={...j,...o};if(1===t.length)return s?(0,y.jsx)("span",{children:(0,y.jsx)(n.FormattedMessage,{defaultMessage:"You",id:"activitySection.authorPhrase.forOneAuthorCurrentUser.label",values:{b:e=>(0,y.jsx)("span",{style:d,children:e})}})}):(0,y.jsx)("span",{children:(0,y.jsx)(n.FormattedMessage,{defaultMessage:"<b>{author}</b>",id:"activitySection.authorPhrase.forOneAuthor.label",values:{author:a[0],b:e=>(0,y.jsx)("span",{style:d,children:e})}})});if(2===t.length){if(s){const i=t.filter((e=>e!==s)).map((t=>(0,r.$4)(e,t)));return(0,y.jsx)("span",{children:(0,y.jsx)(n.FormattedMessage,{defaultMessage:"<b>{firstAuthor}</b> and you",id:"activitySection.authorPhrase.forTwoAuthorsCurrentUser.label",values:{firstAuthor:i[0],b:e=>(0,y.jsx)("span",{style:d,children:e})}})})}return(0,y.jsx)("span",{children:(0,y.jsx)(n.FormattedMessage,{defaultMessage:"<b>{firstAuthor}</b> and <b>{secondAuthor}</b>",id:"activitySection.authorPhrase.forTwoAuthors.label",values:{firstAuthor:a[0],secondAuthor:a[1],b:e=>(0,y.jsx)("span",{style:d,children:e})}})})}if(a.length>2){if(s){const i=t.filter((e=>e!==s)).map((t=>(0,r.$4)(e,t))),o=(0,y.jsx)(n.FormattedMessage,{defaultMessage:"{numberOfOtherAuthors, plural, =0 {<b>{firstAuthor}</b>, <b>{secondAuthor}</b> and you} one {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, you and {numberOfOtherAuthors} other} other {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, you and {numberOfOtherAuthors} others}}",id:"activitySection.authorPhrase.forMoreThanTwoAuthorsCurrentUser.label",values:{numberOfOtherAuthors:i.length-2,firstAuthor:i[0],secondAuthor:i[1],b:e=>(0,y.jsx)("span",{style:d,children:e})}});return(0,y.jsx)("span",{children:o})}{const e=(0,y.jsx)(n.FormattedMessage,{defaultMessage:"{numberOfOtherAuthors, plural, one {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, and {numberOfOtherAuthors} other} other {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, and {numberOfOtherAuthors} others}}",id:"activitySection.authorPhrase.forMoreThanTwoAuthors.label",values:{numberOfOtherAuthors:a.length-2,firstAuthor:a[0],secondAuthor:a[1],b:e=>(0,y.jsx)("span",{style:d,children:e})}});return(0,y.jsx)("span",{children:e})}}return(0,y.jsx)("span",{style:d,children:(0,y.jsx)(n.FormattedMessage,{defaultMessage:"Nobody",id:"activitySection.authorPhrase.forNoAuthors.label"})})}(Z.default.getIntl(),e,o,t)}function U(e,t){if(e.table===h.KJ){const i=O(e.id,t);if(i)return(0,r.dp)(i)}else{const i=function(e,t){return(0,R.Kv)(t,{table:l.cZ,id:e}).getValue()}(e.id,t);if(i)return(0,r.D$)(i)}}function O(e,t){return R.U6.createChildStore(t,{table:h.KJ,id:e}).getValue()}function _(e){const{tab:t,recordId:i,recordType:r,rootStore:o,environment:n}=e;if("all"===t){if(!i)return!1;let e;return e="block"===r?R.G.createChildStore(o,{table:A.iU,id:i}):"collection"===r?R.NW.createChildStore(o,{table:T.v,id:i}):R.H2.createChildStore(o,{table:w.bx,id:i}),(0,I.yi)(n,e)}return!1}function F(e){const{activity:t,rootStore:i}=e;if("commented"!==t.type)return;const r=i.getRecordModel({table:M.qF,id:t.discussion_id,spaceId:t.space_id});if(!r)return;const o=r.getContext();if(!o)return;const n=(0,k.VP_)(o,(e=>!(0,k.xw5)(e)||(0,k.h19)(e)===r.id));return{id:r.id,context:n}}},30134:(e,t,i)=>{i.d(t,{c:()=>n});i(67294);var r=i(45238),o=i(85893);const n=(0,r.I)("export",{viewBox:"0 0 16 16",svg:(0,o.jsx)("path",{d:"M3.0625 15.8174C2.32422 15.8174 1.76595 15.6305 1.3877 15.2568C1.00944 14.8831 0.820312 14.3294 0.820312 13.5957V6.86914C0.820312 6.13997 1.00944 5.58854 1.3877 5.21484C1.76595 4.83659 2.32422 4.64746 3.0625 4.64746H4.92871V5.99414H3.14453C2.82552 5.99414 2.58171 6.07845 2.41309 6.24707C2.24902 6.41113 2.16699 6.65951 2.16699 6.99219V13.4795C2.16699 13.8122 2.24902 14.0605 2.41309 14.2246C2.58171 14.3932 2.82552 14.4775 3.14453 14.4775H10.8486C11.1631 14.4775 11.4046 14.3932 11.5732 14.2246C11.7464 14.0605 11.833 13.8122 11.833 13.4795V6.99219C11.833 6.65951 11.7464 6.41113 11.5732 6.24707C11.4046 6.07845 11.1631 5.99414 10.8486 5.99414H9.07812V4.64746H10.9375C11.6758 4.64746 12.234 4.83659 12.6123 5.21484C12.9906 5.58854 13.1797 6.13997 13.1797 6.86914V13.5957C13.1797 14.3249 12.9906 14.8763 12.6123 15.25C12.234 15.6283 11.6758 15.8174 10.9375 15.8174H3.0625ZM7 11.3877C6.91797 11.3877 6.83822 11.374 6.76074 11.3467C6.68327 11.3148 6.60124 11.2578 6.51465 11.1758L4.21777 8.96094C4.10384 8.84245 4.04688 8.70801 4.04688 8.55762C4.04688 8.39811 4.09928 8.26823 4.2041 8.16797C4.31348 8.06771 4.44792 8.01758 4.60742 8.01758C4.7806 8.01758 4.92188 8.0791 5.03125 8.20215L5.98828 9.2207L6.43262 9.71973L6.36426 8.70117V1.61914C6.36426 1.45052 6.42578 1.30469 6.54883 1.18164C6.67643 1.05859 6.82682 0.99707 7 0.99707C7.17318 0.99707 7.32129 1.05859 7.44434 1.18164C7.57194 1.30469 7.63574 1.45052 7.63574 1.61914V8.70117L7.56738 9.71973L8.00488 9.2207L8.96191 8.20215C9.07585 8.0791 9.21712 8.01758 9.38574 8.01758C9.54069 8.01758 9.67285 8.06771 9.78223 8.16797C9.89616 8.26823 9.95312 8.39811 9.95312 8.55762C9.95312 8.70801 9.89388 8.84245 9.77539 8.96094L7.47852 11.1758C7.39648 11.2578 7.31673 11.3148 7.23926 11.3467C7.16178 11.374 7.08203 11.3877 7 11.3877Z"})})},13530:(e,t,i)=>{i.d(t,{s:()=>n});i(67294);var r=i(45238),o=i(85893);const n=(0,r.I)("historyForward",{viewBox:"0 0 14 14",svg:(0,o.jsx)("polygon",{points:"11.14107 6.25324 5.94392 1.0561 7 0 13.471958 6.47196 14 7 13.471958 7.52804 7 14 5.94392 12.94392 11.14107 7.74676 0 7.74676 1.77635684e-15 6.25324"})})},22686:(e,t,i)=>{i.d(t,{f:()=>n});i(67294);var r=i(45238),o=i(85893);const n=(0,r.I)("person",{viewBox:"0 0 16 16",svg:(0,o.jsx)("path",{d:"M7.7832 8.00195C9.27344 8.00195 10.5381 6.67578 10.5381 4.95996C10.5381 3.28516 9.2666 2 7.7832 2C6.29297 2 5.01465 3.30566 5.02148 4.97363C5.02148 6.67578 6.28613 8.00195 7.7832 8.00195ZM3.51758 14.3594H12.0352C13.1631 14.3594 13.5527 14.0176 13.5527 13.3887C13.5527 11.6318 11.3242 9.21191 7.77637 9.21191C4.23535 9.21191 2 11.6318 2 13.3887C2 14.0176 2.38965 14.3594 3.51758 14.3594Z"})})},14734:(e,t,i)=>{i.d(t,{X:()=>n});i(67294);var r=i(45238),o=i(85893);const n=(0,r.I)("personCrossedOut",{viewBox:"0 0 44 44",svg:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("path",{d:"M5.4857 44H0L44 8.56549V13.0061L5.4857 44Z"}),(0,o.jsx)("path",{d:"M39.8048 44H8.66491L25.6448 30.4378C26.9394 30.6489 28.1581 30.9719 29.3009 31.4067C31.5362 32.2374 33.4346 33.326 34.9964 34.6723C36.5725 36.0044 37.7761 37.4367 38.6071 38.9692C39.4525 40.5018 39.8752 41.9555 39.8752 43.3305C39.8752 43.5675 39.8517 43.7906 39.8048 44Z"}),(0,o.jsx)("path",{d:"M30.3971 16.7973C30.3971 16.8668 30.3965 16.9359 30.3952 17.0048L19.3828 25.9192C18.7467 25.7134 18.1339 25.4228 17.5446 25.0473C16.2408 24.2023 15.1876 23.0708 14.3853 21.6528C13.5972 20.2205 13.2032 18.6163 13.2032 16.8403C13.2032 15.0929 13.5972 13.5174 14.3853 12.1137C15.1876 10.7101 16.2408 9.60007 17.5446 8.78366C18.8485 7.96725 20.267 7.55905 21.8001 7.55905C23.3332 7.55905 24.7517 7.96009 26.0556 8.76218C27.3595 9.56426 28.4054 10.6671 29.1935 12.0708C29.9959 13.4601 30.3971 15.0356 30.3971 16.7973Z"})]})})}}]);