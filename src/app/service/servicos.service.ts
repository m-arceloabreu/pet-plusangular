import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Clinica } from "../model/Clinica";
import { Servico } from "../model/Servico";

@Injectable({
    providedIn: 'root'
  })
  export class ServicosService {
  
    constructor( private http: HttpClient) { }
  
    token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
    refreshToken() {
      this.token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }
    }

    postServicos(servicos: Servico): Observable<Servico>{
        return this.http.post<Servico>('http://localhost:8080/servico/',servicos, this.token)
    }

    getAllServicos():Observable<Servico[]>{
      return this.http.get<Servico[]>('http://localhost:8080/servico', this.token)
    }
    

    
}