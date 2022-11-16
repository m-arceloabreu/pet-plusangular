import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Agenda } from '../model/Agenda';
import { Cliente } from '../model/Cliente';
import { Clinica } from '../model/Clinica';
import { Pet } from '../model/Pet';
import { Servico } from '../model/Servico';
import { Veterinario } from '../model/Veterinario';
import { AuthService } from '../service/auth.service';
import { ClinicaService } from '../service/clinica.service';
import { ServicosService } from '../service/servicos.service';

@Component({
  selector: 'app-vet-agendamentos',
  templateUrl: './vet-agendamentos.component.html',
  styleUrls: ['./vet-agendamentos.component.css']
})
export class VetAgendamentosComponent implements OnInit {

  agenda: Agenda = new Agenda();
  pet: Pet = new Pet();
  clinica: Clinica = new Clinica();
  vet: Veterinario = new Veterinario();
  cliente: Cliente = new Cliente();
  serv: Servico = new Servico();

  nomeCliente:String

  listaAgenda: Agenda[]
  listaClinica: Clinica[]
  listaCliente: Cliente[] = []

  idVeterinario = environment.idVeterinario
  nome = environment.nome
  imagem = environment.imagem
  token = environment.token


   nomePet: String
   idade: number

  constructor(
    private router: Router,
    private clinicaService: ClinicaService,
    private servicoService: ServicosService,
    private authService: AuthService
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/sign-in'])
    }
    this.authService.refreshToken()
    this.buscarClinicaVeterinario()
  }
  buscarClinicaVeterinario(){
    this.authService.getVetById(this.idVeterinario, this.token).subscribe((resp: Veterinario)=>{
      this.vet = resp
      this.listaClinica =this.vet.clinicaVeterinario
      this.clinica = this.listaClinica[0]
      this.listaAgenda = this.clinica.agenda
      this.cliente = this.agenda.clienteAgenda
    })
  }




}
