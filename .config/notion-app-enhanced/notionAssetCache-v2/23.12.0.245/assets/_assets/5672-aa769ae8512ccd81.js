"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[5672],{20993:(e,t,n)=>{n.d(t,{Z:()=>f,a:()=>y});var o=n(30120),a=n(67294),s=n(86628),r=n(24405),i=n(82990),c=n(5366),u=n(35253),d=n(91376),l=n(73329),p=n(88893),m=n(91754),v=n(85893);function y(){window.__c={n:"SubscriptionTrialAddPaymentMethodBannerContent"};const e=(0,r.yK)((e=>({bannerContent:{alignItems:"center",display:"flex",flexWrap:"wrap",gap:6,justifyContent:"space-between",padding:"12px 6px",whiteSpace:"normal",width:"100%",lineHeight:1.35},callToAction:{cursor:"pointer",fontWeight:i.Z.fontWeight.semibold}})),[]);return(0,v.jsxs)("div",{style:e.bannerContent,children:[(0,v.jsx)("div",{children:(0,v.jsx)(c.FormattedMessage,{id:"app.banner.trial_subscription.add_payment_method",defaultMessage:"Add a payment method to continue using your free trial. You will not be charged until the end of your trial period."})}),(0,v.jsx)("div",{style:e.callToAction,onClick:()=>d.r$({currentTab:"billing"}),children:(0,v.jsx)(c.FormattedMessage,{id:"app.banner.trial_subscription.add_payment_method.call_to_action",defaultMessage:"Add payment method"})})]})}function f(e){window.__c={n:"SubscriptionTrialAddPaymentMethodBanner"};const{subscriptionDataStore:t}=e,{showBanner:n}=(0,s.VK)((()=>{const e=p.XX(t.state.data);return e&&e.trialEnd?["enterprise_trial","business_trial"].includes(e.plan)||e.paymentMethodType?{showBanner:!1}:{showBanner:o.ou.now()>o.ou.fromSeconds(e.trialEnd).minus({days:15})}:{showBanner:!1}}),[t]);return a.useEffect((()=>(n?u.Bw({bannerStore:l.Z,id:"SubscriptionTrialAddPaymentMethodBanner",contentKey:"subscription_trial_add_payment_method",styleKey:m.v.Yellow,prepend:!0}):u.qL({bannerStore:l.Z,id:"SubscriptionTrialAddPaymentMethodBanner"}),()=>{u.qL({bannerStore:l.Z,id:"SubscriptionTrialAddPaymentMethodBanner"})})),[n]),null}},10854:(e,t,n)=>{n.d(t,{Tm:()=>f,mK:()=>b,p9:()=>y});var o=n(89101),a=n(54153),s=n(11342),r=n(50906),i=n(2449),c=n(35253),u=n(47307),d=n(47839),l=n(75018),p=n(95477),m=n(44819),v=n(73329);const y=!1,f="electronUpdateReady2";function b(e){const{AppUpdateStore:t,device:n}=e;if(r.Byg(e),y){const t=(0,m.Us)(o._j.releases);l.navigateToExternalURL({environment:e,url:t})}if(n.isElectron&&t.state.electronUpdate&&"ready"===t.state.electronUpdate.state){const e=d.getDesktopVersion();a.Z.set(f,(0,s.formatVersion)(e)),d.installElectronUpdate()}else t.state.appUpdate&&"ready"===t.state.appUpdate.state?(i.hC({environment:e,url:window.location.href,version:t.state.appUpdate.version}),u.dismissDialog(),c.Js({bannerStore:v.Z})):(i.D$((0,s.parseVersion)(p.default.version)),u.dismissDialog(),c.Js({bannerStore:v.Z}))}},44819:(e,t,n)=>{n.d(t,{Us:()=>s,XR:()=>r});var o=n(13991),a=n(13559);n(72126),n(95477);Boolean("en-US"===o.SP);function s(e){const t="https://www.notion.so";return"en-US"!==o.SP?`${t}/${o.SP.toLocaleLowerCase()}${e}`:`${t}${e}`}function r(e,t){if(e.device.isElectron||e.device.isMobileNative)return!1;const n=(0,a.XU)(t,e.currentUser.isLoggedIn());return!!n&&"devOnly"!==n}},1404:(e,t,n)=>{n.d(t,{Z:()=>P,k:()=>K});var o=n(30120),a=n(67294),s=n(480),r=n(86628),i=n(24405),c=n(92595),u=n(26929),d=n(97880),l=n(82990),p=n(5366),m=n(50906),v=n(35253),y=n(91376),f=n(91754),b=(n(95477),n(38755)),w=n(80444),_=n(73329),g=n(78291),h=n(70060),T=n(88893),S=n(85893);const C={updatePaymentMethod:(0,S.jsx)(p.FormattedMessage,{id:"subscription.payment_status_banner.update_payment_method",defaultMessage:"View unpaid invoice"}),viewWorkspaceOwner:(0,S.jsx)(p.FormattedMessage,{id:"subscription.payment_status_banner.view_workspace_owner",defaultMessage:"View workspace owner"}),confirmPayment:(0,S.jsx)(p.FormattedMessage,{id:"subscription.payment_status_banner.confirm_payment",defaultMessage:"Confirm payment"})};function x(e){const{messageType:t,overdueInvoiceCount:n=1}=e;switch(t){case"past_due_owner":return(0,S.jsx)(p.FormattedMessage,{id:"subscription.payment_status_banner.payment_failed.past_due.workspace_owner",defaultMessage:"We couldn’t process {overdueInvoiceCount, plural, one {your last payment} other {{overdueInvoiceCount} payments}}. Please update your payment method or you may lose access to Notion soon.",values:{overdueInvoiceCount:n}});case"past_due_member":return(0,S.jsx)(p.FormattedMessage,{id:"subscription.payment_status_banner.payment_failed.past_due.member",defaultMessage:"Please contact a workspace owner to update your payment method or you may lose access to Notion soon."});case"unpaid_owner":return(0,S.jsx)(p.FormattedMessage,{id:"subscription.payment_status_banner.payment_failed.unpaid.workspace_owner",defaultMessage:"Access to Notion is limited to viewing because we couldn’t process {overdueInvoiceCount, plural, one {your last payment} other {{overdueInvoiceCount} payments}}. Update your payment information to restore full access.",values:{overdueInvoiceCount:n}});case"unpaid_member":return(0,S.jsx)(p.FormattedMessage,{id:"subscription.payment_status_banner.payment_failed.unpaid.member",defaultMessage:"Access to Notion is limited to viewing. Contact a workspace owner to update your workspace’s payment method."});default:(0,d.t1)(t)}}function k(e){const{messageType:t,overdueInvoiceCount:n=1}=e;switch(t){case"past_due_owner":return(0,S.jsx)(p.FormattedMessage,{id:"subscription.payment_status_banner.confirmation_required.past_due.workspace_owner",defaultMessage:"Please confirm {overdueInvoiceCount, plural, one {your subscription payment} other {{overdueInvoiceCount} payments}} or you may lose access to Notion soon.",values:{overdueInvoiceCount:n}});case"unpaid_owner":return(0,S.jsx)(p.FormattedMessage,{id:"subscription.payment_status_banner.confirmation_required.unpaid.workspace_owner",defaultMessage:"Access to Notion is limited to viewing. Confirm {overdueInvoiceCount, plural, one {your subscription payment} other {{overdueInvoiceCount} payments}} to restore full access.",values:{overdueInvoiceCount:n}});case"unpaid_member":return(0,S.jsx)(p.FormattedMessage,{id:"subscription.payment_status_banner.confirmation_required.unpaid.member",defaultMessage:"Access to Notion is limited to viewing. Contact a workspace owner to update your workspace’s payment method."});default:(0,d.t1)(t)}}function j(){const e=(0,s.O7)();return(0,r.VK)((()=>{var t,n;if(!(0,h.IC)())return;const a=null===(t=w.default.state.currentSpaceStore)||void 0===t?void 0:t.getOverdueSubscription();if(!a)return;const s=(0,T.aS)(g.default.state.data),r=null==s||null===(n=s.testClock)||void 0===n?void 0:n.frozen_time,i=r?o.ou.fromSeconds(r):o.ou.now(),c=u.cS({now:i,overdueSubscription:a});if("paid"===c.paymentStatus)return;return{overdueSubscription:a,isWorkspaceOwner:(0,b.Fn)(e),paymentStatusWithReason:c}}),[e])}function I(){return()=>{y.r$()}}function M(e){if(void 0!==e)return()=>{e&&window.open(e,"_blank")}}function A(e){const{overdueSubscription:t,isWorkspaceOwner:n,paymentStatusWithReason:o}=e,{invoiceHostedUrl:a,overdueInvoiceCount:s}=t,{paymentStatus:r}=o;switch(r){case"past_due":return function(e){const{isWorkspaceOwner:t,invoiceHostedUrl:n,overdueInvoiceCount:o}=e,a=f.v.Yellow;return t?{bannerStyleKey:a,messageType:"past_due_owner",messageText:x({overdueInvoiceCount:o,messageType:"past_due_owner"}),callToActionText:C.updatePaymentMethod,callToActionHandler:M(n)}:{bannerStyleKey:a,messageType:"past_due_member",messageText:x({overdueInvoiceCount:o,messageType:"past_due_member"}),callToActionText:C.viewWorkspaceOwner,callToActionHandler:I()}}({isWorkspaceOwner:n,invoiceHostedUrl:a,overdueInvoiceCount:s});case"unpaid":return function(e){const{isWorkspaceOwner:t,invoiceHostedUrl:n,overdueInvoiceCount:o}=e,a=f.v.LightRed;return t?{bannerStyleKey:a,messageType:"unpaid_owner",messageText:x({overdueInvoiceCount:o,messageType:"unpaid_owner"}),callToActionText:C.updatePaymentMethod,callToActionHandler:M(n)}:{bannerStyleKey:a,messageType:"unpaid_member",messageText:x({overdueInvoiceCount:o,messageType:"unpaid_member"}),callToActionText:C.viewWorkspaceOwner,callToActionHandler:I()}}({isWorkspaceOwner:n,invoiceHostedUrl:a,overdueInvoiceCount:s});case"paid":return;default:(0,d.t1)(r)}}function B(e){const{overdueSubscription:t,isWorkspaceOwner:n,paymentStatusWithReason:o}=e,{invoiceHostedUrl:a}=t,{paymentStatus:s}=o;switch(s){case"past_due":return function(e,t,n){if(e)return{bannerStyleKey:f.v.Yellow,messageType:"past_due_owner",messageText:k({overdueInvoiceCount:n,messageType:"past_due_owner"}),callToActionText:C.confirmPayment,callToActionHandler:M(t)}}(n,a);case"unpaid":return function(e,t,n){const o=f.v.LightRed;return e?{bannerStyleKey:o,messageType:"unpaid_owner",messageText:k({overdueInvoiceCount:n,messageType:"unpaid_owner"}),callToActionText:C.confirmPayment,callToActionHandler:M(t)}:{bannerStyleKey:o,messageType:"unpaid_member",messageText:k({overdueInvoiceCount:n,messageType:"unpaid_member"}),callToActionText:C.viewWorkspaceOwner,callToActionHandler:I()}}(n,a);case"paid":return;default:(0,d.t1)(s)}}function U(e){if(void 0===e)return;const{overdueReason:t}=e.overdueSubscription;if(t)switch(t){case"payment_failed":return A(e);case"confirmation_required":return B(e);default:(0,d.t1)(t)}}function K(){var e;window.__c={n:"SubscriptionPaymentStatusBannerContent"};const t=j(),n=(0,a.useMemo)((()=>U(t)),[t]),o=null==n?void 0:n.messageType,r=null==n?void 0:n.callToActionText,c=null==n?void 0:n.callToActionHandler,u=(0,s.O7)(),d=(0,i.yK)((e=>({bannerContent:{alignItems:"center",display:"flex",flexWrap:"wrap",gap:6,justifyContent:"space-between",padding:"12px 6px",whiteSpace:"normal",width:"100%",lineHeight:1.35},callToAction:{cursor:"pointer",fontWeight:l.Z.fontWeight.semibold}})),[]),p=null==t||null===(e=t.overdueSubscription)||void 0===e?void 0:e.overdueReason,v=(0,a.useCallback)((e=>{void 0!==c&&c(e),o&&m.rit(u,{overdueReason:p,messageType:o})}),[u,c,o,p]);return n?(0,S.jsxs)("div",{style:d.bannerContent,children:[(0,S.jsx)("div",{children:n.messageText}),void 0!==c?(0,S.jsx)("div",{style:d.callToAction,onClick:v,children:r}):null]}):null}function P(){window.__c={n:"SubscriptionPaymentStatusBanner"};const e=(0,s.O7)(),t=j(),n=(0,a.useMemo)((()=>U(t)),[t]);return a.useEffect((()=>(["local","development","staging"].includes("production")&&(0,c.exposeDebugValue)("paymentStatus",t),void 0===n||void 0===t?v.qL({bannerStore:_.Z,id:"SubscriptionPaymentStatusBanner"}):(v.Bw({bannerStore:_.Z,id:"SubscriptionPaymentStatusBanner",contentKey:"subscription_payment_status",styleKey:n.bannerStyleKey,prepend:!0}),m.yaj(e,{overdueReason:t.overdueSubscription.overdueReason,messageType:n.messageType})),()=>{v.qL({bannerStore:_.Z,id:"SubscriptionPaymentStatusBanner"})})),[e,n,t]),null}},59260:(e,t,n)=>{n.d(t,{U:()=>g,Z:()=>h});var o=n(30120),a=n(67294),s=n(480),r=n(86628),i=n(24405),c=n(29477),u=n(97880),d=n(54642),l=n(35253),p=(n(47307),n(91754)),m=n(68785),v=(n(95477),n(80444)),y=n(73329),f=n(78291),b=n(34583),w=n(88893),_=n(85893);function g(){window.__c={n:"TestClockBannerContent"};const{testClock:e,billingInterval:t}=(0,r.VK)((()=>{const e=f.default.state.data,t=w.aS(e);return t?{testClock:t.testClock,billingInterval:t.interval}:{testClock:void 0,billingInterval:void 0}}),[]),n=(0,r.VK)((()=>{var e;return null===(e=v.default.state.currentSpaceStore)||void 0===e?void 0:e.id}),[]),[l,p]=(0,a.useState)(1),[y,g]=(0,a.useState)("second"),[h,S]=(0,a.useState)(!1),C=(0,s.O7)(),x=(0,i.yK)((e=>({bannerContent:{alignItems:"center",display:"flex",gap:6,justifyContent:"space-between",padding:"12px 6px",whiteSpace:"normal",width:"100%",lineHeight:1.35},message:{flexGrow:1,textWrap:"wrap"}})),[]);if(!e||!t||!n)return null;const k=o.ou.fromSeconds(e.frozen_time);return(0,_.jsxs)("div",{style:x.bannerContent,children:[(0,_.jsxs)("div",{style:x.message,children:["The clock time is currently frozen at ",k.toLocaleString(o.ou.DATETIME_FULL),h?(0,_.jsx)(m.Z,{}):null]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("input",{disabled:h,type:"number",value:l,style:{width:75,textAlign:"right"},onChange:e=>p(parseInt(e.target.value))}),(0,_.jsxs)("select",{disabled:h,value:y,onChange:e=>{g(e.target.value)},children:[(0,_.jsx)("option",{value:"seconds",children:"seconds"}),(0,_.jsx)("option",{value:"minutes",children:"minutes"}),(0,_.jsx)("option",{value:"hours",children:"hours"}),(0,_.jsx)("option",{value:"days",children:"days"}),(0,_.jsx)("option",{value:"months",children:"months"}),(0,_.jsx)("option",{value:"years",disabled:"year"!==t,children:"years"})]}),(0,_.jsx)("button",{disabled:h,onClick:async()=>{const e=o.nL.fromObject({[y]:l});if(e>function(e){switch(e){case"month":return o.nL.fromObject({months:2});case"year":return o.nL.fromObject({years:2});default:(0,u.t1)(e)}}(t))return void T(`Cannot advance test clock by more than two billing intervals. The current billing interval is ${t}.`);S(!0);"success"===(await d.stripeAdvanceTestClock(C,{spaceId:n,epochSeconds:k.plus(e).toSeconds()})).type?await async function(e,t){let n=await d.stripeGetTestClock(e,{spaceId:t});for(;"success"===n.type&&"advancing"===n.data.status;)await(0,c.Vs)(1e3),n=await d.stripeGetTestClock(e,{spaceId:t});if("failed"===n.type)return void T("Test clock poll request failed. Refresh page to see updated time.");switch(n.data.status){case"ready":await b.bi(e);break;case"advancing":T("Test clock still advancing");break;case"internal_failure":T("Test clock internal failure");break;case void 0:T("Test clock undefined");break;default:(0,u.t1)(n.data.status)}}(C,n):T("Failed to advance test clock. Check server logs for details."),S(!1)},children:"Advance clock"})]})]})}function h(){window.__c={n:"TestClockBanner"};const e=(0,r.VK)((()=>{const e=w.aS(f.default.state.data);return Boolean(null==e?void 0:e.testClock)}),[]);return a.useEffect((()=>(e?l.Bw({bannerStore:y.Z,id:"TestClockBanner",contentKey:"test_clock",styleKey:p.v.Yellow,prepend:!0}):l.qL({bannerStore:y.Z,id:"TestClockBanner"}),()=>{l.qL({bannerStore:y.Z,id:"TestClockBanner"})})),[e]),null}function T(e){}}}]);