(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[7662],{5757:function(t,e,i){"use strict";i.d(e,{Z:function(){return P}});var s,a,n=function(){var t=this,e=t._self._c;t._self._setupProxy;return!t.token||t.isHistorySupported||t.accountDetailsUrl?t.token&&!t.isHistorySupported?e("div",{staticClass:"flex flex-col items-center"},[e("lottie-component",{staticClass:"h-20 mb-4 mt-8 w-20",attrs:{src:"empty_activity_placeholder.json"}}),e("div",{staticClass:"text-center text-dark-N77"},[e("i18n",{attrs:{path:"views.activityView.transactionHistoryDescription"},scopedSlots:t._u([{key:"transactionHistoryLink",fn:function(){return[e("a",{staticClass:"text-spectrum-blue underline",on:{click:function(e){return t.$platform.createNewTab({url:t.accountDetailsUrl})}}},[t._v(" "+t._s(t.$t("views.activityView.transactionHistoryLinkTitle"))+" ")])]},proxy:!0}])})],1)],1):e("div",[t.activities.length?e("smart-list-container",{attrs:{"base-list-element-height-px":t.activityItemHeightPx,"number-of-elements":t.activities.length,"reserved-height-px":t.reservedHeightPx.get(t.routeName)||0}},[t.operaPoints?t._l(t.activities,(function(t){return e("opera-points-activity-item",{key:`opera-points-activity-item-${t.id||t.payoutId}`,staticClass:"first:mt-0 last:mb-0 mr-1.5",attrs:{activity:t}})})):t._l(t.activities,(function(t,i){return e("activity-item",{key:`activity-item-${i}`,staticClass:"first:mt-0 last:mb-0 mr-1.5",attrs:{activity:t}})}))],2):e("div",{staticClass:"flex flex-col items-center"},[e("lottie-component",{staticClass:"h-20 mb-4 mt-8 w-20",attrs:{src:"empty_activity_placeholder.json"}}),e("div",{staticClass:"text-center text-dark-N77"},[t._v(t._s(t.$t("general.noActivities")))])],1)],1):e("div",{staticClass:"flex flex-col items-center"},[e("lottie-component",{staticClass:"h-20 mb-4 mt-8 w-20",attrs:{src:"empty_activity_placeholder.json"}}),e("div",{staticClass:"text-center text-dark-N77"},[t._v(t._s(t.$t("general.noActivities")))])],1)},r=[],c=i(46686),o=i(36080),u=i(76501),l=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"bg-dark-N16 cursor-pointer flex items-center my-3 p-4 rounded-lg t-operapoints-transaction_item text-white",on:{click:t.openActivitiesList}},[e("div",{staticClass:"h-full shrink-0 w-7"},[e("img",{attrs:{alt:t.status,src:t.icon}})]),e("div",{staticClass:"flex items-center justify-between ml-4 truncate w-full"},[e("div",{staticClass:"font-semibold mr-2"},[e("div",{staticClass:"t-headline text-sm truncate",class:[{"text-spectrum-red":t.activityRejected}]},[t._v(" "+t._s(t.headline)+" ")]),e("div",{staticClass:"t-address text-dark-N77 text-sm"},[t._v(" "+t._s(t.description)+" ")])]),e("div",{staticClass:"text-end"},[e("div",{staticClass:"flex font-semibold justify-end text-sm"},[e("div",{staticClass:"flex items-center max-w-[160px] truncate",class:[{"text-spectrum-red":t.activityRejected}],attrs:{title:t.amount}},[e("span",[t._v(t._s(t.amount))]),t.showOpIconInActivity?e("img",{staticClass:"h-[14px] ml-1.5 w-[14px]",attrs:{alt:"",src:i(44771)(`./opera_token_icon_${t.activityRejected?"red":"gray"}.svg`)}}):t._e()])]),e("div",{staticClass:"text-dark-N77 text-sm"},[e("p",[t._v(t._s(t.time))])])])])])},d=[];(function(t){t["APPROVED"]="APPROVED",t["PENDING"]="PENDING",t["REJECTED"]="REJECTED",t["SUCCESSFUL"]="SUCCESSFUL"})(s||(s={})),function(t){t["AMAZON_GIFT_CARD"]="AMAZON_GIFT_CARD",t["BANK"]="BANK",t["CARD"]="CARD",t["PAYPAL"]="PAYPAL"}(a||(a={}));var h=i(20629),p=i(20144),v=i(39624),y=i(10359),m=i(89235),f=i(44245);const g=v["default"].cashbackOrigin;var x=p.ZP.extend({name:"OperaPointsActivityItem",props:{activity:{default:void 0,type:Object}},computed:{...(0,h.Se)({operaPointsSymbol:"operaPointsSymbol"}),activityRejected(){const{status:t}=this.activity;return t===s.REJECTED},amount(){if(this.isTransaction){const{cashbackAmount:t,cashbackOperaPointsAmount:e}=this.activity;return e?`${e.amount}`:this.localizeCurrency(`${t.amount}`,t.currency)}if(this.isPayoutRequest){const{amount:t,operaPointsAmount:e}=this.activity;return e?`${e.amount}`:this.localizeCurrency(`${t.amount}`,t.currency)}return"?"},description(){const{merchantName:t,target:e}=this.activity;return this.payoutTargetFriendly[e]||t},headline(){let t=this.statusMapping[this.status];return this.isTransaction&&(t+="From"),this.isPayoutRequest&&(this.status===s.REJECTED?t+="By":t+="Via"),this.$t(`general.${t}`)},icon(){const t=this.statusMapping[this.status].toLowerCase();return i(91355)(`./cashback_${t}.svg`)},isPayoutRequest(){return"createdAutomatically"in this.activity},isTransaction(){return!!this.activity.transactionType},payoutTargetFriendly(){return{[a.AMAZON_GIFT_CARD]:this.$t("cashback.cashbackActivity.amazonGiftCard"),[a.BANK]:this.$t("cashback.cashbackActivity.bankTransfer"),[a.CARD]:this.$t("cashback.cashbackActivity.card"),[a.PAYPAL]:this.$t("cashback.cashbackActivity.payPal")}},showOpIconInActivity(){return this.isTransaction&&"cashbackOperaPointsAmount"in this.activity||this.isPayoutRequest&&"operaPointsAmount"in this.activity},status(){return this.activity.status},statusMapping(){return{[s.APPROVED]:"received",[s.PENDING]:"pending",[s.REJECTED]:"rejected",[s.SUCCESSFUL]:"paidOut"}},time(){const t=Date.now(),{creationTimestamp:e,purchaseTimestamp:i,updateTimestamp:s}=this.activity,a=i||s||e,n=new Date(a).getTime();return this.fromNow(t,n)}},methods:{fromNow:f.ZP.fromNow,localizeCurrency:y.Z.localizeCurrency,openActivitiesList(){let t=`${g}/profile?page=`;this.isPayoutRequest?t+="payout":t+="home",m.Z.openNewTab(t)}}}),_=x,b=i(1001),k=(0,b.Z)(_,l,d,!1,null,null,null),A=k.exports,w=i(63928),T=p.ZP.extend({name:"ActivityBox",components:{ActivityItem:o.Z,LottieComponent:u.Z,OperaPointsActivityItem:A,SmartListContainer:w.Z},props:{activities:{default:()=>[],type:Array},operaPoints:{default:!1,type:Boolean},token:{default:void 0,type:Object}},data(){return{activityItemHeightPx:84,reservedHeightPx:new Map([["Assets",470],["TokenOverview",510]])}},computed:{accountAddressByCoinType(){if(!this.token)return"";const{coinType:t}=this.token.chain;return this.accountsByCoinType[t]},accountDetailsUrl(){return this.token?this.$store.getters.accountDetailsUrl(this.accountAddressByCoinType,this.token.chain):""},accountsByCoinType(){return this.$store.getters.accountsByCoinType},isHistorySupported(){return!!this.$store.getters.networksSupportingHistory.find((({chain:t})=>(0,c.F2)(t,this.token.chain)))},routeName(){return this.$route.name}}}),C=T,S=(0,b.Z)(C,n,r,!1,null,null,null),P=S.exports},36080:function(t,e,i){"use strict";i.d(e,{Z:function(){return x}});var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return t.activity&&t.token?e("div",{staticClass:"cursor-pointer flex my-3 p-4 rounded-lg t-activity_preview_item-transaction_detail",class:{"bg-dark-N16":!("pending"===t.txStatus),"bg-white":"pending"===t.txStatus,"text-spectrum-red":"failure"===t.txStatus,"text-white":!("pending"===t.txStatus),"text-dark-N16":"pending"===t.txStatus},on:{click:function(e){return t.openTransactionDetail(t.activity.hash)}}},[e("div",{staticClass:"mt-3 shrink-0"},[e("img",{class:[{"animate-spin":"pending"===t.txStatus}],attrs:{src:t.icons[t.txStatus]}})]),e("div",{staticClass:"flex items-center justify-between ml-4 truncate w-full"},[e("div",[e("div",{staticClass:"font-bold t-headline text-sm"},[t._v(t._s(t.headline))]),t.isRecipientOnly||t.isSenderOnly?t._e():e("div",{staticClass:"t-address text-dark-N77 text-sm",class:[{"text-spectrum-red":"failure"===t.txStatus}]},[t._v(" "+t._s(t.prettyAddress)+" ")])]),t.token?e("div",{staticClass:"text-end truncate"},[e("div",{staticClass:"flex font-bold justify-end text-sm"},[e("div",{staticClass:"max-w-[160px] pr-1 truncate",attrs:{title:t.value}},[t._v(" "+t._s(t.value)+" ")]),e("div",{staticClass:"max-w-[50px] min-w-[30px] truncate",attrs:{title:t.symbol}},[t._v(" "+t._s(t.symbol)+" ")])]),e("div",{staticClass:"text-dark-N77 text-sm",class:[{"text-spectrum-red":"failure"===t.txStatus}]},["pending"===t.txStatus?e("span",[t._v(t._s(t.$t("general.pending")+"..."))]):e("span",[t._v(t._s(t.timeOfActivity))])])]):t._e()])]):t._e()},a=[],n=i(79317),r=i(67041),c=i(46686),o=i(92496),u=i(20144),l=i(13692),d=i(10359),h=i(9502),p=i(44245),v=i(37426),y=u.ZP.extend({name:"ActivityItem",props:{activity:{default:void 0,type:Object}},data(){const t=1e4;return{BASE_DELAY:t,delay:{bnb:t,btc:6e4,eth:t,matic:5e3},icons:{failure:i(98498),pending:i(71643),success:i(27176)},prettyAddress:`${this.$t("general.loading")}...`,timeOfActivity:"",token:void 0,txStatus:null,updateActivityInterval:null,updateTimeOfActivityInterval:null,updatingTxStatus:!1}},computed:{address(){const t=this.token?.chain.coinType||this.activity.chain.coinType;return this.$store.getters.accountsByCoinType[t].toLowerCase()},displayAddress(){if(this.isRecipientOnly)return this.recipient;if(this.isSenderOnly)return this.sender;switch(this.address){case this.recipient:return this.sender;case this.sender:return this.recipient;default:return this.address}},headline(){if(this.isRecipientOnly)return this.$t("general.received");if(this.isSenderOnly)return this.$t("general.sent");const t="failure"===this.txStatus;switch(this.address){case this.recipient:return t?this.$t("general.failedToReceive"):this.$t("general.receivedFrom");case this.sender:return t?this.$t("general.failedToSend"):this.$t("general.sentTo");default:return this.$t("general.unknown")}},isRecipientOnly(){return!(!this.recipient||this.sender)},isSenderOnly(){return!(this.recipient||!this.sender)},recipient(){return this.activity.to?.toLowerCase()??""},sender(){return this.activity.from?.toLowerCase()??""},status(){return this.txStatus?this.$t(`general.${this.txStatus}`):`${this.$t("general.loading")}...`},symbol(){const{token:t}=this,e="symbol"in t?t.symbol:t.contract.symbol;return e},type(){return this.activity.type},value(){let{token:t}=this;return t=Object.assign({},t,{balance:d.Z.formatNumber(this.activity.value)}),d.Z.formatNumber(v.Z.tokenDecimal(t))}},watch:{activity:{deep:!0,handler(){this.txStatus!==this.activity.status&&this.updateActivity()}},displayAddress(){this.updateAddress()}},beforeDestroy(){clearInterval(this.updateActivityInterval),clearInterval(this.updateTimeOfActivityInterval)},mounted(){this.updateActivity(),this.updateToken(),this.updateAddress(),this.updateTimeOfActivity()},methods:{assembleEvmActivity(t){const e=t.status?"success":"failure";return this.txStatus=e,{block:t.blockNumber,chain:this.activity.chain,contract:this.activity.contract??t.contractAddress,from:this.activity.from,hash:t.transactionHash,status:e,time:(new Date).getTime(),to:this.activity.to,type:this.activity.type,unindexed:!0,value:this.activity.value}},fromNow:p.ZP.fromNow,openTransactionDetail(t){const e=this.$store.getters.transactionDetailsUrl(t,this.token.chain);this.$platform.openNewTab(e)},async requestUpdatedTransactions(){if(await this.$store.dispatch("getTransactions",this.activity.chain),this.$store.getters.allTransactions.find((t=>t.hash===this.activity.hash))){const{chain:t,hash:e,type:i}=this.activity;this.$store.dispatch("clearPendingTransaction",e),this.$store.dispatch("getTokensForChain",{chain:t,type:i}),this.updateTimeOfActivity()}else{const t=this.delay[this.type]??this.BASE_DELAY;setTimeout((()=>this.requestUpdatedTransactions()),t)}},async resolveEnsAddress(){try{this.prettyAddress=await this.$ens.resolveAddress(this.displayAddress)}catch(t){}},updateActivity(){if(this.txStatus=this.activity.status,"pending"!==this.txStatus||this.updateActivityInterval){if((0,c.ij)(this.activity.chain)){const t=-1;this.txStatus=this.activity.block===t?"failure":"success"}}else{this.$nextTick((()=>this.updateTxStatus()));const t=this.delay[this.type]??this.BASE_DELAY;this.updateActivityInterval=window.setInterval(this.updateTxStatus,t)}},updateAddress(){this.prettyAddress=h.Z.elideAddress(this.displayAddress),this.resolveEnsAddress()},updateTimeOfActivity(t){clearInterval(this.updateTimeOfActivityInterval);const e=()=>{const e=(new Date).getTime(),{time:i}=this.activity;if(!t&&e-i>=p.EB)return this.updateTimeOfActivity(p.EB);this.timeOfActivity="pending"===this.txStatus?"":this.fromNow(e,i)};e(),this.updateTimeOfActivityInterval=window.setInterval(e,t??p.sh)},async updateToken(){const{contract:t,chain:e,type:i}=this.activity;if(v.Z.isNativeTokenType(i)?this.token=this.$store.getters.matchingNativeToken(i):this.token=this.$store.getters.getTokenViaSerializedKey(t,e,n.oZ.VISIBLE),!this.token&&(0,c.cA)(e)){const i=await((0,l.Z)(e).getTokenInfo?.(t));i&&(this.token=v.Z.makeEvmToken(i,e))}},async updateTxStatus(){if(this.updatingTxStatus)return;if(this.updatingTxStatus=!0,"pending"!==this.txStatus)return clearInterval(this.updateActivityInterval),void(this.updatingTxStatus=!1);const t=r.B1.find((t=>(0,c.F2)(t.chain,this.activity.chain)));if(t?.rpcUrls?.length){const[e]=t.rpcUrls,[i]=e.split("//"),s=new Map([["https:","JsonRpcProvider"],["wss:","WebSocketProvider"]]),a=s.get(i),n=new o[a](e),r=await n.waitForTransaction(this.activity.hash);"status"in r&&(clearInterval(this.updateActivityInterval),this.$store.dispatch("clearPendingTransaction",this.activity.hash),this.$store.dispatch("addTransaction",{chain:this.activity.chain,tx:this.assembleEvmActivity(r)}))}else await this.$store.dispatch("getTransactions",this.activity.chain);this.updatingTxStatus=!1}}}),m=y,f=i(1001),g=(0,f.Z)(m,s,a,!1,null,null,null),x=g.exports},63928:function(t,e,i){"use strict";i.d(e,{Z:function(){return l}});var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"overflow-y-scroll t-smart_list_container",style:{height:`${t.containerHeightPx}px`}},[t._t("default")],2)},a=[],n=i(20144),r=n.ZP.extend({name:"SmartListContainer",props:{baseListElementHeightPx:{required:!0,type:Number},numberOfElements:{required:!0,type:Number},reservedHeightPx:{required:!0,type:Number}},data(){return{containerHeightPx:0}},watch:{numberOfElements(){this.containerHeightPx=this.getContainerHeightPx()}},beforeDestroy(){this.unregisterWindowResizeListener()},created(){this.registerWindowResizeListener(),this.containerHeightPx=this.getContainerHeightPx()},methods:{getContainerHeightPx(){const{innerHeight:t}=window,e=Math.max(t-this.reservedHeightPx,this.baseListElementHeightPx),i=this.baseListElementHeightPx*this.numberOfElements,s=Math.min(i,e);return s},registerWindowResizeListener(){window.addEventListener("resize",this.resizeContainer)},resizeContainer(){setTimeout((()=>{this.containerHeightPx=this.getContainerHeightPx()}))},unregisterWindowResizeListener(){window.removeEventListener("resize",this.resizeContainer)}}}),c=r,o=i(1001),u=(0,o.Z)(c,s,a,!1,null,null,null),l=u.exports},26234:function(t,e,i){"use strict";i.d(e,{Z:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",t._b({directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}]},"div",{...t.$attrs.class},!1),[t._t("default")],2)},a=[],n={name:"SwitchingTab",props:{title:{default:"",type:String}},data(){return{active:!1}}},r=n,c=i(1001),o=(0,c.Z)(r,s,a,!1,null,null,null),u=o.exports},23537:function(t,e,i){"use strict";i.d(e,{Z:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",t._b({},"div",{...t.$attrs.class},!1),[t.tabs.length>1?e("div",{staticClass:"flex flex-row justify-between mb-6 mt-2"},[e("div",t._l(t.tabs,(function(i,s){return e("button",{key:i.title,staticClass:"px-4 py-2 text-xs",class:{"bg-dark-N16 text-white font-semibold tracking-wider rounded-full":s===t.selected,"text-dark-N77 font-semibold tracking-wider rounded-full":s!==t.selected,[`t-tabs-tab_${i.title}_select`]:!0},on:{click:function(e){return t.selectTab(s)}}},[t._v(" "+t._s(i.title)+" ")])})),0),e("div",[t.settingsLink&&t.isAssetList?e("button",{staticClass:"cursor-pointer px-4 py-2 t-asset-settings text-brand-primary text-sm",attrs:{type:"button"},on:{click:function(e){return t.$emit("showAssetSettingsDialog")}}},[t._v(" "+t._s(t.settingsLink)+" ")]):t._e()])]):t._e(),t._t("default")],2)},a=[],n={name:"SwitchingTabs",props:{settingsLink:{default:"",type:String}},data(){return{isAssetList:!0,selected:0,tabs:[]}},created(){this.tabs=this.$children},mounted(){this.selectTab(0)},methods:{selectTab(t){this.selected=t,this.tabs.forEach(((e,i)=>{e.active=i===t,this.isAssetList=0===t})),this.$emit("selected",t)}}},r=n,c=i(1001),o=(0,c.Z)(r,s,a,!1,null,null,null),u=o.exports},91355:function(t,e,i){var s={"./cashback_paidout.svg":40629,"./cashback_pending.svg":32078,"./cashback_received.svg":60407,"./cashback_rejected.svg":2750};function a(t){var e=n(t);return i(e)}function n(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=n,t.exports=a,a.id=91355},44771:function(t,e,i){var s={"./opera_token_icon_gray.svg":10237,"./opera_token_icon_red.svg":88859};function a(t){var e=n(t);return i(e)}function n(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=n,t.exports=a,a.id=44771},27176:function(t,e,i){"use strict";t.exports=i.p+"img/complete_big.fe2ecc72.svg"},71643:function(t,e,i){"use strict";t.exports=i.p+"img/in_progress_big.35353198.svg"},40629:function(t,e,i){"use strict";t.exports=i.p+"img/cashback_paidout.e44c6a10.svg"},32078:function(t,e,i){"use strict";t.exports=i.p+"img/cashback_pending.385f3286.svg"},60407:function(t,e,i){"use strict";t.exports=i.p+"img/cashback_received.4c0ef33a.svg"},2750:function(t,e,i){"use strict";t.exports=i.p+"img/cashback_rejected.2bdca35b.svg"},10237:function(t,e,i){"use strict";t.exports=i.p+"img/opera_token_icon_gray.d0eb5f3f.svg"},88859:function(t,e,i){"use strict";t.exports=i.p+"img/opera_token_icon_red.929ec8ec.svg"}}]);