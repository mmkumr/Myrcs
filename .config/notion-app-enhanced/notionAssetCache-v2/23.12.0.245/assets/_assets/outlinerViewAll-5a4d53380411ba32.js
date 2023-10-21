"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[4826],{13713:(e,t,i)=>{i.d(t,{B:()=>v,Z:()=>S});i(67294);var o=i(13991),n=i(480),r=i(86628),a=i(24405),s=i(66897),l=i(7057),d=i(5366),c=i(83420),u=i(33929),g=i(4023),p=i(24039),h=i(28992),m=i(72495),f=i(26388),x=i(64369),y=i(85893);function v(e){const t=e.getCreatedByPointer(),i=e.getCreatedTime(),n=e.getLastEditedByPointer(),r=e.getLastEditedTime(),a=u.default.getIntl();if(t&&i&&r&&n){const s=(0,c.ue)({parentStore:e,pointer:t}),d=(0,l.$b)(i,o.SP,a),u=(0,c.ue)({parentStore:e,pointer:n}),g=(0,l.$b)(r,o.SP,a);if(!u)return;return{createdBy:s,createdTime:d,lastEditedBy:u,lastEditedTime:g}}}const S=function(e){let{isPageMoreButton:t,hideTopBorder:i,store:o}=e;window.__c={n:"BlockAuthorInfo"};const l=(0,r.VK)((()=>v(o)),[o]),{device:c}=(0,n.O7)(),S=(0,r.VK)((()=>c.isPhone),[c]),w=u.default.getIntl(),M=(0,a.yK)((()=>({menuItem:{paddingTop:S?8:i?0:6,paddingBottom:S?8:16}})),[i,S]);return(0,y.jsx)(m.Z,{topBorder:!t&&!i,style:{paddingTop:t?0:8,paddingBottom:8},children:(0,y.jsx)(h.Z,{style:l?void 0:M.menuItem,shouldWrapTitle:!0,title:l?(0,y.jsx)(f.Z,{placement:g.u.Right,render:e=>(0,y.jsxs)("div",{...e,children:[(0,y.jsx)(x.Z,{isSmall:!0,isSecondaryColor:!0,isMobile:c.isPhone,isMultiline:!0,style:{marginBottom:4},children:(0,y.jsx)(d.FormattedMessage,{id:"blockAuthorInfo.label",defaultMessage:"Last edited by {author}",values:{author:l.lastEditedBy.asActor?(0,s.$4)(w,l.lastEditedBy):void 0}})}),(0,y.jsx)(x.Z,{isSmall:!0,isSecondaryColor:!0,isMobile:c.isPhone,children:l.lastEditedTime})]}),renderTooltip:()=>(0,y.jsx)(p.Z,{store:o,compactFormat:!0})}):void 0,loading:!l})})}},46247:(e,t,i)=>{i.d(t,{Z:()=>c});i(67294);var o=i(480),n=i(24405),r=i(84169),a=i(50906),s=i(64921),l=i(16354),d=i(85893);const c=function(e){window.__c={n:"HelpIconButtonMobile"};const t=(0,o.O7)(),i=(0,n.Fg)();return(0,d.jsx)(l.Z,{style:{display:"flex",alignSelf:"stretch",width:36,...e.isRight?{marginRight:-8}:{marginLeft:-8}},external:!0,href:e.href,onClick:()=>a.Fsx(t,{from:e.analyticsFrom}),children:(0,d.jsx)(s.Z,{mobileFeedback:!0,style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},children:(0,r.m)({width:18,marginTop:1,fill:i.lightIconColor})})})}},14694:(e,t,i)=>{i.d(t,{Z:()=>c});i(67294);var o=i(480),n=i(86628),r=i(24405),a=i(39567),s=i(50659),l=i(85893);function d(){window.__c={n:"AliasIcon"};const e=(0,r.yK)((e=>({icon:{position:"absolute",width:"50%",height:"50%",right:0,bottom:0,fill:"dark"===e.mode?e.regularTextColor:"#3E3C38",stroke:"dark"===e.mode?e.sidebarBackground:"white",strokeWidth:"dark"===e.mode?"1.85px":"1.5px"}})),[]);return(0,l.jsx)("div",{children:(0,a.Y)(e.icon)})}function c(e){var t;window.__c={n:"SidebarItem"};const i=(0,o.O7)(),a=i.device.isMobile,c=(0,n.VK)((()=>{var t,o;if(a)return i.WindowSizeStore.getSafePaddingLeftCSS("number"==typeof(null===(t=e.style)||void 0===t?void 0:t.paddingLeft)?null===(o=e.style)||void 0===o?void 0:o.paddingLeft:10)}),[i.WindowSizeStore,a,null===(t=e.style)||void 0===t?void 0:t.paddingLeft]),u=(0,r.yK)((t=>({wrapper:{...a?{display:"flex",alignItems:"center",width:"100%",minHeight:26,fontSize:16,paddingTop:8,paddingBottom:8,paddingLeft:c,paddingRight:10,userSelect:"none",WebkitUserSelect:"none",boxShadow:e.disableMobileBorder?void 0:`0 1px 0 ${t.regularDividerColor}`,marginBottom:e.shouldShowMobileMarginBottom?12:1}:{display:"flex",alignItems:"center",width:"100%",fontSize:14,minHeight:27,paddingTop:2,paddingBottom:2,marginTop:1,marginBottom:1,...(0,s.MF)()},...e.style},icon:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,flexGrow:0,width:a?28:22,height:a?24:18,marginLeft:-3,marginRight:4,position:"relative"},right:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,flexGrow:0,height:"100%",...e.rightStyle},left:{flexShrink:0,flexGrow:0,borderRadius:3,color:t.mediumTextColor,width:a?26:22,height:a?24:22,display:"flex",alignItems:"center",justifyContent:"center",marginRight:e.icon?0:8},children:{flexGrow:1,flexShrink:1,flexBasis:"auto",whiteSpace:"nowrap",minWidth:0,overflow:"hidden",textOverflow:e.right&&!a?"clip":"ellipsis",...e.childrenStyle}})),[a,c,e.disableMobileBorder,e.shouldShowMobileMarginBottom,e.style,e.rightStyle,e.icon,e.right,e.childrenStyle]);return(0,l.jsxs)("div",{role:e.role,"aria-current":e["aria-current"],"aria-expanded":e["aria-expanded"],"aria-owns":e["aria-owns"],"aria-labelledby":e["aria-labelledby"],style:u.wrapper,onFocus:e.onFocus,onBlur:e.onBlur,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,onClick:e.onClick,className:e.className,children:[e.left&&(0,l.jsx)("div",{style:u.left,children:e.left}),e.icon&&(0,l.jsxs)("div",{style:u.icon,children:[e.icon,e.isAlias&&(0,l.jsx)(d,{})]}),(0,l.jsx)("div",{style:u.children,children:e.children}),e.right&&(0,l.jsx)("div",{style:u.right,children:e.right})]})}},73358:(e,t,i)=>{i.r(t),i.d(t,{OutlinerViewAllButton:()=>c});i(67294);var o=i(480),n=i(24405),r=i(5366),a=i(50659),s=i(64921),l=i(14694),d=i(85893);function c(e){window.__c={n:"OutlinerViewAllButton"};const{isMobile:t}=(0,o.Fy)(),{isPopoverOpen:i,onClick:c,moreCount:u,inline:g}=e,p=(0,n.yK)((e=>({button:(0,a.G$)({isMobile:t}),sidebarItem:{background:i?e.buttonHoveredBackground:void 0,marginBottom:t?16:void 0,paddingLeft:t?10:20,color:e.lightTextColor},flexRow:{display:"flex",alignItems:"center",fontSize:t?16:12},inlineButton:{color:e.blueColor,display:"inline-flex",paddingLeft:2,paddingRight:2,borderRadius:3}})),[i,t]);return g?(0,d.jsx)(s.Z,{style:p.inlineButton,mobileFeedback:t,onClick:c,children:(0,d.jsx)(r.FormattedMessage,{defaultMessage:"View all ({total})",id:"viewMoreOutlinerButton.inlineOverflowButtonText",values:{total:u}})}):(0,d.jsx)(s.Z,{style:p.button,mobileFeedback:t,onClick:c,children:(0,d.jsx)(l.Z,{style:p.sidebarItem,disableMobileBorder:!0,children:(0,d.jsx)("div",{style:p.flexRow,children:(0,d.jsx)(r.FormattedMessage,{defaultMessage:"{total} more",id:"viewMoreOutlinerButton.labelv2",values:{total:u}})})})})}},96087:(e,t,i)=>{i.r(t),i.d(t,{OutlinerViewAllPopup:()=>Pe});var o=i(67294),n=i(480),r=i(86628),a=i(59054),s=i(5366),l=i(63143),d=i(50906),c=i(75018),u=i(31299),g=i(65452),p=i(35026),h=i(79689),m=i(53437),f=i(24405),x=i(53877),y=i(42875),v=i(42853),S=i(63874),w=i(35840),M=i(72126),b=i(97880),j=i(82990),C=i(33929),P=i(87279),k=i(18514),Z=i(29798),I=i(74016),B=i(64921),L=i(52275),T=i(68894),A=i(68785),O=i(78140),V=i(40721),F=i(76798),_=i(72495),R=i(45959),W=i(33411),K=i(83182),z=i(46247),E=i(21202),H=i(73744),N=i(74948),U=i(35661),q=i(84787),G=i(32163),D=i(23903),$=i(34040),Y=i(39699),J=i(98742),Q=i(4023),X=i(80444),ee=i(88632),te=i(13713),ie=i(24039),oe=i(73063),ne=i(26388),re=i(39567),ae=i(31278),se=i(85893);function le(e){window.__c={n:"RecordIconWithAliasIndicator"};const{icon:t,isAlias:i,isEmptyPage:o}=e,r=function(){const e=(0,n.O7)();return(0,f.yK)((t=>({wrap:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,flexGrow:0,width:e.device.isMobile?28:22,height:e.device.isMobile?24:18,position:"relative"},pageLinkInicator:{position:"absolute",width:"50%",height:"50%",right:0,bottom:-1,fill:"dark"===t.mode?t.regularTextColor:"#3E3C38",stroke:"dark"===t.mode?t.sidebarBackground:"white",strokeWidth:"dark"===t.mode?"1.85px":"1.5px"}})),[e])}();return(0,se.jsxs)("div",{style:r.wrap,children:[(0,se.jsx)(ae.Z,{disabled:!0,icon:t,isEmptyPage:o,size:19}),i&&(0,se.jsx)("div",{children:(0,re.Y)(r.pageLinkInicator)})]})}function de(e){window.__c={n:"PinButton"};const{isPinned:t,store:i,spaceViewStore:o,type:a}=e,s=(0,n.O7)(),l=(0,n.MO)(),c=(0,r.VK)((()=>ee.Z.state.online),[]),u=(0,r.VK)((()=>X.default.state.currentUserSettingsStore),[]),g=(0,f.yK)((e=>({pinned:{width:l?18:14,height:l?18:14,fill:e.regularIconColor},unpinned:{width:l?18:14,height:l?18:14}})),[l]);return(0,se.jsx)(oe.Z,{icon:t?$._:D.P,style:c?void 0:{cursor:"default"},iconStyle:t?g.unpinned:g.pinned,onClick:()=>{u&&Y.createAndCommit({userAction:"OutlinerViewAllMenuListItem2.onClick",environment:s,perform:e=>{t?(N.unpinSharedPage({environment:s,store:i,spaceViewStore:o,userSettingsStore:u,transaction:e}),d.An9(s,{type:a,from:"sidebar_dropdown_menu"})):(N.pinSharedPage({environment:s,store:i,spaceViewStore:o,userSettingsStore:u,transaction:e}),d.qYb(s,{type:a}))}})},disabled:!c})}const ce=o.forwardRef(((e,t)=>{window.__c={n:"OutlinerViewAllMenuListItem"};const{store:i,timestamp:o,actorPointer:a,type:s,...l}=e,d=(0,r.VK)((()=>i.getIcon()),[i]),c=(0,r.VK)((()=>i.isEmptyPage()),[i]),u=(0,n.O7)();return(0,r.VK)((()=>{(0,te.B)(i)}),[i]),(0,se.jsx)(ne.Z,{placement:Q.u.Right,render:o=>(0,se.jsx)(L.Z,{...(0,J.Z)(l,o),ref:t,title:(0,se.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,se.jsx)(F.Z,{store:i})}),icon:(0,se.jsx)(le,{icon:d,isEmptyPage:c,isAlias:!1}),right:(l.focused||e.isPinned||u.device.isMobile)&&(0,se.jsx)("div",{style:{display:"flex"},children:"shared"===e.type&&(0,se.jsx)(de,{...e})})}),renderTooltip:()=>(0,se.jsx)(ie.Z,{store:i})})}));var ue=i(27556);function ge(e){const{sections:t}=e,i=1===t.length;return t.map(((t,o)=>{let{key:n,pages:r}=t;return{key:n,items:pe({...e,pages:r}),render:e=>(0,se.jsx)(_.Z,{...e,topBorder:0!==o,title:i?void 0:he({section:n,isFirst:0===o})})}}))}function pe(e){const{environment:t,spaceStore:i,pages:o,visiblePageIds:n,onClose:r,type:a,state:s}=e,l=n.length;return o.map((o=>{let{blockId:u,timestamp:g,authorPointer:h,index:m}=o;const f=U.G.createChildStore(i,{table:E.iU,id:u}),x=n.includes(u);return{key:u,action:e=>{let{event:i}=e;const o=H.DJ(i);o||r(),c.navigateToBlock({environment:t,store:f,openInNew:o,pageVisitSource:(0,p.N)(a)}),t.device.isPhone&&N.close(),d._fo(t,{type:a,queryStringLength:s.query.length,selectedItemIndex:m})},render:t=>(0,se.jsx)(ce,{...t,...e,store:f,timestamp:g,actorPointer:h,isPinned:x,spaceId:i.id,pinnedAmount:l})}}))}function he(e){const{section:t,isFirst:i}=e;switch(t){case"today":return i?(0,se.jsx)(s.FormattedMessage,{id:"sharedWithMePopover.updatedTodaySection.label",defaultMessage:"Updated today"}):(0,se.jsx)(s.FormattedMessage,{id:"sharedWithMePopover.todaySection.label",defaultMessage:"Today"});case"past-week":return i?(0,se.jsx)(s.FormattedMessage,{id:"sharedWithMePopover.updatedPastWeekSection.label",defaultMessage:"Updated in the past week"}):(0,se.jsx)(s.FormattedMessage,{id:"sharedWithMePopover.pastWeekSection.label",defaultMessage:"Past week"});case"earlier":return i?(0,se.jsx)(s.FormattedMessage,{id:"sharedWithMePopover.updatedEarlierSection.label",defaultMessage:"Updated earlier"}):(0,se.jsx)(s.FormattedMessage,{id:"sharedWithMePopover.earlierSection.label",defaultMessage:"Earlier"});default:throw b.t1(t)}}const me=function(e){window.__c={n:"OutlinerViewAllMenuList"};const{sections:t,onClose:i,state:r,menuListStore:a,setState:s,...l}=e,d=(0,n.O7)(),c=M.Cn(t,(e=>e.pages.length)),u=Math.min(c,r.numPagesShown),g=(0,o.useMemo)((()=>{let e=u;return t.map((t=>{const i={...t,pages:t.pages.slice(0,e)};return e=Math.max(0,e-t.pages.length),i}))}),[u,t]);return(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(G.Z,{type:G.i.Vertical,initialFocus:void 0,sections:ge({...l,setState:s,state:r,environment:d,onClose:i,sections:g,menuListStore:a}),store:a}),(0,se.jsx)(q.Z,{fetchSize:u,resultSize:c,loading:!1,onLoadMore:()=>{s({query:r.query,filter:r.filter,numPagesShown:Math.min(c,u+ue.uO)})}})]})},fe=(0,s.defineMessages)({searchPlaceholder:{id:"outlinerViewAllPopover.search.placeholder",defaultMessage:"Search for shared pages…"},teamSearchPlaceholder:{id:"outlinerViewAllPopover.search.teamPlaceholder2",defaultMessage:"Search {teamName}…"},sortAllPages:{id:"outlinerViewAllPopover.sortSelect.allPages",defaultMessage:"All pages"},sortOwnedPages:{id:"outlinerViewAllPopover.sortSelect.ownedPages",defaultMessage:"Owned pages"},sortSharedPages:{id:"outlinerViewAllPopover.sortSelect.sharedPages",defaultMessage:"Shared pages"},sortMenuTitle:{id:"outlinerViewAllPopover.sortSelect.menuTitle",defaultMessage:"Sort"}});function xe(e){window.__c={n:"Header"};const t=(0,n.Fy)(),{isLoading:i,state:o,setState:a,type:s,menuListStore:l}=e,d=(0,f.yK)((e=>({iconStyle:{width:14,height:14,marginRight:6,flexGrow:0,flexShrink:0,color:e.regularIconColor}})),[]),c=(0,r.VK)((()=>"team"===e.type?e.teamStore.getName():void 0),[e]);return(0,se.jsxs)(se.Fragment,{children:["team"===e.type&&!t.isMobile&&(0,se.jsx)(ye,{teamStore:e.teamStore,state:o,setState:a}),(0,se.jsx)(_.Z,{extraTopPadding:!0,children:(0,se.jsx)(T.ZP,{style:{...t.isAndroid&&{borderBottom:"none"}},left:(0,se.jsx)(W.Z,{show:i,showDelay:500,showHold:300,render:e=>e?(0,se.jsx)(A.Z,{style:d.iconStyle}):(0,w.R)(d.iconStyle)}),showClearButton:!0,placeholder:C.default.formatMessage("team"===s?fe.teamSearchPlaceholder:fe.searchPlaceholder,{teamName:c}),focus:!t.isMobile||void 0,value:o.query,onChange:e=>{a({filter:o.filter,query:e.target.value,numPagesShown:ue.k4}),l.setState({...l.state,focus:{section:0,indexLocal:0,indexGlobal:0}})}})})]})}function ye(e){window.__c={n:"TeamHeader"};const{teamStore:t,state:i,setState:o}=e,r=(0,n.O7)(),a=(0,f.yK)((()=>({root:{display:"flex",alignItems:"center",marginLeft:12,marginRight:12,...r.device.isMobile&&{paddingTop:12}},teamName:{fontSize:12,fontWeight:j.Z.fontWeight.semibold,maxWidth:180,...j.Z.textOverflowStyle},icon:{marginRight:4},overflow:{marginLeft:4},grow:{flexGrow:1},sectionMenuItemDesktopStyle:{paddingBottom:0}})),[r]);return(0,se.jsx)(se.Fragment,{children:(0,se.jsx)(_.Z,{extraTopPadding:!0,desktopStyle:a.sectionMenuItemDesktopStyle,disableMobileBorders:!0,disableMobilePadding:!0,children:(0,se.jsxs)("div",{style:a.root,children:[(0,se.jsx)(I.p,{size:14,style:a.icon,store:t,disabled:!0}),(0,se.jsx)(F.Z,{store:t,style:a.teamName}),(0,se.jsx)("div",{style:a.grow}),(0,se.jsx)(ve,{state:i,setState:o})]})})})}function ve(e){window.__c={n:"TeamSortSelect"};const{state:t,setState:i}=e,o=(0,s.useIntl)(),n=(0,f.Fg)(),r={menuTitle:o.formatMessage(fe.sortMenuTitle),items:["all","owned","shared"],getKey:e=>e,selectedItem:t.filter,originGap:2,onSelect:e=>{i({query:t.query,filter:e,numPagesShown:ue.k4})},renderItem:e=>(0,se.jsx)(L.Z,{...e,title:Se(e.value),checkState:e.value===t.filter}),renderOrigin:e=>(0,se.jsxs)(B.Z,{...e,style:{display:"flex",fontSize:12,borderRadius:3,padding:"2px 4px",color:n.mediumIconColor},children:[Se(t.filter),(0,v.i)({marginLeft:2,marginTop:5,width:10,height:10,fill:n.mediumIconColor})]})};return(0,se.jsx)(R.Z,{...r})}function Se(e){return"all"===e?C.default.formatMessage(fe.sortAllPages):"owned"===e?C.default.formatMessage(fe.sortOwnedPages):"shared"===e?C.default.formatMessage(fe.sortSharedPages):void(0,b.t1)(e)}function we(){return(0,se.jsx)(_.Z,{topBorder:!0,disableDesktopPadding:!0,children:(0,se.jsx)(K.Z,{title:(0,se.jsx)(s.FormattedMessage,{defaultMessage:"Learn about shared pages",id:"sharedWithMePopover.learnMore.prompt"}),href:(0,k.UY)("guides.sharing"),analyticsFrom:"sharing"})})}function Me(){return(0,se.jsx)(z.Z,{href:(0,k.UY)("guides.sharing"),analyticsFrom:"sharing"})}function be(e){window.__c={n:"PageSections"};const{pages:t}=e,i=(0,o.useMemo)((()=>function(e){const t="today",i="past-week",o="earlier",n=(0,x.Uu)((0,y.r)()),r=n.valueOf(),a=n.minus({week:1}).valueOf(),s=M.vM(e,(e=>{let{timestamp:n}=e;return n>r?t:n>a?i:o}));let l=-1;return M.oA([t,i,o].map((e=>{const t=s[e];if(t&&0!==t.length)return{key:e,pages:t.map((e=>(l+=1,{...e,index:l})))}})))}(t)),[t]);return 0===i.length?(0,se.jsx)(je,{}):(0,se.jsx)(me,{...e,sections:i})}function je(){window.__c={n:"EmptyState"};const e=(0,n.Fy)(),{isMobile:t}=e,i=(0,f.yK)((e=>({placeHolderStyle:{textAlign:"center",padding:(t?64:0)+"px 20px 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:t?void 0:"100%",minHeight:t?void 0:200},iconStyle:{width:36,fill:e.lightIconColor},contentStyle:{fontSize:14,color:e.mediumTextColor,maxWidth:260}})),[t]),o=(0,se.jsx)(s.FormattedMessage,{defaultMessage:"No pages found",id:"outlinerViewAllPopover.search.noMatchesPrompt"});return(0,se.jsxs)("div",{style:i.placeHolderStyle,children:[(0,se.jsx)("div",{style:{paddingBottom:12},children:(0,S.L)(i.iconStyle)}),(0,se.jsx)("div",{style:{...i.contentStyle,fontWeight:500},children:o})]})}const Ce=function(e){window.__c={n:"OutlinerViewAllPopupContent"};const t=(0,n.O7)(),{device:i}=t,[o,a]=(0,r.AF)(e.openStore),l=(0,r.qz)(void 0,Z.Z),d=(0,f.yK)((()=>({teamNameWrap:{display:"flex",alignItems:"center"},teamName:{maxWidth:180,...j.Z.textOverflowStyle},icon:{marginRight:4}})),[]),u=(0,se.jsx)(xe,{...e,menuListStore:l});let g;return g=i.isMobile?{menuType:P.og.Modal,title:"shared"===e.type?(0,se.jsx)(s.FormattedMessage,{defaultMessage:"Shared",id:"outlinerViewAllPopover.menu.header"}):(0,se.jsxs)("div",{style:d.teamNameWrap,children:[(0,se.jsx)(I.p,{size:18,style:d.icon,store:e.teamStore,disabled:!0}),(0,se.jsx)(F.Z,{store:e.teamStore,style:d.teamName})]}),left:(0,se.jsx)(Me,{}),right:(0,se.jsx)(V.DoneMenuText,{}),onClickRight:()=>{a(!1),c.navigateToHomeTab(t)},header:u,width:"100vw"}:{menuType:P.og.Popup,width:320,header:u,footer:"shared"===e.type&&!e.state.query&&(0,se.jsx)(we,{})},(0,se.jsx)(O.Z,{...g,children:(0,se.jsx)(be,{...e,pages:e.sharedPages,menuListStore:l,onClose:()=>{a(!1)}})})};function Pe(e){window.__c={n:"OutlinerViewAllPopup"};const{allPages:t,type:i,originRef:f,userSettingsStore:x,spaceStore:y,render:v}=e,S=(0,n.O7)(),w=S.device.isMobile,M=(0,s.useIntl)(),b=y.id,j=x.id,[C,P]=o.useState(void 0),k=(0,r.VK)((()=>{var e;return Boolean(null===(e=S.mobileNative)||void 0===e?void 0:e.supportsNativeHomeOnPhone())}),[S]),Z=(0,h.L)("shared"===e.type?{type:"shared"}:{type:"team",teamId:e.teamStore.id,teamOutlinerType:e.teamOutlinerType}),[I,B]=(0,r.AF)(Z),[{status:L}]=(0,a.r5)((async()=>{await g.l({environment:S,spaceId:b,userId:j})}),[S,b,j],{debounce:u.vp,interval:I?30*l.C0:5*l.hM}),T=o.useCallback((()=>{B(!0),P(null!=f&&f.current?f.current.getBoundingClientRect():void 0),d.kVp(S,{type:i,from:w?"sidebar_mobile":"sidebar"})}),[S,i,f,w,B]),A=o.useCallback((()=>{B(!1)}),[B]);o.useEffect((()=>{!I&&k&&c.navigateToHomeTab(S)}),[S,k,I]);const O=(0,o.useMemo)((()=>({query:"",filter:"all",numPagesShown:ue.k4})),[]),[V,F]=o.useState(O),_=o.useRef(void 0);o.useEffect((()=>(I?_.current&&(clearTimeout(_.current),_.current=void 0):_.current=setTimeout((()=>{F(O)}),2*l.hM),()=>{_.current&&(clearTimeout(_.current),_.current=void 0)})),[I,O]);const R="team"===e.type?e.teamStore:void 0,W=k;return(0,se.jsx)(m.ZP,{popupType:w?m.ZP.PopupType.SlideUp:m.ZP.PopupType.Popup,hidesMobileNativeBottomBar:W,preventSlideUpTransition:W,originRect:C,alignmentToOrigin:m.ZP.Alignment.Start,placementToOrigin:m.ZP.Placement.Right,originGap:0,isFullWidthOnMobile:!0,preventScaleTransition:!0,open:I,onDismiss:A,render:()=>{const i=(0,p.l6)({allSharedPages:t,state:V,intl:M,teamStore:R}),o=(0,p.vs)({sharedPageItems:i});return(0,se.jsx)(Ce,{...e,isLoading:"pending"===L,state:V,setState:F,sharedPages:o,allSharedPageIds:t.map((e=>{let{id:t}=e;return t})),openStore:Z})},origin:v({onClick:T,isPopoverOpen:I})})}},27556:(e,t,i)=>{i.d(t,{Ke:()=>o.LazyOutlinerViewAllButton,k4:()=>n,uO:()=>r,vJ:()=>o.LazyOutlinerViewAllPopup});var o=i(77907);const n=30,r=20},83420:(e,t,i)=>{i.d(t,{TL:()=>u,nc:()=>c,ue:()=>d});var o=i(66897),n=i(54368),r=i(77420),a=i(19889),s=i(97880),l=i(35661);function d(e){const{parentStore:t,pointer:i}=e,n=(0,l.Kv)(t,i).getValue();if(n)return(0,o.LU)({table:i.table,value:n})}function c(e){const{parentStore:t,pointer:i}=e;return i.table===r.cZ?l.Qx.createChildStore(t,i):i.table===a.KJ?l.U6.createChildStore(t,i):i.table===n.y?l.fg.createChildStore(t,i):void(0,s.t1)(i)}function u(e){return e.table===r.cZ?(0,o.ON)(e.getValue()):e.table===a.KJ?(0,o.m3)(e.getValue()):e.table===n.y?(0,o.I4)(e.getValue()):void(0,s.t1)(e)}},90683:(e,t,i)=>{i.d(t,{a:()=>l});i(67294);var o=i(66897),n=i(97880),r=i(70301),a=i(45653),s=i(85893);function l(e){const{actor:t}=e,i={size:e.size??14,style:{marginRight:2,...e.style}};return(0,o.YU)(t)?(0,s.jsx)(r.Z,{botValue:t.asActor,...i}):(0,o.$S)(t)?(0,s.jsx)(a.Z,{userValue:t.asActor,...i}):(0,o.Iq)(t)?(0,s.jsx)(a.Z,{userValue:void 0,...i}):void(0,n.t1)(t)}},50659:(e,t,i)=>{i.d(t,{G$:()=>n,MF:()=>r,Z3:()=>o});function o(e){let{isMobile:t}=e;return{...!t&&{borderRadius:3}}}function n(e){let{isMobile:t}=e;return t?{}:{...o({isMobile:t}),marginLeft:4,marginRight:4,width:"calc(100% - 8px)"}}function r(){return{paddingLeft:10,paddingRight:10}}},63874:(e,t,i)=>{i.d(t,{L:()=>r});i(67294);var o=i(45238),n=i(85893);const r=(0,o.I)("paperAirplane",{viewBox:"0 0 34 34",svg:(0,n.jsx)("path",{d:"M19.6719 32.7188C20.6406 32.7188 21.3125 31.9375 21.8281 30.625L32.2188 3.45312C32.4375 2.875 32.5625 2.375 32.5625 1.9375C32.5625 1.07812 32.0312 0.546875 31.1719 0.546875C30.7344 0.546875 30.2344 0.671875 29.6562 0.890625L2.39062 11.3281C1.20312 11.7812 0.390625 12.4688 0.390625 13.4375C0.390625 14.625 1.26562 15.0781 2.64062 15.4844L14.2344 18.875L17.5938 30.375C18.0156 31.7969 18.4688 32.7188 19.6719 32.7188ZM14.7812 17.0469L3.51562 13.6719C3.0625 13.5469 2.95312 13.4375 2.95312 13.2812C2.95312 13.125 3.0625 13 3.4375 12.8594L26.6562 4.03125C27.6094 3.67188 28.5469 3.20312 29.375 2.82812C28.6094 3.4375 27.5156 4.29688 26.9062 4.90625L14.7812 17.0469ZM19.8281 30.1719C19.6719 30.1719 19.5625 30.0469 19.4375 29.6094L16.0625 18.3438L28.2031 6.20312C28.8125 5.60938 29.6875 4.5 30.3125 3.70312C29.9219 4.54688 29.4531 5.48438 29.0781 6.45312L20.25 29.6719C20.1094 30.0469 20 30.1719 19.8281 30.1719Z"})})},22686:(e,t,i)=>{i.d(t,{f:()=>r});i(67294);var o=i(45238),n=i(85893);const r=(0,o.I)("person",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M7.7832 8.00195C9.27344 8.00195 10.5381 6.67578 10.5381 4.95996C10.5381 3.28516 9.2666 2 7.7832 2C6.29297 2 5.01465 3.30566 5.02148 4.97363C5.02148 6.67578 6.28613 8.00195 7.7832 8.00195ZM3.51758 14.3594H12.0352C13.1631 14.3594 13.5527 14.0176 13.5527 13.3887C13.5527 11.6318 11.3242 9.21191 7.77637 9.21191C4.23535 9.21191 2 11.6318 2 13.3887C2 14.0176 2.38965 14.3594 3.51758 14.3594Z"})})},14734:(e,t,i)=>{i.d(t,{X:()=>r});i(67294);var o=i(45238),n=i(85893);const r=(0,o.I)("personCrossedOut",{viewBox:"0 0 44 44",svg:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{d:"M5.4857 44H0L44 8.56549V13.0061L5.4857 44Z"}),(0,n.jsx)("path",{d:"M39.8048 44H8.66491L25.6448 30.4378C26.9394 30.6489 28.1581 30.9719 29.3009 31.4067C31.5362 32.2374 33.4346 33.326 34.9964 34.6723C36.5725 36.0044 37.7761 37.4367 38.6071 38.9692C39.4525 40.5018 39.8752 41.9555 39.8752 43.3305C39.8752 43.5675 39.8517 43.7906 39.8048 44Z"}),(0,n.jsx)("path",{d:"M30.3971 16.7973C30.3971 16.8668 30.3965 16.9359 30.3952 17.0048L19.3828 25.9192C18.7467 25.7134 18.1339 25.4228 17.5446 25.0473C16.2408 24.2023 15.1876 23.0708 14.3853 21.6528C13.5972 20.2205 13.2032 18.6163 13.2032 16.8403C13.2032 15.0929 13.5972 13.5174 14.3853 12.1137C15.1876 10.7101 16.2408 9.60007 17.5446 8.78366C18.8485 7.96725 20.267 7.55905 21.8001 7.55905C23.3332 7.55905 24.7517 7.96009 26.0556 8.76218C27.3595 9.56426 28.4054 10.6671 29.1935 12.0708C29.9959 13.4601 30.3971 15.0356 30.3971 16.7973Z"})]})})},23903:(e,t,i)=>{i.d(t,{P:()=>r});i(67294);var o=i(45238),n=i(85893);const r=(0,o.I)("pin",{viewBox:"0 0 13 19",svg:(0,n.jsx)("path",{d:"M1.25 12.875h4.227v3.648c0 1.196.5 2.188.695 2.188.187 0 .687-.992.687-2.188v-3.648h4.227c.703 0 1.148-.438 1.148-1.102 0-1.648-1.32-3.304-3.359-4.109L8.617 4c.992-.648 1.93-1.383 2.328-1.914.211-.266.305-.531.305-.758 0-.476-.367-.828-.914-.828H2.008c-.555 0-.914.352-.914.828 0 .227.093.492.297.758.398.531 1.343 1.266 2.328 1.914L3.46 7.664C1.42 8.47.1 10.125.1 11.774c0 .664.446 1.101 1.149 1.101zm4.922-5.719c-.5 0-.984.047-1.438.14l.235-3.874c.008-.11-.008-.149-.086-.188-1.172-.601-2.078-1.312-2.14-1.468-.063-.102 0-.164.085-.164h6.68c.086 0 .148.062.086.164-.063.156-.969.867-2.14 1.468-.071.04-.095.079-.079.188l.234 3.875a7.177 7.177 0 00-1.437-.14zm-4.61 4.54c-.18 0-.257-.102-.226-.313.172-1.406 1.969-3.086 4.836-3.086 2.86 0 4.656 1.68 4.828 3.086.031.21-.047.312-.227.312h-9.21z"})})},34040:(e,t,i)=>{i.d(t,{_:()=>r});i(67294);var o=i(45238),n=i(85893);const r=(0,o.I)("pinFilled",{viewBox:"0 0 13 19",svg:(0,n.jsx)("path",{d:"M.102 11.773c0 .665.445 1.102 1.148 1.102h4.227v3.648c0 1.196.5 2.188.695 2.188.187 0 .687-.992.687-2.188v-3.648h4.227c.703 0 1.148-.438 1.148-1.102 0-1.648-1.32-3.39-3.515-4.187L8.46 4c1.14-.648 2.078-1.383 2.484-1.906.203-.266.305-.531.305-.766 0-.476-.367-.828-.914-.828H2.008c-.555 0-.914.352-.914.828 0 .234.093.5.297.766.406.523 1.343 1.258 2.484 1.906l-.258 3.586C1.422 8.383.102 10.125.102 11.773z"})})},35840:(e,t,i)=>{i.d(t,{R:()=>r,T:()=>n});i(67294);var o=i(45238);const n=(0,i(85893).jsx)("path",{d:"M.281 6.438c0-.875.164-1.696.492-2.461a6.484 6.484 0 011.375-2.032A6.237 6.237 0 016.64.078 6.2 6.2 0 019.11.57c.77.328 1.447.787 2.03 1.375a6.374 6.374 0 011.368 2.032c.333.765.5 1.586.5 2.46 0 .688-.107 1.342-.32 1.961a6.28 6.28 0 01-.868 1.696l3.563 3.578c.11.104.19.226.242.367.057.14.086.29.086.445 0 .22-.05.417-.149.594a1.122 1.122 0 01-1 .57c-.156 0-.307-.028-.453-.086a1.058 1.058 0 01-.382-.25l-3.586-3.585c-.5.333-1.047.596-1.641.789a6.089 6.089 0 01-1.86.28 6.237 6.237 0 01-2.468-.491 6.4 6.4 0 01-2.024-1.367A6.509 6.509 0 01.773 8.913a6.256 6.256 0 01-.492-2.476zm1.664 0c0 .65.12 1.26.36 1.828a4.775 4.775 0 001.015 1.5c.433.427.933.763 1.5 1.007a4.548 4.548 0 001.82.368c.652 0 1.261-.123 1.829-.368a4.747 4.747 0 002.508-2.507 4.567 4.567 0 00.367-1.829c0-.645-.123-1.252-.367-1.82a4.776 4.776 0 00-1.016-1.5A4.578 4.578 0 008.469 2.11a4.567 4.567 0 00-1.828-.367c-.646 0-1.253.123-1.82.367a4.667 4.667 0 00-1.5 1.008c-.433.432-.772.932-1.016 1.5a4.633 4.633 0 00-.36 1.82z"}),r=(0,o.I)("search",{viewBox:"0 0 16 16",svg:n})}}]);