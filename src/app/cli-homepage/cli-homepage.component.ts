import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Cliente } from '../model/Cliente';
import { Clinica } from '../model/Clinica';
import { Servico } from '../model/Servico';
import { AuthService } from '../service/auth.service';
import { ClinicaService } from '../service/clinica.service';

@Component({
  selector: 'app-cli-homepage', 
  templateUrl: './cli-homepage.component.html',
  styleUrls: ['./cli-homepage.component.css']
})
export class CliHomepageComponent implements OnInit {

    cli: Cliente = new Cliente()
    clinica: Clinica = new Clinica()

    listaClinica: Clinica[]

    idClient = environment.id
    nome = environment.nome
    imagem = environment.imagem
    token = environment.token
  constructor(
    private router: Router,
    private authService: AuthService,
    private clinicaService: ClinicaService
  ) {
    
   }

  ngOnInit(){
    if(environment.token ==''){
      alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/sign-in'])
    }

    console.log(this.token)
    this.clinicaService.refreshToken()
    this.findAllClinicas()
    console.log(this.idClient)
  }

  findAllClinicas(){
    this.clinicaService.getAllClinica().subscribe((resp: Clinica[])=>{
      this.listaClinica = resp
    })
  }

  btnFazerAgendamento(id: number){
    environment.clinicaId = id

    console.log("Clinica Id: ",environment.clinicaId)

    this.router.navigate(['/cli-criaragendamento'])
  }

}
