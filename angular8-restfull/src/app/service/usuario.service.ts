import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  // LISTA USUARIOS
  listaUsuario(): Observable<any> {
    return this.http.get<any>(AppConstants.urlUsuario)
  }

  // DELETAR USUARIO
  deletarUsuario(id: Number): Observable<any> {
    return this.http.delete(AppConstants.urlUsuario +'/'+ id, {responseType: 'text'})

  }

  // CONSULTA USUARIO POR NOME
  consultaUsuarioByNome(nome: String): Observable<any> {
    return this.http.get<any>(AppConstants.urlUsuario+'/consultaByNome/'+nome)
  }

}
