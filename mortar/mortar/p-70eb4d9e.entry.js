import{r as t,h as s}from"./p-35a71817.js";import"./p-74149bb1.js";import{c as r}from"./p-49401b94.js";const e=class{constructor(s){t(this,s),this.label="",this.error="",this.haserror=!1,this.name="toggle",this.disabled=!1,this.required=!1,this.size="md",this.checked=!1,this.className=()=>r("toggle",`toggle-${this.size}`,{error:this.haserror})}render(){return s("mortar-form-element",{legend:this.label,error:this.error,haserror:this.haserror,elementclass:"toggle-wrapper",name:this.name},s("input",{class:this.className(),type:"checkbox",name:this.name,id:this.name,disabled:this.disabled,required:this.required,checked:this.checked}),s("label",{htmlFor:this.name}))}};export{e as mortar_toggle}