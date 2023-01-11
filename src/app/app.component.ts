import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './providers/authentication.service';
import { ServiceBDService } from './providers/service-bd.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private DBSevice:ServiceBDService, private authService:AuthenticationService, private router: Router) {
    this.initializeApp()
  }

  ngOnInit() {
    this.DBSevice.initDataBase();
  }
  initializeApp(){
    this.authService.authenticationState.subscribe(state =>{
      console.log('Auth changed', state);
      if(state){
        this.router.navigate(['members','tabs']);
      }else{
        this.router.navigate(['login']);
        //this.router.navigate(['register']);
      }
    })
  }
}
