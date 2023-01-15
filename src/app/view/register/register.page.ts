import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/providers/authentication.service';
import { ServiceBDService } from 'src/app/providers/service-bd.service';
import {globalInfo} from '../login/login.page'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: any = {}
  color = "danger" 
  val=0 
  configPassword:any
  users = [{name: '', budget: '', password: '', id: 1}] 
  id=0
  isActif = 0
  error: any = false 

  constructor(private BdService: ServiceBDService, private authService:AuthenticationService,private route:Router) { }

  async ngOnInit() {
    this.users = await this.BdService.readDataBase("users")
    //this.BdService.deletDataBase()
    if(this.users!=null){
      this.id = this.users.length
    }
  }
  close(){
    this.error=false
  }
  n = setInterval(() => {
    if(!this.user.password)
    {
      this.isActif = 0
    }
  }, 1000); 
  passwordChange(){
    const  n = this.user.password+""
    if(n.length == 0)
    {
      this.isActif = 0
    }
    if(n.length <= 4 && n.length != 0)
    {
      this.isActif = 1
      this.val = 25
      this.color = "danger" 
    }
    if(n.length >=1){
      this.isActif = 1
      this.val = 25
    }
    if(n.length >=5){
      this.val = 50
      this.color = "warning"
    }
    if(n.length >=8){
      this.val = 75
      this.color = "warning"
    }
    if(n.length >=10){
      this.val = 100
      this.color = "success"
    }
    console.log(n.length)
  }

  async register(form: NgForm){
    let isExist = 0
    if(this.user.password == this.configPassword )
    {
      console.log(this.user.password == this.configPassword);
      if( this.user.name && this.user.password && this.user.budget){
        console.log("OK2");
        if(this.users != null)
        {
          console.log("OK3");
          this.users.forEach( el => {
            if(el.name == this.user.name){
              isExist = 1;
            }
          });
        }
        if(isExist==0){
          console.log("OK4");
          const  n = this.user.password+""
          if(n.length == 5)
          {
            console.log("OK5");
            this.user.id = this.id+1;
            await this.BdService.addeDataBase('users',this.user)
            this.route.navigateByUrl('/login');
          }else{
            this.error="mot de passe trop faible "
          }
        }else{
          this.error="un utilisateur eyant ce non esiste deja"
        }
      }else{
        this.error="saisiser toutes les information de utilisateur"
      }
    }else{
      this.error="verifier votre mot de passe"
    }
    //
  }

}
