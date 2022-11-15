
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import{VetLogin} from '../model/VetLogin';
import{Veterinario} from '../model/Veterinario';



@Injectable({
    providedIn: 'root'
})
export class AuthService{

    constructor(private http: HttpClient) { }
      token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }
      refreshToken() {
      this.token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }
  }

  entrar(VetLogin: VetLogin): Observable<VetLogin>{
    return this.http.post<VetLogin>('http://localhost:8080/veterinario/logar', VetLogin)
  }
  cadastrar(Veterinario: Veterinario): Observable<Veterinario>{
    return this.http.post<Veterinario>('http://localhost:8080/veterinario/cadastrar', Veterinario)
  }

  atualizar(Veterinario: Veterinario): Observable<Veterinario>{
    return this.http.put<Veterinario>('http://localhost:8080/veterinario/', Veterinario, this.token)
  }

  getByNomeVeterinario(nome: string): Observable<Veterinario> {
    return this.http.get<Veterinario>(`http://localhost:8080/veterinario/${nome}`, this.token)
  }
  getVetById(idVeterinario: number, token2: string): Observable<Veterinario> {
    return this.http.get<Veterinario>(`http://localhost:8080/veterinario/id/${idVeterinario}`, this.token)
  }


  logado(){
    let ok: boolean = false

    if (environment.token != ''){
      ok = true
    }
    
    return ok
  }
}