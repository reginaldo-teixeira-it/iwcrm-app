"use strict";(self.webpackChunkiwcrm=self.webpackChunkiwcrm||[]).push([[592],{7274:(U,O,a)=>{a.d(O,{M:()=>h});var n=a(5879),p=a(1088),t=a(7398),M=a(6814),E=a(617),P=a(2296),c=a(5195),_=a(7988),l=a(3176);function g(e,m){if(1&e&&(n.TgZ(0,"mat-grid-tile",4)(1,"mat-card",5)(2,"mat-card-header")(3,"mat-card-title"),n._uU(4),n.TgZ(5,"button",6)(6,"mat-icon"),n._uU(7,"more_vert"),n.qZA()(),n.TgZ(8,"mat-menu",7,8)(10,"button",9),n._uU(11,"Expand"),n.qZA(),n.TgZ(12,"button",9),n._uU(13,"Remove"),n.qZA()()()(),n.TgZ(14,"mat-card-content",10)(15,"div"),n._uU(16,"Card Content Here"),n.qZA()()()()),2&e){const o=m.$implicit,r=n.MAs(9);n.Q6J("colspan",o.cols)("rowspan",o.rows),n.xp6(4),n.hij(" ",o.title," "),n.xp6(1),n.Q6J("matMenuTriggerFor",r)}}let h=(()=>{var e;class m{constructor(){this.breakpointObserver=(0,n.f3M)(p.Yg),this.cards=this.breakpointObserver.observe(p.u3.Handset).pipe((0,t.U)(({matches:r})=>r?[{title:"Card 1",cols:1,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:1},{title:"Card 4",cols:1,rows:1}]:[{title:"Card 1",cols:2,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:2},{title:"Card 4",cols:1,rows:1}]))}}return(e=m).\u0275fac=function(r){return new(r||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-dashboard"]],decls:6,vars:3,consts:[[1,"grid-container"],[1,"mat-h1"],["cols","2","rowHeight","350px"],[3,"colspan","rowspan",4,"ngFor","ngForOf"],[3,"colspan","rowspan"],[1,"dashboard-card"],["mat-icon-button","","aria-label","Toggle menu",1,"more-button",3,"matMenuTriggerFor"],["xPosition","before"],["menu","matMenu"],["mat-menu-item",""],[1,"dashboard-card-content"]],template:function(r,T){1&r&&(n.TgZ(0,"div",0)(1,"h1",1),n._uU(2,"Dashboard"),n.qZA(),n.TgZ(3,"mat-grid-list",2),n.YNc(4,g,17,4,"mat-grid-tile",3),n.ALo(5,"async"),n.qZA()()),2&r&&(n.xp6(4),n.Q6J("ngForOf",n.lcZ(5,1,T.cards)))},dependencies:[M.sg,E.Hw,P.RK,c.a8,c.dn,c.dk,c.n5,_.VK,_.OP,_.p6,l.Il,l.DX,M.Ov],styles:[".grid-container[_ngcontent-%COMP%]{margin:20px}.dashboard-card[_ngcontent-%COMP%]{position:absolute;inset:15px}.more-button[_ngcontent-%COMP%]{position:absolute;top:5px;right:10px}.dashboard-card-content[_ngcontent-%COMP%]{text-align:center}"]}),m})()},7694:(U,O,a)=>{a.d(O,{$:()=>H});var n=a(4825),p=a(7394),t=a(5879),M=a(1088),E=a(4087),P=a(5881),c=a(8036),_=a(1896),l=a(6814),g=a(2651),h=a(617),e=a(1274),m=a(2296),o=a(9038),r=a(6385),T=a(6007),C=a(7988),L=a(2596),f=a(9014),x=a(3680),I=a(7509);function R(u,A){1&u&&t._UZ(0,"mat-progress-bar",27)}const b=function(){return["/home"]},y=function(){return["/account/profile"]},K=function(){return["/auth/login"]},B=function(){return["/person-list"]},W=function(){return["/dashboard"]},Q=function(){return["/users"]},J=function(){return["/tools-list"]},F=function(){return["/about"]};let H=(()=>{var u;class A{constructor(i,s,d,v,D){this.changeDetectorRef=i,this.media=s,this.spinnerService=d,this.authService=v,this.authGuard=D,this.showSpinner=!1,this.userName="",this.isAdmin=!1,this.autoLogoutSubscription=new p.w0,this.mobileQuery=this.media.matchMedia("(max-width: 1000px)"),this._mobileQueryListener=()=>i.detectChanges(),this.mobileQuery.addListener(this._mobileQueryListener)}ngOnInit(){const i=this.authService.getCurrentUser();this.isAdmin=i.isAdmin,this.userName=i.fullName;const s=(0,n.H)(2e3,5e3);this.autoLogoutSubscription=s.subscribe(()=>{this.authGuard.canActivate()})}ngOnDestroy(){this.mobileQuery.removeListener(this._mobileQueryListener),this.autoLogoutSubscription.unsubscribe()}ngAfterViewInit(){this.changeDetectorRef.detectChanges()}}return(u=A).\u0275fac=function(i){return new(i||u)(t.Y36(t.sBO),t.Y36(M.vx),t.Y36(E.V),t.Y36(P.$),t.Y36(c.a))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-layout"]],decls:83,vars:31,consts:[[1,"navbar-container"],["color","primary",1,"navbar"],["mat-icon-button","",3,"click"],["matTooltip","Home",1,"navbar-brand",3,"routerLink"],[1,"navbar-spacer"],["mat-icon-button","",3,"matMenuTriggerFor"],["matBadge","2","matBadgeColor","accent"],["xPosition","before","yPosition","above",3,"overlapTrigger"],["notificationMenu","matMenu"],["mat-menu-item",""],["mat-button","",3,"matMenuTriggerFor"],["fxShow","","fxHide.xs",""],["userMenu","matMenu"],["mat-menu-item","",3,"routerLink"],[1,"navbar-sidenav-container"],["fixedTopGap","56",1,"sidenav",3,"opened","mode","fixedInViewport"],["snav",""],["mat-subheader",""],["mat-list-item","","routerLinkActive","active",1,"menu-item",2,"margin-top","3%",3,"routerLink"],["mat-list-icon",""],["mat-line","","menu-text","",1,"menu-item"],["mat-list-item","","routerLinkActive","active",1,"menu-item",3,"routerLink"],["mat-line","",1,"menu-item"],["id","push-bottom","mat-list-item","","routerLinkActive","active",1,"menu-item",3,"routerLink"],[1,"sidenav-content"],[1,"progress-bar-container"],["color","accent","mode","indeterminate",4,"ngIf"],["color","accent","mode","indeterminate"]],template:function(i,s){if(1&i){const d=t.EpF();t.TgZ(0,"div",0)(1,"mat-toolbar",1)(2,"button",2),t.NdJ("click",function(){t.CHM(d);const D=t.MAs(39);return t.KtG(D.toggle())}),t.TgZ(3,"mat-icon"),t._uU(4,"menu"),t.qZA()(),t.TgZ(5,"a",3)(6,"h1"),t._uU(7," IWCRM "),t.qZA()(),t._UZ(8,"span",4),t.TgZ(9,"button",5)(10,"mat-icon",6),t._uU(11,"notifications"),t.qZA()(),t.TgZ(12,"mat-menu",7,8)(14,"a",9)(15,"span"),t._uU(16,"You have new tasks"),t.qZA()(),t.TgZ(17,"a",9)(18,"span"),t._uU(19,"You have a new message"),t.qZA()()(),t.TgZ(20,"button",10)(21,"mat-icon"),t._uU(22,"person"),t.qZA(),t.TgZ(23,"span",11),t._uU(24),t.qZA()(),t.TgZ(25,"mat-menu",7,12)(27,"a",13)(28,"mat-icon"),t._uU(29,"person"),t.qZA(),t.TgZ(30,"span"),t._uU(31,"Account"),t.qZA()(),t.TgZ(32,"a",13)(33,"mat-icon"),t._uU(34,"exit_to_app"),t.qZA(),t.TgZ(35,"span"),t._uU(36,"Log out"),t.qZA()()()(),t.TgZ(37,"mat-sidenav-container",14)(38,"mat-sidenav",15,16)(40,"mat-nav-list")(41,"h3",17),t._uU(42,"Principal"),t.qZA(),t.TgZ(43,"a",18)(44,"mat-icon",19),t._uU(45," home "),t.qZA(),t.TgZ(46,"p",20),t._uU(47," Home "),t.qZA()(),t.TgZ(48,"a",21)(49,"mat-icon",19),t._uU(50," groups "),t.qZA(),t.TgZ(51,"p",22),t._uU(52," Cadastros "),t.qZA()(),t.TgZ(53,"a",21)(54,"mat-icon",19),t._uU(55," dashboard "),t.qZA(),t.TgZ(56,"p",22),t._uU(57," Dashboard "),t.qZA()(),t._UZ(58,"mat-divider")(59,"br"),t.TgZ(60,"a",21)(61,"mat-icon",19),t._uU(62," group_add "),t.qZA(),t.TgZ(63,"p",22),t._uU(64,"Usu\xe1rios "),t.qZA()(),t._UZ(65,"mat-divider"),t.TgZ(66,"h3",17),t._uU(67,"Resources"),t.qZA(),t.TgZ(68,"a",21)(69,"mat-icon",19),t._uU(70," home_repair_service "),t.qZA(),t.TgZ(71,"p",22),t._uU(72," Ferramentas "),t.qZA()(),t.TgZ(73,"a",23)(74,"mat-icon",19),t._uU(75," info "),t.qZA(),t.TgZ(76,"p",22),t._uU(77," About "),t.qZA()()()(),t.TgZ(78,"mat-sidenav-content",24)(79,"div",25),t.YNc(80,R,1,0,"mat-progress-bar",26),t.ALo(81,"async"),t.qZA(),t._UZ(82,"router-outlet"),t.qZA()()()}if(2&i){const d=t.MAs(13),v=t.MAs(26);t.ekj("example-is-mobile",s.mobileQuery.matches),t.xp6(5),t.Q6J("routerLink",t.DdM(22,b)),t.xp6(4),t.Q6J("matMenuTriggerFor",d),t.xp6(3),t.Q6J("overlapTrigger",!1),t.xp6(8),t.Q6J("matMenuTriggerFor",v),t.xp6(4),t.hij(" ",s.userName," "),t.xp6(1),t.Q6J("overlapTrigger",!1),t.xp6(2),t.Q6J("routerLink",t.DdM(23,y)),t.xp6(5),t.Q6J("routerLink",t.DdM(24,K)),t.xp6(6),t.Q6J("opened",!s.mobileQuery.matches)("mode",s.mobileQuery.matches?"over":"side")("fixedInViewport",s.mobileQuery.matches),t.xp6(5),t.Q6J("routerLink",t.DdM(25,b)),t.xp6(5),t.Q6J("routerLink",t.DdM(26,B)),t.xp6(5),t.Q6J("routerLink",t.DdM(27,W)),t.xp6(7),t.Q6J("routerLink",t.DdM(28,Q)),t.xp6(8),t.Q6J("routerLink",t.DdM(29,J)),t.xp6(5),t.Q6J("routerLink",t.DdM(30,F)),t.xp6(7),t.Q6J("ngIf",t.lcZ(81,20,s.spinnerService.visibility))}},dependencies:[_.lC,_.rH,_.Od,l.O5,g.JX,g.TM,g.Rh,h.Hw,e.Ye,m.lW,m.RK,o.Hk,o.Tg,o.gs,r.d,T.pW,C.VK,C.OP,C.p6,L.gM,f.k,x.X2,I.b8,l.Ov],styles:[".navbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.navbar[_ngcontent-%COMP%]{z-index:2}.navbar-brand[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.navbar-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;inset:0}.navbar-is-mobile[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]{position:fixed;z-index:2}.navbar-sidenav-container[_ngcontent-%COMP%]{flex:1}.navbar-is-mobile[_ngcontent-%COMP%]   .navbar-sidenav-container[_ngcontent-%COMP%]{flex:1 0 auto}mat-sidenav[_ngcontent-%COMP%]{min-width:180px!important;border-right:1px solid #eee;box-shadow:6px 0 6px #0000001a}.progress-bar-container[_ngcontent-%COMP%]{height:5px}a.mat-list-item.active[_ngcontent-%COMP%]{background:rgba(0,0,0,.04)}#push-bottom[_ngcontent-%COMP%]{position:absolute;bottom:0;margin-left:-100%}.menu-text[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;margin-left:10px}.menu-item[_ngcontent-%COMP%]{display:flex;align-items:center;display:inline-block;vertical-align:middle;margin-top:-1%}.menu-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:3px;margin-top:1%}"]}),A})()}}]);