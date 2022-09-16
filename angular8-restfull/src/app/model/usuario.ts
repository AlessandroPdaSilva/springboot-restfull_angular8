import { Telefone } from './telefone';

export class Usuario {

	id: Number;
	login: String;
	nome: String;
	senha: String;

	listaTelefone: Array<Telefone>;
}
