import { Injectable, NgModule } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ngModuleJitUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

// Interceptador que request(POST,GET,PUT e etc)
export class HeaderInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if(localStorage.getItem('token') != null){

      const token = 'Bearer '+ localStorage.getItem('token');

      const tokenVar = req.clone({
        headers: req.headers.set('Authorization',token)
      })

      // Retorna para cabeçalho
      return next.handle(tokenVar);

    }else{

      // Retorna para cabeçalho
      return next.handle(req);

    }
    
  }
  
}

@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:HeaderInterceptorService,
    multi:true,

  }]
})

export class HttpInterceptorModule{}


