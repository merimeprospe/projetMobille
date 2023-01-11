import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/providers/service-bd.service';
import {globalInfo} from '../../view/login/login.page';

@Component({
  selector: 'app-page-entree',
  templateUrl: './page-entree.page.html',
  styleUrls: ['./page-entree.page.scss'],
})
export class PageEntreePage implements OnInit {
  op= {
    user: {}, 
    intitul:"",
    montant: 0,
    type: "",
    id: 0,
    date: new Date()
  };
  ops : any
  id = 0
  constructor(private module:ModalController,private BdService: ServiceBDService) { }

  async ngOnInit() {
    this.ops = await this.BdService.readDataBase("operation")
    //this.BdService.deletDataBase()
    if(this.ops!=null){
      this.id = this.ops.length
    }
  }

  fin(){
    this.module.dismiss()
  }
  searchItems(obj:any){
    this.op.intitul= obj.target.value
  }
  searchItems1(obj:any){
    this.op.montant= parseFloat(obj.target.value)
  }

  async retrieveData(){
    // this.op.date = maDate.getDate()+"/"+maDate.getMonth()+"/"+maDate.getFullYear()
    // this.op.time = maDate.getHours()+":"+maDate.getMinutes()
    this.BdService.addBudjet(this.op.montant,globalInfo.user)
    globalInfo.user.budget = globalInfo.user.budget+this.op.montant
    this.op.id = this.id+1;
    this.op.user = globalInfo.user
    this.op.date = new Date()
    this.op.type = "Entrer"
    console.log("dddddddddddddddddddÈ", this.op)
    await this.BdService.addeDataBase('operation',this.op)
    this.fin()
  }
}
