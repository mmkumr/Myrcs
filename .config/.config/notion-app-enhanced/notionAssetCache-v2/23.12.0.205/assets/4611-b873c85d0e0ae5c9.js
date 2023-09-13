"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[4611],{67706:(t,e,i)=>{i.d(e,{Z:()=>u});var o=i(23174),n=i.n(o),r=i(10434),a=i.n(r),s=i(67294),d=i(24405),l=i(82990),c=i(53437),h=i(26388);function u(t){let{text:e,tooltipText:i,icon:o}=t;window.__c={n:"InlineTextWithIconTooltip"};const r=(0,d.yK)((t=>({icon:{height:"1em",width:"1em",marginRight:"0.25em",fill:t.mediumIconColor,marginBottom:"0.1em"},tooltip:{background:t.contentBackground,boxShadow:t.lightBoxShadow},container:{display:"flex",alignItems:"center",fontWeight:l.Z.fontWeight.regular,color:t.mediumTextColor,fontSize:l.Z.fontSize.UISmall.desktop,textAlign:"center"},text:{display:"inline"}})),[]);return n()(h.Z,{style:r.tooltip,render:t=>s.createElement("div",a()({style:r.text},t),e),renderTooltip:()=>n()("div",{style:r.container},void 0,o(r.icon),n()("div",{},void 0,i)),alignment:c.ZP.Alignment.Start,placement:c.ZP.Placement.Bottom})}},13658:(t,e,i)=>{i.d(e,{Z:()=>c});var o=i(23174),n=i.n(o),r=(i(67294),i(83355)),a=i(49085),s=i(5366),d=i(64921);class l extends r.Z{constructor(){super(...arguments),this.storeTypes={open:a.default.createClass(!1)},this.handleOpen=()=>{this.stores.open.setState(!0)}}renderComponent(){return this.stores.open.state||this.props.items.length<=this.props.visible?n()("div",{},void 0,this.props.items):n()("div",{},void 0,this.props.items.slice(0,this.props.visible),n()(d.Z,{onClick:this.handleOpen,style:this.getStyle()},void 0,n()(s.FormattedMessage,{defaultMessage:"View {moreCount} more",id:"activity.viewMoreButton.label",values:{moreCount:this.props.items.length-this.props.visible}})))}getStyle(){return{display:"flex",alignItems:"center",height:28,fontSize:12,color:this.theme.lightTextColor,padding:0,paddingLeft:52,paddingRight:16}}}l.displayName="ViewMore";const c=l},92559:(t,e,i)=>{i.d(e,{Z:()=>s});var o=i(23174),n=i.n(o),r=(i(67294),i(24405)),a=i(8848);function s(){window.__c={n:"BlockHighlighterBar"};const t=(0,r.yK)((()=>({blockContext:{flexShrink:0,display:"flex",width:3,borderRadius:3,marginLeft:2,marginRight:8,minHeight:24,background:a.DB}})),[]);return n()("div",{style:t.blockContext})}},12472:(t,e,i)=>{i.d(e,{D:()=>p,Z:()=>u});var o=i(23174),n=i.n(o),r=(i(67294),i(24405)),a=i(5366),s=i(19719),d=i(17659),l=i(39699),c=i(62385),h=i(22649);function u(t){var e;window.__c={n:"NotificationActions"};const{isMobile:i,environment:o,rootStore:a,activity:s,tabArgs:d}=t,{source:l}=d,c=Boolean(null===(e=d.notification)||void 0===e?void 0:e.visited),u=(0,r.yK)((t=>({container:{paddingLeft:(0,h.c3)({source:l,isMobile:i})-8,paddingTop:4}})),[i,l]);return c?n()("div",{style:u.container},void 0,n()(p,{tabArgs:d,environment:o,rootStore:a,activity:s})):null}function p(t){window.__c={n:"UnarchiveButton"};const{tabArgs:e,environment:i,rootStore:o,activity:u}=t,{notification:p,tab:g}=e,v=(0,r.yK)((t=>({secondaryButton:(0,h._W)(t)})),[]);return Boolean(null==p?void 0:p.visited)?n()(c.Z,{onClick:()=>{p&&(l.createAndCommit({userAction:"Activity.handleUnarchive",environment:i,perform:t=>{d.E1({notificationId:p.id,visited:!1,rootStore:o,transaction:t})}}),s.F5({environment:i,activity:u,tab:g,notificationId:p.id,alreadyRead:p.read}))},style:v.secondaryButton},void 0,n()(a.FormattedMessage,{defaultMessage:"Unarchive",id:"activity.actions.unarchiveButton.label"})):null}},36081:(t,e,i)=>{i.d(e,{Z:()=>u});var o=i(23174),n=i.n(o),r=i(67294),a=i(24405),s=i(5366),d=i(97880),l=i(31278),c=i(22649);function h(t){let e,i,{permissionGroup:o,spaceId:h}=t;window.__c={n:"PermissionGroupTitle"},o?(e=o.icon,i=o.name||n()(s.FormattedMessage,{defaultMessage:"Untitled group",id:"activity.permissionGroupTitles.untitledGroup"})):i=n()(s.FormattedMessage,{defaultMessage:"Deleted group",id:"activity.permissionGroupTitles.deletedGroup"});const u=void 0!==e,p=(0,a.yK)((()=>({title:(0,c.TL)(u)})),[u]),g=(0,r.useMemo)((()=>(0,d.$K)(e)?{icon:e,pointer:{table:"space",id:h}}:void 0),[e,h]);return n()("span",{},void 0,g&&n()(l.Z,{disabled:!0,icon:g,isEmptyPage:!1,size:18,style:c.e9}),n()("span",{style:p.title},void 0,i))}const u=r.memo(h)},78976:(t,e,i)=>{i.d(e,{Z:()=>C});var o=i(23174),n=i.n(o),r=i(67294),a=i(480),s=i(86628),d=i(24405),l=i(15145),c=i(21202),h=i(6287),u=i(15047),p=i(29369),g=i(97880),v=i(62820),m=i(35817),f=i(84076),b=i(31278),y=i(76798),S=i(17022),A=i(22649);function M(t){window.__c={n:"Title"};const{titledRecordStore:e,getRecordModel:i,activity:o,tabArgs:M}=t,C=(0,s.VK)((()=>e.getModel()),[e]),k=(0,a.O7)(),x=(0,s.VK)((()=>null==C?void 0:C.getRenderIcon({getRecordModel:i})),[C,i]),w=(0,d.yK)((()=>({container:A.lS,icon:A.e9,recordTitle:(0,A.TL)(void 0!==x)})),[x]),Z=(0,r.useCallback)((()=>{const t=e.table;switch(t){case c.iU:case h.v:case u.bx:(0,S.V3)({environment:k,activity:o,...M});break;case p.e0:(0,S.dG)({environment:k,activity:o,...M}),m.hI({environment:k,teamStore:e,shouldScroll:!0}),v.Z.setState({...v.Z.state,open:!1});break;default:(0,g.t1)(t)}}),[o,k,M,e]),T=(0,s.VK)((()=>{if(C&&C.table!==p.e0)return C.getRenderUrl({getRecordModel:i,pageVisitSource:l.tY.Notification})}),[C,i]);return C?n()(f.Z,{href:T,onClick:Z,external:!1,innerStyle:w.container,inline:!0},void 0,x&&r.createElement(r.Fragment,null,n()(b.Z,{disabled:!0,icon:x,isEmptyPage:!1,size:18,style:w.icon}),n()("span",{},void 0," ")),n()(y.Z,{store:e,style:w.recordTitle})):null}const C=r.memo(M)},74970:(t,e,i)=>{i.d(e,{BE:()=>D,ZP:()=>E,hZ:()=>K,of:()=>W});var o=i(10434),n=i.n(o),r=i(23174),a=i.n(r),s=i(67294),d=i(83355),l=i(480),c=i(53150),h=i(49085),u=i(8848),p=i(36700),g=i(69651),v=i(94308),m=i(8504),f=i(21202),b=i(97880),y=i(17659),S=i(37834),A=i(39699),M=i(43250),C=i(12534),k=i(33929),x=i(16402),w=i(57559),Z=i(4761),T=i(73063),I=i(86176),B=i(26388),P=i(70301),R=i(45653),U=i(67706),L=i(8576),O=i(32469),_=i(93963);class N extends d.Z{constructor(){super(...arguments),this.titleAriaId=(0,c.Z)(),this.storeTypes={hovered:h.default.createClass(!1),hoveredOverInboxActionsMenu:h.default.createClass(!1)},this.handleMouseOver=()=>{this.stores.hovered.setState(!0)},this.handleMouseLeave=()=>{this.stores.hovered.setState(!1)},this.handleMouseEnterInboxActions=()=>{this.stores.hoveredOverInboxActionsMenu.setState(!0)},this.handleMouseLeaveInboxActions=()=>{this.stores.hoveredOverInboxActionsMenu.setState(!1)},this.handleArchive=()=>{const{notification:t,rootStore:e,onArchiveClicked:i}=this.props;i(),t&&A.createAndCommit({userAction:"ActivityUpdateSection.handleArchive",environment:this.environment,perform:i=>{y.aZ({notification:t,rootStore:e,transaction:i})}})},this.handleMarkAsRead=t=>{const{notification:e,rootStore:i,onNotificationFrameClicked:o}=this.props;e&&!e.read&&(this.stores.hoveredOverInboxActionsMenu.state||(0,C.ZP)({event:t,context:C.Af.NotificationClick,callback:()=>{o(),A.createAndCommit({userAction:"ActivityUpdateSection.handleMarkAsRead",environment:this.environment,perform:t=>{y.$h({notification:e,rootStore:i,transaction:t,read:!0})}})}}))},this.handleOpenSnapshot=()=>{if(this.props.navigableBlockId){const t=w.G.createChildStore(this.props.rootStore,{table:f.iU,id:this.props.navigableBlockId});S.jN({environment:this.environment,blockStore:t,openSnapshotNearTimestamp:this.props.timestamp.toString(),from:"activity"})}}}renderComponent(){const{children:t}=this.props,e="mentions"===Z.ZP.state.currentTab;return a()("article",{onMouseOver:this.handleMouseOver,onMouseLeave:this.handleMouseLeave,onClick:this.handleMarkAsRead,"aria-labelledby":this.titleAriaId,tabIndex:0},void 0,this.renderInboxActions(),a()("div",{style:{...N.wrapStyle,paddingBottom:t?12:8,paddingLeft:this.environment.device.isMobile?this.environment.WindowSizeStore.state.paddingLeftCSS:0,paddingRight:this.environment.device.isMobile?this.environment.WindowSizeStore.state.paddingRightCSS:0,...this.shouldShowReadNotificationStyle()&&{opacity:.7}}},void 0,a()("div",{style:this.getHeaderAndAvatarStyle()},void 0,a()("div",{className:M.FoE,style:this.avatarAndStatusDotStyle()},void 0,a()("div",{style:{marginRight:4}},void 0,e&&a()("div",{style:{marginRight:this.environment.device.isMobile?3:2}},void 0,this.renderStatusDot({opacity:1}))),this.props.icon),this.renderHeader(),this.renderSnapshotButton(),this.renderPrivate()),t&&this.renderChildren()),this.renderDivider())}renderDivider(){const{isLast:t}=this.props;if(!t)return a()("div",{style:this.getBorderBottomStyle()})}renderHeader(){const{timestamp:t,header:e}=this.props,i=(0,x.IS)(t),o=(0,x.uy)(t);return a()("div",{style:N.headerStyle},void 0,a()("div",{id:this.titleAriaId,className:M.NFf},void 0,e),a()("div",{style:{display:"flex",marginTop:4,marginBottom:this.props.children?8:4}},void 0,a()("div",{style:this.getTimeStyle(),className:M.CZG},void 0,a()(U.Z,{text:i,tooltipText:o,icon:g.C})),this.props.navigableBlockId&&this.props.rootStore&&a()(I.Z,{isLink:!0,innerStyle:this.getPathStyle(),store:w.G.createChildStore(this.props.rootStore,{table:f.iU,id:this.props.navigableBlockId}),left:a()("div",{style:this.getSeparatorDotStyle()},void 0,"·"),onClick:this.props.onBacklinkClicked})))}renderSnapshotButton(){if(!this.props.showSnapshotButton)return;if(this.props.timestamp<new Date("2018-10-26").getTime())return;const t=k.default.getIntl().formatMessage({defaultMessage:"View version for this update",id:"activitySection.viewVersionForUpdate.tooltip"});return this.props.navigableBlockId?a()(B.Z,{renderTooltip:()=>t,render:e=>s.createElement(T.Z,n()({ariaLabel:t,onClick:this.handleOpenSnapshot,icon:m.J},e))}):void 0}renderInboxActions(){const{notification:t,rootStore:e,onArchiveClicked:i,onMarkAsReadClicked:o,onMarkAsUnreadClicked:n}=this.props,{currentTab:r}=Z.ZP.state;if("mentions"===r&&t&&!t.visited)return a()("div",{style:this.getStatusLabelContainerStyle(),onMouseEnter:this.handleMouseEnterInboxActions,onMouseLeave:this.handleMouseLeaveInboxActions},void 0,a()("div",{style:this.getInboxActionsStyle()},void 0,a()(L.Z,{notification:t,rootStore:e,onArchiveClicked:i,onMarkAsReadClicked:o,onMarkAsUnreadClicked:n})))}renderStatusDot(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!this.isSeen()&&a()(_.z,{style:{...this.getStatusDotStyle(),...t}})}renderPrivate(){if(this.props.isPrivate&&!this.props.notification)return a()(O.Z,{style:{marginTop:1,marginBottom:4,marginLeft:8}})}renderChildren(){return a()("div",{className:M.nU_},void 0,this.props.children)}isSeen(){const{notification:t}=this.props;return!t||t.read}shouldShowReadNotificationStyle(){const{currentTab:t}=Z.ZP.state;return this.isSeen()&&"mentions"===t&&!this.props.showSnapshotButton&&this.props.notification}avatarAndStatusDotStyle(){return{display:"flex",alignItems:"flex-start",position:"relative"}}getHeaderAndAvatarStyle(){return{display:"flex",paddingLeft:16,paddingRight:16+("mentions"!==Z.ZP.state.currentTab||this.props.showSnapshotButton?0:L.N+5)}}getBorderBottomStyle(){return{borderBottom:`1px solid ${this.theme.regularDividerColor}`}}getPathStyle(){return{fontSize:12,color:this.theme.lightTextColor}}getTimeStyle(){return{fontSize:12,color:this.theme.lightTextColor,whiteSpace:"nowrap"}}getSeparatorDotStyle(){return{fontSize:12,color:this.theme.lightTextColor,marginLeft:4,marginRight:4}}getStatusLabelContainerStyle(){return{display:"flex",alignItems:"flex-start",marginTop:1,marginBottom:4,position:"relative",marginLeft:this.environment.device.isMobile?23:8}}getStatusDotStyle(){return{position:"absolute",opacity:this.stores.hovered.state?0:1,left:-7,top:10}}getInboxActionsStyle(){const{isMobile:t}=this.environment.device;return{transition:"opacity 100ms ease-out",opacity:t||this.stores.hovered.state?1:0,position:"absolute",right:16,top:12,zIndex:1}}}N.displayName="ActivityUpdateSection",N.wrapStyle={paddingTop:12},N.headerStyle={fontSize:14,lineHeight:1.4,flexGrow:1,minWidth:0};const V={marginTop:2,marginRight:8,flexShrink:0};function F(t){let{actor:e,environment:i}=t;const o=i.currentUser.id===e.id;return Number(e.isBot())+Number(o)}function D(t){window.__c={n:"AuthorIcon"};const{authors:e}=t,i=(0,l.O7)(),o=e.sort(((t,e)=>F({actor:t,environment:i})-F({actor:e,environment:i})))[0];return o?o.isBot()?a()(P.Z,{botValue:o,style:V,size:24}):o.isUser()?a()(R.Z,{userValue:o,style:V,size:24,avatarShouldShowShadow:!0}):o.isAgent()?null:void(0,b.t1)(o):null}function K(){return a()("div",{style:{display:"flex",backgroundColor:u.ZP.red,height:28,width:28,borderRadius:"100%",...V}},void 0,(0,p.m)({height:16,width:16,fill:u.ZP.white,marginLeft:6,marginTop:5}))}function W(){return a()("div",{style:{height:25,width:25,...V}},void 0,(0,v.f)({height:25,width:25}))}const E=N},17022:(t,e,i)=>{i.d(e,{BE:()=>p,ME:()=>c,V3:()=>u,dG:()=>h,h9:()=>v});var o=i(15145),n=i(82813),r=i(64002),a=i(50906),s=i(19719),d=i(91309),l=i(4761);function c(t){return(0,r.SK)(t,{[o.$X]:o.tY.Notification})}function h(t){const e=t.mightCloseTab??!0;g({target:"body",...t,mightCloseTab:e})}function u(t){const e=t.mightCloseTab??!0;g({target:"title",...t,mightCloseTab:e})}function p(t){g({target:"add_reaction",...t,mightCloseTab:!1})}function g(t){const{target:e,environment:i,activity:o,notification:r,source:c,tab:h,mightCloseTab:u}=t,p="notifications_tab"===c?l.ZP.state.sessionId:void 0,g="notifications_tab"===c?l.ZP.isFilteredToUnreadOnly():void 0;a.CgP(i,{target:e,activity_id:o.id,notification_id:null==r?void 0:r.id,sessionId:p,is_filtered:g,tab:h}),u&&s.pw({environment:i,target:e}),r&&n.e((0,d.mc)(i),{alreadyRead:r.read,notificationId:r.id,activityId:r.activity_id,from:e,sessionId:p})}function v(t){const{notification:e,activity:i,environment:o,tab:n}=t,r={environment:o,activity:i,notificationId:null==e?void 0:e.id,alreadyRead:Boolean(null==e?void 0:e.read),tab:n};return{onBacklinkClicked:t=>s.EQ({...r,backlinkPageId:t}),onArchiveClicked:()=>s._b(r),onMarkAsReadClicked:()=>s.cC(r),onMarkAsUnreadClicked:()=>s.u_(r),onNotificationFrameClicked:()=>s.ix(r)}}},69616:(t,e,i)=>{i.d(e,{uA:()=>O,XW:()=>L,P6:()=>U,cr:()=>V,jC:()=>N,N8:()=>_});var o=i(66897),n=i(23174),r=i.n(n),a=i(67294),s=i(5366),d=(i(41892),i(8848)),l=i(7057),c=(i(94308),i(24211)),h=(i(54368),i(77420)),u=i(19889),p=(i(97880),i(82990)),g=i(15145),v=i(76725),m=i(72126),f=i(59753),b=i(63306),y=i(10162);class S extends a.PureComponent{render(){const t=this.getPathWithoutDomain();return t.length>0?r()("div",{},void 0,this.props.left,(0,v.Z)(t,(t=>r()("span",{style:{paddingLeft:4,paddingRight:4}},`slash:${t}`,"/"))),this.props.right):null}getPathWithoutDomain(){const{getRecordValue:t,blockId:e,intl:i}=this.props,o=b.uJ({table:"block",id:e},t),n=f.om.fromGetRecordValueFn(t);return m.nn(o.reverse()).map((t=>{const e=f.kk.fromBlock(t),o=e.getRenderTitle({getRecordModel:n,userTimeZone:this.props.userTimeZone,intl:i})||i.formatMessage({id:"recordPath.untitledBlock.placeholder",defaultMessage:"Untitled"}),a=e.getRenderUrl({getRecordModel:n,pageVisitSource:g.tY.Email});return r()(y.Z,{href:`${this.props.baseUrl}${a}`,style:{display:"inline-block",maxWidth:120,verticalAlign:"top",...p.Z.textOverflowStyle}},t.id,o)}))}}const A=(0,s.injectIntl)(S);i(43593),i(17755),i(58102);a.PureComponent;class M extends a.PureComponent{constructor(){super(...arguments),this.theme=(0,d.gh)({theme:"light"})}render(){const{children:t}=this.props;return r()("table",{style:{paddingTop:12,paddingBottom:t?0:8,borderSpacing:0,width:"100%",borderCollapse:"separate"}},void 0,r()("tr",{},void 0,r()("td",{style:{verticalAlign:"top",width:M.avatarSize+6,minWidth:M.avatarSize+6,paddingTop:2}},void 0,this.props.icon),r()("td",{},void 0,this.renderHeader())),r()("tr",{},void 0,r()("td",{}),r()("td",{style:{maxWidth:400}},void 0,t&&this.renderChildren())),this.renderDivider())}renderDivider(){const{isLast:t}=this.props;if(!t)return r()("tr",{},void 0,r()("td",{colSpan:2},void 0,r()("div",{style:this.getBorderBottomStyle()})))}renderHeader(){const{timestamp:t,header:e,intl:i}=this.props,o=(0,l.Yx)(Math.min(t,Date.now()),"medium_with_time",(0,c.E2)(i),this.props.userTimeZone);return r()("div",{style:M.headerStyle},void 0,r()("div",{},void 0,e),r()("table",{style:{...this.getPathAndTimeStyle(),marginTop:4,marginBottom:this.props.children?8:4,borderSpacing:0}},void 0,r()("tr",{},void 0,r()("td",{},void 0,o),r()("td",{},void 0,this.props.navigableBlockId&&r()(A,{getRecordValue:this.props.getRecordValue,blockId:this.props.navigableBlockId,baseUrl:this.props.baseUrl,left:r()("span",{style:this.getDotStyle()},void 0,"·"),userTimeZone:this.props.userTimeZone})))))}renderChildren(){return r()("div",{},void 0,this.props.children)}getBorderBottomStyle(){return{borderBottom:`1px solid ${this.props.theme.regularDividerColor}`,marginBottom:4}}getPathAndTimeStyle(){return{fontSize:12,color:this.theme.lightTextColor,whiteSpace:"nowrap"}}getDotStyle(){return{color:this.theme.lightTextColor,marginLeft:4,marginRight:4}}}M.avatarSize=28,M.headerStyle={fontSize:14,lineHeight:1.4};const C={fontWeight:p.Z.fontWeight.semibold};(0,s.injectIntl)(M);var k=i(21202),x=i(6287),w=i(33709),Z=i(15047),T=i(70203),I=i(33929),B=i(67669),P=i(80444),R=i(57559);function U(t){const{edits:e,rootStore:i}=t,o=m.sv(e.flatMap((t=>t.authors||[])),m.Xy);return m.oA(o.map((t=>O(t,i))))}function L(t,e){const{currentUserStore:i}=P.default.state,n=null==i?void 0:i.id;return function(t,e,i,n){const a=e.find((t=>t.id===i)),d=e.map((e=>(0,o.$4)(t,e))),l={...C,...n};if(1===e.length)return r()("span",{},void 0,r()(s.FormattedMessage,a?{defaultMessage:"You",id:"activitySection.authorPhrase.forOneAuthorCurrentUser.label",values:{b:t=>r()("span",{style:l},void 0,t)}}:{defaultMessage:"<b>{author}</b>",id:"activitySection.authorPhrase.forOneAuthor.label",values:{author:d[0],b:t=>r()("span",{style:l},void 0,t)}}));if(2===e.length){if(a){const i=e.filter((t=>t!==a)).map((e=>(0,o.$4)(t,e)));return r()("span",{},void 0,r()(s.FormattedMessage,{defaultMessage:"<b>{firstAuthor}</b> and you",id:"activitySection.authorPhrase.forTwoAuthorsCurrentUser.label",values:{firstAuthor:i[0],b:t=>r()("span",{style:l},void 0,t)}}))}return r()("span",{},void 0,r()(s.FormattedMessage,{defaultMessage:"<b>{firstAuthor}</b> and <b>{secondAuthor}</b>",id:"activitySection.authorPhrase.forTwoAuthors.label",values:{firstAuthor:d[0],secondAuthor:d[1],b:t=>r()("span",{style:l},void 0,t)}}))}if(d.length>2){if(a){const i=e.filter((t=>t!==a)).map((e=>(0,o.$4)(t,e))),n=r()(s.FormattedMessage,{defaultMessage:"{numberOfOtherAuthors, plural, =0 {<b>{firstAuthor}</b>, <b>{secondAuthor}</b> and you} one {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, you and {numberOfOtherAuthors} other} other {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, you and {numberOfOtherAuthors} others}}",id:"activitySection.authorPhrase.forMoreThanTwoAuthorsCurrentUser.label",values:{numberOfOtherAuthors:i.length-2,firstAuthor:i[0],secondAuthor:i[1],b:t=>r()("span",{style:l},void 0,t)}});return r()("span",{},void 0,n)}{const t=r()(s.FormattedMessage,{defaultMessage:"{numberOfOtherAuthors, plural, one {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, and {numberOfOtherAuthors} other} other {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, and {numberOfOtherAuthors} others}}",id:"activitySection.authorPhrase.forMoreThanTwoAuthors.label",values:{numberOfOtherAuthors:d.length-2,firstAuthor:d[0],secondAuthor:d[1],b:t=>r()("span",{style:l},void 0,t)}});return r()("span",{},void 0,t)}}return r()("span",{style:l},void 0,r()(s.FormattedMessage,{defaultMessage:"Nobody",id:"activitySection.authorPhrase.forNoAuthors.label"}))}(I.default.getIntl(),t,n,e)}function O(t,e){if(t.table===u.KJ){const i=_(t.id,e);if(i)return(0,o.dp)(i)}else{const i=function(t,e){return(0,R.Kv)(e,{table:h.cZ,id:t}).getValue()}(t.id,e);if(i)return(0,o.D$)(i)}}function _(t,e){return R.U6.createChildStore(e,{table:u.KJ,id:t}).getValue()}function N(t){const{tab:e,recordId:i,recordType:o,rootStore:n,environment:r}=t;if("all"===e){if(!i)return!1;let t;return t="block"===o?R.G.createChildStore(n,{table:k.iU,id:i}):"collection"===o?R.NW.createChildStore(n,{table:x.v,id:i}):R.H2.createChildStore(n,{table:Z.bx,id:i}),(0,B.yi)(r,t)}return!1}function V(t){const{activity:e,rootStore:i}=t;if("commented"!==e.type)return;const o=i.getRecordModel({table:w.qF,id:e.discussion_id,spaceId:e.space_id});if(!o)return;const n=o.getContext();if(!n)return;const r=(0,T.VP_)(n,(t=>!(0,T.xw5)(t)||(0,T.h19)(t)===o.id));return{id:o.id,context:r}}},22649:(t,e,i)=>{i.d(e,{OD:()=>d,TL:()=>h,_W:()=>c,b9:()=>u,c3:()=>l,e9:()=>a,lS:()=>r,nP:()=>s});var o=i(82990);const n={userSelect:"text",WebkitUserSelect:"text"},r={padding:1,...n},a={display:"inline-flex",marginRight:2,verticalAlign:"text-top"},s={fontWeight:o.Z.fontWeight.semibold};function d(t){return{padding:0,paddingLeft:l(t),paddingRight:16,paddingBottom:3,...n}}function l(t){const{source:e,isMobile:i}=t;return"notifications_tab"===e?52+(i?3:2):52}function c(t){return{height:26,paddingLeft:8,paddingRight:8,color:t.mediumTextColor}}function h(t){return{display:"inline",whiteSpace:"normal",marginRight:t?3:0,wordBreak:"break-word",...s}}function u(t){return{boxShadow:t.plainButtonBoxShadow,height:26,paddingLeft:8,paddingRight:8,fontWeight:500,color:t.regularTextColor}}},8576:(t,e,i)=>{i.d(e,{N:()=>F,Z:()=>W});var o=i(10434),n=i.n(o),r=i(23174),a=i.n(r),s=i(67294),d=i(480),l=i(86628),c=i(24405),h=i(52867),u=i(90334);const p=(0,i(45238).I)("notificationRead",{viewBox:"0 0 18 18",svg:a()("path",{d:"M3.066 17.998h11.846c2.05 0 3.066-1.016 3.066-3.027V3.047c0-2.012-1.015-3.027-3.066-3.027H3.066C1.026.02 0 1.025 0 3.047V14.97c0 2.021 1.025 3.027 3.066 3.027Zm.02-1.572c-.977 0-1.514-.518-1.514-1.533V3.125c0-1.016.537-1.533 1.514-1.533h11.807c.966 0 1.513.517 1.513 1.533v11.768c0 1.015-.547 1.533-1.513 1.533Zm4.844-2.793c.322 0 .595-.156.79-.46l4.464-7.02c.117-.196.234-.41.234-.626 0-.44-.39-.722-.791-.722-.254 0-.498.156-.684.44l-4.052 6.503-1.924-2.49c-.235-.313-.45-.39-.713-.39a.759.759 0 0 0-.762.77c0 .216.088.42.225.606l2.383 2.93c.244.322.507.459.83.459Z"})});var g=i(61248),v=i(55061),m=i(21202),f=i(82990),b=i(5366),y=i(62967),S=i(19719),A=i(17659),M=i(39699),C=i(4708),k=i(12534),x=i(87279),w=i(98742),Z=i(17652),T=i(24764),I=i(57538),B=i(77080),P=i(57559),R=i(48019),U=i(31945),L=i(73063),O=i(78140),_=i(72495),N=i(26388),V=i(64369);const F=64;function D(t){window.__c={n:"InboxActionsMenu"};const{notification:e,rootStore:i,onArchiveClicked:o,onMarkAsReadClicked:r,onMarkAsUnreadClicked:F}=t,D=(0,d.O7)(),W=(0,d.Fy)(),E=(0,b.useIntl)(),H=(0,l.VK)((()=>(0,C.NP)()),[]),z=(0,l.VK)((()=>(0,C.m7)()),[]),G=(0,l.VK)((()=>!!e&&(0,v.$2)(e.type)),[e]),$=(0,l.VK)((()=>(0,Z.H)()),[]),J=(0,l.VK)((()=>{const t=null==e?void 0:e.navigable_block_id;if(t)return P.G.createChildStore(i,{table:m.iU,id:t})}),[i,e]),Y=(0,l.VK)((()=>null==J?void 0:J.getFollowSettingsKey()),[J]),j=(0,l.VK)((()=>{if(!Y)return[];if(!J)return[];const t="inbox";return B.default.checkGate("property_updates_notifications")?T.CA({followSettingsKey:Y,environment:D,blockStore:J,from:t,useCopyChanges:z}):T.Zk({followSettingsKey:Y,environment:D,blockStore:J,from:t})}),[Y,D,J,z]),X=(0,l.VK)((()=>H&&G&&j.length>0),[H,G,j]),q=(0,s.useCallback)((t=>{e&&(0,k.ZP)({event:t,context:k.Af.NotificationClick,callback:()=>{o(),M.createAndCommit({userAction:"InboxActionsMenu.handleArchive",environment:D,perform:t=>{A.aZ({notification:e,rootStore:i,transaction:t})}})}})}),[D,e,o,i]),Q=(0,s.useCallback)((t=>{e&&(0,k.ZP)({event:t,context:k.Af.NotificationClick,callback:()=>{e.read?F():r(),M.createAndCommit({userAction:"InboxActionsMenu.toggleNotificationReadStatus",environment:D,perform:t=>{A.$h({notification:e,rootStore:i,transaction:t,read:!e.read})}})}})}),[D,e,r,F,i]),tt=(0,s.useCallback)((()=>{Y&&J&&e&&S.Z8({environment:D,notificationId:e.id,pageId:J.pointer.id,isCurrentlyFollowing:(0,I.Z)(Y).following,from:"inbox"})}),[D,J,Y,e]),et=(0,c.yK)((t=>({container:{...$?{display:"flex",height:"min-content",gap:4,padding:2}:{display:"flex",height:"min-content",background:t.buttonGroupBackground,boxShadow:t.lightBoxShadow,borderRadius:4,padding:2}},button:{...$?{height:24,width:24,borderRadius:"100%",background:t.tint.regular}:{height:W.isMobile?30:26,width:W.isMobile?30:26}},iconStyle:{fill:t.mediumIconColor,padding:2},readIcon:{width:W.isMobile?21:19,height:W.isMobile?22:20},archiveIcon:{width:W.isMobile?24:23,height:W.isMobile?24:23},ellipsisIcon:{width:W.isMobile?24:23,height:W.isMobile?24:23},headerLabel:{paddingLeft:16,paddingRight:16,paddingTop:10,fontWeight:f.Z.fontWeight.semibold},footerLabel:{padding:12,backgroundColor:t.sidebarSecondaryBackground,boxShadow:`0 -1px 0 ${t.regularDividerColor}`,marginTop:1}})),[W,$]);return e?a()("div",{style:et.container},void 0,a()(N.Z,{renderTooltip:()=>e.read?a()(b.FormattedMessage,{defaultMessage:"Mark this notification as unread",id:"inboxActionsMenu.markNotificationAsUnread.tooltipMessage"}):a()(b.FormattedMessage,{defaultMessage:"Mark this notification as read",id:"inboxActionsMenu.markNotificationAsRead.tooltipMessage"}),render:t=>s.createElement(L.Z,n()({style:et.button,icon:e.read?g.F:p,iconStyle:{...et.iconStyle,...et.readIcon,...$&&{...e.read?{height:17,width:17}:{height:16,width:16}}},onClick:Q},t))}),a()(N.Z,{renderTooltip:()=>a()(b.FormattedMessage,{defaultMessage:"Archive this notification",id:"inboxActionsMenu.handleArchive.tooltipMessage"}),render:t=>s.createElement(L.Z,n()({style:et.button,icon:h.H,iconStyle:{...et.iconStyle,...et.archiveIcon,...$&&{height:18,width:18}},onClick:q},t))}),X&&a()(N.Z,{renderTooltip:()=>s.createElement(b.FormattedMessage,K.changePageNotificationSettings),render:t=>a()(U.ZP,{popupType:W.isMobile?U.Z4.SlideUp:U.Z4.Popup,alignmentToOrigin:U.vR.Start,placementToOrigin:U.pO.Bottom,render:t=>a()(O.Z,{menuType:x.og.Popup,minWidth:290,maxHeight:"50vh",maxWidth:W.isMobile?"100vw":void 0,header:a()(V.Z,{style:et.headerLabel,isSmall:!0,isSecondaryColor:!0},void 0,a()(b.FormattedMessage,z?{id:"UpdateSidebarTabUpdatesHeader.pageNotificationSettings.label",defaultMessage:"Page notification settings"}:{id:"UpdateSidebarTabUpdatesHeader.getNotifiedButton.label",defaultMessage:"Get notified for"}))},void 0,a()(R.Z,{context:{blocks:[],environment:D,publicEditMode:void 0},sections:[(0,y.$J)({key:"in-app-notifications-section",render:t=>s.createElement(_.Z,t),actions:j.map((t=>t.action))})],initialFocus:void 0,onAccept:()=>t.close()})),renderOrigin:e=>s.createElement(L.Z,n()({ariaLabel:E.formatMessage(K.changePageNotificationSettings),style:et.button,icon:u.O,iconStyle:{...et.iconStyle,...et.archiveIcon,...$&&{height:18,width:18}}},t,(0,w.Z)(e,{onClick:()=>tt()})))})})):null}const K=(0,b.defineMessages)({changePageNotificationSettings:{defaultMessage:"Change page notification settings",id:"inboxActionsMenu.notificationSettings.tooltipMessage"}}),W=s.memo(D)},10162:(t,e,i)=>{i.d(e,{Z:()=>l});var o=i(23174),n=i.n(o),r=i(67294),a=i(8848),s=i(64002);class d extends r.PureComponent{render(){const{href:t}=this.props;return n()("a",{href:(0,s.Nm)({str:t,allowNoProtocol:!0}),style:this.getStyle(),className:"notion-email-button-hover",onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave},void 0,this.props.children)}getStyle(){return{display:this.props.inline?"inline":"block",color:a.ZP.inherit,textDecoration:"none",cursor:"pointer",...this.props.style}}}const l=d},61248:(t,e,i)=>{i.d(e,{F:()=>r});var o=i(23174),n=i.n(o);i(67294);const r=(0,i(45238).I)("notificationUnread",{viewBox:"0 0 20 21.5",svg:n()("path",{d:"M0 14.521c0 1.67.146 3.057 1.143 4.053.996.996 2.402 1.153 4.062 1.153h7.588c1.67 0 3.076-.157 4.072-1.153s1.143-2.383 1.143-4.053v-6.65c-.43.147-.899.225-1.387.205-.068.02-.117.02-.185.03v6.68c0 1.015-.127 2.05-.723 2.646-.586.586-1.64.722-2.647.722H4.941c-1.005 0-2.06-.136-2.656-.722-.586-.596-.713-1.631-.713-2.647V6.768c0-1.026.127-2.08.713-2.666.596-.596 1.66-.723 2.686-.723h6.738c0-.068.01-.127.02-.186-.02-.488.058-.957.205-1.386H5.186c-1.641 0-3.047.156-4.043 1.152C.146 3.955 0 5.352 0 6.982Zm16.426-7.744c1.846 0 3.379-1.533 3.379-3.388C19.805 1.533 18.27 0 16.425 0a3.403 3.403 0 0 0-3.388 3.389 3.403 3.403 0 0 0 3.389 3.388Z"})})},8504:(t,e,i)=>{i.d(e,{J:()=>r});var o=i(23174),n=i.n(o);i(67294);const r=(0,i(45238).I)("versionHistoryThick",{viewBox:"0 0 14 14",svg:n()("path",{d:"M0 7C0 3.136 3.129 0 6.993 0C10.864 0 14 3.136 14 7C14 10.864 10.864 14 6.993 14C3.129 14 0 10.864 0 7ZM1.4 7C1.4 10.094 3.906 12.6 7 12.6C10.094 12.6 12.6 10.094 12.6 7C12.6 3.906 10.094 1.4 7 1.4C3.906 1.4 1.4 3.906 1.4 7ZM6.3 3.5H7.35V7.175L10.5 9.044L9.975 9.905L6.3 7.7V3.5Z"})})}}]);