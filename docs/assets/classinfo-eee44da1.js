import{a2 as u,_ as C,d as E,f as k,g as c,h as o,w as s,F as _,E as F,o as y,i as f,j as v,k as P,l as z}from"./index-cdda6497.js";import{E as n,a as $,b as j,c as L}from"./el-table-column-05ab53fc.js";import{E as U}from"./el-pagination-45426a1f.js";/* empty css                   */import{c as W}from"./cloneDeep-18f04f8f.js";const q=e=>u.request({url:"api/classinfo/add",method:"post",data:e}),B=e=>u.request({url:"api/classinfo/page",method:"post",data:e}),I=e=>u.request({url:"api/classinfo/edit",method:"post",data:e}),A=e=>u.request({url:"api/classinfo/delete",params:e}),D=E({data(){return{classinfos:[],page:{total:0,current:1,size:10},dialogFormVisible:!1,classinfo:{id:0,name:"",major:"",depart:"",school:"",state:0},formLabelWidth:80}},mounted(){this.getclassinfosPage(1)},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.classinfo=W(e)},getclassinfosPage(e){B({current:e,size:2}).then(t=>{console.log(t);const p=t.data.page;this.classinfos=p.records,this.page=p}).catch(t=>{console.log(t)})},currentchange(e){this.getclassinfosPage(e),this.page.current=e},del(e){confirm("是否删除")==!0&&console.log(e),console.log(e),A({id:e}).then(t=>{if(t.success)this.getclassinfoPage(this.page.current);else return console.log(t.msg),!1}).catch(t=>{})},toAdd(){this.dialogFormVisible=!0,this.classinfo={id:0,name:"",major:"",depart:"",school:"",state:0}},save(){const e=this.classinfo;e.id==0?q(e).then(l=>{if(l.success)this.dialogFormVisible=!1,this.getclassinfosPage(this.page.current),n(l.msg);else return n(l.msg),!1}).catch(l=>{n("网络错误联系管理员")}):I(e).then(l=>{if(l.success)this.dialogFormVisible=!1,this.getclassinfoPage(this.page.current),n(l.msg);else return n(l.msg),!1}).catch(l=>{n("添加成功")})}}}),N={class:"classinfos"},T={class:"classInfo-tools"},M={class:"dialog-footer"};function G(e,l,t,p,H,J){const d=F,i=L,g=$,h=U,r=v,m=P,b=z,V=j;return y(),k(_,null,[c("div",N,[c("div",T,[o(d,{type:"warning",onClick:e.toAdd},{default:s(()=>[f("添加")]),_:1},8,["onClick"])]),o(g,{data:e.classinfos,style:{width:"100%"}},{default:s(()=>[o(i,{prop:"id",label:"班级编号",width:"150"}),o(i,{prop:"name",label:"班级名称",width:"120"}),o(i,{prop:"major",label:"专业",width:"120"}),o(i,{prop:"depart",label:"学院",width:"120"}),o(i,{prop:"school",label:"学校",width:"120"}),o(i,{prop:"state",label:"状态",width:"120"}),o(i,{fixed:"right",label:"功能管理",width:"120"},{default:s(a=>[o(d,{link:"",type:"primary",size:"small",onClick:w=>e.toEdit(a.row)},{default:s(()=>[f("更新")]),_:2},1032,["onClick"]),o(d,{link:"",type:"primary",size:"small",onClick:w=>e.del(a.row.id)},{default:s(()=>[f("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),o(h,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),o(V,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[6]||(l[6]=a=>e.dialogFormVisible=a),title:"添加班级"},{footer:s(()=>[c("span",M,[o(d,{onClick:l[5]||(l[5]=a=>e.dialogFormVisible=!1)},{default:s(()=>[f("取消")]),_:1}),o(d,{type:"primary",onClick:e.save},{default:s(()=>[f("保存 ")]),_:1},8,["onClick"])])]),default:s(()=>[o(b,{model:e.classinfo},{default:s(()=>[o(m,{label:"班级名称","label-width":e.formLabelWidth},{default:s(()=>[o(r,{modelValue:e.classinfo.name,"onUpdate:modelValue":l[0]||(l[0]=a=>e.classinfo.name=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(m,{label:"专业","label-width":e.formLabelWidth},{default:s(()=>[o(r,{modelValue:e.classinfo.major,"onUpdate:modelValue":l[1]||(l[1]=a=>e.classinfo.major=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(m,{label:"学院","label-width":e.formLabelWidth},{default:s(()=>[o(r,{modelValue:e.classinfo.depart,"onUpdate:modelValue":l[2]||(l[2]=a=>e.classinfo.depart=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(m,{label:"学校","label-width":e.formLabelWidth},{default:s(()=>[o(r,{modelValue:e.classinfo.school,"onUpdate:modelValue":l[3]||(l[3]=a=>e.classinfo.school=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(m,{label:"状态","label-width":e.formLabelWidth},{default:s(()=>[o(r,{modelValue:e.classinfo.state,"onUpdate:modelValue":l[4]||(l[4]=a=>e.classinfo.state=a),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const X=C(D,[["render",G]]);export{X as default};