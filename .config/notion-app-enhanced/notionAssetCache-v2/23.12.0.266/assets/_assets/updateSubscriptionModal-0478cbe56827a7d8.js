"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[3301],{1063:(e,t,i)=>{i.d(t,{X:()=>c});i(67294);var n=i(480),r=i(24405),a=i(31412),s=i(50906),o=i(35057),l=i(42402),d=i(85893);function c(e){window.__c={n:"StartupCouponInlineTextLink"};const t=(0,n.O7)(),i=(0,r.yK)((()=>({couponLink:{fontSize:12}})),[]);return(0,d.jsx)(l.Z,{href:"https://notionup.typeform.com/to/qYXezfBW",external:!0,style:i.couponLink,onClick:()=>{const i=(0,o.zt)();s.sS1(t,{tier:e.tier,currentTier:i})},children:(0,d.jsx)("div",{children:(0,d.jsx)(a.FormattedMessage,{id:"startupCouponInlineLink.text",defaultMessage:"Are you a startup?"})})})}},91493:(e,t,i)=>{i.d(t,{G:()=>o});i(67294);var n=i(31412),r=i(51133),a=i(27533),s=i(85893);function o(e){window.__c={n:"OrderSummaryAccountBalanceItem"};const t=(0,r.hr)(),{accountBalance:i}=e;return 0===i.amount?null:(0,s.jsxs)("div",{style:t.itemContainer,children:[(0,s.jsx)("div",{style:t.captionContainer,children:(0,s.jsx)("span",{style:t.name,children:(0,s.jsx)(n.FormattedMessage,{id:"subscriptionHelpers.lineItems.balance",defaultMessage:"Balance"})})}),(0,s.jsx)("span",{style:t.credit,children:(0,s.jsx)(a.W,{cost:i.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"})})]})}},59148:(e,t,i)=>{i.d(t,{T:()=>o});i(67294);var n=i(31412),r=i(51133),a=i(27533),s=i(85893);function o(e){window.__c={n:"OrderSummaryDiscountItem"};const t=(0,r.hr)(),{discount:i,promo:o}=e;return(0,s.jsxs)("div",{style:t.itemContainer,children:[(0,s.jsx)("div",{style:t.captionContainer,children:(0,s.jsx)("span",{style:t.name,children:(0,s.jsx)(n.FormattedMessage,{id:"subscriptionHelpers.lineItems.promo",defaultMessage:"Coupon"})})}),o.duration_in_months?(0,s.jsx)("span",{style:t.caption,children:(0,s.jsx)(n.FormattedMessage,{id:"subscriptionHelpers.lineItems.promo.subtitle",defaultMessage:"Valid for {durationInMonths} months",values:{durationInMonths:o.duration_in_months}})}):void 0,(0,s.jsx)("span",{style:t.credit,children:(0,s.jsx)(a.W,{cost:i.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"})})]})}},42329:(e,t,i)=>{i.d(t,{r:()=>o});i(67294);var n=i(31412),r=i(51133),a=i(27533),s=i(85893);function o(e){window.__c={n:"OrderSummarySubtotalItem"};const t=(0,r.hr)(),{subtotal:i}=e;return(0,s.jsxs)("div",{style:t.itemContainer,children:[(0,s.jsx)("div",{style:t.captionContainer,children:(0,s.jsx)("span",{style:t.name,children:(0,s.jsx)(n.FormattedMessage,{id:"subscriptionHelpers.lineItems.subTotal",defaultMessage:"Subtotal"})})}),(0,s.jsx)("span",{style:t.price,children:(0,s.jsx)(a.W,{cost:i.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"})})]})}},92041:(e,t,i)=>{i.d(t,{u:()=>l});i(67294);var n=i(31412),r=i(68785),a=i(51133),s=i(27533),o=i(85893);function l(e){window.__c={n:"OrderSummaryTaxItem"};const t=(0,a.hr)(),{tax:i,calculatingTax:l}=e;return(0,o.jsxs)("div",{style:t.itemContainer,children:[(0,o.jsx)("div",{style:t.captionContainer,children:(0,o.jsx)("span",{style:t.name,children:(0,o.jsx)(n.FormattedMessage,{id:"subscriptionHelpers.lineItems.taxIfApplicable.title",defaultMessage:"Tax if applicable"})})}),(0,o.jsx)("span",{style:t.price,children:l?(0,o.jsx)(r.Z,{}):0===i.amount?"—":(0,o.jsx)(s.W,{cost:i.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"})})]})}},52836:(e,t,i)=>{i.r(t),i.d(t,{default:()=>xe});var n=i(67294),r=i(480),a=i(86628),s=i(24405),o=i(97880),l=i(82990),d=i(31412),c=i(61519),u=i(29497),p=i(7184),m=i(64891),g=i(36797),x=i(88893),y=i(25692),h=i(91624),f=(i(21703),i(50906)),b=i(18168),j=i(85893);function v(){return(0,s.yK)((e=>({discountText:{color:e.invoiceGreen,fontSize:14},icon:{width:16,height:16},mainTextSelected:{fontWeight:l.Z.fontWeight.medium,color:e.regularTextColor,fontSize:14},mainTextUnselected:{color:e.mediumTextColor,fontSize:14},priceText:{fontSize:12,color:e.mediumTextColor,marginTop:2},row:{display:"flex",alignItems:"center",justifyContent:"center",gap:4,lineHeight:"14px"},sectionHeader:{display:"flex",alignItems:"center",marginBottom:11,fontSize:11,fontWeight:l.Z.fontWeight.semibold,color:e.mediumTextColor}})),[])}function S(e){window.__c={n:"Section"};const{header:t,children:i}=e,n=v();return(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{style:n.sectionHeader,children:t}),i]})}function M(e){window.__c={n:"BillingIntervalOption"};const{isSelected:t,billingInterval:i}=e,n=v(),r=t?n.mainTextSelected:n.mainTextUnselected;let a;switch(i){case"month":a=(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.billingPeriodSection.monthly",defaultMessage:"Monthly"});break;case"year":a=(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.billingPeriodSection.yearly",defaultMessage:"Yearly"});break;default:throw new Error(`Unsupported billing interval: ${i}`)}return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{style:n.row,children:[(0,j.jsx)("div",{style:r,children:a}),"year"===i?(0,j.jsx)("div",{style:n.discountText,children:(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.billingPeriodSection.yearlyDiscount",defaultMessage:"{percent}% off",values:{percent:20}})}):null]})})}function C(e){window.__c={n:"SpaceSubscriptionOrderOptions"};const t=(0,r.O7)(),[i,s]=(0,a.VK)((()=>{const e=y.Z.state;return[e.temporaryBillingInterval,e.billingInterval]}),[]),o=(0,n.useMemo)((()=>[{key:"month",isDisabled:"month"===s,render:()=>(0,j.jsx)(M,{isSelected:"month"===i,billingInterval:"month"})},{key:"year",isDisabled:"year"===s,render:()=>(0,j.jsx)(M,{isSelected:"year"===i,billingInterval:"year"})}]),[s,i]);return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(S,{header:(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.billingPeriodSection.header",defaultMessage:"Billing period"}),children:(0,j.jsx)(b.Z,{items:o,value:i,onChange:e=>{f.b0I(t,{billingInterval:e}),y.Z.update((t=>({...t,temporaryBillingInterval:e})))}})})})}var w=i(13991),I=i(7057),T=i(69651),F=i(77058),_=i(42853),B=i(16880),k=i(3791),Z=i(64921),O=i(68785),P=i(22398),W=i(1063),U=i(78291),D=i(39343),V=i(22616),z=i(40670),A=i(70060),E=i(51133),H=i(33493),L=i(64717),K=i(38461),R=i(42922);function X(){return(0,j.jsx)(d.FormattedMessage,{id:"subscriptionUpdateModal.confirmationButton",defaultMessage:"Confirm changes"})}function G(e){window.__c={n:"MidtermConfirmationButton"};const{disabled:t,onClickUpgrade:i}=e,n=(0,s.yK)((e=>({button:{width:"100%",height:40,marginTop:20}})),[]);return(0,j.jsx)(R.Z,{disabled:t,style:n.button,onClick:i,children:(0,j.jsx)(X,{})})}var q=i(27533),Y=i(91493),$=i(59148),Q=i(42329),N=i(92041);function J(e){window.__c={n:"SpaceSubscriptionUpdateOrderSummary"};const{data:t,subscriptionTier:i,temporaryBillingInterval:n,calculatingTax:s,taxAmount:o,promo:l}=e,c=pe(),u=(0,r.O7)(),p=(0,P.mn)(),g=(0,a.VK)((()=>{var e;return(0,A.px)(u)&&!(0,k.de)(null===(e=U.default.state.data)||void 0===e?void 0:e.addOns)&&p}),[p,u])?"ai_fifty_percent":void 0,y=E.Zr(l),{availableCurrencyCodes:h,selectedCurrencyCode:f}=(0,a.VK)((()=>({availableCurrencyCodes:H.Z.availableCurrencyCodes,selectedCurrencyCode:H.Z.selectedCurrencyCode})),[]),b=E.Lp(e),v=(0,a.VK)((()=>b.map((e=>H.Z.getPrice(u,(t=>t.product===e&&t.billingInterval===n))))),[u,b,n]);if(v.some((e=>!e.isLoaded)))return(0,j.jsx)(O.Z,{});const S=v.map((e=>e.result)).filter(Boolean);if(!S||0===S.length)return null;const M=S[0].unitAmount.currencyValue,C=x.su(t),w=E.cv({prices:S,quantity:C,coupon:g}),I=E.VT({calculatingTax:s,taxAmount:o,currencyValue:M}),T=E.rF({prices:S,quantity:C,promo:y}),F=E.Et(t,M),_=w.plus(I).minus(T).minus(F),B=_.amount<0?_.withMultipliedAmount(0):_;return(0,j.jsxs)("div",{style:c.container,children:[(0,j.jsxs)("label",{style:c.header,children:[(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionUpdateModal.orderSummary.header",defaultMessage:"Order summary"}),(0,j.jsx)(K.V,{availableCurrencyCodes:h,from:"update_modal",onSelectCurrency:V.y,selectedCurrencyCode:f})]}),(0,j.jsx)(ee,{data:t}),(0,j.jsx)(re,{totalAmount:B}),(0,j.jsx)(ae,{prices:S,data:t,subscriptionTier:i,totalAmount:B,coupon:g,subtotal:w,tax:I,calculatingTax:s,discount:T,promo:y,accountBalance:F}),(0,j.jsx)(G,{disabled:!1,onClickUpgrade:async()=>m.Mg(u,g)}),(0,j.jsx)(L.E,{products:b})]})}function ee(e){window.__c={n:"ImmediateOrPendingChangeMessage"};const{storeState:t}=(0,a.VK)((()=>({storeState:y.Z.state})),[]);if(!t.open)return null;const{view:i,billingInterval:n,temporaryBillingInterval:r}=t;if((0,z.rO)(i,n,r))return(0,j.jsx)(te,{view:i,billingInterval:n,temporaryBillingInterval:r});if((0,z.Z_)(i,n,r)){const t=(0,x.XX)(e.data);return t?(0,j.jsx)(ne,{periodEnd:t.periodEnd}):null}return null}function te(e){window.__c={n:"EffectiveToday"};const{view:t,billingInterval:i,temporaryBillingInterval:n}=e,r=pe();return(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{style:r.topSection,children:[(0,j.jsx)("div",{style:r.checkmarkSection,children:(0,F.$)(r.checkmark)}),(0,j.jsx)("label",{style:r.subTitle,children:(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.effectiveToday.header",defaultMessage:"Effective today"})})]}),(0,j.jsx)("div",{style:r.subTitleDescription,children:(0,j.jsx)(ie,{view:t,billingInterval:i,temporaryBillingInterval:n})})]})}function ie(e){window.__c={n:"EffectiveTodaySubtitleDescription"};const{view:t,billingInterval:i,temporaryBillingInterval:n}=e,r=(0,a.VK)((()=>U.default.state.data),[]),s=r&&x.XX(r);return(0,D.Fk)(s)&&i!==n&&"year"===n?(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.trialWillChangeToday.message",defaultMessage:"Updating to yearly will end your trial and upgrade you immediately."}):(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.planWillChangeToday.message",defaultMessage:"{planType, select, add_ons {Add-on} other {Plan}} will change today",values:{planType:t}})}function ne(e){window.__c={n:"PendingChange"};const t=pe();return(0,j.jsxs)("div",{style:t.pendingChangesContainer,children:[(0,j.jsxs)("div",{style:t.topSection,children:[(0,j.jsx)("div",{style:t.checkmarkSection,children:(0,T.C)(t.calendar)}),(0,j.jsx)("label",{style:t.subTitle,children:(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.pendingChange.header",defaultMessage:"Effective {periodEnd}",values:{periodEnd:(0,I.Yx)(e.periodEnd,"medium",w.SP)}})})]}),(0,j.jsx)("div",{style:t.subTitleDescription,children:(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.planWillChangeAtTheEnd.message",defaultMessage:"Billing period will change at the end of your billing period."})})]})}function re(e){window.__c={n:"TotalPriceToggle"};const{totalAmount:t}=e,i=pe(),n=(0,r.O7)(),{storeState:s}=(0,a.VK)((()=>({storeState:y.Z.state})),[]);if(!s.open)return null;if("billing_interval"===s.view&&s.billingInterval===s.temporaryBillingInterval)return(0,j.jsxs)("div",{style:i.totalPriceContainer,children:[(0,j.jsx)("div",{style:i.totalPriceHeader,children:(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionUpdateOrderSummary.total",defaultMessage:"Total"})}),(0,j.jsx)("div",{style:i.totalPrice,children:"-"})]});const o=s.isExpandedView,l="year"===s.billingInterval&&"month"===s.temporaryBillingInterval;return(0,j.jsx)(Z.Z,{onClick:()=>o?m.OT(n):m.bX(n),style:i.totalPriceContainer,children:l?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{style:i.estimatedFuturePriceHeader,children:(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionUpdateOrderSummary.estimatedFuturePrice",defaultMessage:"Estimated future price"})}),(0,j.jsxs)("div",{style:i.estimatedFuturePrice,children:[(0,j.jsx)(q.W,{cost:t.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"}),(0,j.jsx)("div",{style:i.estimatedFuturePriceButton,children:o?(0,B.R)(i.estimatedFuturePriceIcon):(0,_.i)(i.estimatedFuturePriceIcon)})]})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{style:i.totalPriceHeader,children:(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionUpdateOrderSummary.estimatedPrice",defaultMessage:"Estimated price"})}),(0,j.jsxs)("div",{style:i.totalPrice,children:[(0,j.jsx)(q.W,{cost:t.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"}),(0,j.jsx)("div",{style:i.button,children:o?(0,B.R)(i.icon):(0,_.i)(i.icon)})]})]})})}function ae(e){window.__c={n:"ExpandedBillingDetails"};const{prices:t,data:i,subscriptionTier:n,totalAmount:r,subtotal:s,tax:o,calculatingTax:l,discount:d,promo:c,coupon:u,accountBalance:p}=e,m=pe(),{storeState:g}=(0,a.VK)((()=>({storeState:y.Z.state})),[]);return g.open&&g.isExpandedView?(0,j.jsxs)("div",{style:m.container,children:[(0,j.jsx)(se,{prices:t,data:i,coupon:u}),x.Fu(n)&&(0,j.jsx)(W.X,{tier:n}),(0,j.jsx)(ce,{subtotal:s,tax:o,calculatingTax:l,discount:d,promo:c,coupon:u,accountBalance:p}),(0,j.jsx)(ue,{totalAmount:r})]}):null}function se(e){const{data:t,prices:i,coupon:n}=e;return(0,j.jsx)(j.Fragment,{children:i.map((e=>(0,j.jsx)(oe,{price:e,data:t,coupon:n},e.externalId)))})}function oe(e){window.__c={n:"SpaceSubscriptionGrossOrderItem"};const{price:t,data:i,coupon:n}=e,r=x.su(i),a=t.getCostPerBillingInterval({quantity:r,coupon:n}),o=(0,s.yK)((e=>({container:{display:"flex",justifyContent:"space-between"},item:{},title:{fontSize:14,marginBottom:4,lineHeight:1},subtitle:{color:e.mediumTextColor,fontSize:12},price:{fontSize:14}})),[]);return(0,j.jsxs)("div",{style:o.container,children:[(0,j.jsxs)("div",{style:o.item,children:[(0,j.jsx)("div",{style:o.title,children:(0,j.jsx)(le,{price:t})}),(0,j.jsx)("div",{style:o.subtitle,children:(0,j.jsx)(de,{price:t,data:i,coupon:n})})]}),(0,j.jsx)("div",{style:o.price,children:(0,j.jsx)(q.W,{cost:a.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"})})]})}function le(e){const{price:t}=e;switch(t.product){case"free":case"student":return null;case"ai":return(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionUpdateModal.orderSummary.ai.addOn",defaultMessage:"Notion AI"});case"personal":return(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionUpdateModal.orderSummary.singlePlayerPlusPlan",defaultMessage:"Plus plan with a 1-member limit"});case"plus":return(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionUpdateModal.orderSummary.plusPlan",defaultMessage:"Plus plan"});case"business":return(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionUpdateModal.orderSummary.businessPlan",defaultMessage:"Business plan"});case"enterprise":return(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionUpdateModal.orderSummary.enterprisePlan",defaultMessage:"Enterprise plan"});default:(0,o.t1)(t.product)}}function de(e){const{price:t,data:i,coupon:n}=e,r=x.su(i),a=x.GD(t.billingInterval),s=t.getMonthlyUnitCost(n),l=(0,j.jsx)(q.W,{cost:s.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"});switch(a){case"year":return(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionUpdateModal.orderSummary.planSubtitle.billedYearly",defaultMessage:"{price} / member / month × {numberOfMembers, plural, one {# member} other {# members}}{br}Billed yearly",values:{br:(0,j.jsx)("br",{}),price:l,numberOfMembers:r}});case"month":return(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionUpdateModal.orderSummary.planSubtitle.billedMonthly",defaultMessage:"{price} / member / month × {numberOfMembers, plural, one {# member} other {# members}}{br}Billed monthly",values:{br:(0,j.jsx)("br",{}),price:l,numberOfMembers:r}});default:(0,o.t1)(a)}}function ce(e){const{subtotal:t,tax:i,calculatingTax:n,discount:r,promo:a,coupon:s,accountBalance:o,style:l}=e;return(0,j.jsxs)("div",{style:l,children:[(0,j.jsx)(Q.r,{subtotal:t}),(0,j.jsx)(N.u,{tax:i,calculatingTax:n}),a&&!s?(0,j.jsx)($.T,{discount:r,promo:a}):void 0,(0,j.jsx)(Y.G,{accountBalance:o})]})}function ue(e){const{totalAmount:t}=e,i=E.hr();return(0,j.jsxs)("div",{style:i.itemContainer,children:[(0,j.jsx)("div",{style:i.captionContainer,children:(0,j.jsx)("span",{style:i.totalName,children:(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionUpdateModal.orderSummary.totalForToday",defaultMessage:"Total for today"})})}),(0,j.jsx)("span",{style:i.totalPrice,children:(0,j.jsx)(q.W,{cost:t.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"})})]})}function pe(){return(0,s.yK)((e=>({container:{display:"flex",flexDirection:"column",gap:16,width:"100%"},header:{alignItems:"center",color:e.regularTextColor,display:"flex",fontSize:16,fontWeight:l.Z.fontWeight.semibold,gap:8,marginBottom:11,lineHeight:"22px"},totalPriceContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",lineHeight:1,padding:4,borderRadius:4,margin:-4},totalPriceHeader:{fontSize:14,color:e.regularTextColor,fontWeight:l.Z.fontWeight.semibold},totalPrice:{fontSize:20,color:e.regularTextColor,fontWeight:l.Z.fontWeight.semibold,display:"flex",alignItems:"center"},estimatedFuturePriceHeader:{fontSize:14,color:e.regularTextColor},estimatedFuturePrice:{fontSize:14,color:e.regularTextColor,display:"flex",alignItems:"center"},estimatedFuturePriceIcon:{width:12,height:12},estimatedFuturePriceButton:{marginLeft:4},icon:{width:18,height:18},button:{marginLeft:6},subTitle:{fontSize:14,color:e.regularTextColor,fontWeight:l.Z.fontWeight.medium},subTitleDescription:{fontSize:14,color:e.mediumTextColor,fontWeight:l.Z.fontWeight.regular},couponLink:{fontSize:12},checkmark:{width:18,height:18,marginTop:2,color:e.blueColor},checkmarkSection:{paddingRight:6},calendar:{width:18,height:18,marginTop:2,color:e.regularTextColor},topSection:{display:"flex"},pendingChangesContainer:{width:260}})),[])}function me(e){window.__c={n:"SpaceSubscriptionUpdateModalContent"};const{data:t}=e,{isMobile:i}=(0,r.Fy)(),{storeState:n}=(0,a.VK)((()=>({storeState:y.Z.state})),[]);if(!t||!n.open)return null;const s="billing_interval"===n.view?n.temporaryBillingInterval:n.billingInterval;return s?(0,j.jsx)(u.CT,{showDismissButton:!0,main:(0,j.jsxs)(u.T1,{width:i?"fill":400,gap:24,children:[(0,j.jsx)(ge,{storeState:n}),(0,j.jsx)(g.p,{data:t})]}),sidebar:(0,j.jsx)(u.T6,{width:i?"fill":300,children:(0,j.jsx)(J,{data:t,promo:void 0,subscriptionTier:n.temporarySubscriptionTier??n.subscriptionTier,onlyShowAddOn:"add_ons"===n.view,taxAmount:n.taxAmount,calculatingTax:n.calculatingTax,temporaryBillingInterval:s,addOnFeature:n.addOnFeature})})}):null}function ge(e){window.__c={n:"ModalContent"};const{storeState:t}=e,i=(0,s.yK)((e=>({primaryTextStyle:{fontWeight:l.Z.fontWeight.bold,fontSize:20,lineHeight:1.1},modal:{background:e.popoverBackground,borderRadius:12,width:750,maxHeight:760,display:"flex"},modalContent:{flex:1,maxWidth:"60%",backgroundColor:e.modalBackground,display:"flex",flexDirection:"column",position:"relative",borderRadius:"12px 0 0 12px"},modalContentBody:{padding:"36px 42px 0px 42px",display:"flex",flexDirection:"column",maxWidth:400},shorterModalContentBody:{padding:"24px 42px 0px 42px",display:"flex",flexDirection:"column",maxWidth:400},billingIntervalBody:{display:"flex",flexDirection:"column",rowGap:24},sidebar:{backgroundColor:e.sidebarSecondaryBackground},modalContentSidebar:{flex:1,borderLeft:`1px solid ${e.lightDividerColor}`,padding:20,display:"flex",flexDirection:"column"}})),[]);let n=null;const r=t.view;switch(r){case"add_ons":n=(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{children:(0,j.jsx)(h.Q,{subscriptionTier:t.subscriptionTier,addOnFeature:t.addOnFeature,onlyShowAddOn:!0})}),(0,j.jsx)(c.Z,{size:0})]});break;case"billing_interval":n=(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{style:i.billingIntervalBody,children:(0,j.jsx)("div",{style:i.primaryTextStyle,children:(0,j.jsx)(d.FormattedMessage,{id:"spaceSubscriptionUpdateModal.billingInterval.title",defaultMessage:"Change billing period"})})}),(0,j.jsx)(C,{}),(0,j.jsx)(c.Z,{size:0})]});break;case"plans":if(!t.temporarySubscriptionTier)return null;n=(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{children:(0,j.jsx)(h.Q,{subscriptionTier:t.temporarySubscriptionTier,onlyShowAddOn:!1})}),(0,j.jsx)(c.Z,{size:0})]});break;case"default":n=(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{children:(0,j.jsx)(h.Q,{subscriptionTier:t.subscriptionTier,onlyShowAddOn:!1})}),(0,j.jsx)(c.Z,{size:0})]});break;default:(0,o.t1)(r)}return n}const xe=function(e){window.__c={n:"SpaceSubscriptionUpdateModal"};const{data:t}=e,i=(0,r.O7)(),n=(0,a.VK)((()=>y.Z.state),[]);return t&&n.open&&(0,x.GJ)(t)?(0,j.jsx)(p.c,{allowDismissByEscape:!1,isOpen:!0,onDismiss:()=>m.cM(i),children:(0,j.jsx)(me,{data:e.data})}):null}},77058:(e,t,i)=>{i.d(t,{$:()=>a});i(67294);var n=i(45238),r=i(85893);const a=(0,n.I)("checkmark",{viewBox:"0 0 20 20",svg:(0,r.jsx)("path",{d:"M10.0693 18.166C14.7759 18.166 18.6606 14.2812 18.6606 9.58301C18.6606 4.88477 14.7676 1 10.061 1C5.36279 1 1.48633 4.88477 1.48633 9.58301C1.48633 14.2812 5.37109 18.166 10.0693 18.166ZM9.13965 13.6836C8.82422 13.6836 8.56689 13.5508 8.33447 13.2437L6.30078 10.7783C6.15137 10.5874 6.07666 10.3965 6.07666 10.189C6.07666 9.75732 6.41699 9.40869 6.84863 9.40869C7.10596 9.40869 7.30518 9.5 7.521 9.77393L9.11475 11.791L12.5347 6.3125C12.7173 6.02197 12.9497 5.88086 13.2153 5.88086C13.6387 5.88086 14.0205 6.17139 14.0205 6.61133C14.0205 6.80225 13.9209 7.00977 13.8047 7.19238L9.91162 13.2437C9.729 13.5342 9.45508 13.6836 9.13965 13.6836Z"})})},16880:(e,t,i)=>{i.d(t,{R:()=>a});i(67294);var n=i(45238),r=i(85893);const a=(0,n.I)("chevronUpRounded",{viewBox:"0 0 15 9",svg:(0,r.jsx)("path",{d:"M1.258 6.5L7.203.422a.946.946 0 01.719-.32.99.99 0 01.726.32L14.586 6.5a.89.89 0 01.266.648c0 .524-.407.93-.922.93a.921.921 0 01-.672-.281L7.93 2.32 2.586 7.797a.926.926 0 01-.672.281.915.915 0 01-.922-.93c0-.25.094-.476.266-.648z"})})}}]);