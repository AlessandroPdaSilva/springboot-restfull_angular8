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


// Rotas URLs
export const appRouters: Routes = [

  {path : 'home', component : HomeComponent},
  {path: 'login', component: LoginComponent },
  {path: '', component: LoginComponent },
  {path: 'usuarioList', component: UsuarioComponent}
];


export const routes : ModuleWithProviders = RouterModule.forRoot(appRouters);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent
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
