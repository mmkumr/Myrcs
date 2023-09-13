"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[6603],{63594:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(49085).default.createValue(!0)},18168:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(23174),o=n.n(r),i=(n(67294),n(24405)),a=n(64921);function s(e){window.__c={n:"SegmentedItemView"};const{isFirst:t,isLast:n,isSelected:r,item:s,children:d,colors:l,onClick:u}=e,{isDisabled:c}=s,p=(0,i.yK)((e=>{const o=(null==l?void 0:l.selectedOutline)??e.blueColor,i=(null==l?void 0:l.unselectedOutline)??e.accentColors.gray[100];return{SegmentedItem:{alignItems:"center",background:r?null==l?void 0:l.selectedBackground:void 0,borderBottomLeftRadius:t?3:0,borderBottomRightRadius:n?3:0,borderColor:r?o:i,borderStyle:"solid",borderTopLeftRadius:t?3:0,borderTopRightRadius:n?3:0,borderWidth:1,cursor:c?void 0:"pointer",display:"flex",flexBasis:"50%",marginLeft:t?0:-1,padding:0,userSelect:"none",zIndex:r?10:0},Inner:{borderBottomLeftRadius:t?2:0,borderBottomRightRadius:n?2:0,borderColor:r?o:"transparent",borderStyle:"solid",borderTopLeftRadius:t?2:0,borderTopRightRadius:n?2:0,borderWidth:1,display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",padding:"12px 20px",textAlign:"center",width:"100%"}}}),[null==l?void 0:l.selectedBackground,null==l?void 0:l.selectedOutline,null==l?void 0:l.unselectedOutline,t,n,r,c]);return o()(a.Z,{ariaLabel:s.ariaLabel,"aria-pressed":r,onClick:()=>{u&&u(s.key)},style:p.SegmentedItem,disabled:c},void 0,o()("div",{style:p.Inner},void 0,d))}function d(e){window.__c={n:"SegmentedButton"};const{items:t=[],value:n,onChange:r,colors:a}=e,d=(0,i.yK)((e=>({SegmentedButton:{background:e.cardContentBackground,display:"flex",width:"100%"}})),[]);return 0===t.length?null:o()("div",{style:d.SegmentedButton},void 0,t.map(((e,i)=>o()(s,{isFirst:0===i,isLast:i===t.length-1,isSelected:e.key===n,item:e,colors:a,onClick:r},e.key,e.render()))))}},65734:(e,t,n)=>{n.d(t,{Q:()=>O});var r=n(23174),o=n.n(r),i=n(67294),a=n(480),s=n(86628),d=n(24405),l=n(3791),u=n(47425),c=n(97880),p=n(82990),m=n(5366),g=n(63594),f=n(43250),y=n(38755),h=n(62216),v=n(5059),b=n(80444),C=n(27242),M=n(78291),S=n(32617),w=n(45865);function T(e){window.__c={n:"OneLiner"};const{onlyShowAddOn:t,addOnFeature:n,subscriptionTier:r}=e,d=(0,a.O7)(),l=(0,s.VK)((()=>{const e=b.default.state.currentSpaceStore;if(e)return(0,y.rn)(d,e)}),[d]),u=(0,s.VK)((()=>!g.Z.state&&t&&"ai"===n),[t,n]);if(!l)return null;if(t&&n)switch(n){case"ai":return i.createElement(i.Fragment,null,u&&i.createElement(i.Fragment,null,o()(m.FormattedMessage,{id:"addOnUpgrade.confirmation.description.outOfFreeAiResponses",defaultMessage:"Your workspace has used all of its free AI responses."})," "),o()(m.FormattedMessage,{id:"addOnUpgrade.confirmation.description.admins",defaultMessage:"Go unlimited with Notion AI for all members in {spaceName}.",values:{spaceName:l}}));default:(0,c.t1)(n)}switch(r){case"personal":return o()(m.FormattedMessage,{id:"subscriptionUpgradeModal.oneLiner.personal",defaultMessage:"For power users who want to do even more."});case"plus":case"business":return o()(m.FormattedMessage,{id:"subscriptionUpgradeModal.oneLiner.team",defaultMessage:"Write, plan, and work together in one spot."});case"enterprise":return o()(m.FormattedMessage,{id:"subscriptionUpgradeModal.oneLiner.enterprise",defaultMessage:"Controls and support to run your company."});default:(0,c.t1)(void 0)}}function U(e){const{onlyShowAddOn:t,addOnFeature:n,subscriptionTier:r,type:i}=e;if(i===C.U.TargetSpace)return o()(m.FormattedMessage,{id:"subscriptionUpgradeModal.targetSpace.title.enterprise",defaultMessage:"Claim & Upgrade to Enterprise"});if(t&&n)switch(n){case"ai":return o()(m.FormattedMessage,{id:"subscriptionUpgradeModal.ai.addOn.title",defaultMessage:"Get more Notion AI"});default:(0,c.t1)(n)}return(0,u.QM)(r)||(0,u.iJ)(r)?null:{personal:o()(m.FormattedMessage,{id:"subscriptionUpgradeModal.title.personal",defaultMessage:"Upgrade to Personal Pro"}),plus:o()(m.FormattedMessage,{id:"subscriptionUpgradeModal.title.plus",defaultMessage:"Upgrade to Plus"}),business:o()(m.FormattedMessage,{id:"subscriptionUpgradeModal.upgradeToBusinessDialog.businessPlan",defaultMessage:"Upgrade to Business"}),enterprise:o()(m.FormattedMessage,{id:"subscriptionUpgradeModal.title.enterprise",defaultMessage:"Upgrade to Enterprise"}),team_free:o()(m.FormattedMessage,{id:"subscriptionUpgradeModal.title.teamFree",defaultMessage:"Upgrade to Team Trial"})}[r]}function O(e){window.__c={n:"CheckoutPlanHeader"};const{subscriptionTier:t,onlyShowAddOn:n,addOnFeature:r,type:u}=e,c=function(e){return(0,d.yK)((t=>({primaryTextStyle:{fontWeight:p.Z.fontWeight.bold,fontSize:20,lineHeight:1.1,marginTop:16,marginBottom:6,padding:0},secondaryTextStyle:{fontWeight:p.Z.fontWeight.regular,fontSize:16,lineHeight:1.4,marginBottom:36,width:e?"70%":void 0,color:t.mediumTextColor}})),[e])}(n),m=(0,d.Fg)(),g=(0,a.O7)(),y=(0,S.mn)(),b=(0,s.VK)((()=>{var e;return(0,h.px)(g)&&!(0,l.de)(null===(e=M.default.state.data)||void 0===e?void 0:e.addOns)&&y&&u!==C.U.TargetSpace}),[y,g,u]);return i.createElement(i.Fragment,null,(0,v.T)({tier:t,mode:m.mode,onlyShowAddOn:n}),b?o()(w.Z,{}):null,o()("h2",{style:c.primaryTextStyle,id:f.BaY},void 0,o()(U,{onlyShowAddOn:n,addOnFeature:r,subscriptionTier:t,type:u})),o()("div",{style:c.secondaryTextStyle,id:f.qr0},void 0,o()(T,{onlyShowAddOn:n,addOnFeature:r,subscriptionTier:t})))}},95381:(e,t,n)=>{n.d(t,{E:()=>w});var r=n(23174),o=n.n(r),i=n(67294),a=n(480),s=n(86628),d=n(24405),l=n(3791);const u={USD:{amount:100,currencyCode:"USD"},EUR:{amount:91,currencyCode:"EUR"},BRL:void 0};var c=n(82990),p=n(5366),m=n(54642),g=n(18514),f=n(62216),y=n(80444),h=n(78291),v=n(30751),b=n(42402),C=n(32617);const M=function(){window.__c={n:"PendingMemberChangesMessage"};const e=(0,d.yK)((e=>({discountDescription:{alignItems:"center",color:e.mediumTextColor,fontSize:12,lineHeight:c.Z.lineHeight.UISmall.desktop}})),[]);return o()("div",{style:e.discountDescription},void 0,o()(p.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.estimatedPriceWarning",defaultMessage:"The final amount due may be impacted by prorations and member changes since your last invoice."}))};var S=n(42045);function w(e){window.__c={n:"CheckoutTermsOfService"};const{products:t}=e,n=(0,d.yK)((e=>({termsOfService:{color:e.mediumTextColor,display:"flex",flexDirection:"column",fontSize:12,gap:12,lineHeight:c.Z.lineHeight.UISmall.desktop,maxWidth:255}})),[]),r=(0,s.VK)((()=>v.Z.state.selectedCurrencyCode),[]),i=t.includes("ai"),a=t.some((e=>"ai"!==e)),l=void 0!==r&&"USD"!==r;return o()("div",{style:n.termsOfService},void 0,i&&!a?o()(T,{}):null,i&&a?o()(U,{}):null,!i&&a?o()(O,{}):null,l?o()(x,{currencyCode:r}):null)}function T(){window.__c={n:"AiOnlyTerms"};const e=(0,a.O7)(),t=function(){const e=(0,a.O7)(),t=(0,s.VK)((()=>{var e;return null===(e=y.default.state.currentSpaceStore)||void 0===e?void 0:e.id}),[]),[n,r]=(0,i.useState)();return(0,i.useEffect)((()=>{async function n(){if(!t)return!1;const n=await m.getSpaceMembershipUpdates(e,{spaceId:t});if("failed"===n.type)return!1;const o=!1===n.data[0].isProcessed;r(!!o)}n()}),[e,t]),n}(),n=(0,C.mn)(),r=(0,s.VK)((()=>{var t;return(0,f.px)(e)&&!(0,l.de)(null===(t=h.default.state.data)||void 0===t?void 0:t.addOns)&&n}),[n,e]);return o()("div",{},void 0,o()(p.FormattedMessage,r?{id:"subscriptionUpgradeModal.confirmation.aiWithDiscount",defaultMessage:"By clicking “Upgrade now” you agree to the <aiTerms>Notion AI Product Specific Terms</aiTerms> and agree to receive <bold>50% off Notion AI</bold> for the next 3 months with a paid plan. <terms>See details.</terms>",values:{br:o()("br",{}),aiTerms:e=>o()(b.Z,{href:(0,g.UY)("ai.terms")},void 0,e),bold:e=>o()("b",{},void 0,e),terms:e=>o()(b.Z,{href:(0,g.UY)("terms.discounts.ai.summer.2023")},void 0,e)}}:{id:"subscriptionUpgradeModal.confirmation.aiOnly",defaultMessage:"By clicking “Upgrade now” you agree to the <aiTerms>Notion AI Product Specific Terms</aiTerms>.",values:{br:o()("br",{}),aiTerms:e=>o()(b.Z,{href:(0,g.UY)("ai.terms")},void 0,e)}}),t?o()(M,{}):null)}function U(){return o()("div",{},void 0,o()(p.FormattedMessage,{id:"subscriptionUpgradeModal.confirmation.planWithAi",defaultMessage:"By clicking “Upgrade now” you agree to the <terms>Notion Terms and Conditions</terms> and <aiTerms>Notion AI Product Specific Terms</aiTerms>.",values:{br:o()("br",{}),terms:e=>o()(b.Z,{href:(0,g.UY)("terms")},void 0,e),aiTerms:e=>o()(b.Z,{href:(0,g.UY)("ai.terms")},void 0,e)}}))}function O(){return o()("div",{},void 0,o()(p.FormattedMessage,{id:"subscriptionUpgradeModal.confirmation.planOnly",defaultMessage:"By clicking “Upgrade now” you agree to the <terms>Notion Terms and Conditions</terms>.",values:{terms:e=>o()(b.Z,{href:(0,g.UY)("terms")},void 0,e)}}))}function x(e){const{currencyCode:t}=e,n=u.USD,r=u[t];return n&&r?o()("div",{},void 0,o()(p.FormattedMessage,{id:"subscriptionUpgradeModal.confirmation.currency",defaultMessage:"<terms>Learn about FX rates</terms>. Rates will refresh throughout the billing period. Current rate: {usdMoney} ≈ {otherMoney}",values:{usdMoney:o()(S.W,{cost:n,trailingZeroDisplay:"auto"}),otherMoney:o()(S.W,{cost:r,trailingZeroDisplay:"auto"}),terms:e=>o()(b.Z,{href:(0,g.UY)("terms.currency.fxRates")},void 0,e)}})):null}},69653:(e,t,n)=>{n.d(t,{Et:()=>y,Lp:()=>u,VT:()=>f,Zr:()=>h,cv:()=>g,hr:()=>v,rF:()=>m});var r=n(480),o=n(24405),i=n(59054),a=n(31919),s=n(81886),d=n(54642),l=n(41168);function u(e){const{subscriptionTier:t,onlyShowAddOn:n,addOnFeature:r}=e;return[c({subscriptionTier:t,onlyShowAddOn:n}),p({addOnFeature:r})].filter(Boolean)}function c(e){const{subscriptionTier:t,onlyShowAddOn:n}=e;if(!n)return(0,s.K)(t)}function p(e){const{addOnFeature:t}=e;return t}function m(e){const{prices:t,quantity:n,promo:r}=e;return t.map((e=>e.getDiscountPerBillingInterval({quantity:n,promo:r}))).reduce(((e,t)=>e.plus(t)))}function g(e){const{prices:t,quantity:n,coupon:r}=e;return t.map((e=>e.getCostPerBillingInterval({quantity:n,coupon:r}))).reduce(((e,t)=>e.plus(t)))}function f(e){const{taxAmount:t,calculatingTax:n,currencyValue:r}=e,o=t&&!n?t:0;return new a.n(r,o)}function y(e,t){const n=Math.min(0,l.Et(e));return new a.n(t,-n)}function h(e){const t=(0,r.O7)(),[n]=(0,i.r5)((async()=>{if(!e)return;const n=await d.getPromoCode(t,{code:e.code});return"failed"!==n.type?n.data.promo:void 0}),[t,e]);return"resolved"===n.status?n.value:void 0}function v(){return(0,o.yK)((e=>({caption:{fontSize:12,color:e.mediumTextColor},captionContainer:{display:"flex",flexDirection:"column"},container:{marginTop:24},itemContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",lineHeight:1,minHeight:18},name:{fontSize:12,color:e.mediumTextColor},price:{fontSize:12,color:e.regularTextColor},credit:{fontSize:12,color:"#53A83F"},totalName:{fontSize:16,color:e.regularTextColor},totalPrice:{fontSize:20,lineHeight:"20px"}})),[])}},40745:(e,t,n)=>{n.d(t,{M:()=>i});var r=n(23174),o=n.n(r);n(67294);const i=(0,n(45238).I)("arrowDown",{viewBox:"0 0 16 16",svg:o()("path",{d:"M8 1.57715C7.5625 1.57715 7.25488 1.88477 7.25488 2.33594V10.8262L7.30957 12.3027L5.50488 10.2861L3.95312 8.75488C3.82324 8.625 3.63184 8.53613 3.42676 8.53613C3.0166 8.53613 2.70898 8.85059 2.70898 9.26758C2.70898 9.46582 2.78418 9.64355 2.94141 9.80762L7.44629 14.3193C7.59668 14.4697 7.79492 14.5586 8 14.5586C8.20508 14.5586 8.40332 14.4697 8.55371 14.3193L13.0586 9.80762C13.2158 9.64355 13.291 9.46582 13.291 9.26758C13.291 8.85059 12.9902 8.53613 12.5801 8.53613C12.3682 8.53613 12.1836 8.625 12.0469 8.75488L10.4951 10.2861L8.69043 12.2959L8.74512 10.8262V2.33594C8.74512 1.88477 8.44434 1.57715 8 1.57715Z"})})},78807:(e,t,n)=>{n.d(t,{l:()=>i});var r=n(23174),o=n.n(r);n(67294);const i=(0,n(45238).I)("statusCompleteGroup",{viewBox:"0 0 17 17",svg:o()("path",{d:"M8.54688 16.5078C13.0156 16.5078 16.6953 12.8281 16.6953 8.35938C16.6953 3.89844 13.0078 0.210938 8.53906 0.210938C4.07812 0.210938 0.398438 3.89844 0.398438 8.35938C0.398438 12.8281 4.07812 16.5078 8.54688 16.5078ZM8.54688 14.7188C5.02344 14.7188 2.19531 11.8828 2.19531 8.35938C2.19531 4.83594 5.01562 2 8.53906 2C12.0703 2 14.8984 4.83594 14.9062 8.35938C14.9141 11.8828 12.0703 14.7188 8.54688 14.7188ZM7.71094 12.0781C8.00781 12.0781 8.27344 11.9219 8.44531 11.6562L11.8828 6.32031C11.9922 6.14844 12.0781 5.95312 12.0781 5.77344C12.0781 5.35156 11.7109 5.07031 11.3125 5.07031C11.0547 5.07031 10.8281 5.21094 10.6562 5.49219L7.6875 10.2578L6.29688 8.51562C6.10938 8.27344 5.91406 8.17969 5.67188 8.17969C5.25781 8.17969 4.92188 8.50781 4.92188 8.92969C4.92188 9.125 5 9.30469 5.14062 9.48438L6.94531 11.6641C7.16406 11.9375 7.40625 12.0781 7.71094 12.0781Z"})})}}]);