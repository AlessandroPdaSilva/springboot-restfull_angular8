import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  listaUsuario: Observable<Usuario[]>;
  campoPesquisa: String;

  constructor(private usuarioService: UsuarioService){}

  

  // INIT
  ngOnInit() {

    this.listarUsuario()
    
  }

  // LISTA USUARIO
  listarUsuario(){
    this.usuarioService.listaUsuario().subscribe(data =>{
      this.listaUsuario = data;
    });
  }

  // DELETAR USUARIO
  deletarUsuario(id: Number){

    if (id !== null && confirm("Tem certeza que deseja remover?")) {
      
      this.usuarioService.deletarUsuario(id).subscribe(data =>{
      
        console.log(data)

        this.listarUsuario()
      });

    }

  }

  // CONSULTA USUARIO POR NOME
  consultaUsuarioByNome(){
    this.usuarioService.consultaUsuarioByNome(this.campoPesquisa).subscribe(data =>{

      this.listaUsuario = data;

    });
  }


}
