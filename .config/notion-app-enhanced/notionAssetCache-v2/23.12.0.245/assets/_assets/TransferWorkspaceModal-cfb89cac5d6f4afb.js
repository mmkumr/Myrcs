"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[4114],{8411:(e,t,r)=>{r.r(t),r.d(t,{TransferWorkspaceModal:()=>P});var a=r(67294),n=r(480),i=r(86628),s=r(24405),o=r(15145),l=r(33728),d=r(5366),c=r(97880),u=r(50906),p=r(54642),m=r(47307),g=r(29974),f=r(28020),h=r(78861),C=r(80444),x=r(1743),y=r(50506),S=r(19889),v=r(82990),w=r(35661),k=r(42922),j=r(61519),M=r(74194),b=r(89728),I=r(64369),T=r(33907),W=r(69860),V=r(84169),U=r(74600),Z=r(54497),B=r(70043),L=r(18514),_=r(73063),E=r(16354),K=r(45653),q=r(85893);const F={inputLabel:{fontWeight:v.Z.fontWeight.medium,fontSize:14,letterSpacing:-.15,textAlign:"left",width:"100%"},input:{width:"100%",marginTop:8}};function N(e){window.__c={n:"TransferModalHeader"};const t=(0,s.yK)((e=>({avatarContainer:{display:"flex",justifyContent:"center",alignItems:"center"},avatarContainerBadged:{position:"relative"},avatarBadgeIcon:{position:"absolute",left:26,top:26,height:20,width:20},exclamationMarkIcon:{width:"100%",height:18,fill:e.accentColors.yellow[500],stroke:e.modalBackground,strokeWidth:3,paintOrder:"stroke fill",overflow:"visible"},arrowRightIcon:{width:16,height:16,marginLeft:12,marginRight:12,fill:e.mediumIconColor},questionMarkIcon:{width:20,height:20,fill:e.mediumIconColor},userIconPlaceholder:{width:40,height:40,borderRadius:"50%",backgroundColor:e.modalBackground,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:B.v.avatarBoxShadow.light,boxSizing:"content-box",border:`1px solid ${e.lightDividerColor}`},headerStyle:{textAlign:"center"},titleContainer:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:15},title:{fontSize:16,fontWeight:v.Z.fontWeight.medium},description:{marginTop:5,fontWeight:v.Z.fontWeight.regular,textAlign:"center",fontSize:13,lineHeight:"16px",letterSpacing:-.08}})),[]);return(0,q.jsxs)("div",{style:t.headerStyle,children:[(0,q.jsxs)("div",{style:t.avatarContainer,children:[(0,q.jsxs)("div",{style:t.avatarContainerBadged,children:[(0,q.jsx)(K.Z,{size:40,userValue:e.fromUserValue,avatarShouldShowShadow:!0}),(0,q.jsx)("div",{style:t.avatarBadgeIcon,children:(0,Z.t)(t.exclamationMarkIcon)})]}),(0,T.n)(t.arrowRightIcon),e.targetUserValue?(0,q.jsx)(K.Z,{size:40,userValue:e.targetUserValue,avatarShouldShowShadow:!0}):(0,q.jsx)("div",{style:t.userIconPlaceholder,children:(0,U.L)(t.questionMarkIcon)})]}),(0,q.jsxs)("div",{style:t.titleContainer,children:[(0,q.jsx)(I.Z,{style:t.title,children:(0,q.jsx)(d.FormattedMessage,{defaultMessage:"Change workspace account",id:"transferWorkspaceModal.changeAccount.title"})}),(0,q.jsx)(E.Z,{href:(0,L.UY)("guides.domainManagement"),children:(0,q.jsx)(_.Z,{icon:V.m})})]}),(0,q.jsx)(I.Z,{isSecondaryColor:!0,isMultiline:!0,style:t.description,children:e.description})]})}function R(){window.__c={n:"BackToMyWorkspacesButton"};const e=(0,n.O7)(),t=(0,s.yK)((e=>({backIconStyle:{width:12,height:12,marginRight:7,fill:e.mediumIconColor},secondaryButton:{marginTop:12,justifyContent:"center",fontWeight:v.Z.fontWeight.medium,color:e.lightTextColor,letterSpacing:"-0.154px"}})),[]),r=(0,i.VK)((()=>C.default.state.currentUserRootStore),[]),l=(0,i.VK)((()=>C.default.state.currentUserSettingsStore),[]),c=(0,i.VK)((()=>r&&l),[r,l]),u=(0,a.useCallback)((async()=>{r&&l&&await g.L5({environment:e,userRootStore:r,userSettingsStore:l,skipPendingTransferWorkspaces:!0,pageVisitSource:o.tY.BackForward})}),[e,r,l]);return(0,q.jsxs)(b.Z,{style:t.secondaryButton,onClick:u,disabled:!c,children:[(0,W.Y)(t.backIconStyle),(0,q.jsx)(d.FormattedMessage,{id:"transferWorkspaceModal.backToMyWorkspacesButton.label",defaultMessage:"Back to my workspaces"})]})}function D(e){window.__c={n:"ConfirmTransferState"};const{currentSpaceStore:t,currentUserValue:r,targetUserId:n,handleConfirm:o,handleBack:l,intl:c}=e,u=(0,s.yK)((e=>({primaryButton:{width:"100%",marginBottom:"10px",marginTop:32},secondaryButton:{color:e.mediumTextColor,fontWeight:v.Z.fontWeight.medium},emailFieldCaption:{textAlign:"center",marginTop:"5px",lineHeight:"15px",fontSize:12,color:e.lightTextColor},inputLabel:F.inputLabel,verificationCodeInputContainer:{marginTop:13},input:F.input,inputContainer:{marginTop:27,width:"100%"},dividerContainer:{marginTop:29},dividerInner:{borderBottomColor:e.regularDividerColor}})),[]),p=(0,i.VK)((()=>t.getName()),[t]),m=(0,i.VK)((()=>w.U6.createChildStore(t,{id:n,table:S.KJ}).getValue()),[t,n]),g=(0,i.VK)((()=>w.U6.createChildStore(t,{id:n,table:S.KJ}).getEmail()),[t,n]),[f,h]=(0,a.useState)(""),C=(0,a.useCallback)((e=>{h(e.currentTarget.value)}),[h]),x=(0,a.useCallback)((async()=>{await o(f)}),[f,o]);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(N,{fromUserValue:r,targetUserValue:m,description:(0,q.jsx)(d.FormattedMessage,{defaultMessage:"Transfer {currentSpaceName} to the Notion account associated with {targetUserEmail}.",id:"transferWorkspaceModal.confirmTransfer.description",values:{currentSpaceName:p,targetUserEmail:g}})}),(0,q.jsx)(j.Z,{size:"100%",innerStyle:u.dividerInner,style:u.dividerContainer}),(0,q.jsxs)("div",{style:u.inputContainer,children:[(0,q.jsx)(I.Z,{style:u.inputLabel,children:(0,q.jsx)(d.FormattedMessage,{id:"transferWorkspaceModal.confirmTransfer.emailLabel",defaultMessage:"Email"})}),(0,q.jsx)(M.Z,{style:u.input,value:g,disabled:!0}),(0,q.jsx)(I.Z,{isSecondaryColor:!0,style:u.emailFieldCaption,children:(0,q.jsx)(d.FormattedMessage,{id:"transferWorkspaceModal.confirmTransfer.emailDescription",defaultMessage:"We just sent you a temporary verification code.{br}Please check your inbox.",values:{br:(0,q.jsx)("br",{})}})}),(0,q.jsx)("div",{style:u.verificationCodeInputContainer,children:(0,q.jsx)(I.Z,{style:u.inputLabel,children:(0,q.jsx)(d.FormattedMessage,{id:"transferWorkspaceModal.confirmTransfer.passcodeLabel",defaultMessage:"Verification code"})})})]}),(0,q.jsx)(M.Z,{style:u.input,value:f,onChange:C,onSubmit:x,placeholder:c.formatMessage({id:"transferWorkspaceModal.confirmTransfer.passcodePlaceholder",defaultMessage:"Enter verification code..."}),focusInitial:!0}),(0,q.jsx)(k.Z,{style:u.primaryButton,onClick:x,children:(0,q.jsx)(d.FormattedMessage,{defaultMessage:"Confirm transfer",id:"transferWorkspaceModal.confirmTransfer.confirmButton"})}),(0,q.jsx)(b.Z,{style:u.secondaryButton,onClick:l,children:(0,q.jsx)(d.FormattedMessage,{defaultMessage:"Cancel",id:"transferWorkspaceModal.confirmTransfer.cancelButton"})})]})}var z=r(15047);function H(e){window.__c={n:"RequestedTransferStage"};const{currentUserValue:t,currentSpaceStore:r,workspaceTransfer:n,intl:o,handleSubmitEmail:l}=e,c=(0,s.yK)((e=>({primaryButton:{width:"100%",marginTop:32},emailLabel:F.inputLabel,emailInput:F.input,dividerContainer:{marginTop:29},dividerInner:{borderBottomColor:e.regularDividerColor},emphasizedDescriptionText:{fontWeight:v.Z.fontWeight.medium},inputContainer:{marginTop:27,width:"100%"}})),[]),u=(0,i.VK)((()=>t.email),[t]),p=(0,i.VK)((()=>null==r?void 0:r.getName()),[r]),m=(0,i.VK)((()=>w.H2.createChildStore(r,{table:z.bx,id:n.requested_from_space_id}).getName()),[r,n]),[g,f]=(0,a.useState)(""),h=(0,a.useCallback)((()=>{l(g)}),[g,l]);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(N,{fromUserValue:t,description:(0,q.jsx)(d.FormattedMessage,{id:"transferWorkspaceModal.transferRequested.description",defaultMessage:"{currentWorkspaceName} is associated with {currentUserEmail}. {requestingWorkspaceName} owns {currentUserEmailDomain} and requires that you switch to a personal Notion account to continue using this workspace.{br}{br}Contact {contactEmail} for assistance.",values:{br:(0,q.jsx)("br",{}),currentWorkspaceName:p,currentUserEmail:u,currentUserEmailDomain:u.split("@")[1],requestingWorkspaceName:m,contactEmail:(0,q.jsx)("span",{style:c.emphasizedDescriptionText,children:n.contact_email})}})}),(0,q.jsx)(j.Z,{size:"100%",innerStyle:c.dividerInner,style:c.dividerContainer}),(0,q.jsxs)("div",{style:c.inputContainer,children:[(0,q.jsx)(I.Z,{style:c.emailLabel,children:(0,q.jsx)(d.FormattedMessage,{id:"transferWorkspaceModal.transferRequested.emailLabel",defaultMessage:"Email"})}),(0,q.jsx)(M.Z,{style:c.emailInput,value:g,onChange:e=>{f(e.currentTarget.value)},onSubmit:h,placeholder:o.formatMessage({id:"transferWorkspaceModal.transferRequested.emailPlaceholder",defaultMessage:"Personal-use, Notion account email address..."}),focusInitial:!0})]}),(0,q.jsx)(k.Z,{isLarge:!0,style:c.primaryButton,onClick:h,children:(0,q.jsx)(d.FormattedMessage,{id:"transferWorkspaceModal.transferRequested.continueButton",defaultMessage:"Continue with email"})}),(0,q.jsx)(R,{})]})}function P(e){window.__c={n:"TransferWorkspaceModal"};const{workspaceTransfer:t}=e,r=(0,n.O7)(),S=(0,d.useIntl)(),v=(0,i.VK)((()=>C.default.state.currentSpaceStore),[]),w=(0,i.VK)((()=>C.default.state.currentUserStore),[]),k=(0,i.VK)((()=>C.default.state.currentUserRootStore),[]),j=(0,i.VK)((()=>C.default.state.currentUserSettingsStore),[]),[M,b]=(0,a.useState)({type:"requested"}),I=(0,i.VK)((()=>{var e;return null===(e=(0,f.B7)(r))||void 0===e?void 0:e.getValue()}),[r]),T=(0,s.yK)((e=>({modalInnerStyle:{width:406,padding:"24px 20px 16px 20px",display:"flex",flexDirection:"column",alignItems:"center"}})),[]);if(!v||!w||!I)return null;let W;switch(M.type){case"requested":const e=async e=>{const t=await p.sendVerifyTransferEmail(r,{email:e});"failed"!==t.type?b({type:"confirm",targetUserId:t.data.userId,targetUserEmailDomain:(0,l.Gd)(e)}):m.showError(t)};W=(0,q.jsx)(H,{currentUserValue:I,currentSpaceStore:v,workspaceTransfer:t,handleSubmitEmail:e,intl:S});break;case"confirm":const a=async e=>{const a=M.targetUserId,n=await p.transferWorkspaceToUser(r,{targetUserId:a,spaceId:v.id,transferEmailPasscode:e});if("failed"===n.type)return m.showError(n),void b({type:"requested"});u.s4j(r,{newOwner:a,newEmailDomain:M.targetUserEmailDomain||"__UNKNOWN_EMAIL_DOMAIN__",requestingSpaceId:t.requested_from_space_id});const i=h.Z.getSpaceViewStores(r,a).find((e=>e.getSpaceId()===v.id));return i?void(await g.y3({environment:r,userRootStore:k,userSettingsStore:j,spaceViewStore:i,pageVisitSource:o.tY.SwitchSpace})):k&&j?(await g.L5({environment:r,userRootStore:k,userSettingsStore:j,skipPendingTransferWorkspaces:!0,pageVisitSource:o.tY.SwitchSpace}),void b({type:"requested"})):void 0};W=(0,q.jsx)(D,{currentSpaceStore:v,currentUserValue:I,targetUserId:M.targetUserId,handleBack:()=>b({type:"requested"}),handleConfirm:a,intl:S});break;default:(0,c.t1)(M)}return(0,q.jsx)(x.Z,{capture:!0,children:(0,q.jsx)(y.Z,{open:!0,innerStyle:T.modalInnerStyle,onDismiss:()=>{},render:()=>W})})}},69860:(e,t,r)=>{r.d(t,{Y:()=>i});r(67294);var a=r(45238),n=r(85893);const i=(0,a.I)("commentReply",{viewBox:"0 0 12 12",svg:(0,n.jsx)("path",{d:"M11.2324 7.2832C11.2324 4.95117 9.66211 3.33984 7.00195 3.33984H3.32227L1.96875 3.4043L2.99414 2.53711L4.48242 1.08398C4.59961 0.972656 4.67578 0.826172 4.67578 0.632812C4.67578 0.263672 4.41797 0 4.03711 0C3.87305 0 3.69141 0.0761719 3.5625 0.199219L0.205078 3.50977C0.0703125 3.63867 0 3.81445 0 3.99609C0 4.17188 0.0703125 4.34766 0.205078 4.47656L3.5625 7.78711C3.69141 7.91016 3.87305 7.98633 4.03711 7.98633C4.41797 7.98633 4.67578 7.72266 4.67578 7.35352C4.67578 7.16016 4.59961 7.01953 4.48242 6.90234L2.99414 5.44922L1.96875 4.58789L3.32227 4.64648H7.03125C8.90625 4.64648 9.94336 5.71289 9.94336 7.23633C9.94336 8.75977 8.90625 9.87305 7.03125 9.87305H5.66016C5.27344 9.87305 4.99805 10.166 4.99805 10.5234C4.99805 10.8809 5.27344 11.1738 5.66602 11.1738H7.07812C9.69141 11.1738 11.2324 9.63281 11.2324 7.2832Z"})})},22686:(e,t,r)=>{r.d(t,{f:()=>i});r(67294);var a=r(45238),n=r(85893);const i=(0,a.I)("person",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M7.7832 8.00195C9.27344 8.00195 10.5381 6.67578 10.5381 4.95996C10.5381 3.28516 9.2666 2 7.7832 2C6.29297 2 5.01465 3.30566 5.02148 4.97363C5.02148 6.67578 6.28613 8.00195 7.7832 8.00195ZM3.51758 14.3594H12.0352C13.1631 14.3594 13.5527 14.0176 13.5527 13.3887C13.5527 11.6318 11.3242 9.21191 7.77637 9.21191C4.23535 9.21191 2 11.6318 2 13.3887C2 14.0176 2.38965 14.3594 3.51758 14.3594Z"})})},14734:(e,t,r)=>{r.d(t,{X:()=>i});r(67294);var a=r(45238),n=r(85893);const i=(0,a.I)("personCrossedOut",{viewBox:"0 0 44 44",svg:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{d:"M5.4857 44H0L44 8.56549V13.0061L5.4857 44Z"}),(0,n.jsx)("path",{d:"M39.8048 44H8.66491L25.6448 30.4378C26.9394 30.6489 28.1581 30.9719 29.3009 31.4067C31.5362 32.2374 33.4346 33.326 34.9964 34.6723C36.5725 36.0044 37.7761 37.4367 38.6071 38.9692C39.4525 40.5018 39.8752 41.9555 39.8752 43.3305C39.8752 43.5675 39.8517 43.7906 39.8048 44Z"}),(0,n.jsx)("path",{d:"M30.3971 16.7973C30.3971 16.8668 30.3965 16.9359 30.3952 17.0048L19.3828 25.9192C18.7467 25.7134 18.1339 25.4228 17.5446 25.0473C16.2408 24.2023 15.1876 23.0708 14.3853 21.6528C13.5972 20.2205 13.2032 18.6163 13.2032 16.8403C13.2032 15.0929 13.5972 13.5174 14.3853 12.1137C15.1876 10.7101 16.2408 9.60007 17.5446 8.78366C18.8485 7.96725 20.267 7.55905 21.8001 7.55905C23.3332 7.55905 24.7517 7.96009 26.0556 8.76218C27.3595 9.56426 28.4054 10.6671 29.1935 12.0708C29.9959 13.4601 30.3971 15.0356 30.3971 16.7973Z"})]})})}}]);