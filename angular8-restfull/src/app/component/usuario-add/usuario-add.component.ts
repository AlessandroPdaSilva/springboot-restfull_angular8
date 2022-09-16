import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/model/usuario';


@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  usuario: Usuario;

  constructor(private routeActive: ActivatedRoute, private usuarioService: UsuarioService) { }

  ngOnInit() {

    
    let id = this.routeActive.snapshot.paramMap.get('id')
    
    if(id != null){

      // Carrega usuario
      this.usuarioService.consultaUsuarioById(parseInt(id)).subscribe(data=>{
        this.usuario = data;
      })
      
      console.log(id)
    }else{
      this.novoUsuario()
    }

  }

  // SALVAR USUARIO
  salvarUsuario(){

    if(this.usuario.id == null){// salvar

      this.usuarioService.salvarUsuario(this.usuario).subscribe(data=>{
        this.novoUsuario()
        console.info('Salvo com sucesso: '+data)
      })
    }else{// editar
      this.usuarioService.editarUsuario(this.usuario).subscribe(data=>{
        this.novoUsuario()
        console.info('Editado com sucesso: '+data)
      })
    }



  }

  // NOVO USUARIO
  novoUsuario(){
    this.usuario = new Usuario();
  }

}
