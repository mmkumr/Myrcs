"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[5319],{38856:function(t,s,e){e.r(s),e.d(s,{default:function(){return d}});var r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"bg-gradient-main pb-20"},[s("top-bar",{attrs:{dark:"","test-parent-name":"watchlist_details",title:t.name},scopedSlots:t._u([t.watchlistToken?{key:"action",fn:function(){return[s("div",{staticClass:"cursor-pointer flex-grow-0 h-6 mx-14 text-brand-primary w-6",class:t.watchlistIcon,on:{click:t.toggleTokenOnWatchList}})]},proxy:!0}:null],null,!0)}),s("div",{staticClass:"flex justify-center mt-2"},[s("span",{staticClass:"bg-neutral-03 px-4 py-2 rounded-full"},[t._v(" "+t._s(t.$t("views.watchlistDetails.currentlyNotSupported"))+" ")])]),s("div",{staticClass:"px-20 py-12"},[s("price-overview",{attrs:{address:t.address,"price-info":t.tokenPriceInfo,symbol:t.symbol.toLowerCase()}})],1)],1)},n=[],o=e(91409),i=e(89600),a=e(69986),l={name:"WatchlistDetails",components:{PriceOverview:i.Z,TopBar:a.Z},computed:{address(){return this.$route.query.address.toLowerCase()},name(){return this.$route.query.name},symbol(){return this.$route.query.symbol},tokenPriceInfo(){const t={address:this.address,symbol:this.symbol};return this.$store.getters.getPriceInfoForToken(t)},watchlistIcon(){const t=this.$store.getters.isTokenOnWatchList(this.watchlistToken);return(0,o.hp)(t)},watchlistToken(){const t={address:this.address,symbol:this.symbol};return this.$store.getters.watchlistToken(t)}},methods:{toggleTokenOnWatchList(){this.watchlistToken&&this.$store.dispatch("toggleTokenOnWatchList",this.watchlistToken)}}},c=l,u=e(1001),h=(0,u.Z)(c,r,n,!1,null,null,null),d=h.exports}}]);