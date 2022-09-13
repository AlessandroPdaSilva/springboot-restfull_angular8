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

  constructor(private usuarioService: UsuarioService){}

  ngOnInit() {
    this.usuarioService.listaUsuario().subscribe(data =>{

      this.listaUsuario = data;

    });

    
  }

}
