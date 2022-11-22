import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Clinica } from '../model/Clinica';
import { Servico } from '../model/Servico';
import { Veterinario } from '../model/Veterinario';
import { AuthService } from '../service/auth.service';
import { ClinicaService } from '../service/clinica.service';
import { ServicosService } from '../service/servicos.service';

@Component({
  selector: 'app-vet-servicos',
  templateUrl: './vet-servicos.component.html',
  styleUrls: ['./vet-servicos.component.css']
})
export class VetServicosComponent implements OnInit {

  serv: Servico = new Servico();
  clinica: Clinica = new Clinica();
  vet: Veterinario = new Veterinario();

  listaClinica: Clinica[]
  listaServicos: Servico[]
  idVeterinario = environment.id
  nome = environment.nome
  imagem = environment.imagem
  token = environment.token

  nomeServico: String;

  constructor(
    private router: Router,
    private servicoService: ServicosService,
    private clinicaService: ClinicaService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/sign-in'])
    }
  
    this.servicoService.refreshToken()
    console.log(this.token)
    this.buscarClinicaVeterinario()
  }
  buscarClinicaVeterinario(){
    this.authService.getVetById(this.idVeterinario, this.token).subscribe((resp: Veterinario)=>{
      this.vet = resp
      this.listaClinica =this.vet.clinicaVeterinario
      this.clinica = this.listaClinica[0]
    })
  }
  cadastrarServicos(){
    this.serv.clinicaServico = this.clinica
    this.servicoService.postServicos(this.serv).subscribe((resp: Servico)=>{
      this.serv = resp
      alert('Serviço Registrado com sucesso!')
      this.router.navigate(['/vet-gerenciarclinica']);
    })
  }


}
