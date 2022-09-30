import { Injectable, NgModule } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { ngModuleJitUrl } from '@angular/compiler';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// Interceptador que request(POST,GET,PUT e etc)
export class HeaderInterceptorService implements HttpInterceptor{

  constructor() { }

  // INTERCEPTOR
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // Sempre envia Token
    if(localStorage.getItem('token') != null){

      const token = 'Bearer '+ localStorage.getItem('token');

      const tokenVar = req.clone({
        headers: req.headers.set('Authorization',token)
      })

      return next.handle(tokenVar).pipe(tap( 

        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse && (event.status === 200 || event.status === 201)) {
            console.info('Sucesso na opera��o');
          }
        }

      ),catchError(this.processaError));// Retorna para cabe�alho

    }else{
      return next.handle(req).pipe(catchError(this.processaError));// Retorna para cabe�alho
    }
    
  }


  
  // PROCESSA ERRO
  processaError(error: HttpErrorResponse) {
    let errorMessage = 'Erro desconhecido';

    if (error.error instanceof ErrorEvent) {
      console.error(error.error);
      errorMessage = 'Error: ' + error.error.error;
    } else {
        
      if(error.status == 403){
        errorMessage = "Acesso negado, faça o login novamente !!";
      }else{
        errorMessage = 'C�digo: ' + error.error.code + '\nMensagem: ' + error.error.error;
      }

    }

    alert(errorMessage)
    return throwError(errorMessage);
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


