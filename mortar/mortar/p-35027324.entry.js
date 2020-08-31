import{r as s,h as t}from"./p-35a71817.js";import{b as i}from"./p-60c96042.js";const h=class{constructor(t){s(this,t),this.label="",this.haserror=!1,this.error="",this.minlabel="",this.maxlabel="",this.minrequired=!0,this.maxrequired=!0,this.disabled=!1,this.minplaceholder="",this.maxplaceholder="",this.name="input-range",this.minvalue="",this.maxvalue="",this.size="md",this.className=()=>`range-min-max ${this.size}`,this.inputClassName=()=>i({error:!0===this.haserror})}render(){return t("mortar-form-element",{legend:this.label,haserror:this.haserror,error:this.error,elementclass:this.className()},t("div",null,this.minlabel&&t("label",{htmlFor:`${this.name}-min`,class:"screen-reader-only"},this.minlabel),t("input",{id:`${this.name}-min`,type:"text",disabled:!0===this.disabled,required:this.minrequired,class:this.inputClassName(),placeholder:this.minplaceholder,value:this.minvalue}),this.maxlabel&&t("label",{htmlFor:`${this.name}-max`,class:"screen-reader-only"},this.maxlabel),t("input",{id:`${this.name}-max`,type:"text",disabled:!0===this.disabled,required:this.maxrequired,class:this.inputClassName(),placeholder:this.maxplaceholder,value:this.maxvalue})))}};export{h as mortar_range}