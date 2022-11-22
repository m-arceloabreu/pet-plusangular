import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Agenda } from '../model/Agenda';
import { Cliente } from '../model/Cliente';
import { Pet } from '../model/Pet';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cli-agendamentos',
  templateUrl: './cli-agendamentos.component.html',
  styleUrls: ['./cli-agendamentos.component.css']
})
export class CliAgendamentosComponent implements OnInit {

  pet:Pet = new Pet()
  agenda: Agenda = new Agenda()
  cli: Cliente = new Cliente()

  idCliente = environment.id
  nome = environment.nome
  imagem = environment.imagem
  token = environment.token

  listaAgenda: Agenda[]



  constructor(
    private router: Router,
    private clienteService: ClienteService,
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/sign-in'])
    }
    this.clienteService.refreshToken()
    this.buscarAgendaCliente()
  
  }

  buscarAgendaCliente(){
    this.clienteService.getClienteById(this.idCliente).subscribe((resp: Cliente)=>{
      this.cli = resp
      this.listaAgenda = this.cli.agenda
      console.log(this.listaAgenda[1].servicoID)
      console.log(this.listaAgenda[1].clinicaAgenda.servicoClinica[1].tipoServico)
    })
  }

}
