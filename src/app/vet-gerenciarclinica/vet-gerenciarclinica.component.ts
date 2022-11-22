import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Clinica } from '../model/Clinica';
import { Veterinario } from '../model/Veterinario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-vet-gerenciarclinica',
  templateUrl: './vet-gerenciarclinica.component.html',
  styleUrls: ['./vet-gerenciarclinica.component.css']
})
export class VetGerenciarclinicaComponent implements OnInit {
  vet: Veterinario = new Veterinario()
  clinica: Clinica = new Clinica()
  listaClinica: Clinica[]

  idVeterinario = environment.id
  nome = environment.nome;
  imagem = environment.imagem
  token = environment.token

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/sign-in'])
    }
    console.log(this.token)
    this.authService.refreshToken()

    this.buscarClinicaVeterinario()
    
  }

  buscarClinicaVeterinario(){
    this.authService.getVetById(this.idVeterinario, this.token).subscribe((resp: Veterinario)=>{
      this.vet = resp
      this.listaClinica =this.vet.clinicaVeterinario
      this.clinica = this.listaClinica[0]
    })
  }





}
