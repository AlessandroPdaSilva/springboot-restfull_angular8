import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8-restfull';

  usuario = {login: '',senha: ''}

  public login(){
    console.log("Login: "+this.usuario.login+ "\n senha: "+ this.usuario.senha)
  }


}
