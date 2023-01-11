import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

@Injectable({
  providedIn: 'root'
})
export class ServiceBDService {

  constructor(private storage:Storage) { }

  async initDataBase(){
    await this.storage.create();
    await this.storage.defineDriver(CordovaSQLiteDriver);
  }
  async writeDataBase(nomtab:any, tab:any[]=[]){
    await this.storage.set(nomtab, tab) 
  }
  async readDataBase(nomtab:any){
    return this.storage.get(nomtab)
  }
  async addeDataBase(nomtab:any, element:any){
    const liste = await this.readDataBase(nomtab)
    if(liste==undefined){
      let tab:any[]=[]
      tab.push(element)
      this.writeDataBase(nomtab,tab)
    }else{
      let tab = [...await liste,element]
      this.writeDataBase(nomtab,tab)
    }
  }
  async addBudjet(el:number, user:any)
  {
    let users= await this.readDataBase("users")
    users.forEach((e:any) => {
      if (e.id == user.id)
      {
        e.budget = e.budget + el
      }
    });
    this.writeDataBase("users",users)
  }
  async reduceBudjet(el:any, user:any)
  {
    let users= await this.readDataBase("users")
    users.forEach((e:any) => {
      if (e.id == user.id)
      {
        e.budget = e.budget-el
      }
    });
    this.writeDataBase("users",users)
  }
  async supp(nomtab:any, el:any){
    let liste : any[] = []
    liste = await this.readDataBase(nomtab)
    const tabFilter = liste.filter(e => e.id != el.id)
    this.writeDataBase(nomtab,tabFilter)
    console.log("simossssss",await this.readDataBase(nomtab));
  }
  async deletTabeDataBase(nomtab:any){
    await this.storage.remove(nomtab)
  }
  async deletDataBase(){
    await this.storage.clear()
  }
  async modifpassword(el:any,pass:any){
    let users : any[] = []
    users = await this.readDataBase("users")
    users.forEach((e:any) => {
      if (e.id == el.id)
      {
        e.password = pass
        console.log("-------0------------ok---------------------0-------", e.password , pass );
      }
    });
    this.writeDataBase("users",users)
  }
}
