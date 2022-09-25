import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import {Router} from '@angular/router';
import { Usuario } from '../model/usuario';


@Injectable({
  providedIn: 'root'
})

// DAO
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  // FAZER LOGIN
  fazerLogin(usuario: any){

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

  // RECUPERAR CONTA (esqueci senha)
  recuperarConta(login: any){

    let usuario = new Usuario();

    usuario.login = login;

    return this.http.post(AppConstants.urlRecuperaConta, usuario)
    .subscribe( data => {

        alert(JSON.parse(JSON.stringify(data)).error)

    }, error => {// Erro

      alert("Erro ao recuperar login")
    })


}

}
