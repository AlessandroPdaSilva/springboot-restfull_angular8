import { Component } from '@angular/core';
import { LoginServiceService } from './service/login-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// CONTROLER
export class AppComponent {
  title = 'angular8-restfull';

  usuario = {login: '',senha: ''}

  constructor(private loginService: LoginServiceService){}

  public login(){

    this.loginService.fazerLogin(this.usuario);
  }


}
