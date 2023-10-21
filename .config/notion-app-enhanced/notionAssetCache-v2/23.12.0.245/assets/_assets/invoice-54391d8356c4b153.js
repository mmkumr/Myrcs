"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[5149],{8812:(e,t,s)=>{s.r(t),s.d(t,{InvoiceContent:()=>E,default:()=>ne});s(57658);var a=s(67294),r=s(83355),i=s(13991),n=s(480),o=s(86628),l=s(8848),d=s(7057),c=s(77058),u=s(44495),g=s(60651),m=s(72126),p=s(89101),h=s(15047),x=s(31919),f=s(97880),v=s(82990),y=s(5366),M=s(54642),j=s(33929),b=s(18514),C=s(38755),I=s(35661),N=s(78291),T=s(27533),F=s(88893),w=s(33941),Z=s(61519),L=s(16354),P=s(84076),W=s(63296),S=s(89728),D=s(77137),A=s(64369),O=s(74523),k=s(23189),R=s(13490),V=s(85893);const B=(0,y.defineMessages)({personal:{id:"invoice.planType.personal",defaultMessage:"Personal"},personal_education:{id:"invoice.planType.personalEducation",defaultMessage:"Education"},plus:{id:"invoice.planType.plus",defaultMessage:"Plus"},business:{id:"invoice.planType.business",defaultMessage:"Business"},enterprise:{id:"invoice.planType.enterprise",defaultMessage:"Enterprise"},ai:{id:"invoice.planType.addOn.ai",defaultMessage:"Notion AI"},legacy:{id:"invoice.planType.legacy",defaultMessage:"Legacy"}}),Y=(0,y.defineMessages)({year:{id:"invoice.intervalType.yearly",defaultMessage:"Yearly"},month:{id:"invoice.intervalType.monthly",defaultMessage:"Monthly"}});class z extends r.Z{constructor(){super(...arguments),this.performRequest=async()=>{if("invoiceById"===this.props.route.name){const e=await M.getInvoiceData(this.environment,{type:"invoice",invoiceId:this.props.route.invoiceId});if("failed"===e.type)throw e.error;return e.data.invoiceData}{const e=await M.getInvoiceData(this.environment,{type:"upcoming",spaceId:this.props.route.spaceId});if("failed"===e.type)throw e.error;return e.data.invoiceData}},this.renderResult=(e,t)=>{if(e)return(0,V.jsxs)("div",{style:{padding:48,textAlign:"center"},children:[(0,V.jsx)("div",{style:{lineHeight:"32px"},children:(0,V.jsx)(y.FormattedMessage,{id:"invoiceErrors.invoiceNotFound.title",defaultMessage:"Invoice not found"})}),(0,V.jsx)(A.Z,{isSmall:!0,children:(0,V.jsx)(y.FormattedMessage,{id:"invoiceErrors.invoiceNotFound.message",defaultMessage:"You may need to <loginlink>log in</loginlink> to view it.",values:{loginlink:e=>(0,V.jsx)(P.Z,{style:{display:"inline"},innerStyle:{textDecoration:"underline"},href:p._j.login,children:e})}})})]});if(t){const e="invoiceById"===this.props.route.name?this.props.route.invoiceId:null;return(0,V.jsx)(E,{id:e,result:t})}}}renderComponent(){const e="invoiceById"===this.props.route.name?this.props.route.invoiceId:"upcoming";return(0,V.jsx)(D.Z,{request:e,performRequest:this.performRequest,render:this.renderResult},e)}}function E(e){window.__c={n:"InvoiceContent"};const{id:t,result:s}=e,r=(0,n.O7)(),c=(0,a.useMemo)((()=>new I.H2(r,{table:h.bx,id:s.spaceId})),[r,s.spaceId]),u=(0,o.VK)((()=>(0,C.rn)(r,c)),[r,c]),g=(0,d.Yx)(s.date,"long",i.SP),p=(0,y.useIntl)();document.title=p.formatMessage({id:"invoice.pdf.title",defaultMessage:"Notion Invoice {date}"},{date:g});const[f,v]=m.uK(s.items,(e=>e.proration)),M=[];for(const a of f){const e=M.find((e=>e[0].start===a.start));e?e.push(a):M.push([a])}const j=[];for(const a of M){let e=[];for(const s of a){const t=e.find((e=>e.amount===-s.amount));t?e=m.zu(e,t):e.push(s)}const t=a.reduce(((e,t)=>e+t.amount),0);let r=e.find((e=>Math.sign(e.amount)===Math.sign(t))),i=e.find((e=>Math.sign(e.amount)!==Math.sign(t)));if(r){if(void 0===i&&(i=r,r={...i,planInterval:"month"===i.planInterval?"year":"month"}),t<0){const e=r;r=i,i=e}j.push({id:a[0].id,type:"proration",start:a[0].start,end:r.end,productId:r.productId,quantity:r.quantity,planAmount:r.planAmount,planInterval:r.planInterval,amount:x.n.fromValue({amount:t,currencyCode:s.currencyCode}),previousProductId:i.productId,previousQuantity:i.quantity,previousPlanInterval:i.planInterval})}}for(const a of v)j.push({id:a.id,type:"recurring",start:a.start,end:a.end,productId:a.productId,quantity:a.quantity,planAmount:a.planAmount,planInterval:a.planInterval,amount:x.n.fromValue({amount:a.amount,currencyCode:s.currencyCode})});const b=x.n.sum(...j.filter((e=>"recurring"===e.type)).map((e=>e.amount)))??x.n.zero(s.currencyCode),N=x.n.sum(...j.filter((e=>"proration"===e.type)).map((e=>e.amount)))??x.n.zero(s.currencyCode),T=(0,l.Vx)();return(0,V.jsxs)("div",{className:"notion-invoice",style:{padding:48,fontSize:14,height:"100vh",overflow:"auto",WebkitOverflowScrolling:"touch",background:T.contentBackground,color:T.regularTextColor},children:[(0,V.jsx)(U,{}),(0,V.jsx)(_,{result:s,spaceName:u,formattedDate:g,id:t}),(0,V.jsx)(Q,{result:s,formattedDate:g,recurringTotal:b,proratedTotal:N}),(0,V.jsx)(H,{charges:j,nonProratedItems:v,recurringTotal:b,proratedTotal:N})]})}function U(){const e=(0,l.Vx)();return(0,V.jsxs)("div",{style:{display:"flex"},children:[(0,V.jsx)("div",{style:{padding:"5px",width:"300px",display:"inline"},children:(0,V.jsxs)(k.Z,{style:{fontWeight:v.Z.fontWeight.bold,fontSize:18},children:[(0,g.h)({width:48,height:48,color:e.regularTextColor}),(0,V.jsx)(y.FormattedMessage,{id:"invoice.title",defaultMessage:"Notion"})]})}),(0,V.jsxs)("div",{style:{padding:"5px",width:"300px"},children:[(0,V.jsxs)(A.Z,{children:["Notion Labs, Inc.",(0,V.jsx)("br",{}),"548 Market St #74567,",(0,V.jsx)("br",{}),"San Francisco, CA 94104-5401",(0,V.jsx)("br",{}),"United States",(0,V.jsx)("br",{}),"team@makenotion.com"]}),(0,V.jsx)(W.Z,{style:{marginTop:12},onClick:()=>window.print(),className:"notion-print-ignore",children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.printOrExportButton.label",defaultMessage:"Print/export as PDF"})})]})]})}function _(e){const{result:t,spaceName:s,formattedDate:a,id:r}=e;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(k.Z,{style:{paddingTop:24,paddingBottom:10,fontWeight:v.Z.fontWeight.bold,fontSize:32},children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.title.label",defaultMessage:"Invoice"})}),(0,V.jsxs)("div",{className:"invoiceBasicDetails",style:{display:"flex"},children:[(0,V.jsxs)("div",{style:{width:"300px",display:"inline"},children:[(0,V.jsx)(R.Z,{hasMarginTop:!1,style:{fontWeight:v.Z.fontWeight.bold,textTransform:"uppercase"},children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.workspace.label",defaultMessage:"workspace"})}),s&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("b",{children:s}),(0,V.jsx)("br",{})]}),t.customer.email,(0,V.jsx)(R.Z,{hasMarginTop:!0,style:{fontWeight:v.Z.fontWeight.bold,textTransform:"uppercase"},children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.recipient.billing.label",defaultMessage:"billed to"})}),t.customer.name,t.customer.name&&(0,V.jsx)("br",{}),t.customer.businessName,t.customer.businessName&&(0,V.jsx)("br",{}),t.customer.addressLine1,t.customer.addressLine1&&" ",t.customer.addressLine2,(t.customer.addressLine1||t.customer.addressLine2)&&(0,V.jsx)("br",{}),t.customer.city," ",t.customer.state," ",t.customer.zipCode,t.customer.country&&(0,V.jsx)("br",{}),t.customer.country,t.customer.vatId&&(0,V.jsx)("br",{}),t.customer.vatId,(0,V.jsx)(R.Z,{hasMarginTop:!0,style:{fontWeight:v.Z.fontWeight.bold,textTransform:"uppercase"},children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.payment.status.label",defaultMessage:"status"})}),(0,V.jsx)(q,{status:t.status})]}),(0,V.jsxs)("div",{style:{width:"300px",display:"inline"},children:[(0,V.jsx)(R.Z,{hasMarginTop:!1,style:{fontWeight:v.Z.fontWeight.bold,textTransform:"uppercase"},children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.date.label",defaultMessage:"invoice date"})}),a,(0,V.jsx)(R.Z,{hasMarginTop:!0,style:{fontWeight:v.Z.fontWeight.bold,textTransform:"uppercase"},children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.number.label",defaultMessage:"invoice number"})}),r||(0,V.jsx)(y.FormattedMessage,{id:"invoice.upcomingInvoicePlaceholder",defaultMessage:"Upcoming"}),t.hostedInvoiceUrl&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(R.Z,{hasMarginTop:!0,style:{fontWeight:v.Z.fontWeight.bold,textTransform:"uppercase"},children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.paymentInfo.label",defaultMessage:"Payment"})}),(0,V.jsx)(K,{url:t.hostedInvoiceUrl,status:t.status})]})]})]}),(0,V.jsx)(Z.Z,{size:51})]})}function q(e){let{status:t}=e;const s=(0,l.Vx)();switch(t){case"paid":return(0,V.jsxs)("div",{style:{color:s.invoiceGreen,display:"flex"},children:[(0,V.jsx)("div",{style:{flex:0},children:(0,c.$)({width:20,color:"#53A83F"})}),(0,V.jsx)("div",{style:{flex:1,paddingLeft:5},children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.status.paid",defaultMessage:"Paid"})})]});case"not_paid":return(0,V.jsx)(y.FormattedMessage,{id:"invoice.status.not_paid",defaultMessage:"Not paid"});case"upcoming":return(0,V.jsx)(y.FormattedMessage,{id:"invoice.status.upcoming",defaultMessage:"Upcoming - not due yet"})}}function K(e){let{url:t,status:s}=e;return(0,V.jsx)(L.Z,{style:{display:"flex",marginLeft:-6},className:"notion-print-ignore",href:t,external:!0,children:(0,V.jsx)(S.Z,{icon:u.D,isSmall:!0,isLightGray:!0,shouldShrink:!0,children:"paid"===s?(0,V.jsx)(y.FormattedMessage,{id:"invoice.payment.info.stripeLink.downloadReceipt",defaultMessage:"Click to download receipt"}):(0,V.jsx)(y.FormattedMessage,{id:"invoice.payment.info.stripeLink.pay",defaultMessage:"Click to pay invoice"})})})}function Q(e){const{result:t,formattedDate:s,recurringTotal:a,proratedTotal:r}=e,i=(0,l.Vx)(),n=Math.max(0,t.total+t.startingBalance);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(k.Z,{style:{fontWeight:v.Z.fontWeight.bold,fontSize:24},children:(0,V.jsx)(T.W,{cost:{amount:Math.max(0,n),currencyCode:t.currencyCode},trailingZeroDisplay:"stripIfInteger"})}),(0,V.jsxs)("b",{children:[(0,V.jsx)(y.FormattedMessage,{id:"invoice.summary.amountDue.label",defaultMessage:"Due"}),(0,V.jsxs)("b",{children:[" ",s]}),(0,V.jsx)("br",{}),(0,V.jsx)("br",{})]}),(0,V.jsxs)("div",{style:{display:"grid",textAlign:"left",gridTemplateColumns:"1fr, 1fr"},children:[(0,V.jsx)("div",{style:{gridColumnStart:1},children:(0,V.jsx)("b",{children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.summary.recurring.charges",defaultMessage:"Recurring plan charges"})})}),(0,V.jsx)("div",{style:{textAlign:"right",gridColumnStart:2},children:(0,V.jsx)("b",{children:(0,V.jsx)(T.W,{cost:a,trailingZeroDisplay:"auto"})})})]}),(0,V.jsx)(R.Z,{hasMarginTop:!1,children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.summary.recurring.charges.explanation",defaultMessage:"Renewal charges for your Notion plan within the billing period."})}),(0,V.jsxs)("div",{style:{display:"grid",textAlign:"left",gridTemplateColumns:"1fr, 1fr"},children:[(0,V.jsx)("div",{style:{gridColumnStart:1},children:(0,V.jsx)("b",{children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.summary.prorated.charges",defaultMessage:"Prorated charges"})})}),(0,V.jsx)("div",{style:{textAlign:"right",gridColumnStart:2},children:(0,V.jsx)("b",{style:{color:ie(r)?i.invoiceGreen:void 0},children:(0,V.jsx)(T.W,{cost:r,trailingZeroDisplay:"auto"})})})]}),(0,V.jsx)(R.Z,{hasMarginTop:!1,children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.summary.prorated.charges.explanation",defaultMessage:"Partial charges for changes to members and plans within the billing period."})}),(0,V.jsx)(Z.Z,{size:51}),(0,V.jsxs)("div",{className:"summaryBreakdown",style:{display:"grid",textAlign:"right",gridTemplateColumns:"repeat(6, 1fr)"},children:[(0,V.jsx)("div",{className:"taxTitle",style:{gridColumnStart:5},children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.summary.tax",defaultMessage:"Tax"})}),(0,V.jsx)("div",{className:"taxCalculation",style:{gridColumnStart:6},children:(0,V.jsx)("b",{children:(0,V.jsx)(G,{result:t})})}),(0,V.jsx)("div",{className:"creditsTitle",style:{gridColumnStart:5},children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.summary.credits",defaultMessage:"Credits"})}),(0,V.jsx)("div",{className:"creditsCalculation",style:{gridColumnStart:6},children:(0,V.jsx)("b",{style:{color:i.invoiceGreen},children:(0,V.jsx)($,{result:t})})}),(0,V.jsx)("div",{className:"totalTitle",style:{gridColumnStart:5,paddingTop:15},children:(0,V.jsx)("b",{children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.total.label",defaultMessage:"Total Due"})})}),(0,V.jsx)("div",{className:"totalCalculation",style:{gridColumnStart:6,paddingTop:10,paddingLeft:10},children:(0,V.jsx)(k.Z,{style:{fontWeight:v.Z.fontWeight.bold,fontSize:24},children:(0,V.jsx)(T.W,{cost:{amount:Math.max(0,n),currencyCode:t.currencyCode},trailingZeroDisplay:"stripIfInteger"})})})]}),(0,V.jsx)(Z.Z,{size:51})]})}function G(e){var t;let{result:s}=e;const a=(null===(t=s.tax)||void 0===t?void 0:t.amount)||0;return(0,V.jsx)(T.W,{cost:{amount:a,currencyCode:s.currencyCode},trailingZeroDisplay:"auto"})}function $(e){var t;let{result:s}=e;const a=(null===(t=s.discount)||void 0===t?void 0:t.amountOff)||0;return(0,V.jsx)(T.W,{cost:{amount:a,currencyCode:s.currencyCode},trailingZeroDisplay:"auto"})}function H(e){const{charges:t,nonProratedItems:s,recurringTotal:a,proratedTotal:r}=e,i=t.filter((e=>"proration"===e.type)),n=(0,l.Vx)();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(k.Z,{style:{paddingTop:10,paddingBottom:10,fontWeight:v.Z.fontWeight.bold,fontSize:24},children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.details.label",defaultMessage:"Details"})}),(0,V.jsx)("b",{children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.summary.recurring.charges",defaultMessage:"Recurring plan charges"})}),(0,V.jsx)(R.Z,{hasMarginTop:!1,children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.details.recurring.charges.explanation",defaultMessage:"When your subscription renews, Notion bills you for the billing period."})}),(0,V.jsx)("div",{className:"recurringDetails",style:{display:"grid",textAlign:"left",gridTemplateColumns:"1fr 2fr 1fr"},children:(0,V.jsx)("div",{style:{gridColumnStart:3,textAlign:"right"},children:(0,V.jsx)(R.Z,{hasMarginTop:!0,style:{fontWeight:v.Z.fontWeight.bold,textTransform:"uppercase"},children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.details.amount",defaultMessage:"amount"})})})}),(0,V.jsx)(Z.Z,{size:10}),s.length>0&&m.oA(t.map((e=>{if("recurring"===e.type)return(0,V.jsx)(J,{charge:e},e.id)}))),0===s.length&&(0,V.jsx)(R.Z,{hasMarginTop:!0,children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.details.no.recurring.charges",defaultMessage:"No recurring charges within this billing period."})}),(0,V.jsx)(Z.Z,{size:51}),(0,V.jsxs)("div",{className:"recurringTotal",style:{display:"grid",textAlign:"right",gridTemplateColumns:"repeat(6, 1fr)",paddingBottom:30},children:[(0,V.jsx)("div",{className:"subtotalTitle",style:{gridColumnStart:5},children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.details.subtotal",defaultMessage:"Subtotal"})}),(0,V.jsx)("div",{className:"subtotalCalculation",style:{gridColumnStart:6},children:(0,V.jsx)("b",{children:(0,V.jsx)(T.W,{cost:a,trailingZeroDisplay:"auto"})})})]}),(0,V.jsx)("b",{children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.summary.prorated.charges.credits",defaultMessage:"Prorated charges and credits"})}),(0,V.jsx)(R.Z,{hasMarginTop:!1,children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.details.prorated.charges.explanation",defaultMessage:"When you change plans, or add or remove workspace members, Notion credits you for your previous member count or plan, and bills you for the remaining time on your new member count or plan."})}),(0,V.jsx)(O.Z,{title:(0,V.jsx)(y.FormattedMessage,{id:"invoice.details.helpButton.label",defaultMessage:"Learn more about prorated charges"}),href:(0,b.UY)("guides.billingAndPayment"),analyticsFrom:"invoices"}),(0,V.jsxs)("div",{className:"proratedDetails",style:{display:"grid",textAlign:"left",gridTemplateColumns:"1fr 2fr 1fr",paddingTop:10},children:[(0,V.jsx)("div",{style:{gridColumnStart:0},children:(0,V.jsx)(R.Z,{hasMarginTop:!0,style:{fontWeight:v.Z.fontWeight.bold,textTransform:"uppercase"},children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.details.date",defaultMessage:"date"})})}),(0,V.jsx)("div",{style:{gridColumnStart:2},children:(0,V.jsx)(R.Z,{hasMarginTop:!0,style:{fontWeight:v.Z.fontWeight.bold,textTransform:"uppercase"},children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.details.description",defaultMessage:"description"})})}),(0,V.jsx)("div",{style:{gridColumnStart:3,textAlign:"right"},children:(0,V.jsx)(R.Z,{hasMarginTop:!0,style:{fontWeight:v.Z.fontWeight.bold,textTransform:"uppercase"},children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.details.amount",defaultMessage:"amount"})})})]}),(0,V.jsx)(Z.Z,{size:10}),i.length>0&&m.oA(t.map((e=>{if("proration"===e.type)return(0,V.jsx)(ee,{charge:e},e.id)}))),0===i.length&&(0,V.jsx)(R.Z,{hasMarginTop:!1,children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.details.no.prorated.charges",defaultMessage:"No prorated charges within this billing period."})}),(0,V.jsx)(Z.Z,{size:51}),(0,V.jsxs)("div",{className:"proratedTotal",style:{display:"grid",textAlign:"right",gridTemplateColumns:"repeat(6, 1fr)",paddingBottom:20},children:[(0,V.jsx)("div",{className:"subtotalTitle",style:{gridColumnStart:5},children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.details.subtotal",defaultMessage:"Subtotal"})}),(0,V.jsx)("div",{className:"subtotalCalculation",style:{gridColumnStart:6},children:(0,V.jsx)("b",{style:{color:ie(r)?n.invoiceGreen:void 0},children:(0,V.jsx)(T.W,{cost:r,trailingZeroDisplay:"auto"})})})]}),(0,V.jsxs)(R.Z,{hasMarginTop:!0,children:[(0,V.jsx)(y.FormattedMessage,{id:"invoice.details.taxLanguage.explanation",defaultMessage:"Tax will vary based on your jurisdiction. If your Company is located in the United States, tax relates to state and local sales tax. If you Company is located in Canada, tax represents Quebec sales tax (QST). If your Company is located in the European Union, United Kingdom or Russia, tax represents value-added tax (VAT). If you are located in the European Union or the United Kingdom and are not charged VAT, this invoice relates to services which are deemed to be supplied where received and under Article 196 Council Directive 2006/112/EC the customer must self-account for VAT on the reverse charge basis in their own jurisdiction."}),(0,V.jsx)("br",{})," ",(0,V.jsx)("br",{}),(0,V.jsx)(y.FormattedMessage,{id:"invoice.details.taxLanguage.explanation.vat",defaultMessage:"EU VAT: EU528003828"}),(0,V.jsx)("br",{}),(0,V.jsx)(y.FormattedMessage,{id:"invoice.details.taxLanguage.explanation.ca",defaultMessage:"CA QST: NR00012289"}),(0,V.jsx)("br",{}),(0,V.jsx)(y.FormattedMessage,{id:"invoice.details.taxLanguage.explanation.ru.inn",defaultMessage:"RU INN: 9909540024"}),(0,V.jsx)("br",{}),(0,V.jsx)(y.FormattedMessage,{id:"invoice.details.taxLanguage.explanation.ru.kpp",defaultMessage:"RU KPP: 997789001"})]})]})}function J(e){let{charge:t}=e;if(!t.planAmount)return null;const s=(0,d.Yx)(t.start,"short",i.SP),a=(0,d.Yx)(t.end,"short",i.SP);return(0,V.jsxs)("div",{children:[(0,V.jsx)("div",{children:(0,V.jsx)(R.Z,{hasMarginTop:!1,style:{fontWeight:v.Z.fontWeight.bold},children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.recurringDate",defaultMessage:"{startDate} - {endDate}",values:{startDate:s,endDate:a}})})}),(0,V.jsx)(Z.Z,{size:10}),(0,V.jsxs)("div",{style:{display:"grid",textAlign:"left",gridTemplateColumns:"2fr 1fr 1fr",paddingTop:10},children:[(0,V.jsx)("div",{style:{gridColumnStart:0},children:(0,V.jsx)(R.Z,{hasMarginTop:!1,children:(0,V.jsx)(X,{numberOfMembers:t.quantity,interval:t.planInterval,productId:t.productId})})}),(0,V.jsx)("div",{style:{gridColumnStart:3,textAlign:"right"},children:(0,V.jsx)("b",{children:(0,V.jsx)(T.W,{cost:t.amount.toMoneyValue(),trailingZeroDisplay:"auto"})})})]})]})}function X(e){window.__c={n:"RecurringChargeDescription"};const{numberOfMembers:t,interval:s,productId:a}=e,r=(0,o.VK)((()=>F.NW(a)),[a]),i=(0,o.VK)((()=>function(e){if("plus"===e)return j.default.formatMessage(w.a.plusPlan);const t=N.default.state.data;if("personal"===e&&!F.wY(t))return j.default.formatMessage(w.a.plusPlan);return j.default.formatMessage(B[e])}(r)),[r]),n=j.default.formatMessage(Y[s]);return(0,V.jsx)(y.FormattedMessage,{id:"invoice.chargeRecurringItem",defaultMessage:"{numberOfMembers, plural, one {{planType} {intervalType} x {numberOfMembers} member} other {{planType} {intervalType} x {numberOfMembers} members}}",values:{numberOfMembers:t,planType:i,intervalType:n}})}function ee(e){let{charge:t}=e;window.__c={n:"ProratedCharge"};const s=(0,l.Vx)(),a=(0,V.jsx)(te,{productId:t.previousProductId,billingInterval:t.previousPlanInterval}),r=(0,V.jsx)(te,{productId:t.productId,billingInterval:t.planInterval}),n=(0,o.VK)((()=>F.NW(t.previousProductId)),[t.previousProductId]),c=(0,o.VK)((()=>F.NW(t.productId)),[t.productId]),u="ai"===n||"ai"===c,g=u&&"ai"===c?a:r;return(0,V.jsx)("div",{children:(0,V.jsxs)("div",{style:{display:"grid",textAlign:"left",gridTemplateColumns:"1fr 2fr 1fr",paddingTop:10},children:[(0,V.jsx)("div",{style:{gridColumnStart:0},children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.chargeItem.proratedCharge.switchedProducts.dateRange",defaultMessage:"{startDate} - {endDate}",values:{startDate:(0,d.Yx)(t.start,"short2",i.SP),endDate:(0,d.Yx)(t.end,"short2",i.SP)}})}),(0,V.jsxs)("div",{style:{gridColumnStart:2},children:[t.productId!==t.previousProductId&&(0,V.jsxs)("div",{children:[!u&&(0,V.jsx)(y.FormattedMessage,{id:"invoice.chargeItem.proratedCharge.switchedProducts.new",defaultMessage:"Changed from {oldProductName} to {newProductName}",values:{newProductName:r,oldProductName:a}}),u&&(0,V.jsx)(y.FormattedMessage,{id:"invoice.chargeItem.proratedCharge.switchedAddOns.new",defaultMessage:"Subscribed to {newProductName}",values:{newProductName:r}})]}),t.planInterval!==t.previousPlanInterval&&(u?(0,V.jsx)("div",{children:(0,V.jsx)(y.FormattedMessage,{id:"invoice.chargeItem.proratedCharge.genericProratedMessage",defaultMessage:"Your current invoice may include prorations related to an add on. Please refer to the total amount being billed in this period, and click above to learn more about how prorations work."})}):(0,V.jsxs)("div",{children:["month"===t.previousPlanInterval&&"year"===t.planInterval&&(0,V.jsx)(y.FormattedMessage,{id:"invoice.chargeItem.proratedCharge.switchedBillingInterval.fromMonthlyToYearly.new",defaultMessage:"Changed from monthly billing to yearly billing"}),"year"===t.previousPlanInterval&&"month"===t.planInterval&&(0,V.jsx)(y.FormattedMessage,{id:"invoice.chargeItem.proratedCharge.switchedBillingInterval.fromYearlyToMonthly.new",defaultMessage:"Changed from yearly billing to monthly billing"})]})),t.quantity!==t.previousQuantity&&(0,V.jsxs)("div",{children:[(0,V.jsx)(se,{newNumberOfMembers:t.quantity,oldNumberOfMembers:t.previousQuantity,productName:g})," ",(0,V.jsx)(ae,{newNumberOfMembers:t.quantity,oldNumberOfMembers:t.previousQuantity})]})]}),(0,V.jsx)("div",{style:{gridColumnStart:3,textAlign:"right"},children:(0,V.jsx)("b",{style:{color:t.amount.isPositive()?void 0:s.invoiceGreen},children:(0,V.jsx)(T.W,{cost:t.amount.toMoneyValue(),trailingZeroDisplay:"auto"})})})]})})}function te(e){const{productId:t,billingInterval:s}=e,a=F.NW(t);switch(a){case"personal":const e=N.default.state.data;return F.wY(e)?(0,V.jsx)(y.FormattedMessage,{id:"invoice.productName.personal",defaultMessage:"{billingInterval, select, month {Notion Personal Monthly} year {Notion Personal Yearly} other {Notion Personal}}",values:{billingInterval:s}}):(0,V.jsx)(y.FormattedMessage,{id:"invoice.productName.singlePlayerPlus",defaultMessage:"{billingInterval, select, month {Notion Plus Monthly} year {Notion Plus Yearly} other {Notion Plus}}",values:{billingInterval:s}});case"personal_education":return(0,V.jsx)(y.FormattedMessage,{id:"invoice.productName.education",defaultMessage:"{billingInterval, select, month {Notion Education Monthly} year {Notion Education Yearly} other {Notion Education}}",values:{billingInterval:s}});case"plus":return(0,V.jsx)(y.FormattedMessage,{id:"invoice.productName.plus",defaultMessage:"{billingInterval, select, month {Notion Plus Monthly} year {Notion Plus Yearly} other {Notion Plus}}",values:{billingInterval:s}});case"business":return(0,V.jsx)(y.FormattedMessage,{id:"invoice.productName.business",defaultMessage:"{billingInterval, select, month {Notion Business Monthly} year {Notion Business Yearly} other {Notion Business}}",values:{billingInterval:s}});case"enterprise":return(0,V.jsx)(y.FormattedMessage,{id:"invoice.productName.enterprise",defaultMessage:"{billingInterval, select, month {Notion Enterprise Monthly} year {Notion Enterprise Yearly} other {Notion Enterprise}}",values:{billingInterval:s}});case"ai":return(0,V.jsx)(y.FormattedMessage,{id:"invoice.productName.ai",defaultMessage:"{billingInterval, select, month {Notion AI Monthly} year {Notion AI Yearly} other {Notion AI}}",values:{billingInterval:s}});case"legacy":return(0,V.jsx)(y.FormattedMessage,{id:"invoice.productName.legacy",defaultMessage:"{billingInterval, select, month {Notion Legacy Monthly} year {Notion Legacy Yearly} other {Notion Legacy}}",values:{billingInterval:s}});default:f.t1(a)}}function se(e){const{newNumberOfMembers:t,oldNumberOfMembers:s,productName:a}=e,r=t-s;return r<0?(0,V.jsx)(y.FormattedMessage,{id:"invoice.chargeItem.changedNumberOfMembers.membersRemoved.new",defaultMessage:"{numberOfMembersRemoved, plural, one {{numberOfMembersRemoved} member removed from {productName}} other {{numberOfMembersRemoved} members removed from {productName}}}",values:{numberOfMembersRemoved:-r,productName:a}}):(0,V.jsx)(y.FormattedMessage,{id:"invoice.chargeItem.changedNumberOfMembers.membersAdded.new",defaultMessage:"{numberOfMembersAdded, plural, one {{numberOfMembersAdded} member added on {productName}} other {{numberOfMembersAdded} members added on {productName}}}",values:{numberOfMembersAdded:r,productName:a}})}function ae(e){const{newNumberOfMembers:t,oldNumberOfMembers:s}=e;return(0,V.jsx)(y.FormattedMessage,{id:"invoice.chargeItem.changedNumberOfMembers.memberChange.new",defaultMessage:"({oldTotalMembers} → {newTotalMembers})",values:{oldTotalMembers:s,newTotalMembers:(0,V.jsx)(re,{numberOfMembers:t})}})}function re(e){let{numberOfMembers:t}=e;return(0,V.jsx)(y.FormattedMessage,{id:"invoice.memberCount",defaultMessage:"{numberOfMembers, plural, one {{numberOfMembers} member} other {{numberOfMembers} members}}",values:{numberOfMembers:t}})}function ie(e){return e.isNegative()}z.displayName="Invoice";const ne=(0,y.injectIntl)(z)},27533:(e,t,s)=>{s.d(t,{W:()=>n});s(67294);var a=s(94919),r=s(5366),i=s(85893);function n(e){window.__c={n:"Money"};const t=(0,r.useIntl)();return(0,i.jsx)(a.W,{...e,intl:t})}},94919:(e,t,s)=>{s.d(t,{W:()=>i});s(67294);var a=s(31919),r=s(85893);function i(e){const{cost:t,intl:s}=e,i=e.trailingZeroDisplay??"auto",n=e.currencySign??"accounting",o=a.n.fromValue(t);let l=s.formatNumber(o.amount/Math.pow(10,o.currencyValue.minorUnitDigits),{style:"currency",currency:o.currencyCode,currencyDisplay:"symbol",currencySign:n});return"stripIfInteger"===i&&(l=l.replace(new RegExp(`[.,]0{${o.currencyValue.minorUnitDigits}}(\\s+.*)?$`),"$1")),(0,r.jsx)(r.Fragment,{children:l})}},77058:(e,t,s)=>{s.d(t,{$:()=>i});s(67294);var a=s(45238),r=s(85893);const i=(0,a.I)("checkmark",{viewBox:"0 0 20 20",svg:(0,r.jsx)("path",{d:"M10.0693 18.166C14.7759 18.166 18.6606 14.2812 18.6606 9.58301C18.6606 4.88477 14.7676 1 10.061 1C5.36279 1 1.48633 4.88477 1.48633 9.58301C1.48633 14.2812 5.37109 18.166 10.0693 18.166ZM9.13965 13.6836C8.82422 13.6836 8.56689 13.5508 8.33447 13.2437L6.30078 10.7783C6.15137 10.5874 6.07666 10.3965 6.07666 10.189C6.07666 9.75732 6.41699 9.40869 6.84863 9.40869C7.10596 9.40869 7.30518 9.5 7.521 9.77393L9.11475 11.791L12.5347 6.3125C12.7173 6.02197 12.9497 5.88086 13.2153 5.88086C13.6387 5.88086 14.0205 6.17139 14.0205 6.61133C14.0205 6.80225 13.9209 7.00977 13.8047 7.19238L9.91162 13.2437C9.729 13.5342 9.45508 13.6836 9.13965 13.6836Z"})})},60651:(e,t,s)=>{s.d(t,{h:()=>i});s(67294);var a=s(45238),r=s(85893);const i=(0,a.I)("notionLogo",{viewBox:"0 0 120 126",svg:(0,r.jsx)("path",{d:"M 20.6927 21.9315C 24.5836 25.0924 26.0432 24.8512 33.3492 24.3638L 102.228 20.2279C 103.689 20.2279 102.474 18.7705 101.987 18.5283L 90.5477 10.2586C 88.3558 8.55699 85.4356 6.60818 79.8387 7.09563L 13.1433 11.9602C 10.711 12.2014 10.2251 13.4175 11.1939 14.3924L 20.6927 21.9315ZM 24.8281 37.9835L 24.8281 110.456C 24.8281 114.351 26.7745 115.808 31.1553 115.567L 106.853 111.187C 111.236 110.946 111.724 108.267 111.724 105.103L 111.724 33.1169C 111.724 29.958 110.509 28.2544 107.826 28.4976L 28.721 33.1169C 25.8018 33.3622 24.8281 34.8225 24.8281 37.9835ZM 99.5567 41.8711C 100.042 44.0622 99.5567 46.2512 97.3618 46.4974L 93.7143 47.2241L 93.7143 100.728C 90.5477 102.43 87.6275 103.403 85.1942 103.403C 81.2983 103.403 80.3226 102.186 77.4044 98.54L 53.5471 61.087L 53.5471 97.3239L 61.0964 99.0275C 61.0964 99.0275 61.0964 103.403 55.0057 103.403L 38.2148 104.377C 37.727 103.403 38.2148 100.973 39.9179 100.486L 44.2996 99.2717L 44.2996 51.36L 38.2158 50.8725C 37.728 48.6815 38.9431 45.5225 42.3532 45.2773L 60.3661 44.0631L 85.1942 82.0036L 85.1942 48.4402L 78.864 47.7136C 78.3781 45.0351 80.3226 43.0902 82.7569 42.849L 99.5567 41.8711ZM 7.5434 5.39404L 76.9175 0.285276C 85.4366 -0.445402 87.6285 0.0440428 92.983 3.93368L 115.128 19.4982C 118.782 22.1747 120 22.9034 120 25.8211L 120 111.187C 120 116.537 118.051 119.701 111.237 120.185L 30.6734 125.05C 25.5584 125.294 23.124 124.565 20.4453 121.158L 4.13735 99.9994C 1.21516 96.1048 0 93.191 0 89.7819L 0 13.903C 0 9.5279 1.94945 5.8785 7.5434 5.39404Z"})})}}]);