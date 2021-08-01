(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ff16a36"],{"35c6":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("app-sidebar",[s("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:e.$t("Projects"),expression:"$t('Projects')",modifiers:{right:!0}}],staticClass:"menu-item",attrs:{to:{name:"projects"},"active-class":"active"}},[s("i",{staticClass:"fe fe-grid"})]),e.loggedUser.isSuperUser?s("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:e.$t("Users"),expression:"$t('Users')",modifiers:{right:!0}}],staticClass:"menu-item",attrs:{to:{name:"users"},"active-class":"active"}},[s("i",{staticClass:"fe fe-users"})]):e.loggedUser.id?s("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:e.$t("Account settings"),expression:"$t('Account settings')",modifiers:{right:!0}}],staticClass:"menu-item",attrs:{to:{name:"user",params:{userId:e.loggedUser.id}},"active-class":"active"}},[s("i",{staticClass:"fe fe-user"})]):e._e()],1)},r=[],i=(s("ac6a"),s("ade3")),n=s("2f62"),o=s("4eee");function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function c(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){Object(i["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var u={name:"home-sidebar",components:{"app-sidebar":o["a"]},computed:c({},Object(n["d"])({loggedUser:e=>e.user.user}))},d=u,m=s("2877"),p=Object(m["a"])(d,a,r,!1,null,null,null);t["a"]=p.exports},f2a7:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-body"},[s("home-sidebar"),s("main",{staticClass:"app-main"},[s("header",{staticClass:"app-header"},[s("nav",{staticClass:"breadcrumbs"},[e.loggedUser.isSuperUser?[s("router-link",{staticClass:"breadcrumb-item",attrs:{to:{name:"users"}}},[e._v(e._s(e.$t("Users")))]),s("div",{staticClass:"breadcrumb-item active"},[s("span",{staticClass:"txt"},[e._v(e._s(e.$t("Edit user")))]),e.loggedUser.id==e.user.id?s("span",{staticClass:"label label-transp-primary m-l-10 v-align-middle"},[e._v(e._s(e.$t("You")))]):e._e()])]:[s("div",{staticClass:"breadcrumb-item active"},[e._v(e._s(e.$t("Account settings")))])]],2),s("div",{staticClass:"flex-fill-block"}),e.isLoading?e._e():s("small",{staticClass:"link-fade",on:{click:function(t){return t.preventDefault(),e.deleteUser()}}},[e._v(" "+e._s(e.$t("Delete account"))+" ")])]),e.isLoading||!e.user.id?s("div",{staticClass:"block txt-center txt-hint"},[s("span",{staticClass:"loader loader-lg loader-blend"})]):s("div",{staticClass:"tabs"},[s("div",{staticClass:"tabs-header"},e._l(e.tabsList,(function(t,a){return s("a",{key:a,staticClass:"tab-item",class:{active:e.activeTab===a},attrs:{href:"?tab="+a,tabindex:"0"},on:{click:function(t){return t.preventDefault(),e.changeTab(a)}}},[e._v(" "+e._s(t)+" ")])})),0),s("div",{staticClass:"tabs-content"},[s("div",{staticClass:"tab-item",class:{active:"profile"===e.activeTab}},[s("profile-form",{staticClass:"container-wrapper m-l-0",attrs:{user:e.user,changeEmail:e.authMethods.emailPassword}})],1),s("div",{staticClass:"tab-item",class:{active:"notifications"===e.activeTab}},[s("notifications-form",{staticClass:"container-wrapper m-l-0",attrs:{user:e.user}})],1),e.authMethods.emailPassword?s("div",{staticClass:"tab-item",class:{active:"security"===e.activeTab}},[s("security-form",{staticClass:"container-wrapper m-l-0",attrs:{user:e.user}})],1):e._e()])]),s("div",{staticClass:"flex-fill-block"}),s("app-footer",{staticClass:"m-t-base"})],1)],1)},r=[],i=(s("ac6a"),s("097d"),s("a481"),s("ade3")),n=s("2f62"),o=s("f744"),l=s("dd93"),c=s("438c"),u=s("35c6"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"flex-block"},[s("figure",{staticClass:"avatar avatar-lg"},[e.user.getAvatar("small")?s("img",{attrs:{src:e.user.getAvatar("small"),alt:"User avatar"}}):s("i",{staticClass:"fe fe-user"})]),s("button",{ref:"uploadContainer",staticClass:"btn btn-light-border btn-sm m-l-small btn-loader dz-clickable",class:{"btn-loader-active":e.avatarProcessing},attrs:{type:"button"}},[s("span",{staticClass:"txt"},[e._v(e._s(e.$t("Change avatar")))])]),e.user.getAvatar("small")?s("small",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:e.$t("Delete"),expression:"$t('Delete')",modifiers:{right:!0}}],staticClass:"txt-danger link-fade m-l-small",on:{click:function(t){return t.preventDefault(),e.deleteAvatar()}}},[s("i",{staticClass:"fe fe-trash"})]):e._e()]),s("div",{staticClass:"clearfix m-b-base"}),s("form",{on:{submit:function(t){return t.preventDefault(),e.saveChanges()}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("form-field",{attrs:{name:"firstName"}},[s("label",{attrs:{for:"user_first_name"}},[e._v(e._s(e.$t("First name")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],attrs:{type:"text",id:"user_first_name"},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}})])],1),s("div",{staticClass:"col-lg-6"},[s("form-field",{attrs:{name:"lastName"}},[s("label",{attrs:{for:"user_last_name"}},[e._v(e._s(e.$t("Last name")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{type:"text",id:"user_last_name"},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}})])],1)]),e.loggedUser.isSuperUser?s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("form-field",{staticClass:"required",attrs:{name:"type"}},[s("label",{attrs:{for:"user_type"}},[e._v(e._s(e.$t("Type")))]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{id:"user_type",required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.type=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"regular"}},[e._v(e._s(e.$t("Regular")))]),s("option",{attrs:{value:"super"}},[e._v(e._s(e.$t("Super user")))])])])],1),s("div",{staticClass:"col-6"},[s("form-field",{staticClass:"required",attrs:{name:"status"}},[s("label",{attrs:{for:"user_status"}},[e._v(e._s(e.$t("Status")))]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.status,expression:"status"}],attrs:{id:"user_status",required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.status=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"inactive"}},[e._v(e._s(e.$t("Inactive")))]),s("option",{attrs:{value:"active"}},[e._v(e._s(e.$t("Active")))])])])],1)]):e._e(),e.changeEmail?s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[e.loggedUser.isSuperUser?s("form-field",{attrs:{name:"email"}},[s("label",{attrs:{for:"user_email"}},[e._v(e._s(e.$t("Email")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"user_email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]):s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"user_email"}},[e._v(e._s(e.$t("Email")))]),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{type:"text",id:"user_email",disabled:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),s("div",{staticClass:"input-addon link-default bg-border",on:{click:function(t){return t.preventDefault(),e.openEmailChangePopup()}}},[e._v(e._s(e.$t("Change email")))])])])],1),s("div",{staticClass:"col-lg-6"})]):e._e(),s("div",{staticClass:"flex-block"},[s("button",{staticClass:"btn btn-primary btn-cons-lg btn-loader",class:{"btn-loader-active":e.formProcessing}},[s("span",{staticClass:"txt"},[e._v(e._s(e.$t("Save changes")))])]),s("router-link",{directives:[{name:"show",rawName:"v-show",value:!e.formProcessing,expression:"!formProcessing"}],staticClass:"link-hint m-l-small",attrs:{to:{name:"home"}}},[s("span",{staticClass:"txt"},[e._v(e._s(e.$t("Cancel")))])])],1)]),e.loggedUser.isSuperUser?e._e():s("user-email-change-popup",{ref:"emailChangePopup",attrs:{user:e.user}})],1)},m=[],p=s("79e3"),h=s.n(p),f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.submitForm()}}},[s("popup",{ref:"popup",staticClass:"popup-sm",scopedSlots:e._u([{key:"header",fn:function(){return[s("h4",{staticClass:"title"},[e._v(e._s(e.$t("Change email")))])]},proxy:!0},{key:"content",fn:function(){return[s("form-field",{attrs:{name:"email"}},[s("label",{attrs:{for:"profile_new_email"}},[e._v(e._s(e.$t("New email")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newEmail,expression:"newEmail"}],attrs:{type:"email",id:"profile_new_email",required:""},domProps:{value:e.newEmail},on:{input:function(t){t.target.composing||(e.newEmail=t.target.value)}}})])]},proxy:!0},{key:"footer",fn:function(){return[s("button",{directives:[{name:"show",rawName:"v-show",value:!e.isProcessing,expression:"!isProcessing"}],staticClass:"btn btn-light-border",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.close()}}},[s("span",{staticClass:"txt"},[e._v(e._s(e.$t("Cancel")))])]),s("div",{staticClass:"flex-fill-block"}),s("button",{staticClass:"btn btn-primary btn-cons btn-loader",class:{"btn-loader-active":e.isProcessing}},[s("span",{staticClass:"txt"},[e._v(e._s(e.$t("Send verification link")))])])]},proxy:!0}])})],1)},v=[],g=s("3905"),b=s("ebd1"),y={name:"user-email-change-popup",components:{popup:g["a"]},props:{user:{type:b["a"],required:!0}},data(){return{isProcessing:!1,newEmail:""}},methods:{open(){this.isProcessing=!1,this.resetForm(),this.$refs.popup.open()},close(){this.isProcessing=!1,this.$refs.popup.close()},resetForm(){this.newEmail=""},submitForm(){this.isProcessing||(this.isProcessing=!0,o["a"].Users.requestEmailChange(this.user.email,{newEmail:this.newEmail}).then(e=>{this.close(),this.resetForm(),this.$toast(this.$t("A verification link to your new email address was successfully sent."))}).catch(e=>{this.$errResponseHandler(e)}).finally(()=>{this.isProcessing=!1}))}}},w=y,O=s("2877"),_=Object(O["a"])(w,f,v,!1,null,null,null),C=_.exports;function P(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function $(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?P(Object(s),!0).forEach((function(t){Object(i["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):P(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var j={name:"user-profile-form",props:{user:{type:b["a"],required:!0},changeEmail:{type:Boolean,default:!0}},components:{"user-email-change-popup":C},data(){return{dropzone:null,firstName:"",lastName:"",type:"regular",status:"active",email:"",newEmail:"",formProcessing:!1,avatarProcessing:!1,changeEmailProcessing:!1}},computed:$({},Object(n["d"])({loggedUser:e=>e.user.user})),watch:{"user.id":function(e,t){this.loadForm()}},mounted(){this.loadForm(),this.initAvatarUpload()},destroyed(){this.dropzone&&this.dropzone.destroy()},methods:{loadForm(){this.firstName=this.user.firstName,this.lastName=this.user.lastName,this.email=this.user.email,this.type=this.user.type,this.status=this.user.status},refreshUser(e){l["a"].isEmpty(e)||(this.user.load(e),this.loadForm(),this.user.id==this.loggedUser.id&&this.$store.dispatch("user/set",e))},saveChanges(e){this.formProcessing||(this.formProcessing=!0,o["a"].Users.update(this.user.id,{firstName:this.firstName,lastName:this.lastName,email:this.email,type:this.type,status:this.status}).then(t=>{this.$toast(this.$t("Successfully saved changes.")),this.refreshUser(t.data),l["a"].isFunction(e)&&e(t)}).catch(e=>{this.$errResponseHandler(e)}).finally(()=>{this.formProcessing=!1}))},deleteAvatar(e){!this.avatarProcessing&&window.confirm(this.$t("Do you really want to delete the avatar?"))&&(this.avatarProcessing=!0,o["a"].Users.update(this.user.id,{deleteAvatar:!0}).then(t=>{this.$toast(this.$t("Successfully deleted avatar.")),this.refreshUser(t.data),l["a"].isFunction(e)&&e(t)}).catch(e=>{this.$errResponseHandler(e)}).finally(()=>{this.avatarProcessing=!1}))},initAvatarUpload(){h.a.autoDiscover=!1,this.dropzone=new h.a(this.$refs.uploadContainer,{url:o["a"].$baseUrl+"/users/"+this.user.id,method:"put",maxFiles:1,timeout:0,paramName:"avatar",parallelUploads:1,uploadMultiple:!1,thumbnailWidth:null,thumbnailHeight:null,addRemoveLinks:!1,createImageThumbnails:!1,acceptedFiles:".png, .jpg, .jpeg, .svg",previewTemplate:'<div style="display: none"></div>'}),this.dropzone.on("addedfile",e=>{this.dropzone.options.headers=Object.assign(this.dropzone.options.headers||{},{Authorization:"Bearer "+o["a"].$token})}),this.dropzone.on("sending",(e,t,s)=>{this.avatarProcessing=!0}),this.dropzone.on("error",(e,t,s)=>{var a=l["a"].getNestedVal(t,"errors.avatar",this.$t("An error occurred while updating the user avatar."));this.$toast(a,"danger")}),this.dropzone.on("success",(e,t)=>{this.refreshUser(t),this.$toast(this.$t("Successfully updated user avatar."))}),this.dropzone.on("complete",e=>{this.avatarProcessing=!1,this.dropzone.removeFile(e)})},openEmailChangePopup(){this.$refs.emailChangePopup&&this.$refs.emailChangePopup.open()}}},U=j,x=Object(O["a"])(U,d,m,!1,null,null,null),E=x.exports,k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{on:{submit:function(t){return t.preventDefault(),e.saveChanges()}}},[s("form-field",{staticClass:"form-group form-group-switch",attrs:{name:"notifyOnEachComment"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.notifyOnEachComment,expression:"notifyOnEachComment"}],attrs:{type:"checkbox",id:"notify_on_comment"},domProps:{checked:Array.isArray(e.notifyOnEachComment)?e._i(e.notifyOnEachComment,null)>-1:e.notifyOnEachComment},on:{change:function(t){var s=e.notifyOnEachComment,a=t.target,r=!!a.checked;if(Array.isArray(s)){var i=null,n=e._i(s,i);a.checked?n<0&&(e.notifyOnEachComment=s.concat([i])):n>-1&&(e.notifyOnEachComment=s.slice(0,n).concat(s.slice(n+1)))}else e.notifyOnEachComment=r}}}),s("label",{attrs:{for:"notify_on_comment"}},[e._v(e._s(e.$t("Receive an email when a new screen comment is added.")))])]),s("form-field",{staticClass:"form-group form-group-switch",class:{"disabled-block":e.notifyOnEachComment},attrs:{name:"notifyOnMention"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.notifyOnMention,expression:"notifyOnMention"}],attrs:{type:"checkbox",id:"notify_on_mention"},domProps:{checked:Array.isArray(e.notifyOnMention)?e._i(e.notifyOnMention,null)>-1:e.notifyOnMention},on:{change:function(t){var s=e.notifyOnMention,a=t.target,r=!!a.checked;if(Array.isArray(s)){var i=null,n=e._i(s,i);a.checked?n<0&&(e.notifyOnMention=s.concat([i])):n>-1&&(e.notifyOnMention=s.slice(0,n).concat(s.slice(n+1)))}else e.notifyOnMention=r}}}),s("label",{attrs:{for:"notify_on_mention"}},[e._v(e._s(e.$t("Receive an email when someone mentions you.")))])]),s("div",{staticClass:"flex-block"},[s("button",{staticClass:"btn btn-primary btn-cons-lg btn-loader",class:{"btn-loader-active":e.isProcessing}},[s("span",{staticClass:"txt"},[e._v(e._s(e.$t("Save changes")))])]),s("router-link",{directives:[{name:"show",rawName:"v-show",value:!e.isProcessing,expression:"!isProcessing"}],staticClass:"link-hint m-l-small",attrs:{to:{name:"home"}}},[s("span",{staticClass:"txt"},[e._v(e._s(e.$t("Cancel")))])])],1)],1)},N=[];function D(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function A(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?D(Object(s),!0).forEach((function(t){Object(i["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):D(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var S={name:"user-notifications-form",props:{user:{type:b["a"],required:!0}},data(){return{notifyOnEachComment:!0,notifyOnMention:!0,isProcessing:!1}},computed:A({},Object(n["d"])({loggedUser:e=>e.user.user})),watch:{notifyOnEachComment(e,t){e&&(this.notifyOnMention=!0)},"user.id":function(e,t){this.loadForm()}},mounted(){this.loadForm()},methods:{refreshUser(e){l["a"].isEmpty(e)||(this.user.load(e),this.loadForm(),this.user.id==this.loggedUser.id&&this.$store.dispatch("user/set",e))},loadForm(){this.notifyOnEachComment=this.user.getSetting("notifyOnEachComment",!1),this.notifyOnMention=this.user.getSetting("notifyOnMention",!1)},saveChanges(){this.isProcessing||(this.isProcessing=!0,o["a"].Users.update(this.user.id,{notifyOnEachComment:this.notifyOnEachComment,notifyOnMention:this.notifyOnMention}).then(e=>{this.$toast(this.$t("Successfully updated notification settings.")),this.refreshUser(l["a"].getNestedVal(e,"data",{}))}).catch(e=>{this.$errResponseHandler(e)}).finally(()=>{this.isProcessing=!1}))}}},M=S,q=Object(O["a"])(M,k,N,!1,null,null,null),L=q.exports,F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{on:{submit:function(t){return t.preventDefault(),e.saveChanges()}}},[e.loggedUser.isSuperUser?[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("form-field",{staticClass:"required",attrs:{name:"newPassword"}},[s("label",{attrs:{for:"security_new_password"}},[e._v(e._s(e.$t("New password")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword,expression:"newPassword"}],attrs:{type:"password",id:"security_new_password",required:""},domProps:{value:e.newPassword},on:{input:function(t){t.target.composing||(e.newPassword=t.target.value)}}})])],1),s("div",{staticClass:"col-lg-6"},[s("form-field",{staticClass:"required",attrs:{name:"newPasswordConfirm"}},[s("label",{attrs:{for:"security_new_password_confirm"}},[e._v(e._s(e.$t("Confirm new password")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newPasswordConfirm,expression:"newPasswordConfirm"}],attrs:{type:"password",id:"security_new_password_confirm",required:""},domProps:{value:e.newPasswordConfirm},on:{input:function(t){t.target.composing||(e.newPasswordConfirm=t.target.value)}}})])],1)]),s("div",{staticClass:"flex-block"},[s("button",{staticClass:"btn btn-primary btn-cons-lg btn-loader",class:{"btn-loader-active":e.isProcessing}},[s("span",{staticClass:"txt"},[e._v(e._s(e.$t("Save changes")))])]),s("router-link",{directives:[{name:"show",rawName:"v-show",value:!e.isProcessing,expression:"!isProcessing"}],staticClass:"link-hint m-l-small",attrs:{to:{name:"home"}}},[s("span",{staticClass:"txt"},[e._v(e._s(e.$t("Cancel")))])])],1)]:s("div",{staticClass:"block"},[s("button",{staticClass:"btn btn-primary btn-cons-lg btn-loader",class:{"btn-loader-active":e.isProcessing},attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.requestPasswordReset()}}},[s("span",{staticClass:"txt"},[e._v(e._s(e.$t("Request password reset")))])])])],2)},R=[];function T(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function z(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?T(Object(s),!0).forEach((function(t){Object(i["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):T(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var H={name:"user-security-form",props:{user:{type:b["a"],required:!0}},data(){return{newPassword:"",newPasswordConfirm:"",isProcessing:!1}},computed:z({},Object(n["d"])({loggedUser:e=>e.user.user})),mounted(){this.reset()},methods:{reset(){this.newPassword="",this.newPasswordConfirm=""},saveChanges(){this.isProcessing||(this.isProcessing=!0,o["a"].Users.update(this.user.id,{newPassword:this.newPassword,newPasswordConfirm:this.newPasswordConfirm}).then(e=>{this.$toast(this.$t("Successfully updated user password."));var t=l["a"].getNestedVal(e,"data",{});l["a"].isEmpty(t)||(this.user.load(t),this.user.id==this.loggedUser.id&&this.relogin()),this.reset()}).catch(e=>{this.$errResponseHandler(e)}).finally(()=>{this.isProcessing=!1}))},relogin(){this.isProcessing=!0,o["a"].Users.login(this.user.email,this.newPassword).then(e=>{this.$loginByResponse(e,!1)}).finally(()=>{this.isProcessing=!1})},requestPasswordReset(){this.isProcessing||(this.isProcessing=!0,o["a"].Users.requestPasswordReset(this.user.email).then(e=>{this.$toast(this.$t("We sent a recovery link to your email address:")+" "+this.user.email)}).catch(e=>{this.$errResponseHandler(e)}).finally(()=>{this.isProcessing=!1}))}}},I=H,V=Object(O["a"])(I,F,R,!1,null,null,null),B=V.exports;function W(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function J(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?W(Object(s),!0).forEach((function(t){Object(i["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):W(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var G={name:"users-edit",components:{"app-footer":c["a"],"home-sidebar":u["a"],"profile-form":E,"notifications-form":L,"security-form":B},data(){return{activeTab:"profile",tabsList:{profile:this.$t("Profile"),notifications:this.$t("Email notifications"),security:this.$t("Security")},isLoadingUser:!1,user:new b["a"],authMethods:{},isLoadingAuthMethods:!1}},computed:J(J({},Object(n["d"])({loggedUser:e=>e.user.user})),{},{isLoading:function(){return this.isLoadingUser||this.isLoadingAuthMethods}}),watch:{"$route.params.userId":function(e,t){this.loadUser(e)}},beforeMount(){this.loggedUser.isSuperUser?this.$setDocumentTitle(()=>this.$t("Edit users")):this.$setDocumentTitle(()=>this.$t("Account settings"));let e=l["a"].getNestedVal(this.$route,"query.tab");this.tabsList[e]&&this.changeTab(e),this.loadAuthMethods(),this.loadUser(this.$route.params.userId)},methods:{changeTab(e){this.activeTab=e,this.$router.replace({name:this.$route.name,params:Object.assign({},this.$route.params),query:Object.assign({},this.$route.query,{tab:this.activeTab})})},loadAuthMethods(){this.isLoadingAuthMethods||(this.isLoadingAuthMethods=!0,o["a"].Users.getAuthMethods().then(e=>{this.authMethods=e.data||{emailPassword:!0,clients:[]},this.authMethods.emailPassword||(delete this.tabsList.security,"security"===this.activeTab&&this.changeTab(Object.keys(this.tabsList)[0]))}).catch(e=>{this.$errResponseHandler(e)}).finally(()=>{this.isLoadingAuthMethods=!1}))},loadUser(e){e=e||this.$route.params.userId,e!=this.loggedUser.id?this.isLoadingUser||(this.isLoadingUser=!0,o["a"].Users.getOne(e).then(e=>{this.setUser(e.data)}).catch(e=>{this.$errResponseHandler(e)}).finally(()=>{this.isLoadingUser=!1})):this.setUser(this.loggedUser)},setUser(e){this.user.load(e)},deleteUser(){var e=window.prompt(this.$t("WARNING this action is irreversible!")+"\n"+this.$t("Please type the email address of the user you want to delete."));e===this.user.email?o["a"].Users.delete(this.user.id).finally(()=>{this.$toast(this.$t('Successfully deleted user "{user}".',{user:this.user.identifier})),this.user.id==this.loggedUser.id?this.$logout():this.loggedUser.isSuperUser?this.$router.replace({name:"users"}):this.$router.replace({name:"home"})}):e&&this.$toast(this.$t("Deleting canceled - the provided email address does not match."),"warning")}}},Y=G,K=Object(O["a"])(Y,a,r,!1,null,null,null);t["default"]=K.exports}}]);