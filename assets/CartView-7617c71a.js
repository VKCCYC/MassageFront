import{_ as U,Y as E,D as g,W as G,X as H,U as J,Z as S,ag as K,G as u,H as I,J as o,a2 as L,o as e,ak as P,K as k,Q as n,O as r,P as f,T as v,R as O,S as Q}from"./index-775ca1ee.js";import{V as $,b as d,a as D}from"./VRow-453d8268.js";import{V as N}from"./VDivider-ee7db21c.js";import{V as R}from"./VDataTable-d65fbf9f.js";import"./filter-932b5e6a.js";import"./VList-7df298df.js";import"./ssrBoot-3bb5178d.js";import"./VCheckboxBtn-53b4c851.js";import"./VSlideGroup-2a90fa20.js";const T=h=>(O("data-v-dda2f5ef"),h=h(),Q(),h),W=T(()=>v("h1",null,"再次確認",-1)),X={key:0},Y={key:1,class:"text-red text-decoration-line-through"},Z={class:"color"},j=T(()=>v("h1",null,"再次確認",-1)),F={key:0},tt={key:1,class:"text-red text-decoration-line-through"},et={class:"color"},ot={__name:"CartView",setup(h){const{mobile:z}=E(),A=g(()=>z.value),{apiAuth:y}=L(),p=G(),x=H(),C=J(),l=S([]),b=[{title:"商品圖片",key:"product.image"},{title:"商品名稱",key:"product.name"},{title:"單價",key:"product.price"},{title:"時數",key:"quantity"},{title:"總價",key:"total",value:a=>a.product.price*a.quantity},{title:"刪除",key:"action"}],V=g(()=>l.value.reduce((a,s)=>a+s.quantity*s.product.price,0)),w=g(()=>l.value.length>0&&!l.value.some(a=>!a.product.sell)),i=async(a,s)=>{var t,c;if(!x.isLogin){C.push("/login");return}try{const{data:_}=await y.patch("/users/cart",{product:a,quantity:s});x.cart=_.result,p({text:"修改成功",showCloseButton:!1,snackbarProps:{timeout:1500,color:"#8C8987",location:"center"}});const m=l.value.findIndex(M=>M.product._id===a);l.value[m].quantity+=s,l.value[m].quantity<=0&&l.value.splice(m,1)}catch(_){const m=((c=(t=_==null?void 0:_.response)==null?void 0:t.data)==null?void 0:c.message)||"發生錯誤，請稍後再試";p({text:m,showCloseButton:!1,snackbarProps:{timeout:1500,color:"error",location:"center"}})}},q=S(!1),B=async()=>{var a,s;q.value=!0;try{await y.post("/orders"),x.cart=0,C.push("/orders"),p({text:"結帳成功",showCloseButton:!1,snackbarProps:{timeout:1500,color:"#8C8987",location:"center"}})}catch(t){console.log(t);const c=((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)||"發生錯誤，請稍後再試";p({text:c,showCloseButton:!1,snackbarProps:{timeout:1500,color:"error",location:"center"}})}q.value=!1};return K(async()=>{var a,s;try{const{data:t}=await y.get("/users/cart");l.value.push(...t.result),console.log(t.result)}catch(t){console.log(t);const c=((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)||"發生錯誤，請稍後再試";p({text:c,showCloseButton:!1,snackbarProps:{timeout:1500,color:"error",location:"center"}})}}),(a,s)=>A.value?(u(),I($,{key:0},{default:o(()=>[e(D,null,{default:o(()=>[e(d,{class:"titel",cols:"12"},{default:o(()=>[W]),_:1}),e(N),e(d,{cols:"12"},{default:o(()=>[e(R,{items:l.value,headers:b},{"item.product.image":o(({item:t})=>[e(P,{src:t.product.image[0],height:"80px"},null,8,["src"])]),"item.product.name":o(({item:t})=>[t.product.sell?(u(),k("span",X,n(t.product.name),1)):(u(),k("span",Y,n(t.product.name)+" (已下架)",1))]),"item.quantity":o(({item:t})=>[e(r,{variant:"text",icon:"mdi-minus",color:"red",onClick:c=>i(t.product._id,-1)},null,8,["onClick"]),f(n(t.quantity),1),e(r,{variant:"text",icon:"mdi-plus",color:"green",onClick:c=>i(t.product._id,1)},null,8,["onClick"])]),"item.action":o(({item:t})=>[e(r,{variant:"text",icon:"mdi-delete",color:"red",onClick:c=>i(t.product._id,t.quantity*-1)},null,8,["onClick"])]),_:2},1032,["items"])]),_:1}),e(d,{class:"text-center",cols:"12"},{default:o(()=>[v("h2",Z,"總金額: "+n(V.value),1),e(r,{class:"cart-btn",disabled:!w.value,onClick:B,size:"x-large"},{default:o(()=>[f("結帳")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})):(u(),I($,{key:1,class:"w-75"},{default:o(()=>[e(D,null,{default:o(()=>[e(d,{class:"titel",cols:"12"},{default:o(()=>[j]),_:1}),e(N),e(d,{cols:"12"},{default:o(()=>[e(R,{class:"fs",items:l.value,headers:b},{"item.product.image":o(({item:t})=>[e(P,{class:"img",src:t.product.image[0],height:"100px"},null,8,["src"])]),"item.product.name":o(({item:t})=>[t.product.sell?(u(),k("p",F,n(t.product.name),1)):(u(),k("span",tt,n(t.product.name)+" (已下架)",1))]),"item.quantity":o(({item:t})=>[e(r,{variant:"text",icon:"mdi-minus",color:"red",onClick:c=>i(t.product._id,-1)},null,8,["onClick"]),f(n(t.quantity),1),e(r,{variant:"text",icon:"mdi-plus",color:"green",onClick:c=>i(t.product._id,1)},null,8,["onClick"])]),"item.action":o(({item:t})=>[e(r,{variant:"text",icon:"mdi-delete",color:"red",onClick:c=>i(t.product._id,t.quantity*-1)},null,8,["onClick"])]),_:2},1032,["items"])]),_:1}),e(d,{class:"text-center",cols:"12"},{default:o(()=>[v("h2",et,"總金額: "+n(V.value),1),e(r,{class:"cart-btn",disabled:!w.value,onClick:B,size:"x-large",block:"",rounded:"xl"},{default:o(()=>[f("結帳")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}))}},pt=U(ot,[["__scopeId","data-v-dda2f5ef"]]);export{pt as default};
