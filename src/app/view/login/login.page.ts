import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/providers/authentication.service';
import { NgForm } from  '@angular/forms';
import { ServiceBDService } from 'src/app/providers/service-bd.service';

export let globalInfo = {
  user: {
    budget: 0,
    id: 1,
    name: "",
    password: 1
  }
};
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: any = {}
  users = [{name: '', budget: '', password: '', id: 1}] 
  error: any = false 

  constructor(private authService:AuthenticationService, private BdService: ServiceBDService) { }

  async ngOnInit() {
    
  }
  n= setInterval(async () => {
    this.users = await this.BdService.readDataBase("users")
  }, 1000);
  login(form: NgForm){
    let i = 0
    if(this.user.name)
    {
      this.users.forEach( el => {
        if(el.name == this.user.name){
          i=1
          if(el.password == this.user.password)
          {
            globalInfo.user.budget = parseFloat(el.budget)
            console.log(el);
            globalInfo.user.id = el.id
            globalInfo.user.name = el.name
            this.authService.login();
          }
          else{
            this.error="mot de passe incorret"
          }
        }
      });
    }else{
      i = 1
      this.error="completer les information de connection"
    }
    if(i==0)
    {
      this.error="l'untilisateur n'esiste pas"
    }
  }
  close(){
    this.error=false
  }
}