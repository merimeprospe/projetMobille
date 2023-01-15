import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/providers/authentication.service';
import { ServiceBDService } from 'src/app/providers/service-bd.service';
import {globalInfo} from '../../view/login/login.page';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  @ViewChild(IonModal) Modal:IonModal | any
  mp:any
  n_mp:any
  user:any
  error: any = false 
  constructor(private authService:AuthenticationService,private modale: ModalController, private BdService: ServiceBDService) { }

  ngOnInit() {
    this.user =  this.user = JSON.parse(localStorage.getItem("globalInfo") as string)
    console.log(this.user);
  }
  close(){
    this.Modal.dismiss();
  }
  logout(){
    this.authService.logout()
  }
  close1(){
    this.error=false
  }
  searchItems(obj:any){
    this.mp= obj.target.value
  }
  searchItems1(obj:any){
    this.n_mp= parseFloat(obj.target.value)
  }
  async modifier(){
    let users = await this.BdService.readDataBase("users")
    users.forEach( (el:any) => {
      if(el.name == this.user.name){
        if(el.password == this.mp)
        {
          this.BdService.modifpassword(el,this.n_mp)
        }
        else{
          this.error="mot de passe incorret"
        }
      }
    })
  }
}
