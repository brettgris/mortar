System.register(["./p-bf92d080.system.js"],(function(e){"use strict";var r,t;return{setters:[function(e){r=e.r;t=e.h}],execute:function(){var s=e("mortar_checkbox",function(){function e(e){r(this,e);this.label="";this.haserror=false;this.error="";this.name="checkbox";this.disabled=false;this.required=true;this.options=[]}e.prototype.render=function(){var e=this;return t("mortar-form-element",{legend:this.label,haserror:this.haserror,error:this.error,elementclass:"checkbox"},this.options.map((function(r,s){return t("mortar-checkbox-item",{label:r.label||"",checked:r.checked,name:e.name+"-"+s,disabled:e.disabled,required:e.required,indeterminate:r.indeterminate,haserror:e.haserror})})))};return e}())}}}));