import { DatePipe, formatDate, getLocaleDateTimeFormat, Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { sequenceEqual } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Agenda } from '../model/Agenda';
import { Cliente } from '../model/Cliente';
import { Clinica } from '../model/Clinica';
import { Pet } from '../model/Pet';
import { Servico } from '../model/Servico';
import { ClienteService } from '../service/cliente.service';
import { ClinicaService } from '../service/clinica.service';

@Component({
  selector: 'app-cli-criaragendamento',
  templateUrl: './cli-criaragendamento.component.html',
  styleUrls: ['./cli-criaragendamento.component.css']
})
export class CliCriaragendamentoComponent implements OnInit {

  cli: Cliente = new Cliente()
  clinica: Clinica = new Clinica()
  agenda: Agenda = new Agenda()

    data: number
    hora: number
    listaServico: Servico[]
    listaPet: Pet[]
    idClient = environment.id
    nome = environment.nome
    imagem = environment.imagem
    token = environment.token
    idClinica = environment.clinicaId


  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private clinicaService: ClinicaService
  ) { }

  ngOnInit(){
    if(environment.token == ''){
    alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/sign-in'])
    }
    this.clienteService.refreshToken()
    this.clinicaById()
    this.clienteById()
   }

   clinicaById(){
    this.clinicaService.getByIdClinica(this.idClinica).subscribe((resp: Clinica) =>{
      this.clinica = resp

      this.listaServico = this.clinica.servicoClinica
    })
   }
   clienteById(){
    this.clienteService.getClienteById(this.idClient).subscribe((resp: Cliente) =>{
      this.cli = resp
      this.listaPet = this.cli.pet
    })
   }

  dataChange(event: any){
    this.data = event.target.value
  }
  horaChange(event: any){
    this.hora = event.target.value
  }
   criarAgendamento(){
    let dataHora: string  = `${this.data} ${this.hora}`
    console.log(dataHora)
    
    this.agenda.horario = dataHora
    this.agenda.petID
    this.agenda.servicoID
    this.agenda.clienteAgenda = this.cli
    this.agenda.clinicaAgenda = this.clinica
    this.clienteService.agendamento(this.agenda).subscribe((resp: Agenda)=>{
      this.agenda =resp
    alert('Agendamento feito com sucesso!')
      this.router.navigate(['/cli-agendamentos'])
    })
   }


}
