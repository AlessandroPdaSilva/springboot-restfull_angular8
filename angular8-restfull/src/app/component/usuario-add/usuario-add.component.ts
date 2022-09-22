import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { Telefone } from 'src/app/model/telefone';
import { NgbDateParserFormatter, NgbDateStruct, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { Profissao } from 'src/app/model/profissao';



          //  Formatador de data
          @Injectable()
          export class FormatDateAdapter extends NgbDateAdapter<string> {

            readonly DELIMITER = '/';

            fromModel(value: string | null): NgbDateStruct | null {
              if (value) {
                let date = value.split(this.DELIMITER);
                return {
                  day: parseInt(date[0], 10),
                  month: parseInt(date[1], 10),
                  year: parseInt(date[2], 10)
                };
              }
              return null;
            }


            toModel(date: NgbDateStruct | null): string | null {
              return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
            }


          }

          //  Formatador de data
          @Injectable()
          export class FormataData extends NgbDateParserFormatter {

            readonly DELIMITER = '/'; // 18/10/1987



            parse(value: string): NgbDateStruct | null {

              if (value) {
                let date = value.split(this.DELIMITER);
                return {
                  day: parseInt(date[0], 10),
                  month: parseInt(date[1], 10),
                  year: parseInt(date[2], 10)
                };
              }
              return null;
            }

            format(date: NgbDateStruct): string {

              return date ? validarDia(date.day) + this.DELIMITER + validarDia(date.month) + this.DELIMITER + date.year : '';
            }

            toModel(date: NgbDateStruct | null): string | null {
              return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
            }

          }

        // Formatador de data
        function validarDia(valor:number) {
          if (valor != null && valor <= 9) {
            return '0' + valor;
          } else {
            return valor;
          }
        }





@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css'],
  providers: [{provide: NgbDateParserFormatter, useClass:FormataData},
              {provide:NgbDateAdapter, useClass:FormatDateAdapter}]
})
export class UsuarioAddComponent implements OnInit {

  usuario= new Usuario();
  telefone = new Telefone();
  listaProfissao = new Array<Profissao>();

  constructor(private routeActive: ActivatedRoute, private usuarioService: UsuarioService) { }
  
  // INIT 
  ngOnInit() {

    
    let id = this.routeActive.snapshot.paramMap.get('id')
    
    if(id != null){

      // Carrega usuario
      this.usuarioService.consultaUsuarioById(parseInt(id)).subscribe(data=>{
        this.usuario = data;
        console.log(data)
      })
      
      console.log(id)
    }else{
      this.novoUsuario()
    }

    // Carrega Lista de Profissao
    this.usuarioService.listarProfissao().subscribe(data=>{
      this.listaProfissao = data;
      console.log(data)
    })

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
    this.telefone = new Telefone();
  }


  // ADD TELEFONE
  addTelefone(){
    if (this.usuario.listaTelefone === undefined) {
      this.usuario.listaTelefone = new Array<Telefone>();
    }

    this.usuario.listaTelefone.push(this.telefone);
    this.telefone = new Telefone();

  }


  // DELETAR TELEFONE
  deletarTelefone(idTelefone: Number, i: number){

    if (idTelefone == null) {
      this.usuario.listaTelefone.splice(i, 1);
      return;
    }


    if (idTelefone !== null && confirm("Tem certeza que deseja remover?")) {

        this.usuarioService.deletarTelefone(idTelefone).subscribe(data=>{
          this.usuario.listaTelefone.splice(i, 1);
        })

    }    
    
  }

}
