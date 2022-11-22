import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Clinica } from "../model/Clinica";
import { Pet } from "../model/Pet";

@Injectable({
    providedIn: 'root'
  })

export class PetSerice {
  constructor( private http: HttpClient) { }
  
    token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
    refreshToken() {
      this.token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }
    }
  
    getAllPet(): Observable<Pet[]>{
      return this.http.get<Pet[]>('http://localhost:8080/clinica', this.token)
    }
  
    
  
    postPet(pet: Pet): Observable<Pet>{ 
      return this.http.post<Pet>('http://localhost:8080/pet/', pet, this.token)
    }
    deletePet(id: number) {
      return this.http.delete<Pet>(`http://localhost:8080/pet/${id}`, this.token)
    }

  }