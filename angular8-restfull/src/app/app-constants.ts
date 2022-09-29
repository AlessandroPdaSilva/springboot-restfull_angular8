export class AppConstants {

	// URL
	public static get urlBase(): string {return "http://localhost:8080/"}

	// URL login
	public static get urlLogin(): string {return this.urlBase + "login"}

	// URL Usuario
	public static get urlUsuario(): string {return this.urlBase + "usuario/"}

	// URL Profissao
	public static get urlProfissao(): string {return this.urlBase + "profissao/"}

	// URL Recuperar Conta
	public static get urlRecuperaConta(): string {return this.urlBase + "recuperaconta/"}

	// URL Relatorio
	public static get urlRelatorio(): string {return this.urlUsuario + "relatorio/"}

}
