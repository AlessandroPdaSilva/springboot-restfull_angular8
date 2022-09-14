import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';// Ativando Forms do angular
import { HttpClientModule } from '@angular/common/http';// Requisicoes Ajax
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';// Rotas do angular
import {ModuleWithProviders} from '@angular/compiler/src/core';// Rotas do angular

import { LoginComponent } from './login/login.component';
import { HttpInterceptorModule } from './service/header-interceptor.service';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioAddComponent } from './component/usuario-add/usuario-add.component';


// Rotas URLs
export const appRouters: Routes = [

  {path : 'home', component : HomeComponent},
  {path: 'login', component: LoginComponent },
  {path: '', component: LoginComponent },
  {path: 'usuarioList', component: UsuarioComponent},
  {path: 'usuarioAdd', component: UsuarioAddComponent},
  {path: 'usuarioAdd/:id', component: UsuarioAddComponent}
];


export const routes : ModuleWithProviders = RouterModule.forRoot(appRouters);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioAddComponent
  ],
  imports: [// imports
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
