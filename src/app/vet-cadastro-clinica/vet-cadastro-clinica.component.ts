import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Clinica } from '../model/Clinica';
import { Veterinario } from '../model/Veterinario';
import { AuthService } from '../service/auth.service';
import { ClinicaService } from '../service/clinica.service';

@Component({
  selector: 'app-vet-cadastro-clinica',
  templateUrl: './vet-cadastro-clinica.component.html',
  styleUrls: ['./vet-cadastro-clinica.component.css']
})
export class VetCadastroClinicaComponent implements OnInit {

  vet: Veterinario = new Veterinario();
  clinica: Clinica = new Clinica();
  
  token = environment.token
  idVet = environment.id 
  nome = environment.nome
  email = environment.email;
  imagem = environment.imagem;

  constructor(
    private router: Router,
    private clinicaService: ClinicaService,
    private authService: AuthService) { }

  ngOnInit(){
    if (environment.token == '') {
      alert('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/login'])
    }
    this.clinicaService.refreshToken()
    this.buscarIdVeterinario()
    console.log(environment.token)
    console.log(this.vet)
  }
  buscarIdVeterinario(){
    this.authService.getVetById(this.idVet, this.token).subscribe((resp: Veterinario)=>{
      this.vet = resp
    })
  }

  cadastroClinica() {
    this.clinica.veterinario = this.vet
    this.clinicaService.postClinica(this.clinica).subscribe((resp: Clinica) => {
      this.clinica = resp
      alert('Clinica cadastradada com sucesso!')
      this.router.navigate(['/vet-gerenciarclinica'])
    })
  }

}
