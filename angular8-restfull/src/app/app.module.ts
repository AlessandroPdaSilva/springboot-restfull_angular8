import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';// Ativando Forms do angular
import { HttpClientModule } from '@angular/common/http';// Requisicoes Ajax
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';// Rotas do angular
import {ModuleWithProviders} from '@angular/core';// Rotas do angular

import { LoginComponent } from './login/login.component';
import { HttpInterceptorModule } from './service/header-interceptor.service';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioAddComponent } from './component/usuario-add/usuario-add.component';
import { GuardiaoGuard } from './service/guardiao.guard';
import {NgxMaskModule, IConfig} from 'ngx-mask';// Mascara de input
import { NgxPaginationModule } from 'ngx-pagination';// Paginação
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



// Rotas URLs
export const appRouters: Routes = [

  {path : 'home', component : HomeComponent, canActivate:[GuardiaoGuard] },
  {path: 'login', component: LoginComponent },
  {path: '', component: LoginComponent },
  {path: 'usuarioList', component: UsuarioComponent, canActivate:[GuardiaoGuard] },
  {path: 'usuarioAdd', component: UsuarioAddComponent, canActivate:[GuardiaoGuard] },
  {path: 'usuarioAdd/:id', component: UsuarioAddComponent,  canActivate:[GuardiaoGuard] }
];


export const routes : ModuleWithProviders<any> = RouterModule.forRoot(appRouters);

export const optionsMask : Partial<IConfig> | (() => Partial<IConfig>) = {};

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
    HttpInterceptorModule,
    NgxMaskModule.forRoot(optionsMask),
    NgxPaginationModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
