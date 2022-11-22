import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Clinica } from "../model/Clinica";

@Injectable({
    providedIn: 'root'
  })
  export class ClinicaService {
  
    constructor( private http: HttpClient) { }
  
    token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
    refreshToken() {
      this.token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }
    }
  
    getAllClinica(): Observable<Clinica[]>{
      return this.http.get<Clinica[]>('http://localhost:8080/clinica', this.token)
    }
  
    getByIdClinica(id: Number): Observable<Clinica>{
      return this.http.get<Clinica>(`http://localhost:8080/clinica/id/${id}`, this.token)
    }
  
    postClinica(clinica: Clinica): Observable<Clinica>{ 
      return this.http.post<Clinica>('http://localhost:8080/clinica/', clinica, this.token)
    }
    deleteClinica(id: number) {
      return this.http.delete<Clinica>(`http://localhost:8080/clinica/${id}`, this.token)
    }

  }