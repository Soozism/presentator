(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e565f77"],{"2e8c8":function(e,t,s){"use strict";s("6c13")},"6c13":function(e,t,s){},fb7f:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"preview-container-wrapper"},[s("div",{staticClass:"preview-container",class:{"comments-mode":e.isInCommentsMode,"preview-mode":e.isInPreviewMode,"preview-mode-hints":e.keepHotspotsVisible||e.isPreviewModeHintsActive},style:{background:e.activePrototype&&e.activeScreen&&e.activePrototype.isForDesktop?e.activeScreen.background:null},attrs:{tabindex:"-1"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.onEscPress.apply(null,arguments)}}},[s("div",{staticClass:"flex-fill-block"}),s("active-comment-popover",{ref:"commentPopover",attrs:{isForPreview:!0,mentionsList:e.mentionsList}}),e.isLoadingData?s("div",{staticClass:"block txt-center"},[s("span",{staticClass:"loader loader-lg loader-blend"})]):e._e(),e.isLoadingData||e.screens.length?e._e():s("div",{staticClass:"block scroll-block txt-center p-base"},[e._m(0),s("h4",[e._v(e._s(e.$t("No prototype screens to show.")))])]),!e.isLoadingData&&e.screens.length?s("screen-preview",{ref:"screenPreview",attrs:{interactions:e.isInPreviewMode,activeScreenTooltip:e.modeHelpTooltip,fitToScreen:e.fitToScreen},on:{activeScreenClick:e.onActiveScreenClick}},[e.isInCommentsMode?s("div",{staticClass:"block comments-block"},e._l(e.activeScreenComments,(function(t){return s("comment-pin",{key:"comment_"+t.id,ref:"screenCommentPins",refInFor:!0,class:{"soft-hidden":!e.showResolvedComments&&t.isResolved,unread:e.isCommentUnread(t.id)},attrs:{comment:t,allowPositionChange:!1}})})),1):e._e()]):e._e(),s("div",{staticClass:"flex-fill-block"}),s("preview-bar",{attrs:{project:e.project,projectLink:e.projectLink},on:{hide:function(t){!e.$refs.screensPanel||e.$refs.screensPanel.hide()}},scopedSlots:e._u([{key:"left",fn:function(){return[e.activeScreen&&e.$refs.screensPanel?s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$refs.screensPanel.isActive?e.$t("Hide screens panel"):e.$t("Show screens panel"),expression:"$refs.screensPanel.isActive ? $t('Hide screens panel') : $t('Show screens panel')",modifiers:{top:!0}}],staticClass:"ctrl-item ctrl-item-screens",class:{active:e.$refs.screensPanel.isActive},on:{click:function(t){return t.preventDefault(),e.$refs.screensPanel.toggle()}}},[s("span",{staticClass:"txt screen-title"},[e._v(e._s(e.activeScreen.title))]),s("span",{staticClass:"txt counter m-l-5"},[e._v("("+e._s(e.activeScreenOrderedIndex+1)+" of "+e._s(e.screens.length)+")")]),s("i",{staticClass:"m-l-5 fe",class:e.$refs.screensPanel.isActive?"fe-chevron-up":"fe-chevron-down"})]):e._e()]},proxy:!0},{key:"right",fn:function(){return[e.isInCommentsMode&&e.$refs.commentsPanel?s("button",{staticClass:"btn btn-sm no-shadow comments-panel-toggle",class:e.$refs.commentsPanel.isActive?"btn-danger":"btn-transp-danger",on:{click:function(t){return t.preventDefault(),e.$refs.commentsPanel.toggle()}}},[s("span",{staticClass:"txt"},[e._v(e._s(e.$t("Comments panel")))])]):e._e(),e.isInPreviewMode&&e.prototypes.length>0?s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("Toggle hotspots"),expression:"$t('Toggle hotspots')",modifiers:{top:!0}}],staticClass:"ctrl-item ctrl-item-circle",class:e.keepHotspotsVisible?"ctrl-item-success active bg-light-border":"",on:{click:function(t){return t.preventDefault(),e.toggleKeepHotspotsVisible.apply(null,arguments)}}},[s("i",{staticClass:"fe fe-target"})]):e._e(),e.prototypes.length>0&&0!=e.activePrototype.scaleFactor?s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("Toggle fit to screen"),expression:"$t('Toggle fit to screen')",modifiers:{top:!0}}],staticClass:"ctrl-item ctrl-item-circle",class:e.fitToScreen?"ctrl-item-success active bg-light-border":"",on:{click:function(t){return t.preventDefault(),e.toggleFitToScreen.apply(null,arguments)}}},[s("i",{staticClass:"fe fe-maximize"})]):e._e(),e.prototypes.length>1?s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$refs.prototypesDropdown&&e.$refs.prototypesDropdown.isActive?"":e.$t("Change prototype"),expression:"!$refs.prototypesDropdown || !$refs.prototypesDropdown.isActive ? $t('Change prototype') : ''",modifiers:{top:!0}}],staticClass:"btn btn-sm btn-default m-l-small prototypes-ctrl"},[s("i",{staticClass:"fe",class:e.activePrototype.isForDesktop?"fe-monitor":"fe-smartphone"}),s("span",{staticClass:"txt title m-l-5 m-r-5"},[e._v(e._s(e.activePrototype.title))]),s("i",{staticClass:"fe",class:e.$refs.prototypesDropdown&&e.$refs.prototypesDropdown.isActive?"fe-chevron-up":"fe-chevron-down"}),s("toggler",{ref:"prototypesDropdown",staticClass:"dropdown dropdown-wrapped prototypes-dropdown"},e._l(e.prototypes,(function(t){return s("div",{key:t.id,staticClass:"dropdown-item",class:{active:e.activePrototype.id==t.id},on:{click:function(s){return s.preventDefault(),e.setActivePrototypeId(t.id)}}},[s("i",{staticClass:"fe",class:t.isForDesktop?"fe-monitor":"fe-smartphone"}),s("span",{staticClass:"txt"},[e._v(e._s(t.title))])])})),0)],1):e._e()]},proxy:!0}])}),s("screens-panel",{ref:"screensPanel"})],1),s("comments-panel",{ref:"commentsPanel"})],1)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("figure",{staticClass:"mockup m-b-small"},[s("div",{staticClass:"mockup-bg"}),s("div",{staticClass:"browser secondary"}),s("div",{staticClass:"browser primary"},[s("i",{staticClass:"fe fe-image"})])])}],r=(s("a481"),s("ac6a"),s("097d"),s("ade3")),n=s("2f62"),a=s("c1df"),c=s.n(a),p=s("0abc"),l=s("f744"),d=s("dd93"),m=s("3d48"),h=s("9c86"),v=s("ba5d"),u=s("46a0"),f=s("0372"),y=s("9aaf"),P=s("7bbf"),g=s("57d1"),C=s("917d"),w=s("c647"),b=s("35bb"),I=s("db9e");function $(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function _(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?$(Object(s),!0).forEach((function(t){Object(r["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):$(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}const k="preview",S="comments";let O=null;var j={name:"screens-view",mixins:[w["a"],b["a"]],props:{project:{type:h["a"],required:!0},collaborators:{type:Array,required:!0},projectLink:{type:v["a"],required:!0}},components:{"screen-preview":f["a"],"screens-panel":y["a"],"comment-pin":P["a"],"comments-panel":g["a"],"active-comment-popover":C["a"],"preview-bar":I["a"]},data(){return{isPreviewBarActive:!0,isLoadingData:!1,mode:k}},computed:_(_(_({},Object(n["d"])({activePrototypeId:e=>e.prototypes.activePrototypeId,prototypes:e=>e.prototypes.prototypes,screens:e=>e.screens.screens,activeScreenId:e=>e.screens.activeScreenId,previewToken:e=>e.preview.previewToken})),Object(n["c"])({activePrototype:"prototypes/activePrototype",getPrototype:"prototypes/getPrototype",activeScreen:"screens/activeScreen",getScreen:"screens/getScreen",activeScreenOrderedIndex:"screens/activeScreenOrderedIndex",getComment:"comments/getComment"})),{},{isInCommentsMode(){return this.mode===S},isInPreviewMode(){return this.mode===k},modeHelpTooltip(){return this.isInCommentsMode?this.$t("Click to leave a comment"):""}}),watch:{"$route.params.prototypeId":function(e,t){e&&this.getPrototype(e)?e!=this.activePrototypeId&&this.setActivePrototypeId(e):this.updateRoutePrototypeId()},"$route.params.screenId":function(e,t){e!=this.activeScreenId&&this.setActiveScreenId(e)},"$route.query.mode":function(e,t){e===S?this.setCommentsMode():e===k?this.setPreviewMode():"preview-prototype"===this.$route.name&&this.updateRouteMode()},activePrototypeId(e,t){this.init()},activeScreenId(e,t){this.updateRouteScreenId(),this.deactivateComments()},mode(e,t){!this.isInCommentsMode&&this.$refs.commentsPanel&&this.$refs.commentsPanel.hide()}},activated(){this.isLoadingData||this.screens.length||this.$setDocumentTitle(()=>this.$t("{projectTitle} prototypes",{projectTitle:this.project.title}))},beforeMount(){this.$route.query.mode===S?this.setCommentsMode():this.setPreviewMode(),this.init()},methods:_(_({},Object(n["b"])({setActivePrototypeId:"prototypes/setActivePrototypeId",setScreens:"screens/setScreens",setActiveScreenId:"screens/setActiveScreenId",setHotspotTemplates:"hotspots/setHotspotTemplates",appendHotspots:"hotspots/appendHotspots",setHotspots:"hotspots/setHotspots",addUnreadComment:"notifications/addUnreadComment"})),{},{init(){this.activePrototypeId&&(this.loadPrototypeData(this.activePrototypeId,this.$route.params.screenId),this.projectLink.allowComments&&(this.loadComments(this.activePrototypeId,1,!0),this.startNewCommentsListener()),this.mentionsList=this.convertCollaboratorsListToMentionsList(this.collaborators))},loadPrototypeData(e,t){e=e||this.activePrototypeId,t=t||this.activeScreenId,this.isLoadingData=!0,l["a"].Previews.getPrototype(this.previewToken,e).then(e=>{let s=d["a"].getNestedVal(e,"data.screens",[]),o=d["a"].getNestedVal(e,"data.hotspotTemplates",[]);if(this.setScreens(s),this.screens.length>0){this.isLoadingData=!0;let e=[];for(let t in this.screens)e.push(d["a"].loadImage(this.screens[t].getImage()));Promise.all(e).finally(()=>{this.isLoadingData=!1})}this.setHotspots([]);for(let t in s)s[t].hotspots&&this.appendHotspots(s[t].hotspots);this.setHotspotTemplates(o);for(let t in o)o[t].hotspots&&this.appendHotspots(o[t].hotspots);t&&this.getScreen(t)&&this.setActiveScreenId(t),this.$refs.screensPanel&&this.$refs.screensPanel.hide(),this.updateRoutePrototypeId(),this.updateRouteScreenId(),this.updateRouteMode()}).catch(e=>{this.$errResponseHandler(e)}).finally(()=>{this.isLoadingData=!1})},updateRoutePrototypeId(){if("preview-prototype"!=this.$route.name)return;let e=this.$route.params.prototypeId;e!=this.activePrototypeId&&this.$router[e?"push":"replace"]({name:this.$route.name,params:Object.assign({},this.$route.params,{prototypeId:this.activePrototypeId,screenId:this.activeScreenId}),query:Object.assign({},this.$route.query)})},updateRouteScreenId(){if("preview-prototype"!=this.$route.name)return;let e=this.$route.params.screenId;e!=this.activeScreenId&&this.$router[e?"push":"replace"]({name:this.$route.name,params:Object.assign({},this.$route.params,{screenId:this.activeScreenId}),query:Object.assign({},this.$route.query)})},updateRouteMode(){let e=this.$route.query.mode;e!=this.mode&&this.$router.replace({name:this.$route.name,params:Object.assign({},this.$route.params),query:Object.assign({},this.$route.query,{mode:this.mode})})},setCommentsMode(){this.mode=S},setPreviewMode(){this.mode=k},onEscPress(e){this.isInCommentsMode&&(e.preventDefault(),this.deactivateComments())},onActiveScreenClick(e){this.isInPreviewMode?this.blinkPreviewModeHints():this.isInCommentsMode&&this.initCommentCreation(e,this.activeScreenId)},loadLatestPreviewComments(e,t){if(!this.isLoadingComments){if("undefined"===typeof t){let e=m["a"].getItem(p["a"].get("VUE_APP_PREVIEW_LAST_COMMENTS_LOAD_STORAGE_KEY")+this.projectLink.slug,c()().format("X"))<<0;t=c.a.utc(e-1,"X").format("YYYY-MM-DD HH:mm:ss")}l["a"].enableAutoCancellation(!1),l["a"].Previews.getScreenCommentsList(this.previewToken,1,100,{"search[prototypeId]":e,"search[afterCreatedAt]":t}).then(e=>{var t=u["a"].createInstances(e.data),s=m["a"].getItem(p["a"].get("VUE_APP_PREVIEW_COMMENT_FROM_STORAGE_KEY"));for(let o in t)t[o].from!=s&&this.addUnreadComment(t[o])}).catch(e=>{this.$errResponseHandler(e)}).finally(()=>{m["a"].setItem(p["a"].get("VUE_APP_PREVIEW_LAST_COMMENTS_LOAD_STORAGE_KEY")+this.projectLink.slug,c()().format("X"))})}},startNewCommentsListener(){this.projectLink.allowComments&&p["a"].isFirestoreConfigured()&&Promise.all([s.e("chunk-ee848dd6"),s.e("chunk-2d0c9af8")]).then(s.t.bind(null,"59ca",7)).then(e=>{Promise.all([s.e("chunk-ee848dd6"),s.e("chunk-6d637c67")]).then(s.bind(null,"e71f")).then(()=>{e.apps.length||e.initializeApp({projectId:p["a"].get("VUE_APP_FIRESTORE_PROJECT_ID")}),this.stopNewCommentsListener();var t=e.firestore();O=t.collection(p["a"].get("VUE_APP_FIRESTORE_COLLECTION")).doc("p"+this.project.id).onSnapshot(e=>{this.projectLink.allowComments&&this.loadLatestPreviewComments(this.activePrototypeId)}),this.$once("hook:deactivated",()=>{this.stopNewCommentsListener()})})})},stopNewCommentsListener(){d["a"].isFunction(O)&&(O(),O=null)}})},D=j,L=(s("2e8c8"),s("2877")),A=Object(L["a"])(D,o,i,!1,null,"f5cff522",null);t["default"]=A.exports}}]);