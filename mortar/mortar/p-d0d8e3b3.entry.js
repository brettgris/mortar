import{r as t,h as s,H as e,g as r}from"./p-77e8c3a9.js";import"./p-74149bb1.js";import{c as i}from"./p-49401b94.js";import{f as a}from"./p-8ec6ee43.js";const o=class{constructor(s){t(this,s),this.kind="success",this.open=!1,this.headline="",this.btnlabel="Close Window",this.btnkind="text",this.overlay=!0,this.className=()=>i("alert",`alert-${this.kind}`,{show:this.open}),this.iconKind=()=>{switch(this.kind){case"error":return"close";case"warning":return"warning";case"success":return"check";default:return"close"}},this.overlayClassName=()=>i("alert-overlay",{show:this.open&&this.overlay}),this.handleClose=()=>{this.open=!1}}handleOpen(t){const s=this.root.querySelector(".alert");if(t){a.on(s);const t=s.querySelector(".alert-close");setTimeout((function(){t&&t.focus()}),10)}else a.off(s)}render(){return s(e,null,s("div",{class:this.className(),role:"dialog","aria-modal":"true","aria-labelledby":"alert-header","aria-describedby":"alert-description"},s("mortar-icon",{kind:this.iconKind()}),this.headline&&s("p",{id:"alert-header",class:"header3"},this.headline),s("div",{id:"alert-description"},s("slot",null)),this.btnlabel&&s("mortar-button",{elementclass:"alert-close",kind:this.btnkind,onClick:this.handleClose},this.btnlabel)),s("div",{class:this.overlayClassName(),onClick:this.handleClose}))}get root(){return r(this)}static get watchers(){return{open:["handleOpen"]}}};export{o as mortar_alert}