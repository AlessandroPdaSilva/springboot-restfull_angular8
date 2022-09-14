import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

// DAO
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  // Fazer login
  fazerLogin(usuario){

      localStorage.clear();

      return this.http.post(AppConstants.urlLogin, JSON.stringify(usuario))
      .subscribe( data => {
      
          // token
          var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
          localStorage.setItem("token", token);

          console.info( localStorage.getItem("token") );

          // redireciona para home
          this.router.navigate(['home'])
          

      }, error => {// Erro

        alert("Acesso negado")
      })


  }

}
