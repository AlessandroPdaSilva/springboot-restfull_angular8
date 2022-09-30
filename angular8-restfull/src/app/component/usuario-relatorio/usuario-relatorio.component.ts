import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NgbDateParserFormatter, NgbDateStruct, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioRelatorio } from 'src/app/model/usuarioRelatorio';
import { UsuarioService } from 'src/app/service/usuario.service';




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
              return date ? validarDia(date.day) + this.DELIMITER + validarDia(date.month) + this.DELIMITER + date.year : null;
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
  selector: 'app-usuario-relatorio',
  templateUrl: './usuario-relatorio.component.html',
  styleUrls: ['./usuario-relatorio.component.css'],
  providers: [{provide: NgbDateParserFormatter, useClass:FormataData},
              {provide:NgbDateAdapter, useClass:FormatDateAdapter}]
})
export class UsuarioRelatorioComponent implements OnInit {

  usuarioRelatorio = new UsuarioRelatorio();

  constructor(private usuarioService: UsuarioService) { }
  
  // INIT 
  ngOnInit() { }

  imprimeRelatorio(){
    console.log(this.usuarioRelatorio)

    this.usuarioService.downloadPdfRelatorioParam(this.usuarioRelatorio);
    
  }
  
}
