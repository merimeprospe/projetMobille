import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { AuthenticationService } from 'src/app/providers/authentication.service';
import {globalInfo} from '../../view/login/login.page';
import { ModalController } from '@ionic/angular';
import { PageDepensePage } from '../page-depense/page-depense.page';
import { PageEntreePage } from '../page-entree/page-entree.page';
import { ServiceBDService } from 'src/app/providers/service-bd.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  ops: any
  ops1: any []= []
  user: any 
  tj = 0
  ej = 0
  tm = 0
  em = 0
  @ViewChild(IonModal) Modal:IonModal | any

  constructor(private authService:AuthenticationService, private modale: ModalController,private BdService: ServiceBDService) { 
   
  }

  async ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("globalInfo") as string)
    
  }
  t = setInterval(async () => {
    this.user = JSON.parse(localStorage.getItem("globalInfo") as string)
    this.ops1 = []
    this.ops = await this.BdService.readDataBase("operation")
    if(this.ops)
    {
      this.ops.forEach((el:any) => {
        console.log("oooo");
        if(el.user.name == this.user.name)
        {
          console.log("tttt");
          this.ops1.push(el)
        }
      });
      localStorage.setItem("ops", JSON.stringify(this.ops1))
      if(this.ops1){
        this.jourdepense()
        this.jourentrer()
        this.moisentrer()
        this.moisdepense()
      }
    }
  }, 1000);
  jourdepense(){
    this.tj = 0
    let date = new Date
    this.ops1.forEach(el => {
      //console.log(date.getDate(), el.date.getDate())
      if(date.getDate() == el.date.getDate()){
        if(el.type=="Depense")
        {
          this.tj = this.tj + el.montant 
        }
        //console.log("simo",this.tj);
      }
    });
    console.log(this.tj);
  }
  moisdepense(){
    this.tm = 0
    let date = new Date
    this.ops1.forEach(el => {
      //console.log(date.getDate(), el.date.getDate())
      if(date.getMonth() == el.date.getMonth()){
        if(el.type=="Depense")
        {
          this.tm = this.tm + el.montant 
        }
        //console.log("simo",this.tj);
      }
    });
    console.log(this.tj);
  }
  jourentrer(){
    this.ej = 0
    let date = new Date
    this.ops1.forEach(el => {
      console.log(date.getDate(), el.date.getDate())
      if(date.getDate() == el.date.getDate()){
        if(el.type=="Entrer")
        {
          console.log("simo",this.tj)
          this.ej = this.ej + el.montant
        }
        //console.log("simo",this.tj);
      }
    });
    console.log(this.ej);
   }
  moisentrer(){
  this.em = 0
  let date = new Date
  this.ops1.forEach(el => {
    console.log("tedom",date.getMonth(), el.date.getMonth())
    if(date.getMonth() == el.date.getMonth()){
      if(el.type=="Entrer")
      {
        console.log("simo",this.tj)
        this.em = this.em + el.montant
      }
      //console.log("simo",this.tj);
    }
  });
  console.log(this.ej);
  } 
  logout(){
    this.authService.logout()
  }
  close(){
    this.Modal.dismiss();
  }

  async recherche(){
    const modale = await this.modale.create({
      component: PageDepensePage
    })
    
    await modale.present();
  }
  async recherche1(){
    const modale = await this.modale.create({
      component: PageEntreePage
    })
    
    await modale.present();
  }

}
