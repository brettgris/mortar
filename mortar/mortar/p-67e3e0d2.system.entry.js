System.register(["./p-0ef5a3c1.system.js","./p-63b13027.system.js"],(function(e){"use strict";var r,t,s;return{setters:[function(e){r=e.r;t=e.h},function(e){s=e.b}],execute:function(){var a=e("mortar_textarea",function(){function e(e){var t=this;r(this,e);this.label="";this.error="";this.haserror=false;this.maxlength="";this.message=function(e){return e+" characters remaining"};this.name="textarea";this.disabled=false;this.required=true;this.value="";this.placeholder="";this.className=function(){return s({error:t.haserror})}}e.prototype.render=function(){var e=Number(this.maxlength);var r=this.value.slice(0,e);var s=e-r.length;return t("mortar-form-element",{label:this.label,error:this.error,haserror:this.haserror,elementclass:"text-area",name:this.name},t("textarea",{class:this.className(),id:this.name,disabled:this.disabled===true,required:this.required===true,placeholder:this.placeholder},r),this.maxlength&&t("div",{class:"character-message show"},this.message(s)))};return e}())}}}));