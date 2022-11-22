import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Cliente } from '../model/Cliente';
import { Pet } from '../model/Pet';
import { ClienteService } from '../service/cliente.service';
import { PetSerice } from '../service/pet.service';

@Component({
  selector: 'app-cli-pet',
  templateUrl: './cli-pet.component.html',
  styleUrls: ['./cli-pet.component.css']
})
export class CliPetComponent implements OnInit {

  pet: Pet = new Pet()
  cli: Cliente = new Cliente()

  listaPet: Pet[]

  idClient = environment.id
  nome = environment.nome
  imagem = environment.imagem
  token = environment.token


  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private petService: PetSerice
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/sign-in'])
    }
  
    this.clienteService.refreshToken()
    console.log(this.token)
    this.buscarClienteById()
  }

  buscarClienteById(){
    this.clienteService.getClienteById(this.idClient).subscribe((resp: Cliente)=>{
      this.cli = resp

      this.listaPet = this.cli.pet
    })
  }
}
