import{_ as m}from"./LoadingComp.25deec47.js";import{u as v,r as l,g as w,q as x,c as e,s as n,b as C,F as P,v as b,o,a as t,t as c,x as d}from"./entry.98ad3f71.js";const y={key:0,class:"flex justify-center"},S={key:1},B={key:0,class:"grid grid-cols-3 gap-2"},j={class:"text-lg font-bold block"},V={class:"flex justify-between"},A={class:"flex"},E=["onClick"],F=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})],-1),L=[F],M={class:"text-lg"},N=["onClick"],$=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5 12h14"})],-1),q=[$],z={key:1},D=t("p",{class:"text-large text-center font-semibold font-serif"},"cart is empty",-1),G=[D],K={__name:"cart",setup(H){const i=v(),_=l([]),u=l(!0);w(()=>{setAddedProductValue()});const h=x(()=>d.addedProducts.length===0);function f(r,a){d.addedProductStore.increaseCount(r,d.addedProductStore)}function p(r,a){d.addedProductStore.decreaseCount(r,d.addedProductStore)}return(r,a)=>{const k=m;return o(),e("div",null,[n(u)?(o(),e("div",y,[C(k)])):(o(),e("div",S,[n(h)?(o(),e("div",z,G)):(o(),e("div",B,[(o(!0),e(P,null,b(n(_),s=>(o(),e("div",{key:s.id,class:"border rounded-lg w-full p-2"},[t("p",j,c(s.attributes.name),1),t("div",V,[t("p",null,c(s.attributes.price),1),t("div",A,[t("button",{onClick:g=>f(s,n(i))},L,8,E),t("p",M,c(s.count),1),t("button",{onClick:g=>p(s,n(i))},q,8,N)])])]))),128))]))]))])}}};export{K as default};
