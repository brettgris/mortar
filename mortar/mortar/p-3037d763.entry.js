import{r as e,h as t}from"./p-77e8c3a9.js";const r=class{constructor(t){e(this,t),this.label="",this.haserror=!1,this.error="",this.name="checkbox",this.disabled=!1,this.required=!0,this.options=[]}render(){return t("mortar-form-element",{legend:this.label,haserror:this.haserror,error:this.error,elementclass:"checkbox"},this.options.map((e,r)=>t("mortar-checkbox-item",{label:e.label||"",checked:e.checked,name:`${this.name}-${r}`,disabled:this.disabled,required:this.required,indeterminate:e.indeterminate,haserror:this.haserror})))}};export{r as mortar_checkbox}