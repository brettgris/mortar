System.register(["./p-0ef5a3c1.system.js"],(function(e){"use strict";var s,t;return{setters:[function(e){s=e.r;t=e.h}],execute:function(){var r=e("mortar_form_element",function(){function e(e){s(this,e);this.elementclass="";this.label="";this.haserror=false;this.error="";this.help="";this.legend="";this.disabled=false;this.legendId="";this.name=""}e.prototype.render=function(){return t("fieldset",{class:this.elementclass,disabled:this.disabled===true},this.label&&t("label",{htmlFor:this.name},this.label),this.legend&&t("legend",{id:this.legendId},this.legend),t("slot",null),this.help&&t("div",{class:"helper-message show"},this.help),this.haserror===true&&t("div",{class:"error-message show",role:"alert"},this.error))};return e}())}}}));