import{_ as D,U as L,W as N,X as I,Y as E,D as _,Z as F,$ as T,G as a,K as n,H as c,J as o,a0 as P,o as e,L as u,T as S,P as i,O as d,a1 as x,N as C,V as B,Q as U,a2 as $}from"./index-775ca1ee.js";import{V as M,a as G,b as H,c as J,d as K}from"./VNavigationDrawer-5ea05d65.js";import{a as v,V as f,b as O}from"./VList-7df298df.js";import{V as Q}from"./VDivider-ee7db21c.js";import"./ssrBoot-3bb5178d.js";const R={class:"pa-2"},W={__name:"AdminLayout",setup(X){const{apiAuth:A}=$(),w=L(),V=N(),r=I(),{mobile:h}=E(),k=_(()=>h.value),p=F(!1),b=_(()=>[{to:"/",icon:"mdi-home",text:"首頁"},{to:"/admin",icon:"mdi-clipboard-text-clock-outline",text:"預約管理"},{to:"/admin/worker",icon:"mdi-clipboard-plus-outline",text:"師傅管理"}]),g=async()=>{var m,l;try{await A.delete("/users/logout"),r.logout(),V({text:"登出成功",showCloseButton:!1,snackbarProps:{timeout:1e3,color:"#8C8987",location:"center"}}),w.push("/")}catch(s){console.log(s);const t=((l=(m=s==null?void 0:s.response)==null?void 0:m.data)==null?void 0:l.message)||"發生錯誤，請稍後再試";V({text:t,showCloseButton:!1,snackbarProps:{timeout:1500,color:"error",location:"center"}})}},y=_(()=>`https://source.boringavatars.com/beam/120${r.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`);return(m,l)=>{const s=T("router-view");return a(),n(u,null,[k.value?(a(),c(M,{key:0,class:"bg-color",modelValue:p.value,"onUpdate:modelValue":l[0]||(l[0]=t=>p.value=t),temporary:"",location:"right"},{append:o(()=>[S("div",R,[e(d,{class:"logout-bg-color logout-color",block:"",onClick:g},{default:o(()=>[i("登出")]),_:1})])]),default:o(()=>[e(f,null,{default:o(()=>[e(v,{"prepend-avatar":y.value,title:x(r).account},null,8,["prepend-avatar","title"])]),_:1}),e(Q),e(f,{nav:""},{default:o(()=>[(a(!0),n(u,null,C(b.value,t=>(a(),c(v,{key:t.to,class:"color",exact:"",to:t.to},{prepend:o(()=>[e(B,{icon:t.icon},null,8,["icon"])]),default:o(()=>[e(O,null,{default:o(()=>[i(U(t.text),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1},8,["modelValue"])):P("",!0),e(G,{elevation:24,color:"#403635"},{prepend:o(()=>[e(d,{to:"/",active:!1},{default:o(()=>[e(B,{class:"color"},{default:o(()=>[i("mdi-hand-okay")]),_:1}),e(J,{class:"color"},{default:o(()=>[i("出來喬")]),_:1})]),_:1})]),default:o(()=>[k.value?(a(),c(K,{key:0,class:"color",onClick:l[1]||(l[1]=t=>p.value=!0)})):(a(),n(u,{key:1},[e(f,{class:"bg-color"},{default:o(()=>[e(v,{class:"mt-1","prepend-avatar":y.value,title:x(r).account},null,8,["prepend-avatar","title"])]),_:1}),(a(!0),n(u,null,C(b.value,t=>(a(),c(d,{key:t.to,class:"color",exact:"",to:t.to,icon:t.icon},null,8,["to","icon"]))),128)),e(d,{icon:"mdi-logout",onClick:g})],64))]),_:1}),e(H,null,{default:o(()=>[e(s)]),_:1})],64)}}},ee=D(W,[["__scopeId","data-v-b74386d0"]]);export{ee as default};
