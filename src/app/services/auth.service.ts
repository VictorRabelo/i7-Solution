import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  /**
  * Login
  * @param email
  * @param senha
  */
  login(email: string, senha: string): Promise<any> {
    return this.http.post(`${environment.apiUrl}/centaurus/login`, { email, senha }).toPromise();
  }

  getProfile(): Promise<any[]> {
    const uuid = localStorage.getItem(environment.uuid);
    return this.http.get<any[]>(`${this.baseUrl}/centaurus/usuarios`, { params: { id: uuid} }).toPromise();
  }

  alterSenha(dados) {
    return this.http.post<any>(`${this.baseUrl}/oauth/alter-password`, dados);
  }
}
