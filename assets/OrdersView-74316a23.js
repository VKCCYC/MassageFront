import{W as f,Z as h,ag as k,G as c,H as y,J as t,a2 as V,o as s,P as g,Q as n,T as d,K as i,N as b,L as w}from"./index-775ca1ee.js";import{V as x,b as u,a as A}from"./VRow-453d8268.js";import{V as B}from"./VDataTable-d65fbf9f.js";import"./filter-932b5e6a.js";import"./VList-7df298df.js";import"./ssrBoot-3bb5178d.js";import"./VDivider-ee7db21c.js";import"./VCheckboxBtn-53b4c851.js";import"./VSlideGroup-2a90fa20.js";const v=d("h1",null,"訂單",-1),G={__name:"OrdersView",setup(C){const{apiAuth:m}=V(),p=f(),l=h([]),_=[{title:"訂單編號",key:"_id"},{title:"日期",key:"createdAt"},{title:"師傅",key:"cart",sortable:!1},{title:"金額",key:"price",value:a=>a.cart.reduce((o,e)=>o+e.quantity*e.product.price,0)}];return k(async()=>{var a,o;try{const{data:e}=await m.get("/orders");l.value.push(...e.result),console.log(e.result),console.log(l.value)}catch(e){const r=((o=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";p({text:r,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),(a,o)=>(c(),y(x,null,{default:t(()=>[s(A,null,{default:t(()=>[s(u,{cols:"12"},{default:t(()=>[v]),_:1}),s(u,{cols:"12"},{default:t(()=>[s(B,{items:l.value,headers:_},{"item.createdAt":t(({item:e})=>[g(n(new Date(e.createdAt).toLocaleString()),1)]),"item.cart":t(({item:e})=>[d("ul",null,[(c(!0),i(w,null,b(e.cart,r=>(c(),i("li",{key:r._id},n(r.product.name)+" * "+n(r.quantity),1))),128))])]),_:2},1032,["items"])]),_:1})]),_:1})]),_:1}))}};export{G as default};
