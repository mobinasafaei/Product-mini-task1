import{o as s,c,a as o,t as _,s as r,x as g,r as l,y as x,F as y,v as w,b as C,z as k,A as P}from"./entry.98ad3f71.js";import{_ as $}from"./LoadingComp.25deec47.js";const B={class:"border p-2 h-full rounded flex flex-col justify-between leading-normal"},E={class:"mb-8"},N={class:"text-gray-900 font-bold text-xl mb-2"},S={class:"text-gray-700 text-base line-clamp-3 text-ellipsis"},T={class:"grid grid-cols-2"},j={class:"text-lg font-bold"},O={__name:"ProductCardComp",props:{product:{type:Object,required:!0}},setup(p){const a=p,{product:t}=a;function d(){g.addedProductStore.addToCart(t,g.addedProductStore)}return(u,n)=>(s(),c("div",B,[o("div",E,[o("p",N,_(r(t).attributes.name),1),o("p",S,_(r(t).attributes.description),1)]),o("div",T,[o("p",j,_(r(t).attributes.price),1),o("button",{class:"w-full bg-black rounded-md text-white",onClick:n[0]||(n[0]=m=>d())},"Add to Cart")])]))}},V=O,q={class:"ml-3 mr-3"},z={class:"grid gap-3 grid-cols-4"},A={key:0,class:"flex justify-center m-2"},L={__name:"products",setup(p){const a=l([]),t=l(!0),d=l(),u=l(1);x(async()=>{a.value=await n(1),m()});async function n(i){try{const e=await $fetch("/api/products",{method:"GET",query:{pageNumber:i}});return t.value=!1,d.value=e.meta.total_pages,e.data}catch(e){console.log(e)}}async function m(){window.onscroll=async()=>{if(document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight&&u.value<d.value&&!t.value){t.value=!0;const e=await n(u.value+=1);a.value.push(...e),t.value=!1}}}return(i,e)=>{const v=V,b=$;return s(),c("div",q,[o("div",z,[(s(!0),c(y,null,w(r(a),(h,f)=>(s(),c("div",{key:f},[(s(),P(v,{product:h,key:f},null,8,["product"]))]))),128))]),r(t)?(s(),c("div",A,[C(b)])):k("",!0)])}}};export{L as default};
