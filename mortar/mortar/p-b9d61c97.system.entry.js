System.register(["./p-0ef5a3c1.system.js","./p-50f9a219.system.js","./p-23d279a0.system.js"],(function(e){"use strict";var t,r,s,i;return{setters:[function(e){t=e.r;r=e.h;s=e.H},function(){},function(e){i=e.c}],execute:function(){var n=e("mortar_checkbox_item",function(){function e(e){var r=this;t(this,e);this.label="";this.value="";this.disabled=false;this.required=true;this.group="";this.name="";this.checked=false;this.indeterminate=false;this.haserror=false;this.className=function(){return i({"checkbox-default":r.indeterminate!==true,"checkbox-indeterminate":r.indeterminate===true,error:r.haserror===true})}}e.prototype.render=function(){return r(s,null,r("input",{type:"checkbox",id:this.name,class:this.className(),disabled:this.disabled===true,required:this.required===true,checked:this.checked===true}),r("label",{htmlFor:this.name},this.label))};return e}())}}}));