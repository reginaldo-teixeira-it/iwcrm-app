"use strict";(self.webpackChunkiwcrm=self.webpackChunkiwcrm||[]).push([[880],{6880:(M,c,s)=>{s.r(c),s.d(c,{PersonModule:()=>b});var d=s(6814),p=s(1896),h=s(7694),u=s(3566),a=s(5313),t=s(5879),f=s(4434),g=s(5869),y=s(6593),l=s(5195);function C(o,e){1&o&&(t.TgZ(0,"th",11),t._uU(1," No. "),t.qZA())}function P(o,e){if(1&o&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&o){const n=e.$implicit;t.xp6(1),t.hij(" ",n.position," ")}}function w(o,e){1&o&&(t.TgZ(0,"th",11),t._uU(1," Name "),t.qZA())}function T(o,e){if(1&o&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&o){const n=e.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function v(o,e){1&o&&(t.TgZ(0,"th",11),t._uU(1," Weight "),t.qZA())}function Z(o,e){if(1&o&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&o){const n=e.$implicit;t.xp6(1),t.hij(" ",n.weight," ")}}function L(o,e){1&o&&(t.TgZ(0,"th",11),t._uU(1," Symbol "),t.qZA())}function x(o,e){if(1&o&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&o){const n=e.$implicit;t.xp6(1),t.hij(" ",n.symbol," ")}}function N(o,e){1&o&&t._UZ(0,"tr",13)}function S(o,e){1&o&&t._UZ(0,"tr",14)}const A=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"}],Y=[{path:"",component:h.$,children:[{path:"",component:(()=>{var o;class e{constructor(i,m,r){this.logger=i,this.notificationService=m,this.titleService=r,this.displayedColumns=["position","name","weight","symbol"],this.dataSource=new a.by(A),this.sort=new u.YE}ngOnInit(){this.titleService.setTitle("IWCRM - Person List"),this.logger.log("Customers loaded"),this.notificationService.openSnackBar("Customers loaded"),this.dataSource.sort=this.sort,setTimeout(()=>{this.notificationService.openSnackBar("Welcome!")})}}return(o=e).\u0275fac=function(i){return new(i||o)(t.Y36(f.Kf),t.Y36(g.g),t.Y36(y.Dx))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-person-list"]],viewQuery:function(i,m){if(1&i&&t.Gf(u.YE,7),2&i){let r;t.iGM(r=t.CRH())&&(m.sort=r.first)}},decls:21,vars:3,consts:[["fxLayout","row","fxLayoutAlign","center none",1,"container"],["fxFlex","95%"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","weight"],["matColumnDef","symbol"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(i,m){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-card")(3,"mat-card-content")(4,"h2"),t._uU(5,"Person List"),t.qZA(),t.TgZ(6,"table",2),t.ynx(7,3),t.YNc(8,C,2,0,"th",4),t.YNc(9,P,2,1,"td",5),t.BQk(),t.ynx(10,6),t.YNc(11,w,2,0,"th",4),t.YNc(12,T,2,1,"td",5),t.BQk(),t.ynx(13,7),t.YNc(14,v,2,0,"th",4),t.YNc(15,Z,2,1,"td",5),t.BQk(),t.ynx(16,8),t.YNc(17,L,2,0,"th",4),t.YNc(18,x,2,1,"td",5),t.BQk(),t.YNc(19,N,1,0,"tr",9),t.YNc(20,S,1,0,"tr",10),t.qZA()()()()()),2&i&&(t.xp6(6),t.Q6J("dataSource",m.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",m.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",m.displayedColumns))},dependencies:[l.a8,l.dn,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk],styles:["table[_ngcontent-%COMP%]{width:100%}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}"]}),e})()}]}];let D=(()=>{var o;class e{}return(o=e).\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.Bz.forChild(Y),p.Bz]}),e})(),b=(()=>{var o;class e{}return(o=e).\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,D,l.QW,a.p0]}),e})()}}]);