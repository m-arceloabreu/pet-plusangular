import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Agenda } from '../model/Agenda';
import { Cliente } from '../model/Cliente';

@Injectable({
    providedIn: 'root'
})
export class ClienteService{

    constructor(private http: HttpClient) { }
      token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }
      refreshToken() {
      this.token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }
  }

  getClienteById(idClient: number): Observable<Cliente>{
    return this.http.get<Cliente>(`http://localhost:8080/cliente/id/${idClient}`, this.token)
  }

  atualizar(Cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>('http://localhost:8080/cliente/', Cliente, this.token)
  }

  agendamento(Agenda: Agenda): Observable<Agenda>{
    return this.http.post<Agenda>('http://localhost:8080/agenda', Agenda, this.token)
  }
}