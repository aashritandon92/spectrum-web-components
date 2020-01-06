import{h as e}from"./lit-html-6898710b.js";import{e as t,j as i}from"./index-2626287a.js";import{c as s,p as r,q as a}from"./lit-element-81619d09.js";import{_ as o}from"./tslib.es6-d9c764b6.js";import{i as p}from"./if-defined-a4bc040d.js";import"./index-7465a914.js";import"./spectrum-icon-alert-small.css-eb5bae9d.js";import"./focusable-5c74bfe6.js";import"./iconset-svg-cf078571.js";import"./index-047233f1.js";import"./observe-slot-text-5194cee4.js";import"./spectrum-icon-checkmark-small.css-de150c91.js";import{T as c}from"./index-2d681292.js";var n=s`:host{display:inline-block;position:relative}#button{position:absolute;right:0;top:0}#input{display:block;-webkit-appearance:none;outline-offset:-2px;padding-left:var(--spectrum-search-padding-left,36px);text-indent:0;padding-right:var(--spectrum-search-padding-right,28px)}#input::-webkit-search-cancel-button,#input::-webkit-search-decoration{-webkit-appearance:none}:host([quiet]) #input{padding-left:var(--spectrum-search-quiet-padding-left,24px);padding-right:var(--spectrum-search-quiet-padding-right,20px)}:host([quiet]) #input~#icon{left:0}:host([quiet]) #input~#button{right:-8px}:host([quiet]) #input~.spectrum-Search-rightIcon{right:0}#icon{display:block;position:absolute;left:12px;top:calc(var(--spectrum-textfield-height,var(--spectrum-alias-single-line-height))/ 2 - var(--spectrum-icon-magnifier-width,var(--spectrum-global-dimension-size-200))/ 2);pointer-events:none;color:var(--spectrum-textfield-icon-color,var(--spectrum-alias-icon-color))}#input:disabled~#icon{color:var(--spectrum-textfield-text-color-disabled,var(--spectrum-alias-text-color-disabled))}`,l=s`.magnifier{width:var(--spectrum-icon-magnifier-width,var(--spectrum-global-dimension-size-200));height:var(--spectrum-icon-magnifier-height,var(--spectrum-global-dimension-size-200))}`;class d extends c{constructor(){super(...arguments),this.label="Search",this.placeholder="Search"}static get styles(){return[...super.styles,n,l]}handleSubmit(e){this.dispatchEvent(new Event("submit",{cancelable:!0,bubbles:!0}))||e.preventDefault()}reset(){this.form&&(this.value="",this.form.reset())}render(){return e` <sp-icons-medium></sp-icons-medium> <form action="${p(this.action)}" id="form" method="${p(this.method)}" @submit="${this.handleSubmit}"> ${super.render()} <sp-icon id="icon" class="icon magnifier" size="s" name="ui:Magnifier"></sp-icon> ${this.value?e` <sp-clear-button id="button" label="Reset" @click="${this.reset}"></sp-clear-button> `:e``} </form> `}updated(e){super.updated(e),e.has("multiline")&&(this.multiline=!1)}}o([r()],d.prototype,"action",void 0),o([r()],d.prototype,"label",void 0),o([r()],d.prototype,"method",void 0),o([r()],d.prototype,"placeholder",void 0),o([a("#form")],d.prototype,"form",void 0),customElements.get("sp-search")||customElements.define("sp-search",d);var m=()=>t`
    <sp-search
        @submit=${e=>{e.preventDefault();var t=e.target;i(`Search: ${t.value}`)()}}
    ></sp-search>
    <sp-search disabled></sp-search>
`,u=()=>t`
    <sp-search
        quiet
        @submit=${e=>{e.preventDefault();var t=e.target;i(`Search: ${t.value}`)()}}
    ></sp-search>
    <sp-search quiet disabled></sp-search>
`;export default{component:"sp-search",title:"Search"};export{m as Default,u as Quiet};
//# sourceMappingURL=search.stories-80d6b7d6.js.map