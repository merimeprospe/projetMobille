"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9099],{9099:(v,d,r)=>{r.r(d),r.d(d,{RegisterPageModule:()=>P});var _=r(6895),a=r(433),g=r(5035),p=r(2598),u=r(655),e=r(8256),h=r(8592),f=r(8290);function m(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"div",32)(1,"span"),e._uU(2),e.qZA(),e.TgZ(3,"ion-icon",33),e.NdJ("click",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.close())}),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(2),e.Oqu(n.error)}}function b(t,l){if(1&t&&(e.TgZ(0,"div"),e._UZ(1,"ion-range",34),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.s9C("value",n.val),e.s9C("color",n.color)}}const x=function(){return["/login"]},C=[{path:"",component:(()=>{class t{constructor(n,i,c){this.BdService=n,this.authService=i,this.route=c,this.user={},this.color="danger",this.val=0,this.users=[{name:"",budget:"",password:"",id:1}],this.id=0,this.isActif=0,this.error=!1,this.n=setInterval(()=>{this.user.password||(this.isActif=0)},1e3)}ngOnInit(){return(0,u.mG)(this,void 0,void 0,function*(){this.users=yield this.BdService.readDataBase("users"),null!=this.users&&(this.id=this.users.length)})}close(){this.error=!1}passwordChange(){const n=this.user.password+"";0==n.length&&(this.isActif=0),n.length<=4&&0!=n.length&&(this.isActif=1,this.val=25,this.color="danger"),n.length>=1&&(this.isActif=1,this.val=25),n.length>=5&&(this.val=50,this.color="warning"),n.length>=8&&(this.val=75,this.color="warning"),n.length>=10&&(this.val=100,this.color="success"),console.log(n.length)}register(n){return(0,u.mG)(this,void 0,void 0,function*(){let i=0;this.user.password==this.configPassword?(console.log(this.user.password==this.configPassword),this.user.name&&this.user.password&&this.user.budget?(console.log("OK2"),null!=this.users&&(console.log("OK3"),this.users.forEach(c=>{c.name==this.user.name&&(i=1)})),0==i?(console.log("OK4"),5==(this.user.password+"").length?(console.log("OK5"),this.user.id=this.id+1,yield this.BdService.addeDataBase("users",this.user),this.route.navigateByUrl("/login")):this.error="mot de passe trop faible "):this.error="un utilisateur eyant ce non esiste deja"):this.error="saisiser toutes les information de utilisateur"):this.error="verifier votre mot de passe"})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(h.G),e.Y36(f.$),e.Y36(p.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],decls:42,vars:9,consts:[[1,"container"],[1,"screen"],["class","error",4,"ngIf"],[1,"screen__content"],["method","post",1,"login",3,"ngSubmit"],["form","ngForm"],[1,"tilte"],[1,"titleApp"],[1,"titleApp2"],[1,"login__field"],[1,"login__icon","fas","fa-user"],["type","text","name","nom","placeholder","User name / Email",1,"login__input",3,"ngModel","click","ngModelChange"],["type","text","name","budget","type","number","placeholder","budget",1,"login__input",3,"ngModel","click","ngModelChange"],[1,"login__icon","fas","fa-lock"],["name","password ","type","number","placeholder","    Mot de passe",1,"login__input","display-none",3,"ngModel","click","ngModelChange","ionChange"],["type","password","name","password ","placeholder","Password",1,"login__input",3,"ngModel","click","ngModelChange"],[4,"ngIf"],["type","password","name","configpassword","type","number","placeholder","Confirme passe",1,"login__input",3,"ngModel","click","ngModelChange"],[1,"button","login__submit"],["type","submit",1,"button__text"],[1,"button__icon","fas","fa-chevron-right"],[1,"social-login"],["defaultHref","/login",3,"routerLink"],[1,"social-icons"],["href","#",1,"social-login__icon","fab","fa-instagram"],["href","#",1,"social-login__icon","fab","fa-facebook"],["href","#",1,"social-login__icon","fab","fa-twitter"],[1,"screen__background"],[1,"screen__background__shape","screen__background__shape4"],[1,"screen__background__shape","screen__background__shape3"],[1,"screen__background__shape","screen__background__shape2"],[1,"screen__background__shape","screen__background__shape1"],[1,"error"],["slot","end","name","close",3,"click"],["min","0","max","100","pin","true","mode","md",3,"value","color"]],template:function(n,i){if(1&n){const c=e.EpF();e.TgZ(0,"ion-content")(1,"div",0)(2,"div",1),e.YNc(3,m,4,1,"div",2),e.TgZ(4,"div",3)(5,"form",4,5),e.NdJ("ngSubmit",function(){e.CHM(c);const s=e.MAs(6);return e.KtG(i.register(s))}),e.TgZ(7,"div",6)(8,"span",7),e._uU(9,"Manage"),e.qZA(),e.TgZ(10,"span",8),e._uU(11,"App"),e.qZA()(),e.TgZ(12,"div",9),e._UZ(13,"i",10),e.TgZ(14,"input",11),e.NdJ("click",function(){return i.close()})("ngModelChange",function(s){return i.user.name=s}),e.qZA()(),e.TgZ(15,"div",9),e._UZ(16,"i",10),e.TgZ(17,"input",12),e.NdJ("click",function(){return i.close()})("ngModelChange",function(s){return i.user.budget=s}),e.qZA()(),e.TgZ(18,"div",9),e._UZ(19,"i",13),e.TgZ(20,"ion-input",14),e.NdJ("click",function(){return i.close()})("ngModelChange",function(s){return i.user.password=s})("ionChange",function(){return i.passwordChange()}),e.qZA(),e.TgZ(21,"input",15),e.NdJ("click",function(){return i.close()})("ngModelChange",function(s){return i.user.password=s}),e.qZA()(),e.YNc(22,b,2,2,"div",16),e.TgZ(23,"div",9),e._UZ(24,"i",13),e.TgZ(25,"input",17),e.NdJ("click",function(){return i.close()})("ngModelChange",function(s){return i.configPassword=s}),e.qZA()(),e.TgZ(26,"button",18)(27,"span",19),e._uU(28,"s'inscrire"),e.qZA(),e._UZ(29,"i",20),e.qZA()(),e.TgZ(30,"div",21)(31,"h3",22),e._uU(32," Connexion "),e.qZA(),e.TgZ(33,"div",23),e._UZ(34,"a",24)(35,"a",25)(36,"a",26),e.qZA()()(),e.TgZ(37,"div",27),e._UZ(38,"span",28)(39,"span",29)(40,"span",30)(41,"span",31),e.qZA()()()()}2&n&&(e.xp6(3),e.Q6J("ngIf",i.error),e.xp6(11),e.Q6J("ngModel",i.user.name),e.xp6(3),e.Q6J("ngModel",i.user.budget),e.xp6(3),e.Q6J("ngModel",i.user.password),e.xp6(1),e.Q6J("ngModel",i.user.password),e.xp6(1),e.Q6J("ngIf",i.isActif),e.xp6(3),e.Q6J("ngModel",i.configPassword),e.xp6(6),e.Q6J("routerLink",e.DdM(8,x)))},dependencies:[_.O5,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.On,a.F,g.W2,g.gu,g.pK,g.I_,g.as,g.QI,g.YI,p.rH],styles:['@import"https://fonts.googleapis.com/css?family=Raleway:400,700";ion-range[_ngcontent-%COMP%]{margin:0;padding:0}*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0;font-family:Raleway,sans-serif}body[_ngcontent-%COMP%]{background:linear-gradient(90deg,#C7C5F4,#776BCC)}.container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:100vh}.screen[_ngcontent-%COMP%]{background:linear-gradient(90deg,#5D54A4,#7C78B8);position:relative;height:100vh;width:100%}.screen__content[_ngcontent-%COMP%]{z-index:1;position:relative;height:100%;display:flex;justify-content:center;align-items:center}.screen__background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;z-index:0;-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}.screen__background__shape[_ngcontent-%COMP%]{transform:rotate(45deg);position:absolute}.screen__background__shape1[_ngcontent-%COMP%]{height:520px;width:520px;background:#FFF;top:-50px;right:120px;border-radius:0 72px 0 0}.screen__background__shape2[_ngcontent-%COMP%]{height:220px;width:220px;background:#6C63AC;top:-172px;right:0;border-radius:32px}.screen__background__shape3[_ngcontent-%COMP%]{height:540px;width:190px;background:linear-gradient(270deg,#5D54A4,#6A679E);top:-24px;right:0;border-radius:32px}.screen__background__shape4[_ngcontent-%COMP%]{height:290px;width:200px;background:#7E7BB9;top:420px;right:50px;border-radius:60px}.login[_ngcontent-%COMP%]{width:320px}.login__field[_ngcontent-%COMP%]{padding:20px 0;position:relative}.login__icon[_ngcontent-%COMP%]{position:absolute;top:30px;color:#7875b5}.login__input[_ngcontent-%COMP%]{border:none;border-bottom:2px solid #D1D1D4;background:none;padding:10px 10px 10px 24px;font-weight:700;width:75%;transition:.2s}.display-none[_ngcontent-%COMP%]{display:none}.login__input[_ngcontent-%COMP%]:active, .login__input[_ngcontent-%COMP%]:focus, .login__input[_ngcontent-%COMP%]:hover{outline:none;border-bottom-color:#6a679e}.login__submit[_ngcontent-%COMP%]{background:#fff;font-size:14px;margin-top:30px;padding:16px 20px;border-radius:26px;border:1px solid #D4D3E8;text-transform:uppercase;font-weight:700;display:flex;align-items:center;width:40%;color:#4c489d;box-shadow:0 2px 2px #5c5696;cursor:pointer;transition:.2s}.login__submit[_ngcontent-%COMP%]:active, .login__submit[_ngcontent-%COMP%]:focus, .login__submit[_ngcontent-%COMP%]:hover{border-color:#6a679e;outline:none}.error[_ngcontent-%COMP%]{padding:10px;border:1px solid rgb(219,1,1);border-radius:5px;position:absolute;top:50px;left:8px;margin-bottom:20px;z-index:9;gap:28px;right:13px;color:#db0101;display:flex;justify-content:space-between}.button__icon[_ngcontent-%COMP%]{font-size:24px;margin-left:auto;color:#7875b5}.social-login[_ngcontent-%COMP%]{position:absolute;height:140px;width:160px;text-align:center;bottom:0px;right:0px;color:#fff}.titleApp[_ngcontent-%COMP%]{font-size:3em;font-weight:700;color:#4c489d;margin-bottom:15px}.titleApp2[_ngcontent-%COMP%]{font-size:2em;font-weight:500;color:"#6C63AC";margin-bottom:15px}.tilte[_ngcontent-%COMP%]{margin-bottom:25px}.social-icons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.social-login__icon[_ngcontent-%COMP%]{padding:20px 10px;color:#fff;text-decoration:none;text-shadow:0px 0px 8px #7875B5}.social-login__icon[_ngcontent-%COMP%]:hover{transform:scale(1.5)}']}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(C),p.Bz]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[_.ez,a.u5,g.Pc,M]}),t})()}}]);