import{r as t,h as s,H as o}from"./p-35a71817.js";import{b as r}from"./p-60c96042.js";const a=class{constructor(s){t(this,s),this.position="top-right",this.transition=!0,this.hover=!0,this.open=!1}classname(){return r("mortar-tooltip-text",this.position,{transition:!0===this.transition,hover:!0===this.hover,"mortar-tooltip-open":!0===this.open})}render(){return s(o,null,s("span",{class:"mortar-tooltip",tabindex:"0"},s("span",{class:"mortar-tooltip-icon"},s("slot",{name:"icon"})),s("span",{class:this.classname(),role:"status"},s("span",{class:"mortar-tooltip-inner-text-container"},s("span",{class:"mortar-tooltip-title"},s("slot",{name:"headline"})),s("slot",{name:"copy"})))))}};export{a as mortar_tooltip}