System.register(["./p-bf92d080.system.js","./p-50f9a219.system.js","./p-23d279a0.system.js","./p-6c66890c.system.js"],(function(e){"use strict";var t,n,r,s,i,a;return{setters:[function(e){t=e.r;n=e.h;r=e.H;s=e.g},function(){},function(e){i=e.c},function(e){a=e.f}],execute:function(){var o=e("mortar_alert",function(){function e(e){var n=this;t(this,e);this.kind="success";this.open=false;this.headline="";this.btnlabel="Close Window";this.btnkind="text";this.overlay=true;this.className=function(){return i("alert","alert-"+n.kind,{show:n.open})};this.iconKind=function(){switch(n.kind){case"error":return"close";case"warning":return"warning";case"success":return"check";default:return"close"}};this.overlayClassName=function(){return i("alert-overlay",{show:n.open&&n.overlay})};this.handleClose=function(){n.open=false}}e.prototype.handleOpen=function(e){var t=this.root.querySelector(".alert");if(!e){a.off(t)}else{a.on(t);var n=t.querySelector(".alert-close");setTimeout((function(){if(n)n.focus()}),10)}};e.prototype.render=function(){return n(r,null,n("div",{class:this.className(),role:"dialog","aria-modal":"true","aria-labelledby":"alert-header","aria-describedby":"alert-description"},n("mortar-icon",{kind:this.iconKind()}),this.headline&&n("p",{id:"alert-header",class:"header3"},this.headline),n("div",{id:"alert-description"},n("slot",null)),this.btnlabel&&n("mortar-button",{elementclass:"alert-close",kind:this.btnkind,onClick:this.handleClose},this.btnlabel)),n("div",{class:this.overlayClassName(),onClick:this.handleClose}))};Object.defineProperty(e.prototype,"root",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{open:["handleOpen"]}},enumerable:true,configurable:true});return e}())}}}));