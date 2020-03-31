const mainList = [
  {path:'',redirect:'markdown'},
  {title:'markdown组件',path:'markdown',component:()=>import('../views/markdown')},
  {title:'表格组件',path:'gridview',component:()=>import('../views/gridview')},
];


export default mainList