import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';


@Injectable({
  providedIn: 'root'
})

// DAO
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  fazerLogin(usuario){

    return this.http.post(AppConstants.urlLogin, JSON.stringify(usuario))
    .subscribe( data => {
     

        var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

        localStorage.setItem("token", token);

        //console.info( localStorage.getItem("token") );


    }, error => {

      alert("Acesso negado")
    })


  }

}
