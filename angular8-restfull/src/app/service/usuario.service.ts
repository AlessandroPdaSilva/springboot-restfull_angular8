import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  // LISTA USUARIOS
  listaUsuario(): Observable<any> {
    return this.http.get<any>(AppConstants.urlUsuario)
  }

  // LISTA USUARIOS PAGINACAO
  listaUsuarioPage(pagina: number): Observable<any> {
    return this.http.get<any>(AppConstants.urlUsuario + 'page/'+ pagina)
  }

  // DELETAR USUARIO
  deletarUsuario(id: Number): Observable<any> {
    return this.http.delete(AppConstants.urlUsuario + id, {responseType: 'text'})

  }

  // CONSULTA USUARIO POR NOME
  consultaUsuarioByNome(nome: String): Observable<any> {
    return this.http.get<any>(AppConstants.urlUsuario+'consultaByNome/'+nome)
  }

  // CONSULTA USUARIO POR ID
  consultaUsuarioById(id: Number): Observable<any> {
    return this.http.get<any>(AppConstants.urlUsuario+ id)
  }

  // SALVAR USUARIO
  salvarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<any>(AppConstants.urlUsuario,usuario)
  }

  // EDITAR USUARIO
  editarUsuario(usuario: Usuario): Observable<any> {
    return this.http.put<any>(AppConstants.urlUsuario,usuario)
  }

  // USUARIO AUTENTICADO
  usuarioAutenticado(){
    if(localStorage.getItem('token')!= null){
      return true;
    }else{
      return false;
    }
  }

  // DELETAR TELEFONE
  deletarTelefone(id: Number): Observable<any> {
    return this.http.delete(AppConstants.urlUsuario + "telefone/" + id, {responseType: 'text'});
  }

  // LISTA PROFISSAO
  listarProfissao(): Observable<any> {
    return this.http.get<any>(AppConstants.urlProfissao)
  }

  downloadPdfRelatorio(){
    return this.http.get(AppConstants.urlRelatorio, {responseType: 'text'}).subscribe(data => {
      //document.querySelector('iframe').src = data;
      window.open(data)
    })
  }

}
