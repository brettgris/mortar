import{r as s,h as t}from"./p-35a71817.js";import{b as r}from"./p-60c96042.js";const i=class{constructor(t){s(this,t),this.label="",this.error="",this.haserror=!1,this.maxlength=null,this.message=s=>`${s} characters remaining`,this.name="textarea",this.disabled=!1,this.required=!0,this.value="",this.placeholder="",this.className=()=>r({error:this.haserror})}render(){const s=this.value.slice(0,this.maxlength),r=this.maxlength-s.length;return t("mortar-form-element",{label:this.label,error:this.error,haserror:this.haserror,elementclass:"text-area",name:this.name},t("textarea",{class:this.className(),id:this.name,disabled:!0===this.disabled,required:!0===this.required,placeholder:this.placeholder},s),this.maxlength&&t("div",{class:"character-message show"},this.message(r)))}};export{i as mortar_textarea}