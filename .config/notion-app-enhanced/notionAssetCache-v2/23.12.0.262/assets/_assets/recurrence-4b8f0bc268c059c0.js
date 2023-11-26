"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[653],{3992:(e,t,a)=>{a.r(t),a.d(t,{addRecurrence:()=>p,createRecurrenceInner:()=>f,disableRecurrence:()=>g});var r=a(40506),n=a(4615),s=a(98963),o=a(18844),i=a(6287),c=a(80444),l=a(26350),d=a(50906),u=a(96802),m=a(9953),y=a(39699);function p(e){let{environment:t,blockStore:a,recurrence:c}=e;const u=a.getAutomationId(),p=function(e){return{...e,start_date:(0,r.Io)(new Date(e.start_date))}}(c);u?function(e,t,a,r){const c=a.getParentStore();if(!c||c.table!==i.v)return;const u=a.getSpaceId(),p={table:s.cv,id:t,spaceId:u},g=l.Mz.createChildStore(a,p),f=g.getTrigger();if(!f)return;const h=g.getActionStores()[0];y.createAndCommit({environment:e,userAction:"recurrenceActions.updateRecurrence",perform:t=>{const s=v({automationId:g.id,spaceId:u,collectionPointer:c.getSpaceShardedPointer(),templatePageId:a.id});let i;h?(i=h.id,m.sW({store:h,data:s,transaction:t})):(i=(0,n.ZP)(),m.ae({environment:e,table:o.Xj,inMemoryRecordCache:g.inMemoryRecordCache,transaction:t,value:{id:i,...s}})),m.sW({store:g,data:{status:"active",trigger:{id:f.id,type:"recurrence",recurrence:r},action_ids:[i]},transaction:t})}}),d.h$X(e,{type:"updated",frequency:r.frequency})}(t,u,a,p):function(e,t,a){y.createAndCommit({environment:e,userAction:"recurrenceActions.createRecurrence",perform:r=>{f(r,e,t,a)}})}(t,a,p)}function g(e){let{environment:t,blockStore:a}=e;const r=a.getAutomationId();if(!r)return;const n={table:s.cv,id:r,spaceId:a.getSpaceId()};y.createAndCommit({environment:t,userAction:"recurrenceActions.disableRecurrence",perform:e=>{m.sW({store:(0,l.Kv)(a,n),data:{status:"disabled",run_at:void 0},transaction:e})}}),d.h$X(t,{type:"disabled"})}function f(e,t,a,r){const{currentUserRootStore:l}=c.default.state;if(!l)return;const y=a.getParentStore();if(!y||y.table!==i.v)return;if(!y.getParentBlockStore())return;const p=a.getSpaceId(),g=(0,n.ZP)(),f=(0,n.ZP)();m.ae({environment:t,table:s.cv,inMemoryRecordCache:a.inMemoryRecordCache,value:{id:g,parent_id:a.id,parent_table:a.table,alive:!0,space_id:p,status:"active",trigger:{id:(0,n.ZP)(),type:"recurrence",recurrence:r},action_ids:[f]},transaction:e}),u.FH({stores:[a],update:{automation_id:g},transaction:e}),m.ae({environment:t,table:o.Xj,inMemoryRecordCache:a.inMemoryRecordCache,transaction:e,value:{id:f,...v({automationId:g,spaceId:p,collectionPointer:y.getSpaceShardedPointer(),templatePageId:a.id})}}),d.h$X(t,{type:"created",frequency:r.frequency})}function v(e){const{automationId:t,spaceId:a,collectionPointer:r,templatePageId:n}=e;return{parent_id:t,parent_table:s.cv,type:"create_page",alive:!0,space_id:a,config:{collection:r,template_page_id:n}}}},93289:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(13991),s=a(77907),o=a(85893);const i=function(e){let{firstDayOfWeek:t,value:a,selectValue:i=!0,onChange:c,disabledDays:l}=e;window.__c={n:"DatePicker"};const d=(0,r.useMemo)((()=>new Date(a)),[a]),[u,m]=(0,r.useState)(d),y=(0,r.useRef)(a);(0,r.useLayoutEffect)((()=>{y.current!==a&&(m(new Date(a)),y.current=a)}),[a]);const p=(0,r.useCallback)(((e,t,a)=>{c(e.getTime())}),[c]);return(0,o.jsx)(s.LazyDayPicker,{locale:n.SP,className:"notion-calendar-picker",numberOfMonths:1,weekStartsOn:t,modifiers:i?{value:d}:{},showOutsideDays:!0,fixedWeeks:!0,onDayClick:p,onMonthSelected:m,disabled:l,month:u})}},41532:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var r=a(30120),n=a(67294),s=a(480),o=a(86628),i=a(24405),c=a(40506),l=a(53877),d=a(42853),u=a(53523),m=a(24211),y=a(72126),p=a(4615),g=a(81491),f=a(97880),v=a(63143),h=a(31412),b=a(3992),M=a(28020),k=a(87279),x=a(25498),I=a(26350),S=a(52275),R=a(31945),j=a(96525),w=a(88359),P=a(74194),C=a(3386),F=a(78140),Z=a(28992),_=a(32163),L=a(89728),D=a(72495),q=a(7931),A=a(64369),E=a(93289),T=a(84795),B=a(26388),O=a(85893);function W(e){window.__c={n:"TimeInput"};const t=(0,s.O7)(),{device:a}=t,o=(0,h.useIntl)(),[c,l]=(0,n.useState)(e.value),[d,u]=(0,n.useState)(void 0),m=t=>{const a=(0,T.parseTime)(t,o),n=r.ou.fromFormat(a??"","T");return n.isValid?(u(void 0),e.onUpdate({hour:n.hour,minute:n.minute})):(u("invalid"),e.onError&&e.onError()),n},y=e=>{const t=e.target.value;l(t),m(t)},p=()=>{const e=m(c);e.isValid&&l(e.toLocaleString(r.ou.TIME_SIMPLE))},g=(0,i.yK)((e=>({input:{textAlign:"right"},error:{boxShadow:e.outlineRedInputBoxShadow}})),[]);return(0,O.jsx)(B.Z,{renderTooltip:()=>function(e){if("invalid"===e)return(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Invalid time",id:"timeInput.invalid"})}(d),forceVisibleState:void 0!==d,placement:B.Z.Placement.Bottom,render:()=>(0,O.jsx)(P.Z,{type:"text",onChange:y,onSubmit:p,onBlur:p,value:c,size:1,style:{...e.style,...d?g.error:{},fontSize:a.isMobile?16:14},inputStyle:g.input})})}var z=a(62069),K=a(67149),V=a(7057),H=a(64921);function X(e){window.__c={n:"WeekdaySelector"};const{weekdays:t,onChange:a}=e,r=e.minimumSelection??0,n=(0,h.useIntl)(),s=(0,i.yK)((e=>({wrapper:{display:"flex",alignItems:"center",justifyContent:"space-between",textAlign:"center"},selectedDay:{...U,background:e.blueButtonBackground,color:e.regularInvertedTextColor},unselectedDay:{...U,background:e.accentColors.gray[50],color:e.mediumTextColor},selectedDayHover:{background:e.blueButtonHoveredBackground},unselectedDayHover:{background:e.accentColors.gray[100]},selectedDayPressed:{background:e.blueButtonPressedBackground},unselectedDayPressed:{background:e.accentColors.gray[200]}})),[]);return(0,O.jsx)(C.Z,{capture:!0,children:(0,O.jsx)("div",{style:{...s.wrapper,...e.style},children:K.Z.map(((o,i)=>(0,O.jsx)(H.Z,{...e,onClick:()=>{const e=t.includes(o)?t.length>r?t.filter((e=>e!==o)):t:[...t,o];a(e)},style:t.includes(o)?s.selectedDay:s.unselectedDay,hoveredStyle:t.includes(o)?s.selectedDayHover:s.unselectedDayHover,pressedStyle:t.includes(o)?s.selectedDayPressed:s.unselectedDayPressed,children:(0,V.er)(n,i+1)},o)))})})}const U={borderRadius:"50%",marginLeft:3,marginRight:3,height:25,width:25,fontSize:14,paddingTop:2};const N=(0,n.forwardRef)((function(e,t){const a=(0,s.O7)(),{device:k}=a,Z=(0,i.Fg)(),T=(0,h.useIntl)(),[B,K]=(0,n.useState)(void 0),[V,H]=(0,n.useState)({id:(0,p.ZP)(),start_date:r.ou.local().set({hour:0,minute:0,second:0,millisecond:0}).toMillis(),timezone:(0,l.Sv)(),hour:0,minute:0,frequency:"day",interval:1}),[U,N]=(0,n.useState)(!0),ne=e.templateStore,oe=(0,o.VK)((()=>I.Mz.fromBlockStore(ne)),[ne]),ie=(0,o.VK)((()=>void 0===ne.getAutomationId()||(null==oe?void 0:oe.isReady())),[ne,oe]),ce=(0,o.VK)((()=>(null==oe?void 0:oe.isActive())??!1),[oe]),le=(0,o.VK)((()=>null==oe?void 0:oe.getRecurrence()),[oe]);void 0===B&&ie&&(void 0!==le?(H({...le,hour:le.hour??0,minute:le.minute??0,start_date:(0,c.YL)(le.start_date)}),K(!0)):K(!1));const de=e=>{const t="week"!==e||void 0!==V.weekdays&&0!==V.weekdays.length?V.weekdays:[(a=V.start_date,(0,f.Yd)(g.RRULE_WEEKDAYS_MAP)[r.ou.fromMillis(a).weekday-1])];var a;H({...V,weekdays:t,frequency:e}),K(!0)},ue=()=>{b.addRecurrence({environment:a,blockStore:e.templateStore,recurrence:V})},me=k.isMobile?R.Z4.SlideUp:R.Z4.Popup,ye=function(){const{isMobile:e}=(0,s.Fy)();return(0,i.yK)((t=>({iconStyle:{fill:t.regularIconColor,width:e?18:16},customFrequencySelectButton:{color:t.mediumTextColor,fill:t.lightIconColor,fontWeight:500,fontSize:12},weekdayWrapper:{padding:10},inputLabel:{display:"flex",alignItems:"center",...e?{padding:"10px 14px",fontSize:16,background:t.cardBackground}:{paddingLeft:8}},intervalFrequencyLabel:{color:t.lightTextColor},intervalInputWrapper:{width:70,marginLeft:10,marginRight:10},intervalInput:{textAlign:"right"},timeInputWrapper:{width:90,marginLeft:10,marginRight:10},inputSection:{...Y,alignItems:"center",justifyContent:"flex-start",padding:8},chevron:{width:e?14:10,fill:t.lightIconColor,marginLeft:4}})),[e])}(),pe=k.isMobile?"number":"text",ge=x.m.map((e=>({key:e.frequency,action:()=>{de(e.frequency)},render:t=>(0,O.jsx)(S.Z,{...t,title:G(e.frequency)})}))),fe=(0,O.jsx)(C.Z,{capture:!0,onLeft:y.yR,onRight:y.yR,onSelectAll:y.yR,onRedo:y.yR,onUndo:y.yR,onCut:y.yR,onCopy:y.yR,onPaste:y.yR,onKeypress:y.yR,onDelete:y.yR,onBackspace:y.yR,onTab:y.yR,children:(0,O.jsx)(P.Z,{value:V.interval.toString(),style:ye.intervalInputWrapper,inputStyle:ye.intervalInput,type:pe,maxlength:3,onChange:e=>{const t=parseInt(e.target.value);(0,v.hj)(t)&&t>0&&t<=g.MAX_RECURRENCE_INTERVAL&&H({...V,interval:t})},onBlur:e=>{e.target.value=V.interval.toString()}})});return(0,O.jsx)(j.Z,{...e,disabled:e.cannotEditRecurrence,popupType:me,ref:t,stopClickPropagation:!0,renderOrigin:t=>(0,O.jsx)(w.Z,{...t,icon:(0,u.N)(ye.iconStyle),title:(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Repeat",id:"database.templatePickerItem.actionMenu.repeat"}),focused:e.focused,showExtensionArrow:k.isMobile,right:ie&&re({isActive:ce,recurrence:le,intl:T})}),render:t=>(0,O.jsx)(C.Z,{capture:!0,onEnter:y.yR,children:(0,O.jsxs)(F.Z,{...ee(t,k.isMobile,U,ue),children:[B?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(D.Z,{style:Y,children:[(0,O.jsx)(q.Z,{innerButtonStyle:{...!k.isMobile&&ye.customFrequencySelectButton},selectedTitle:J(V.frequency),renderMenuSections:r=>[{key:"repeatOptionsSection",render:e=>(0,O.jsx)(D.Z,{...e}),items:[...te({parent:r,updateFrequencyFn:e=>{de(e)}}),ae({environment:a,parent:r,templateStore:e.templateStore,onClose:()=>{K(!1),t.close()}})]}]}),!k.isMobile&&(0,O.jsx)(L.Z,{isBlue:U,isLightGray:!U,onClick:e=>{ue(),t.close()},disabled:!U,children:$})]}),(0,O.jsx)(D.Z,{style:ye.inputSection,shouldShowBottomDivider:!0,children:(0,O.jsx)(A.Z,{style:ye.inputLabel,children:Q(fe,V.frequency,ye.intervalFrequencyLabel)})}),"week"===V.frequency&&(0,O.jsx)(D.Z,{children:(0,O.jsx)(X,{style:ye.weekdayWrapper,focused:!0,weekdays:V.weekdays||[],minimumSelection:1,onChange:e=>{H({...V,weekdays:e})}})}),(0,O.jsx)(D.Z,{topBorder:!0,children:(0,O.jsx)(R.ZP,{popupType:me,renderOrigin:e=>(0,O.jsx)(w.Z,{...e,title:(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Starts",id:"database.templatePickerItem.repeatMenu.starts"}),focused:!1,showExtensionArrow:k.isMobile,right:r.ou.fromMillis(V.start_date).setLocale((0,m.E2)(T)).toLocaleString({weekday:"short",month:"short",day:"numeric",year:"numeric"})}),render:e=>(0,O.jsx)("div",{style:{padding:"18px 14px 14px"},children:(0,O.jsx)(E.Z,{firstDayOfWeek:M.AK.state,value:Math.max(V.start_date,Date.now()),onChange:t=>{H({...V,start_date:t}),e.close()},disabledDays:{before:new Date}})})})}),(0,O.jsx)(D.Z,{style:ye.inputSection,shouldShowBottomDivider:!0,children:(0,O.jsxs)(A.Z,{style:ye.inputLabel,children:[(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Create at",id:"database.templatePickerItem.repeatMenu.createAt"}),(0,O.jsx)(C.Z,{capture:!0,onLeft:y.yR,onRight:y.yR,onSelectAll:y.yR,onRedo:y.yR,onUndo:y.yR,onCut:y.yR,onCopy:y.yR,onPaste:y.yR,onKeypress:y.yR,onDelete:y.yR,onBackspace:y.yR,onTab:y.yR,children:(0,O.jsx)(W,{value:r.ou.local().set({hour:V.hour,minute:V.minute}).toLocaleString(r.ou.TIME_SIMPLE),style:ye.timeInputWrapper,onUpdate:e=>{H({...V,...e}),N(!0)},onError:()=>{N(!1)}})}),(0,O.jsx)(z.Z,{renderOrigin:e=>(0,O.jsxs)(L.Z,{...e,children:[(0,l.er)(V.timezone),(0,d.i)(ye.chevron)]}),onSelect:e=>{H({...V,timezone:e})}})]})})]}):(0,O.jsx)(_.Z,{type:_.i.Vertical,sections:[{key:"repeatOptionsSection",render:e=>(0,O.jsx)(D.Z,{...e}),items:[...ge,ae({environment:a,parent:t,templateStore:e.templateStore})]}],initialFocus:void 0}),B&&se(T,V,Z)]})})})})),Y={display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px"};const $=(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Save",id:"database.templatePickerItem.customRecurrence.save"});function G(e){switch(e){case"day":return(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Every day",id:"database.templatePickerItem.quickOptionMenuItem.day"});case"week":return(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Every week",id:"database.templatePickerItem.quickOptionMenuItem.week"});case"month":return(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Every month",id:"database.templatePickerItem.quickOptionMenuItem.month"});case"year":return(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Every year",id:"database.templatePickerItem.quickOptionMenuItem.year"});default:(0,f.t1)(e)}}function J(e){switch(e){case"day":return(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Repeat daily",id:"database.templatePickerItem.recurrenceFrequency.daily"});case"week":return(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Repeat weekly",id:"database.templatePickerItem.recurrenceFrequency.weekly"});case"month":return(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Repeat monthly",id:"database.templatePickerItem.recurrenceFrequency.monthly"});case"year":return(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Repeat yearly",id:"database.templatePickerItem.recurrenceFrequency.yearly"});default:(0,f.t1)(e)}}function Q(e,t,a){switch(t){case"day":return(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Every {interval} <label>days</label>",id:"database.templatePickerItem.recurrenceInterval.everyXdays",values:{label:e=>(0,O.jsx)("label",{style:a,children:e}),interval:e}});case"week":return(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Every {interval} <label>weeks</label>",id:"database.templatePickerItem.recurrenceInterval.everyXweeks",values:{label:e=>(0,O.jsx)("label",{style:a,children:e}),interval:e}});case"month":return(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Every {interval} <label>months</label>",id:"database.templatePickerItem.recurrenceInterval.everyXmonths",values:{label:e=>(0,O.jsx)("label",{style:a,children:e}),interval:e}});case"year":return(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Every {interval} <label>years</label>",id:"database.templatePickerItem.recurrenceInterval.everyXyears",values:{label:e=>(0,O.jsx)("label",{style:a,children:e}),interval:e}});default:(0,f.t1)(t)}}function ee(e,t,a,r){return t?{menuType:k.og.Modal,title:(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Repeat",id:"database.templatePickerItem.mobileRepeatModal.title"}),left:(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Cancel",id:"database.templatePickerItem.customRecurrence.cancel"}),right:$,rightDisabled:!a,onClickRight:()=>{a&&(r(),e.close())},onClickLeft:()=>{e.close()}}:{menuType:k.og.Popup}}function te(e){let{parent:t,updateFrequencyFn:a}=e;return x.m.map((e=>({key:e.frequency,action:()=>{a(e.frequency),t.close()},render:t=>(0,O.jsx)(S.Z,{...t,title:J(e.frequency)})})))}function ae(e){let{environment:t,parent:a,templateStore:r,onClose:n}=e;return{key:"disable",action:()=>{b.disableRecurrence({environment:t,blockStore:r}),a.close(),n&&n()},render:e=>(0,O.jsx)(S.Z,{...e,title:(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Off",id:"database.templatePickerItem.quickOptionMenuItem.off"})})}}function re(e){let{isActive:t,recurrence:a,intl:r}=e;return t?a?(0,O.jsx)(O.Fragment,{children:ne(a,r)}):void 0:(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Off",id:"database.templatePickerItem.recurrenceConfigMenuLabel.off"})}function ne(e,t){return(0,g.rruleFromRecurrence)({...e,weekdays:void 0,hour:0,minute:0}).toText((e=>{switch(e){case"every":return t.formatMessage({id:"database.templatePickerItem.repeatMenuLabel.every",defaultMessage:"every"});case"day":return t.formatMessage({id:"database.templatePickerItem.repeatMenuLabel.day",defaultMessage:"day"});case"days":return t.formatMessage({id:"database.templatePickerItem.repeatMenuLabel.days",defaultMessage:"days"});case"week":return t.formatMessage({id:"database.templatePickerItem.repeatMenuLabel.week",defaultMessage:"week"});case"weeks":return t.formatMessage({id:"database.templatePickerItem.repeatMenuLabel.weeks",defaultMessage:"weeks"});case"month":return t.formatMessage({id:"database.templatePickerItem.repeatMenuLabel.month",defaultMessage:"month"});case"months":return t.formatMessage({id:"database.templatePickerItem.repeatMenuLabel.months",defaultMessage:"months"});case"year":return t.formatMessage({id:"database.templatePickerItem.repeatMenuLabel.year",defaultMessage:"year"});case"years":return t.formatMessage({id:"database.templatePickerItem.repeatMenuLabel.years",defaultMessage:"years"});default:return e.toString()}}))}function se(e,t,a){const n=(0,g.rruleFromRecurrence)({...t,start_date:(0,c.Io)(new Date(t.start_date))}).after(new Date((0,c.Io)()));if(!n)return null;const s=r.ou.fromJSDate(n).toUTC().setLocale((0,m.E2)(e)).toLocaleString(r.ou.DATETIME_SHORT);return(0,O.jsx)(D.Z,{topBorder:!0,children:(0,O.jsx)(Z.Z,{caption:(0,O.jsx)("span",{style:{color:a.lightTextColor},children:(0,O.jsx)(h.FormattedMessage,{defaultMessage:"Next: {dates}",id:"database.templatePickerItem.recurrenceConfigMenuLabel.next",values:{dates:s}})})})})}},25498:(e,t,a)=>{a.d(t,{m:()=>s,w:()=>o});a(57658);var r=a(81491),n=a(98165);const s=[{frequency:"day",interval:1},{frequency:"week",interval:1},{frequency:"month",interval:1},{frequency:"year",interval:1}],o=e=>{const t=n.qA(e)??[],a=[];for(const r of t){if(!("block"===r.table&&!0===r.isTemplate()&&r.getFormat().automation_id&&r.id!==e.id))continue;const t=r.getAutomationStore();if(t){if(!t.isReady())return{automationStoresReady:!1};void 0!==t.getRecurrence()&&t.isDefined()&&a.push(t.getModel())}}return{automationStoresReady:!0,violatesConstraint:(0,r.templateAncestorsViolateRecurrenceNesting)(a)}}},54983:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(49085);class n extends r.default{getInitialState(){return{}}}const s=n},53523:(e,t,a)=>{a.d(t,{N:()=>s});a(67294);var r=a(45238),n=a(85893);const s=(0,r.I)("repeat",{viewBox:"0 0 16 14",svg:(0,n.jsx)("path",{d:"M1.185 7.317a.689.689 0 00.697-.704v-.601c0-1.19.806-1.942 2.064-1.942H9.23v1.573c0 .328.199.52.527.52a.66.66 0 00.403-.144l2.68-2.236c.253-.212.26-.547 0-.765L10.16.782A.62.62 0 009.757.64c-.328 0-.527.184-.527.52v1.53H4.05C1.875 2.69.48 3.9.48 5.875v.738c0 .397.308.704.705.704zm13.624-.649a.689.689 0 00-.698.704v.608c0 1.19-.806 1.942-2.064 1.942H6.763V8.35c0-.329-.199-.52-.527-.52a.66.66 0 00-.403.144l-2.68 2.242c-.26.212-.26.547 0 .759l2.68 2.242a.66.66 0 00.403.143c.328 0 .527-.191.527-.52v-1.544h5.181c2.174 0 3.569-1.21 3.569-3.179v-.745a.695.695 0 00-.704-.704z"})})}}]);