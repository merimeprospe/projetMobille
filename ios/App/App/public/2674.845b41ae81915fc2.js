"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2674],{2674:(C,d,a)=>{a.r(d),a.d(d,{DashboardPageModule:()=>v});var p=a(6895),h=a(433),i=a(5035),g=a(2598),c=a(655),u=a(7121),m=a(1401),e=a(8256),f=a(8290),b=a(8592);function x(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"div",25)(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Effectuer une operation"),e.qZA()()(),e.TgZ(4,"ion-content")(5,"ion-item",26),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.recherche())}),e.TgZ(6,"ion-label",27),e._uU(7,"D\xe9pense"),e.qZA(),e._UZ(8,"ion-icon",28),e.qZA(),e.TgZ(9,"ion-item",26),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.recherche1())}),e.TgZ(10,"ion-label",27),e._uU(11,"Entr\xe9e"),e.qZA(),e._UZ(12,"ion-icon",28),e.qZA()()}}const M=[{path:"",component:(()=>{class n{constructor(o,t,r){this.authService=o,this.modale=t,this.BdService=r,this.ops1=[],this.tj=0,this.ej=0,this.tm=0,this.em=0,this.t=setInterval(()=>(0,c.mG)(this,void 0,void 0,function*(){this.user=JSON.parse(localStorage.getItem("globalInfo")),this.ops1=[],this.ops=yield this.BdService.readDataBase("operation"),this.ops&&(this.ops.forEach(l=>{console.log("oooo"),l.user.name==this.user.name&&(console.log("tttt"),this.ops1.push(l))}),localStorage.setItem("ops",JSON.stringify(this.ops1)),this.ops1&&(this.jourdepense(),this.jourentrer(),this.moisentrer(),this.moisdepense()))}),1e3)}ngOnInit(){return(0,c.mG)(this,void 0,void 0,function*(){this.user=JSON.parse(localStorage.getItem("globalInfo"))})}jourdepense(){this.tj=0;let o=new Date;this.ops1.forEach(t=>{o.getDate()==t.date.getDate()&&"Depense"==t.type&&(this.tj=this.tj+t.montant)}),console.log(this.tj)}moisdepense(){this.tm=0;let o=new Date;this.ops1.forEach(t=>{o.getMonth()==t.date.getMonth()&&"Depense"==t.type&&(this.tm=this.tm+t.montant)}),console.log(this.tj)}jourentrer(){this.ej=0;let o=new Date;this.ops1.forEach(t=>{console.log(o.getDate(),t.date.getDate()),o.getDate()==t.date.getDate()&&"Entrer"==t.type&&(console.log("simo",this.tj),this.ej=this.ej+t.montant)}),console.log(this.ej)}moisentrer(){this.em=0;let o=new Date;this.ops1.forEach(t=>{console.log("tedom",o.getMonth(),t.date.getMonth()),o.getMonth()==t.date.getMonth()&&"Entrer"==t.type&&(console.log("simo",this.tj),this.em=this.em+t.montant)}),console.log(this.ej)}logout(){this.authService.logout()}close(){this.Modal.dismiss()}recherche(){return(0,c.mG)(this,void 0,void 0,function*(){yield(yield this.modale.create({component:u.i})).present()})}recherche1(){return(0,c.mG)(this,void 0,void 0,function*(){yield(yield this.modale.create({component:m.O})).present()})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(f.$),e.Y36(i.IN),e.Y36(b.G))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dashboard"]],viewQuery:function(o,t){if(1&o&&e.Gf(i.ki,5),2&o){let r;e.iGM(r=e.CRH())&&(t.Modal=r.first)}},decls:49,vars:8,consts:[["slot","start","fill","clear"],["fill","clear",3,"click"],["slot","icon-only","name","log-out"],["slot","end","fill","clear"],[1,"profile"],[1,"head"],[1,"initial"],[1,"texte"],[1,"budbget"],["src","assets/img/man.png","alt",""],[1,"containt"],[1,"row","r1"],[1,"element","e1"],[1,"depense"],[1,"montant"],[1,"row","r2"],[1,"element","e2"],[1,"row","r3"],[1,"element","e3"],[1,"row","r4"],[1,"element","e4"],["vertical","bottom","horizontal","end","slot","fixed",1,"color"],["id","modalform"],["name","add"],["trigger","modalform","initialBreakpoint","0.25"],[1,"ion-header"],[3,"click"],["position","started"],["name","chevron-forward-outline"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-button",0)(3,"ion-button",1),e.NdJ("click",function(){return t.logout()}),e._UZ(4,"ion-icon",2),e.qZA()(),e.TgZ(5,"ion-title"),e._uU(6),e.qZA(),e.TgZ(7,"ion-button",3)(8,"div",4),e._uU(9),e.qZA()()()(),e.TgZ(10,"ion-content")(11,"div",5)(12,"p",6),e._uU(13),e.qZA(),e.TgZ(14,"p",7),e._uU(15," Grace a ManageApp Plannifier vos depenses et laissez nous faire le reste "),e.qZA(),e.TgZ(16,"p",8),e._uU(17),e.qZA(),e._UZ(18,"img",9),e.qZA(),e.TgZ(19,"div",10)(20,"div",11)(21,"div",12)(22,"p",13),e._uU(23,"Depenses journaliere"),e.qZA(),e.TgZ(24,"p",14),e._uU(25),e.qZA()()(),e.TgZ(26,"div",15)(27,"div",16)(28,"p",13),e._uU(29,"Total depenses mensuelle"),e.qZA(),e.TgZ(30,"p",14),e._uU(31),e.qZA()()(),e.TgZ(32,"div",17)(33,"div",18)(34,"p",13),e._uU(35,"Total revenue journaliere "),e.qZA(),e.TgZ(36,"p",14),e._uU(37),e.qZA()()(),e.TgZ(38,"div",19)(39,"div",20)(40,"p",13),e._uU(41,"Total revenue mensuelle "),e.qZA(),e.TgZ(42,"p",14),e._uU(43),e.qZA()()()(),e.TgZ(44,"ion-fab",21)(45,"ion-fab-button",22),e._UZ(46,"ion-icon",23),e.qZA()(),e.TgZ(47,"ion-modal",24),e.YNc(48,x,13,0,"ng-template"),e.qZA()()),2&o&&(e.xp6(6),e.Oqu(t.user.name),e.xp6(3),e.hij(" ",t.user.name.charAt(0).toUpperCase()," "),e.xp6(4),e.hij(" Bienvenue ",t.user.name," dans votre tableau de bord "),e.xp6(4),e.hij(" Votre Budget Initial: ",t.user.budget," FCFA "),e.xp6(8),e.hij("",t.tj," FCFA"),e.xp6(6),e.hij("",t.tm," FCFA"),e.xp6(6),e.hij("",t.ej," FCFA"),e.xp6(6),e.hij("",t.em," FCFA"))},dependencies:[i.YG,i.W2,i.IJ,i.W4,i.Gu,i.gu,i.Ie,i.Q$,i.wd,i.sr,i.ki],styles:["*[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;margin:0;padding:0}.row[_ngcontent-%COMP%]{padding:5px}.element[_ngcontent-%COMP%]{width:95%;padding:20px;margin:10px auto;border-radius:0 40px;box-shadow:-5px -5px 9px rgba(255,255,255,.45),5px 5px 9px rgba(94,104,121,.3)}.box[_ngcontent-%COMP%]{height:150px;width:150px;border-radius:20px;margin:20px;box-shadow:-5px -5px 9px rgba(255,255,255,.45),5px 5px 9px rgba(94,104,121,.3)}.r1[_ngcontent-%COMP%]{color:#fff}.e1[_ngcontent-%COMP%]{background-color:#7fffd4}.r2[_ngcontent-%COMP%]{color:#fff}.e2[_ngcontent-%COMP%]{background-color:#776bcc}.r3[_ngcontent-%COMP%]{color:#000}.e3[_ngcontent-%COMP%]{background-color:#fff}.r4[_ngcontent-%COMP%]{color:#fff;margin-bottom:20px}.e4[_ngcontent-%COMP%], .col[_ngcontent-%COMP%]{background-color:#776bcc}.persoion[_ngcontent-%COMP%]{position:fixed;z-index:20;height:50px;width:50px;border-radius:50%;background-color:#6c63ac;color:#fff;display:flex;justify-content:center;align-items:center;right:10%;bottom:5%;font-size:2.5em;box-shadow:-5px -5px 9px rgba(255,255,255,.45),5px 5px 9px rgba(94,104,121,.3)}.budbget[_ngcontent-%COMP%]{color:#6c63ac;font-size:1.5em;margin:15px 0;padding:10px;border:1px solid #6C63AC;border-radius:10px}.card[_ngcontent-%COMP%]{width:190px;height:254px;border-radius:30px;background:#e0e0e0;box-shadow:15px 15px 30px #bebebe,-15px -15px 30px #fff}.depense[_ngcontent-%COMP%]{font-size:1.6em;margin-bottom:5px}.montant[_ngcontent-%COMP%]{font-size:2em;font-weight:700}.head[_ngcontent-%COMP%]{padding:15px 20px}.initial[_ngcontent-%COMP%]{padding:10px 0;color:#6c63ac;font-size:1.5em}.texte[_ngcontent-%COMP%]{font-size:1.3em;margin:10px 0;color:gray}img[_ngcontent-%COMP%]{height:250px}.profile[_ngcontent-%COMP%]{width:40px;height:40px;color:#fff;border-radius:50%;display:flex;justify-content:center;align-items:center;background-color:#6c63ac}ion-modal[_ngcontent-%COMP%]   .ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: #6C63AC;--color: white;text-align:center}ion-modal[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{--background: #d8d5ec}ion-modal[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background: #d8d5ec;margin:2%}.color[_ngcontent-%COMP%]{--background: #9538ff}"]}),n})()}];let P=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(M),g.Bz]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,h.u5,i.Pc,P]}),n})()}}]);