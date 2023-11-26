"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[137],{31523:(e,t,o)=>{o.r(t),o.d(t,{WikiPromoPopup:()=>y});var i=o(67294),r=o(480),s=o(86628),a=o(24405),n=o(41892),u=o(92595),g=o(30687),d=o(90965),p=o(64684),l=o(70203),m=o(82990),c=o(31412),C=o(50906),f=o(39699),P=o(37181),k=o(29919),S=o(98165),b=o(67669),w=o(85644),h=o(77907),M=o(80444),v=o(21884),W=o(35057),_=o(85893);const x=["wiki","위키"];function y(){window.__c={n:"WikiPromoPopup"};const e=(0,r.O7)(),t=(0,a.Fg)(),o=(0,a.yK)((()=>({image:{width:320,height:220}})),[]),{currentUserSettingsStore:y,currentSpaceStore:V,mainEditorCurrentBlockStore:j,currentUserStore:F}=(0,s.VK)((()=>{const{currentSpaceStore:e,currentUserStore:t,currentUserSettingsStore:o,mainEditorCurrentBlockStore:i}=M.default.state;return{currentSpaceStore:e,currentUserStore:t,currentUserSettingsStore:o,mainEditorCurrentBlockStore:i}}),[]),E=(0,s.VK)((()=>{if(!j)return;return S.VP(j)}),[j]);(0,i.useEffect)((()=>{(0,u.exposeDebugValue)("resetWikiPromoPopup",(()=>{const{currentUserSettingsStore:t}=M.default.state;t&&f.createAndCommit({userAction:"WikiPromoPopup.resetWikiPromoPopup",environment:e,perform:e=>{P.d2({userSettingsStore:t,transaction:e,data:{seen_targeted_wiki_prompt:!1}})}})})),(0,u.exposeDebugValue)("resetWikiOnboarding",(()=>{const{currentUserSettingsStore:t}=M.default.state;t&&f.createAndCommit({userAction:"WikiPromoPopup.resetWikiOnboarding",environment:e,perform:e=>{P.d2({userSettingsStore:t,transaction:e,data:{wiki_onboarding_phase:"unseen"}})}})}))}),[e]);const A=(0,i.useCallback)((()=>{y&&(f.createAndCommit({userAction:"WikiPromoPopup.markSeen",environment:e,perform:e=>{P.d2({userSettingsStore:y,transaction:e,data:{seen_targeted_wiki_prompt:!0}})}}),C.mgu(e),v.E.setState({showConvertTooltip:!0,forceShow:!1}))}),[y,e]),U=(0,i.useCallback)((()=>{j&&(v.E.reset(),f.createAndCommit({userAction:"WikiPromoPopup.turnIntoWiki",environment:e,perform:t=>{k.Y({environment:e,blocks:[j],transaction:t,source:"targeted_promo"})}}))}),[j,e]),T=(0,s.VK)((()=>v.E.state.forceShow),[]),K=(0,s.VK)((()=>{if(e.device.isMobile)return!1;if(!(y&&V&&j&&F))return!1;if(!(0,w.zg)(j))return!1;if((0,b.yi)(e,j))return!1;if(!(0,W.Mk)())return!1;const t=y.getSettings();if(!t||void 0!==t.wiki_onboarding_phase&&"unseen"!==t.wiki_onboarding_phase)return!1;if(!j.isTopLevel())return!1;if(j.isTopLevelTeamPage()){if(!(0,p.pd)({membership:null==E?void 0:E.getMembers()},F.id))return!1}else if(!(0,d.KM)({permissions:V.getPermissionItems()},F.id))return!1;return!!x.some((e=>(0,l.QaF)(j.getTitleValue()).toLowerCase().includes(e)))||(M.default.state.inAppCalloutStore.canShow("wiki_promo"),!1)}),[y,V,e,j,E,F]),Z="light"===t.mode?n.Z.images.wikiTargetedPromo.lightMode:n.Z.images.wikiTargetedPromo.darkMode,B=(0,i.useMemo)((()=>[{imageSrc:Z.verificationPng,imageStyles:o.image,title:(0,_.jsx)(c.FormattedMessage,{defaultMessage:"Verify pages",id:"WikiPromoPopup.verification.title"}),subtitle:(0,_.jsx)(c.FormattedMessage,{defaultMessage:"Assign <bold>owners</bold> to pages. Owners can verify if a page has accurate, reliable information",id:"WikiPromoPopup.verification.subtitle",values:{bold:e=>(0,_.jsx)("span",{style:{fontWeight:m.Z.fontWeight.semibold},children:e})}})},{imageSrc:Z.tagsPng,imageStyles:o.image,title:(0,_.jsx)(c.FormattedMessage,{defaultMessage:"Organize your pages with tags",id:"WikiPromoPopup.tags.title"}),subtitle:(0,_.jsx)(c.FormattedMessage,{defaultMessage:"Use tags and other database properties to keep your wiki organized",id:"WikiPromoPopup.tags.subtitle"})},{imageSrc:Z.ownerPng,imageStyles:o.image,title:(0,_.jsx)(c.FormattedMessage,{defaultMessage:"Sort and filter pages",id:"WikiPromoPopup.owner.title"}),subtitle:(0,_.jsx)(c.FormattedMessage,{defaultMessage:"Easily find all pages you're responsible for using database sorting and filtering",id:"WikiPromoPopup.owner.subtitle"})},{imageSrc:Z.upgradePng,imageStyles:o.image,title:(0,_.jsx)(c.FormattedMessage,{defaultMessage:"Ready to upgrade?",id:"WikiPromoPopup.upgrade.title"}),subtitle:(0,_.jsx)(c.FormattedMessage,{defaultMessage:"Add verification, owners, and tags to this page (you can undo this later)",id:"WikiPromoPopup.upgrade.subtitle"})}]),[Z.ownerPng,Z.tagsPng,Z.upgradePng,Z.verificationPng,o.image]);return(0,_.jsx)(h.LazyFeatureIntroPopup,{calloutId:"wiki_promo",initialPromo:{icon:g.w,header:(0,_.jsx)(c.FormattedMessage,{id:"WikiPromoPopup.header",defaultMessage:"Better wikis in Notion"}),description:(0,_.jsx)(c.FormattedMessage,{id:"WikiPromoPopup.description",defaultMessage:"You can now use <bold>page verification</bold> and <bold>page owners</bold> to keep information{br}up to date",values:{bold:e=>(0,_.jsx)("span",{style:{fontWeight:m.Z.fontWeight.semibold},children:e}),br:(0,_.jsx)("br",{})}})},steps:B,seenFeatureUserSetting:"seen_targeted_wiki_prompt",userSettingsStore:y,allowExternalMouseEvents:!0,onDismiss:A,onTryFeatureClick:U,forceShow:T,isUserEligible:K,onPopupSeen:()=>C.Kge(e,{source:T?"page_menu":"targeted_promo"}),onLearnMore:()=>C.Rm2(e)})}},21884:(e,t,o)=>{o.d(t,{E:()=>i});const i=o(49085).default.createValue({showConvertTooltip:!1,forceShow:!1})},30687:(e,t,o)=>{o.d(t,{w:()=>s});o(67294);var i=o(45238),r=o(85893);const s=(0,i.I)("openBook",{viewBox:"0 0 22 19",svg:(0,r.jsx)("path",{d:"M0.150391 16.8906C0.150391 17.2943 0.261068 17.5807 0.482422 17.75C0.703776 17.9193 0.960938 18.0039 1.25391 18.0039C1.41667 18.0039 1.57617 17.9616 1.73242 17.877C1.88867 17.7988 2.05794 17.7012 2.24023 17.584C2.7806 17.2194 3.36979 16.9297 4.00781 16.7148C4.65234 16.5065 5.31641 16.4056 6 16.4121C6.70312 16.4186 7.38997 16.5521 8.06055 16.8125C8.73763 17.0729 9.34961 17.4668 9.89648 17.9941C10.1113 18.1895 10.3034 18.3229 10.4727 18.3945C10.6419 18.4727 10.8177 18.5117 11 18.5117C11.1758 18.5117 11.3483 18.4727 11.5176 18.3945C11.6934 18.3229 11.8854 18.1895 12.0938 17.9941C12.6406 17.4668 13.2493 17.0729 13.9199 16.8125C14.597 16.5521 15.2904 16.4186 16 16.4121C16.6771 16.4056 17.3346 16.5065 17.9727 16.7148C18.6172 16.9297 19.2096 17.2194 19.75 17.584C19.9323 17.7012 20.1016 17.7988 20.2578 17.877C20.4141 17.9616 20.5768 18.0039 20.7461 18.0039C21.0326 18.0039 21.2865 17.9193 21.5078 17.75C21.7292 17.5807 21.8398 17.2943 21.8398 16.8906V3.63867C21.8398 3.55404 21.8333 3.47591 21.8203 3.4043C21.8073 3.33268 21.7747 3.25456 21.7227 3.16992C21.4362 2.66862 21.0098 2.20638 20.4434 1.7832C19.877 1.36003 19.2096 1.02148 18.4414 0.767578C17.6797 0.507161 16.8529 0.376953 15.9609 0.376953C14.8932 0.376953 13.9199 0.56901 13.041 0.953125C12.1686 1.33073 11.4883 1.82227 11 2.42773C10.5052 1.82227 9.81836 1.33073 8.93945 0.953125C8.06706 0.56901 7.10026 0.376953 6.03906 0.376953C5.14062 0.376953 4.30729 0.507161 3.53906 0.767578C2.77734 1.02148 2.11328 1.36003 1.54688 1.7832C0.986979 2.20638 0.560547 2.66862 0.267578 3.16992C0.215495 3.25456 0.182943 3.33268 0.169922 3.4043C0.156901 3.47591 0.150391 3.55404 0.150391 3.63867V16.8906ZM1.72266 16.0605V3.86328C1.98307 3.47917 2.33789 3.14388 2.78711 2.85742C3.23633 2.57096 3.73763 2.34961 4.29102 2.19336C4.85091 2.0306 5.43359 1.94922 6.03906 1.94922C6.96354 1.94922 7.80339 2.12826 8.55859 2.48633C9.3138 2.8444 9.86393 3.32292 10.209 3.92188V16.2266C9.87695 15.9596 9.48958 15.722 9.04688 15.5137C8.61068 15.3053 8.13542 15.1426 7.62109 15.0254C7.10677 14.9017 6.57943 14.8398 6.03906 14.8398C5.1862 14.8398 4.38216 14.9505 3.62695 15.1719C2.87174 15.3932 2.23698 15.6895 1.72266 16.0605ZM11.7812 16.2266V3.92188C12.1263 3.32292 12.6764 2.8444 13.4316 2.48633C14.1868 2.12826 15.0299 1.94922 15.9609 1.94922C16.5599 1.94922 17.1361 2.0306 17.6895 2.19336C18.2493 2.34961 18.7539 2.57096 19.2031 2.85742C19.6523 3.14388 20.0072 3.47917 20.2676 3.86328V16.0605C19.7533 15.6895 19.1185 15.3932 18.3633 15.1719C17.6081 14.9505 16.8073 14.8398 15.9609 14.8398C15.4141 14.8398 14.8835 14.9017 14.3691 15.0254C13.8613 15.1426 13.3861 15.3053 12.9434 15.5137C12.5007 15.722 12.1133 15.9596 11.7812 16.2266Z"})})}}]);