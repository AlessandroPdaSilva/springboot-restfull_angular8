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

  pagina: number = 1; 
  total: number = 1;
  listaUsuario:any;
  campoPesquisa= new String;

  constructor(private usuarioService: UsuarioService){}

  

  // INIT
  ngOnInit() {

    this.listarUsuario()
    
  }

  // LISTA USUARIO
  listarUsuario(){
    this.usuarioService.listaUsuarioPage(this.pagina - 1).subscribe(data =>{
      
      this.listaUsuario = data.content;
      this.total = data.totalElements;
      console.info(data)

    });
  }

  // LISTA USUARIO PAGINACAO
  listarUsuarioPaginacao(pagina: number){

    this.usuarioService.listaUsuarioPage(this.pagina - 1).subscribe(data =>{
      
      this.listaUsuario = data.content;
      this.total = data.totalElements;
      console.info(data)

    });
    console.info("Página : " + pagina);
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

    if(this.campoPesquisa == ''){
      this.listarUsuario()
    }else{

      this.usuarioService.consultaUsuarioByNome(this.campoPesquisa).subscribe(data =>{

        this.listaUsuario = data;
  
      });
      
    }

    
  }

  // IMPRIME RELATORIO
  imprimeRelatorio(){
    return this.usuarioService.downloadPdfRelatorio();
  }

  


}
