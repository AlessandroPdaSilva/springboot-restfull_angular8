export class AppConstants {

	// URL
	public static get urlBase(): string {return "http://localhost:8080/"}

	// URL login
	public static get urlLogin(): string {return this.urlBase + "login"}

	// URL Usuario
	public static get urlUsuario(): string {return this.urlBase + "usuario/"}

}
