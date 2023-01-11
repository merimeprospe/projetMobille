import { Component, OnInit } from '@angular/core';
import { ServiceBDService } from 'src/app/providers/service-bd.service';
import {globalInfo} from '../../view/login/login.page';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {
  ops: any
  ops1: any []= []   
  a: any []= [] 
  i = 0  
  o: any
  n = 0                                                                                                                                                                                              
  constructor(private BdService: ServiceBDService) { }

  async ngOnInit() {
   //this.BdService.deletDataBase()
   //this.BdService.deletTabeDataBase("operation")
   this.ops1=[]
    this.a = []
    this.n=0
    this.ops = await this.BdService.readDataBase("operation")
    this.ops.forEach((el:any) => {
      console.log("oooo");
      if(el.user.name == globalInfo.user.name)
      {
        console.log("tttt");
        
        this.ops1.push(el)
      }
    });
      
    this.ops1.forEach((el:any) => {
      this.n++
      if (this.i==0) {
        this.i=1
        this.o = {
          date1 : this.date(el.date),
          date : el.date,
          op: [] 
        }
      }
      if(el.date.getDate() == this.o.date.getDate() && el.date.getMonth() == this.o.date.getMonth() && el.date.getFullYear() == this.o.date.getFullYear())
      {
        this.o.op.push(el)
        console.log(this.o);
      }else{
        this.a.push(this.o)
        this.i=0
      }
      if (this.n== this.ops1.length) {
        this.a.push(this.o)
        this.i=0
      }
    });
    console.log(this.a);
    
  }
  t = setInterval(async () => {
  this.ops1=[]
  this.a = []
  this.n=0
  this.ops = await this.BdService.readDataBase("operation")
  this.ops.forEach((el:any) => {
    console.log("oooo");
    if(el.user.name == globalInfo.user.name)
    {
      console.log("tttt");
      
      this.ops1.push(el)
    }
  });
  this.ops1.forEach((el:any) => {
    this.n++
    if (this.i==0) {
      this.i=1
      this.o = {
        date1 : this.date(el.date),
        date : el.date,
        op: []
      }
    }
    if(el.date.getDate() == this.o.date.getDate() && el.date.getMonth() == this.o.date.getMonth() && el.date.getFullYear() == this.o.date.getFullYear())
    {
      this.o.op.push(el)
      console.log(this.o);
    }else{
      this.a.push(this.o)
      this.i=0
    }
    if (this.n== this.ops1.length) {
      this.a.push(this.o)
      this.i=0
    }
  });
  console.log(this.a);

  }, 1000);
  date(ob:any){
    let d = " "
    if(ob.getDay() == 0)
    {
      d = d+ " Dimanche"
    }
    if(ob.getDay() == 1)
    {
      d = d+ " Lundi"
    }
    if(ob.getDay() == 2)
    {
      d = d+ " Mardi"
    }
    if(ob.getDay() == 3)
    {
      d = d+ " Mercredi"
    }
    if(ob.getDay() == 4)
    {
      d = d+ " Jeudi"
    }
    if(ob.getDay() == 5)
    {
      d = d+ " Vendredi"
    }
    if(ob.getDay() == 6)
    {
      d = d+ " Samedi"
    }
    d = d + " "+ ob.getDate()
    if(ob.getMonth()==0){
      d = d + " janvier"
    }
    if(ob.getMonth()==1){ 
      d = d + " février"
    }
    if(ob.getMonth()==2){
      d = d + " Mars"
    }
    if(ob.getMonth()==3){
      d = d + " avril"
    }
    if(ob.getMonth()==4){
      d = d + " Mai"
    }
    if(ob.getMonth()==5){
      d = d + " juin"
    }
    if(ob.getMonth()==6){
      d = d + "	juillet"
    }
    if(ob.getMonth()==7){
      d = d + "	août"
    }
    if(ob.getMonth()==8){
      d = d + " septembre"
    }
    if(ob.getMonth()==9){
      d = d + " octobre"
    }
    if(ob.getMonth()==10){
      d = d + " novembre"
    }
    if(ob.getMonth()==11){
      d = d + " décembre"
    }
    //d = d + " " + ob.getFullYear()
    return d
  }
  async delet(ob:any){
    console.log("delete", ob);
    if(ob.type == "Entrer")
    {
      console.log("simo");
      this.BdService.reduceBudjet(ob.montant,globalInfo.user)
      globalInfo.user.budget = globalInfo.user.budget-ob.montant
    }else{
      console.log("tedom");
      this.BdService.addBudjet(ob.montant,globalInfo.user)
      globalInfo.user.budget = globalInfo.user.budget+ob.montant
      console.log("tedom");
    }
    await this.BdService.supp('operation',ob)
    console.log("dddddddddddddddddddÈ", ob)
  }
}