import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {login: '',senha: ''}

  constructor(private loginService: LoginServiceService,private router: Router){}

  // LOGAR
  public logar(){
    this.loginService.fazerLogin(this.usuario);
  }

  // RECUPERAR CONTA (esqueci senha)
  public recuperarConta(){
    this.loginService.recuperarConta(this.usuario.login)
  }

  //INIT
  ngOnInit() {

    if(localStorage.getItem('token')!= null){
      this.router.navigate(['home'])
    }

  }

}
