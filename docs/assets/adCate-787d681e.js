import{_ as V,d as _,a as w,b as E,c as k,e as F,f as y,g as u,h as t,w as l,F as A,E as v,o as P,i as r,j as z,k as $,l as B}from"./index-78754908.js";import{E as d,a as L,b as U,c as W}from"./el-table-column-79d9f7fb.js";import{E as D}from"./el-pagination-4c6b53d5.js";import{c as I}from"./cloneDeep-9bc68baf.js";const N=_({data(){return{adCates:[],page:{total:0,current:1,size:10},dialogFormVisible:!1,adCate:{height:"",id:0,name:"",width:""},formLabelWidth:80}},mounted(){this.getAdCatesPage(1)},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.adCate=I(e)},getAdCatesPage(e){w({current:e,size:2}).then(s=>{console.log(s);const m=s.data.page;this.adCates=m.records,this.page=m}).catch(s=>{console.log(s)})},currentchange(e){this.getAdCatesPage(e),this.page.current=e},del(e){console.log(e),E({id:e}).then(s=>{if(s.success)this.getAdCatesPage(this.page.current);else return console.log(s.msg),!1}).catch(s=>{})},toAdd(){this.dialogFormVisible=!0},save(){const e=this.adCate;e.id==0?k(e).then(a=>{if(a.success)this.dialogFormVisible=!1,this.getAdCatesPage(this.page.current),d(a.msg);else return d(a.msg),!1}).catch(a=>{d("网络错误联系管理员")}):F(e).then(a=>{if(a.success)this.dialogFormVisible=!1,this.getAdCatesPage(this.page.current),d(a.msg);else return d(a.msg),!1}).catch(a=>{d("网络错误联系管理员")})}}}),T={class:"adCates"},j={class:"adcate-tools"},M={class:"dialog-footer"};function q(e,a,s,m,G,H){const i=v,n=W,h=L,f=D,g=z,p=$,c=B,C=U;return P(),y(A,null,[u("div",T,[u("div",j,[t(i,{type:"warning",onClick:e.toAdd},{default:l(()=>[r("添加")]),_:1},8,["onClick"])]),t(h,{data:e.adCates,style:{width:"100%"}},{default:l(()=>[t(n,{fixed:"",prop:"id",label:"#",width:"50"}),t(n,{prop:"name",label:"广告类型"}),t(n,{prop:"width",label:"宽度",width:"120"}),t(n,{prop:"height",label:"高度",width:"120"}),t(n,{fixed:"right",label:"操作",width:"120"},{default:l(o=>[t(i,{link:"",type:"primary",size:"small",onClick:b=>e.toEdit(o.row)},{default:l(()=>[r("更新")]),_:2},1032,["onClick"]),t(i,{link:"",type:"primary",size:"small",onClick:b=>e.del(o.row.id)},{default:l(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),t(f,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),t(C,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":a[4]||(a[4]=o=>e.dialogFormVisible=o),title:"广告类型编辑"},{footer:l(()=>[u("span",M,[t(i,{onClick:a[3]||(a[3]=o=>e.dialogFormVisible=!1)},{default:l(()=>[r("Cancel")]),_:1}),t(i,{type:"primary",onClick:e.save},{default:l(()=>[r(" 保存 ")]),_:1},8,["onClick"])])]),default:l(()=>[t(c,{model:e.adCate},{default:l(()=>[t(p,{label:"广告类型","label-width":e.formLabelWidth},{default:l(()=>[t(g,{modelValue:e.adCate.name,"onUpdate:modelValue":a[0]||(a[0]=o=>e.adCate.name=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(p,{label:"width","label-width":e.formLabelWidth},{default:l(()=>[t(g,{modelValue:e.adCate.width,"onUpdate:modelValue":a[1]||(a[1]=o=>e.adCate.width=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(p,{label:"height","label-width":e.formLabelWidth},{default:l(()=>[t(g,{modelValue:e.adCate.height,"onUpdate:modelValue":a[2]||(a[2]=o=>e.adCate.height=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const R=V(N,[["render",q]]);export{R as default};