(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[9380],{81346:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>_});s(57658),s(67294);var n=s(83355),a=s(1302),o=s(32739),i=s(70203),r=s(5366),c=s(47839),l=s(98104),d=s(95477),u=s(87279),p=s(68056),m=s(89224),g=s(758),h=s(81212),f=s(45214),b=s(24666),y=s(93405),k=s(52275),v=s(1743),M=s(78140),x=s(32163),j=s(53437),N=s(72495),A=s(85893);class I extends n.Z{constructor(){super(...arguments),this.handleContextMenu=(e,t)=>{if(e.preventDefault(),t.misspelledWord){const e=b.default.state,s="editing"===e.mode&&(0,p.QY)(e.multiSelection);if(s&&s.selection.startIndex===s.selection.endIndex){const e=i.Oqk({textValue:s.store.getValue()||[],substring:t.misspelledWord,ignoreCase:!1}),n=s.selection.startIndex,a=i.PEL(e,n);a&&l.Z5({store:s.store,selection:a})}}f.Z.setState({open:!0,menuInfo:t})},this.handleDismiss=()=>{f.Z.setState({...f.Z.state,open:!1})}}willMount(){c.electronApi&&c.electronApi.contextMenu&&c.electronApi.contextMenu.addListener(this.handleContextMenu)}willUnmount(){c.electronApi&&c.electronApi.contextMenu&&c.electronApi.contextMenu.removeListener(this.handleContextMenu)}renderComponent(){const{menuInfo:e,open:t}=f.Z.state,{device:s}=this.environment,{x:n,y:o}=this.getClickPosition(e),i=new DOMRect(n,o,0,0),r=e?this.getMenuSections(e):[],c=document.activeElement,l=m.get();let d=null,p=null;(c instanceof HTMLInputElement||c instanceof HTMLTextAreaElement)&&(d=c.selectionStart,p=c.selectionEnd);for(const u of r)for(const e of u.items){const t=e.action;e.action=e=>{c.focus(),c instanceof HTMLInputElement||c instanceof HTMLTextAreaElement?(c.selectionStart=d,c.selectionEnd=p):l&&m.set(l,s),a.default.afterNextFlush((()=>{t(e)}))}}return(0,A.jsx)(j.ZP,{open:t&&r.length>0,popupType:j.ZP.PopupType.Popup,originRect:i,render:()=>(0,A.jsx)(v.Z,{capture:!0,allowEsc:!0,children:(0,A.jsx)(M.Z,{menuType:u.og.Popup,children:(0,A.jsx)(x.Z,{type:x.i.Vertical,sections:r,initialFocus:void 0,onAccept:this.handleDismiss})})}),onDismiss:this.handleDismiss,overlayContainerStore:h.Z})}getClickPosition(e){const t=c.getCurrentZoom();return{x:e?e.x/t:0,y:e?e.y/t:0}}getMenuSections(e){const t=[],s=this.getSpellingCorrectionItems(e);if(s.length>0){const e=t.length>0;t.push({key:"spellingCorrectionItems",items:s,render:t=>(0,A.jsx)(N.Z,{...t,topBorder:e})})}const n=this.getDisableSpellCheckItems(e);if(n.length>0){const e=t.length>0;t.push({key:"disableSpellCheckItems",items:n,render:t=>(0,A.jsx)(N.Z,{...t,topBorder:e})})}const a=this.getSearchItems(e);if(a.length>0){const e=t.length>0;t.push({key:"searchItems",items:a,render:t=>(0,A.jsx)(N.Z,{...t,topBorder:e})})}const o=this.getLinkMenuItems(e);if(o.length>0){const e=t.length>0;t.push({key:"linkMenuItems",items:o,render:t=>(0,A.jsx)(N.Z,{...t,topBorder:e})})}const i=this.getImageMenuItems(e);if(i.length>0){const e=t.length>0;t.push({key:"imageMenuItems",items:i,render:t=>(0,A.jsx)(N.Z,{...t,topBorder:e})})}const r=this.getTextEditingItems(e);if(r.length>0){const e=t.length>0;t.push({key:"textEditingItems",items:r,render:t=>(0,A.jsx)(N.Z,{...t,topBorder:e})})}const c=this.getEnableSpellCheckItem(e);if(c.length>0){const e=t.length>0;t.push({key:"enableSpellCheckItems",items:c,render:t=>(0,A.jsx)(N.Z,{...t,topBorder:e})})}return t}getLinkMenuItems(e){const t=[];return e.linkURL&&e.linkURL.length>0&&(e.linkURL.startsWith("mailto:")?t.push({key:"copy-email",action:()=>{c.electronApi&&c.electronApi.copyText&&c.electronApi&&c.electronApi.copyText(e.linkText)},render:e=>(0,A.jsx)(k.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Copy email address",id:"desktop.rightClickMenu.copyEmailAddress"})})}):t.push({key:"copy-link",action:()=>{c.electronApi&&c.electronApi.copyText&&c.electronApi&&c.electronApi.copyText(o.b({url:e.linkURL,domainBaseUrl:d.default.domainBaseUrl,protocol:d.default.protocol}))},render:e=>(0,A.jsx)(k.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Copy link",id:"desktop.rightClickMenu.copyLink"})})}),t.push({key:"open-link",action:()=>{c.electronApi&&c.electronApi.openExternalUrl(o.b({url:e.linkURL,domainBaseUrl:d.default.domainBaseUrl,protocol:d.default.protocol}))},render:e=>(0,A.jsx)(k.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Open link in browser",id:"desktop.rightClickMenu.openLinkInBrowser"})})})),t}getImageMenuItems(e){const t=[];return e.hasImageContents&&e.srcURL&&e.srcURL.length>0&&(t.push({key:"copy-image",action:()=>{c.electronApi&&c.electronApi.copyImage&&c.electronApi.copyImage(e.srcURL)},render:e=>(0,A.jsx)(k.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Copy image",id:"desktop.rightClickMenu.copyImage"})})}),t.push({key:"copy-image-address",action:()=>{c.electronApi&&c.electronApi.copyText&&c.electronApi.copyText(o.b({url:e.srcURL,domainBaseUrl:d.default.domainBaseUrl,protocol:d.default.protocol}))},render:e=>(0,A.jsx)(k.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Copy image address",id:"desktop.rightClickMenu.copyImageAddress"})})})),t}isEditing(e){return e.isEditable||e.inputFieldType&&"none"!==e.inputFieldType}hasMisspelling(e){return this.isEditing(e)&&e.misspelledWord&&e.misspelledWord.length>0}getSpellingCorrectionItems(e){const t="SpellCheckStore"in this.environment&&this.environment.SpellCheckStore,s=[];if(this.hasMisspelling(e)&&t&&t.isEnabled()){const n=t.getCorrections(e);for(const e of n)s.push({key:e,action:()=>{c.electronApi&&c.electronApi.replaceMisspelling&&c.electronApi.replaceMisspelling(e)},render:t=>(0,A.jsx)(k.Z,{...t,title:e})})}return s}getDisableSpellCheckItems(e){const t="SpellCheckStore"in this.environment&&this.environment.SpellCheckStore,s=[];return this.hasMisspelling(e)&&t&&t.isEnabled()&&!(0,g.x)(t)&&s.push({key:"learn-spelling",action:()=>{t.addToDictionary(e.misspelledWord)},render:e=>(0,A.jsx)(k.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Add to dictionary",id:"desktop.spellcheckMenuItem.addToDictionary.title"})})}),this.hasMisspelling(e)&&t&&t.isEnabled()&&s.push({key:"disable",action:()=>{t.setEnabled(!1)},render:e=>(0,A.jsx)(k.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Disable spell check",id:"desktop.spellcheckMenuItem.disableSpellcheck.title"})})}),s}getEnableSpellCheckItem(e){const t="SpellCheckStore"in this.environment&&this.environment.SpellCheckStore,s=[];return this.isEditing(e)&&t&&!t.isEnabled()&&s.push({key:"enable",action:()=>{t.setEnabled(!0)},render:e=>(0,A.jsx)(k.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Enable spell check",id:"desktop.spellcheckMenuItem.enableSpellcheck.title"})})}),s}getSearchItems(e){const t=[];return e.selectionText&&e.selectionText.length>0&&t.push({key:"google",action:()=>{if(c.electronApi){const t=`https://www.google.com/search?q=${encodeURIComponent(e.selectionText.trim())}`;c.electronApi.openExternalUrl(t)}},render:e=>(0,A.jsx)(k.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Search with Google",id:"desktop.searchMenuItem.searchWithGoogle.title"})})}),t}getTextEditingItems(e){const t=[];return this.isEditing(e)&&(e.editFlags.canCut&&t.push({key:"cut",action:()=>{c.electronApi&&c.electronApi.cut&&c.electronApi.cut()},render:e=>(0,A.jsx)(y.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Cut",id:"desktop.textEditingMenuItem.cutAction.title"}),shortcut:"cut"})}),e.editFlags.canCopy&&t.push({key:"copy",action:()=>{c.electronApi&&c.electronApi.copy&&c.electronApi.copy()},render:e=>(0,A.jsx)(y.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Copy",id:"desktop.textEditingMenuItem.copyAction.title"}),shortcut:"copy"})}),e.editFlags.canPaste&&t.push({key:"paste",action:()=>{c.electronApi&&c.electronApi.paste&&c.electronApi.paste()},render:e=>(0,A.jsx)(y.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Paste",id:"desktop.textEditingMenuItem.pasteAction.title"}),shortcut:"paste"})})),t}}I.displayName="ElectronContextMenu";const _=I},758:(e,t,s)=>{"use strict";s.d(t,{P:()=>d,x:()=>l});var n=s(27117),a=s.n(n),o=s(72126),i=s(54153),r=s(47839);const c="spellcheckEnabled";function l(e){return e instanceof d}class d{constructor(e){this.langCache=new(a())(100),this.enabled=void 0,this.currentInputElement=void 0,this.handleSelectionChange=()=>{if(this.enabled){const e=this.getInputElement();e&&e!==this.currentInputElement?(this.currentInputElement=e,this.handleDetectLanguageChange(e)):e&&this.handleDetectLanguageChangeThrottled(e)}},this.handleDetectLanguageChange=e=>{const t=e.textContent;if(t){let e=this.detectLanguages(t);void 0!==e&&(e=e.map((e=>navigator.language.startsWith(e)?navigator.language:e))),this.setLanguages(e)}},this.handleDetectLanguageChangeThrottled=o.P2(this.handleDetectLanguageChange,500),this.currentLanguages=void 0;const t=i.Z.get(c);this.setEnabled(void 0===t||t);const{isMac:s}=e.device;!s&&r.electronApi&&r.electronApi.loadSpellcheck&&(r.electronApi.loadSpellcheck(),document.addEventListener("selectionchange",this.handleSelectionChange))}setEnabled(e){this.enabled=e,i.Z.set(c,e),r.electronApi&&r.electronApi.setSpellCheckerLanguages&&(e?r.electronApi.setSpellCheckerLanguages(this.getLanguages()):r.electronApi.setSpellCheckerLanguages([]))}isEnabled(){return this.enabled}detectLanguages(e){let t;return this.langCache.cache[e]?(t=this.langCache.get(e),t):(r.electronApi&&r.electronApi.cld&&r.electronApi.cld.detect(e,((e,s)=>{s&&s.reliable&&s.languages&&(t=s.languages.map((e=>e.code)))})),this.langCache.set(e,t),t)}getCorrections(e){return e.dictionarySuggestions}setLanguages(e){o.Xy(this.currentLanguages,e)||(this.currentLanguages=e,r.electronApi&&r.electronApi.setSpellCheckerLanguages&&r.electronApi.setSpellCheckerLanguages(e||[]))}getInputElement(){const e=document.activeElement;if(e instanceof HTMLElement&&("input"===e.tagName||"true"===e.contentEditable))return e}getLanguages(){return navigator.languages.filter((e=>e.includes("-")))}}},81212:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});const n=new(s(61364).Z)},45214:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var n=s(49085);class a extends n.default{getInitialState(){return{open:!1}}}const o=new a},60951:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Notification:()=>y});var n=s(40902),a=s(66897),o=s(99036),i=s(86678),r=s(72126),c=s(59753),l=s(55061),d=s(82883),u=s(58129),p=s(13493),m=s(70279),g=s(19889),h=s(70203),f=s(97880),b=s(64002);function y(e){const{activity:t,getRecordValue:s,baseURL:y,userTimeZone:v,pageVisitSource:M,intl:x,useSimplifiedEmailSubjectForGrouping:j,isMobilePush:N}=e,A=c.om.fromGetRecordValueFn(s),I=(0,l.P6)({...e}),_=(0,l.XW)(I,x),E=(0,l.Qs)(I),C=(0,l.xS)(I),T=(0,l.oP)({...e,intl:x}),R=(0,l.sn)({...e,intl:x}),S=(0,l.iR)({...e,intl:x}),Z=(0,l.rn)({...e,intl:x});switch(t.type){case"top-level-block-created":return{subject:x.formatMessage(l.qJ.topLevelBlockCreated,{userName:_,targetName:T,spaceName:Z})};case"top-level-block-deleted":return{subject:x.formatMessage(l.qJ.topLevelBlockDeleted,{userName:_,targetName:T,spaceName:Z})};case"collection-row-created":return{subject:x.formatMessage(l.qJ.collectionRowCreated,{userName:_,targetName:T,collectionName:S})};case"collection-row-deleted":return{subject:x.formatMessage(l.qJ.collectionRowDeleted,{userName:_,targetName:T,collectionName:S})};case"block-edited":{let a;const c=t.getEdits();if(c.length){const t=c[0];if("block-changed"===t.type){const c=t.block_data.after.block_value,d=(0,i.ky)({block:c,getRecordValue:s});if("page"===c.type&&d){const i=t.block_schema||o.Kc(x),c=n.OS({before:t.block_data.before.block_value,after:t.block_data.after.block_value,schema:i}).filter((e=>{const t=i[e];return t&&"formula"!==t.type})).map((n=>{const a=i[n],o=a?a.name:void 0,r=(0,l.v4)({intl:x,property:n,schema:i,block:t.block_data.after.block_value,getRecordValue:s,userTimeZone:e.userTimeZone,baseURL:e.baseURL})||x.formatMessage(l.qJ.emptyBlockEditedProperty);return x.formatMessage(l.qJ.propertyNameAndValueEdited,{propertyName:o,propertyValue:r})})),d=n.B9({before:t.block_data.before.block_value,after:t.block_data.after.block_value}),u=r.oA(d.map((e=>{const n=(0,l._u)({formatProperty:e,intl:x}),a=(0,l.W9)({formatProperty:e,intl:x,block:t.block_data.after.block_value,getRecordValue:s});if(n&&a)return x.formatMessage(l.qJ.propertyNameAndValueEdited,{propertyName:n,propertyValue:a})})));a=x.formatList(c.concat(u),{type:"conjunction",style:"narrow"})}else a=(0,l._2)({intl:x,blockValue:c,getRecordValue:s,baseURL:y,userTimeZone:v})}else if("block-created"===t.type){const e=t.block_data.block_value;a=(0,l._2)({intl:x,blockValue:e,getRecordValue:s,baseURL:y,userTimeZone:v})}else if("block-deleted"===t.type){const e=t.block_data.block_value,n=(0,l._2)({intl:x,blockValue:e,getRecordValue:s,baseURL:y,userTimeZone:v});a=x.formatMessage(l.qJ.blockDeletedEditBody,{renderedBlock:n})}}return{subject:j?k(T,x):x.formatMessage(l.qJ.blockEditedNotification,{userName:_,blockName:T}),body:a}}case"block-property-edited":const q={subject:j?k(T,x):x.formatMessage(l.qJ.blockPropertyEditedNotification,{userName:_,blockName:T}),body:void 0},L=t.getEdits();if(L.length){const t=L[0],n=Object.entries(t.property_updates).filter((e=>{let[s,n]=e;const a=t.filtered_block_schema[s];return a&&!["formula","created_by","created_time"].includes(a.type)})).map((n=>{let[a,o]=n;const i=t.filtered_block_schema[a],r=i?i.name:void 0,c=(0,l.Wy)({intl:x,propertySchema:i,textValue:o.after.value,getRecordValue:s,userTimeZone:e.userTimeZone,baseURL:e.baseURL})||x.formatMessage(l.qJ.emptyBlockEditedProperty);return x.formatMessage(l.qJ.propertyNameAndValueEdited,{propertyName:r,propertyValue:c})}));q.body=x.formatList(n,{type:"conjunction",style:"narrow"})}return N?{subject:x.formatMessage(l.qJ.mobileBlockPropertyEditedNotification,{userName:_}),subtitle:T,body:q.body,senderUserId:E,senderProfilePhoto:C,conversationIdentifier:R}:q;case"permissions-edited":return{subject:x.formatMessage(l.qJ.userEditedPermissionsFor,{userName:_,targetName:T}),body:(0,l.gt)({intl:x,activity:t,getRecordValue:s,pageVisitSource:M,userTimeZone:e.userTimeZone})};case"user-mentioned":{const n=(0,l.kU)({intl:x,getRecordValue:s,baseURL:y,userTimeZone:e.userTimeZone,blockId:t.mentioned_block_id,property:t.mentioned_property});return N?{subject:x.formatMessage(l.qJ.mobileUserMentionedIn,{userName:_}),subtitle:T,body:n,senderUserId:E,senderProfilePhoto:C,conversationIdentifier:R}:{subject:j?k(T,x):x.formatMessage(l.qJ.userMentionedIn,{userName:_,targetName:T}),body:n}}case"commented":{let n;const a=t.getEdits();if(a.length){const t=a[0];if("comment-created"===t.type){const a=s({table:m.x_,id:t.comment_id,spaceId:t.space_id}),o=t.comment_data||a;o&&(n=(0,d.X)({intl:x,textValue:o.text,getRecordModel:A,userTimeZone:e.userTimeZone}))}else if("comment-changed"===t.type)n=(0,d.X)({intl:x,textValue:t.comment_data.after.text,getRecordModel:A,userTimeZone:e.userTimeZone});else{const a=s({table:m.x_,id:t.comment_id,spaceId:t.space_id}),o=t.comment_data||a;if(o){const t=(0,d.X)({intl:x,textValue:o.text,getRecordModel:A,userTimeZone:e.userTimeZone});n=x.formatMessage(l.qJ.userDeletedComment,{commentText:t})}}}return N?{subject:x.formatMessage(l.qJ.mobileUserCommentedSubject,{userName:_}),subtitle:T,body:n,senderUserId:E,senderProfilePhoto:C,conversationIdentifier:R}:{subject:j?k(T,x):x.formatMessage(l.qJ.userCommentedSubject,{userName:_,targetName:T}),body:n}}case"user-invited":const J=(0,b.pE)(T),w=J.length>0?J:x.formatMessage(l.qJ.defaultPageName);if(t.permission_group_id)return{subject:x.formatMessage(l.qJ.userAddedToSpace,{userName:_,workspaceName:w})};return{subject:0===I.filter(a.uC).length?x.formatMessage(l.qJ.userInvitedToSpaceByBot,{workspaceName:w}):x.formatMessage(l.qJ.userInvitedToSpace,{userName:_,workspaceName:w})};case"collection-edited":{let e,s=x.formatMessage(l.qJ.userEditedCollectionSubject,{userName:_,collectionName:T});const a=t.getEdits();if(a.length){const t=a[0];if("collection-changed"===t.type&&t.collection_data){const a=t.collection_data.after?t.collection_data.after.description:void 0,o=t.collection_data.before?t.collection_data.before.description:void 0;o&&!a?s=x.formatMessage(l.qJ.collectionDescriptionDeleted,{userName:_,collectionName:T}):!o&&a?(s=x.formatMessage(l.qJ.collectionDescriptionCreated,{userName:_,collectionName:T}),e=h.Jcv(a)):o&&a&&n.Dn(o,a)&&(e=h.Jcv(a))}else if("collection-created"===t.type&&t.collection_data){const n=t.collection_data.description;n&&(s=x.formatMessage(l.qJ.userCreatedCollectionSubject,{userName:_,collectionName:T}),e=h.Jcv(n))}}return{subject:s,body:e}}case"collection-view-edited":const U=e.getRecordValue({table:p.n,id:t.collection_view_id,spaceId:t.space_id}),P=U&&U.name||x.formatMessage(l.qJ.untitledCollectionView);return{subject:x.formatMessage(l.qJ.collectionViewEditedSubject,{userName:_,collectionViewName:P,collectionName:T})};case"collection-property-edited":const V=t.getEdits(),D=V.length&&V[0],F=D&&("collection-property-changed"===D.type?D.collection_property_data.after.name:D.collection_property_data.name)||x.formatMessage(l.qJ.collectionPropertyEditedUnknown);return t.collection_property_id,{subject:x.formatMessage(l.qJ.collectionPropertyEditedSubject,{userName:_,propertyType:F,collectionName:T})};case"reminder":return{subject:x.formatMessage(l.qJ.reminderSubject,{pageName:T}),body:(0,l.kU)({getRecordValue:s,baseURL:y,userTimeZone:e.userTimeZone,blockId:t.reminder_block_id,property:t.reminder_property,intl:x})};case"permission-group-edited":return{subject:(0,l.pF)({activity:t,intl:x,userName:_,targetName:T})};case"page-locked":case"page-unlocked":return{subject:"page-locked"===t.type?x.formatMessage(l.qJ.pageLockedActivity,{userName:_,pageName:T}):x.formatMessage(l.qJ.pageUnlockedActivity,{userName:_,pageName:T})};case"email-edited":return{subject:x.formatMessage(l.qJ.emailEditedActivity,{userName:_})};case"access-requested":{const e=A({id:t.getAccessRequestId(),table:u.J8,spaceId:t.getSpaceId()});if(!e||e.isPageAccessRequest())return{subject:x.formatMessage(l.qJ.accessRequestedSubject,{userName:_,pageName:T})};if(e.isGuestInviteRequest())return{subject:x.formatMessage(l.qJ.guestInviteRequestedSubject,{userName:_,workspaceName:T})};if(e.isSpaceMembershipRequest()||e.isTeamMembershipRequest())return{subject:x.formatMessage(l.qJ.membershipRequestedSubject,{userName:_,workspaceName:T})};(0,f.t1)(e);break}case"access-request-resolved":{const e=A({id:t.getAccessRequestId(),table:u.J8,spaceId:t.getSpaceId()}),s=t.getEdits()[0].requested_for,n=s?A(s):void 0,a=null!=n&&n.isUser()?n.getEmail():x.formatMessage({defaultMessage:"a guest",id:"pushNotification.accessRequestResolved.invalidGuest"});return{subject:x.formatMessage("approved"===(null==e?void 0:e.status)?l.qJ.accessRequestResolvedApprovedSubject:l.qJ.accessRequestResolvedRejectedSubject,{guestEmail:a,pageName:T})}}case"page-deleted":return{subject:x.formatMessage(l.qJ.pageDeletedActivity,{userName:_})};case"page-restored":return{subject:x.formatMessage(l.qJ.pageRestoredActivity,{userName:_})};case"page-permanently-deleted":return{subject:x.formatMessage(l.qJ.pagePermanentlyDeletedActivity,{userName:_})};case"team-membership-edited":return{subject:x.formatMessage(l.qJ.userInvitedToTeam,{userName:_,teamName:T})};case"private-content-transferred":const B=t.getEdits(),O=B.length&&B[0].from_user_id;if(!O)return{subject:x.formatMessage({defaultMessage:"{author} transferred private content to you: {pageName}",id:"pushNotification.privateContentTransferred.noFromUserName"},{author:_,pageName:T})};const W=s({table:g.KJ,id:O});return{subject:x.formatMessage(l.qJ.privateContentTransferred,{author:_,pageName:T,fromUserName:W&&c.kk.fromValue(g.KJ,W).getFullName(x)})};case"permission-group-mentioned":const G=(0,l.Bg)({spaceId:t.space_id,permissionGroupId:t.mentioned_group_id,getRecordValue:e.getRecordValue}),z=(0,l.jQ)(x,G);return{subject:j?k(T,x):x.formatMessage(l.qJ.permissionGroupMentionedIn,{userName:_,targetName:T,groupName:z}),body:(0,l.kU)({intl:x,getRecordValue:s,baseURL:y,userTimeZone:e.userTimeZone,blockId:t.navigable_block_id,property:t.mentioned_property})};case"verification-expired":return{subject:x.formatMessage(l.qJ.verificationExpired,{pageName:T})};case"export-completed":return{subject:x.formatMessage(l.qJ.exportCompleted)}}}function k(e,t){return t.formatMessage({defaultMessage:"New activity in {pageTitle}",id:"emailActivity.pageActivity.simplifiedSubjectLine"},{pageTitle:e})}},70693:(e,t,s)=>{"use strict";s.d(t,{mb:()=>r,nK:()=>c,pe:()=>l});var n=s(40506),a=s(7057),o=s(53877),i=s(42875);function r(e){const{dateTime:t,intl:s,shortenDateAndRange:n}=e,i=o.OQ.toPersistedDate(t.valueOf());return a.ZV({value:i,allowRelativeDates:!0,intl:s,shortenDateAndRange:n,displayInUserTimezone:!0})}function c(e){const{dateTime:t,intl:s,userTimeZone:n,displayInUserTimezone:i,alwaysIncludeTimezone:r}=e,c=o.OQ.toPersistedDateTime(t.valueOf(),t.zoneName);return a.ZV({value:c,allowRelativeDates:!0,intl:s,userTimeZone:n,displayInUserTimezone:i,alwaysIncludeTimezone:r})}function l(e){const{luxonRange:t,intl:s}=e,r=o.OQ.toPersistedDateRange(t),c=a.ZV({value:r,allowRelativeDates:!1,shortenDateAndRange:!0,intl:s,displayInUserTimezone:!0}),l=t.end.setZone((0,i.r)()),d=a.mr({start_time:l.toFormat(n.jK),humanReadable:!1,intl:s});return s.formatMessage({id:"verification.timeRange",defaultMessage:"{formattedDateRange} at {formattedEndTime}"},{formattedDateRange:c,formattedEndTime:d})}},35717:e=>{"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var s=function(){};s.prototype=t.prototype,e.prototype=new s,e.prototype.constructor=e}}},27117:(e,t,s)=>{var n=s(17187),a=s(35717);function o(e){if(!(this instanceof o))return new o(e);"number"==typeof e&&(e={max:e}),e||(e={}),n.EventEmitter.call(this),this.cache={},this.head=this.tail=null,this.length=0,this.max=e.max||1e3,this.maxAge=e.maxAge||0}e.exports=o,a(o,n.EventEmitter),Object.defineProperty(o.prototype,"keys",{get:function(){return Object.keys(this.cache)}}),o.prototype.clear=function(){this.cache={},this.head=this.tail=null,this.length=0},o.prototype.remove=function(e){if("string"!=typeof e&&(e=""+e),this.cache.hasOwnProperty(e)){var t=this.cache[e];return delete this.cache[e],this._unlink(e,t.prev,t.next),t.value}},o.prototype._unlink=function(e,t,s){this.length--,0===this.length?this.head=this.tail=null:this.head===e?(this.head=t,this.cache[this.head].next=null):this.tail===e?(this.tail=s,this.cache[this.tail].prev=null):(this.cache[t].next=s,this.cache[s].prev=t)},o.prototype.peek=function(e){if(this.cache.hasOwnProperty(e)){var t=this.cache[e];if(this._checkAge(e,t))return t.value}},o.prototype.set=function(e,t){var s;if("string"!=typeof e&&(e=""+e),this.cache.hasOwnProperty(e)){if((s=this.cache[e]).value=t,this.maxAge&&(s.modified=Date.now()),e===this.head)return t;this._unlink(e,s.prev,s.next)}else s={value:t,modified:0,next:null,prev:null},this.maxAge&&(s.modified=Date.now()),this.cache[e]=s,this.length===this.max&&this.evict();return this.length++,s.next=null,s.prev=this.head,this.head&&(this.cache[this.head].next=e),this.head=e,this.tail||(this.tail=e),t},o.prototype._checkAge=function(e,t){return!(this.maxAge&&Date.now()-t.modified>this.maxAge)||(this.remove(e),this.emit("evict",{key:e,value:t.value}),!1)},o.prototype.get=function(e){if("string"!=typeof e&&(e=""+e),this.cache.hasOwnProperty(e)){var t=this.cache[e];if(this._checkAge(e,t))return this.head!==e&&(e===this.tail?(this.tail=t.next,this.cache[this.tail].prev=null):this.cache[t.prev].next=t.next,this.cache[t.next].prev=t.prev,this.cache[this.head].next=e,t.prev=this.head,t.next=null,this.head=e),t.value}},o.prototype.evict=function(){if(this.tail){var e=this.tail,t=this.remove(this.tail);this.emit("evict",{key:e,value:t})}}}}]);