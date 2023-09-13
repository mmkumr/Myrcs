"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[6329],{28260:(t,e,o)=>{o.r(e),o.d(e,{default:()=>A});var i=o(23174),n=o.n(i),r=(o(57658),o(67294)),a=o(86628),l=o(24405),d=o(21202),c=o(63143),s=o(77907),g=o(57559),u=o(480),p=o(17693),f=o(91),h=o(5366),b=o(82990),y=o(65598),v=o(64921),m=o(31278),C=o(76798),w=o(22649);const x=(0,h.defineMessages)({open:{defaultMessage:"Open",id:"toggleButton.open"},close:{defaultMessage:"Close",id:"toggleButton.close"}});function k(t){window.__c={n:"ToggleButton"};const e=(0,u.Fy)(),o=(0,h.useIntl)(),i=(0,l.yK)((()=>{const o=t.color||"inherit",i="chevron"===t.icon?`rotateZ(${t.open?-180:0}deg)`:`rotateZ(${t.open?180:90}deg)`,n="chevron"===t.icon,r=n&&e.isMobile;return{button:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:24,height:24,borderRadius:"100%",...t.style},arrow:{width:r?14:n?12:"0.6875em",height:r?14:n?12:"0.6875em",transition:"transform 200ms ease-out",transform:i,fill:o,opacity:t.fill?1:.5}}}),[e.isMobile,t.color,t.fill,t.icon,t.open,t.style]),a=(0,r.useMemo)((()=>{switch(t.icon){case"chevron":return(0,p.A)(i.arrow);case"triangle":default:return(0,f.L)(i.arrow)}}),[t.icon,i.arrow]);return n()(v.Z,{ariaLabel:t.open?o.formatMessage(x.close):o.formatMessage(x.open),"aria-describedby":t["aria-describedby"],"aria-expanded":t.open,"aria-controls":t.open?t["aria-controls"]:void 0,style:i.button,onClick:t.onClick,onMouseDown:t.onMouseDown,disabled:t.disabled,allowShiftClick:!0,hovered:!0},void 0,t.tapArea&&n()("div",{style:{position:"absolute",opacity:0,width:t.tapArea.size,height:t.tapArea.size,top:-(t.tapArea.size-24)/2,left:-(t.tapArea.size-24)/2}}),a)}const S=function(t){window.__c={n:"NotificationGroupTitle"};const{titledRecordStore:e,getRecordModel:o,notifications:i,isNotificationGroupExpanded:r,toggleNotificationGroup:d}=t,c=(0,a.VK)((()=>e.getModel()),[e]),s=(0,a.VK)((()=>null==c?void 0:c.getRenderIcon({getRecordModel:o})),[c,o]),g=(0,a.VK)((()=>!!(0,y.NZ)(e)&&e.isEmptyPage()),[e]),u=(0,a.VK)((()=>i.filter((t=>{let{notification:e}=t;return!e.read})).length),[i]),p=1===i.length,f=(0,a.VK)((()=>{const t=i.length>1,e=1===i.length;return t||e&&0===u}),[i,u]),h=(0,l.yK)((t=>({container:{display:"flex",justifyContent:"space-between",paddingLeft:16,paddingRight:16,gap:10,...i.length>1&&{position:"sticky",top:0,zIndex:10},background:t.modalBackground,...f&&{boxShadow:"0px 1px 1px rgba(0, 0, 0, 0.03)"}},hoveredContainer:{background:t.whiteButtonHoveredBackground},pressedContainer:{background:t.whiteButtonPressedBackground},icon:{...w.e9,verticalAlign:"unset",marginRight:4},nonToggleArea:{display:"flex",flexShrink:2,minWidth:0},pageTitleAndUpdateCount:{display:"flex",flexDirection:"column",gap:4,paddingTop:10,paddingBottom:10,minWidth:0},pageTitle:{display:"flex",alignItems:"center"},recordTitle:{fontSize:14,fontWeight:b.Z.fontWeight.semibold,display:"inline",width:"100%",...b.Z.textOverflowStyle},updateCount:{color:t.mediumTextColor,fontSize:12},statusDotContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:18,width:16,opacity:u>0?1:0},toggleContainer:{display:"flex",justifyContent:"center",alignItems:"center",flexShrink:0},toggleChevron:{color:t.lightIconColor}})),[i,u,f]);return c?n()(v.Z,{onClick:d,style:h.container,hoveredStyle:h.hoveredContainer,pressedStyle:h.pressedContainer,mobileFeedback:!1,disabled:p},void 0,n()("div",{style:h.nonToggleArea},void 0,n()("div",{style:h.pageTitleAndUpdateCount},void 0,n()("div",{style:h.pageTitle},void 0,n()(m.Z,{disabled:!0,icon:s,isEmptyPage:g,size:Boolean(s)?14:18,style:h.icon}),n()(C.Z,{store:e,style:h.recordTitle,shouldWrap:!0})),!p&&n()("div",{style:h.updateCount},void 0,`${u} unread notifications`))),!p&&n()("div",{style:h.toggleContainer},void 0,n()(k,{fill:!0,isSidebar:!0,icon:"chevron",open:r,onClick:d,color:h.toggleChevron.color}))):null};function B(t){window.__c={n:"NotificationGroup"};const{notifications:e,rootStore:o,source:i,tab:c}=t,[u,p]=(0,r.useState)(!0),f=(0,r.useCallback)((()=>p(!u)),[u]),h=(0,a.VK)((()=>e.every((t=>{let{notification:e}=t;return e.read}))),[e]),b=(0,a.VK)((()=>{const t=e[0].notification.navigable_block_id;if(t)return g.G.createChildStore(o,{table:d.iU,id:t})}),[o,e]),y=(0,l.yK)((t=>({toggle:{color:t.lightIconColor},notificationGroup:{borderBottom:`1px solid ${t.regularDividerColor}`,paddingTop:16,backgroundColor:h?t.sidebarBackground:""},notificationGroupButton:{cursor:u?"default":"inherit"},flatIndentFooter:{height:10,backgroundColor:t.sidebarBackground}})),[u,h]);if(!b)return null;const v=e.map(((o,i)=>{let{notification:r,activity:a}=o;const l={source:"notifications_tab",tab:t.tab,notification:r};return n()(s.LazyActivityNotification,{activity:a,rootStore:t.rootStore,isLast:i===e.length-1,tabArgs:l},a.id)}));return n()("div",{},void 0,n()(S,{titledRecordStore:b,getRecordModel:o.getRecordModel,activity:e[0].activity,tabArgs:{source:i,tab:c,notification:e[0].notification},notifications:e,isNotificationGroupExpanded:u,toggleNotificationGroup:f}),n()("div",{},void 0,n()("div",{},void 0,u&&v)),n()("div",{style:y.flatIndentFooter}))}function M(t){const{notifications:e,rootStore:o,source:i,tab:a}=t,l=(0,c.vM)(e,(t=>{let{notification:e}=t;return e.navigable_block_id??e.id}));l.forEach(((t,e)=>{const o=[],i=new Set;t.forEach((t=>{const{activity:e}=t;"commented"!==e.type&&o.push(t);const n=e.discussion_id;void 0===n||i.has(n)||(o.push(t),i.add(n))})),l.set(e,o)}));const d=Array.from(l).map(((t,e)=>{let[r,l]=t;return n()(B,{notifications:l,rootStore:o,source:i,tab:a},`group-${l[0].activity.id}`)}));return r.createElement(r.Fragment,null,d)}M.displayName="NotificationGroups";const A=M},22649:(t,e,o)=>{o.d(e,{OD:()=>d,TL:()=>g,_W:()=>s,b9:()=>u,c3:()=>c,e9:()=>a,lS:()=>r,nP:()=>l});var i=o(82990);const n={userSelect:"text",WebkitUserSelect:"text"},r={padding:1,...n},a={display:"inline-flex",marginRight:2,verticalAlign:"text-top"},l={fontWeight:i.Z.fontWeight.semibold};function d(t){return{padding:0,paddingLeft:c(t),paddingRight:16,paddingBottom:3,...n}}function c(t){const{source:e,isMobile:o}=t;return"notifications_tab"===e?52+(o?3:2):52}function s(t){return{height:26,paddingLeft:8,paddingRight:8,color:t.mediumTextColor}}function g(t){return{display:"inline",whiteSpace:"normal",marginRight:t?3:0,wordBreak:"break-word",...l}}function u(t){return{boxShadow:t.plainButtonBoxShadow,height:26,paddingLeft:8,paddingRight:8,fontWeight:500,color:t.regularTextColor}}}}]);