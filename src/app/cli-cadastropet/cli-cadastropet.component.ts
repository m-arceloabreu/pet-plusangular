import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Cliente } from '../model/Cliente';
import { Pet } from '../model/Pet';
import { ClienteService } from '../service/cliente.service';
import { PetSerice } from '../service/pet.service';

@Component({
  selector: 'app-cli-cadastropet',
  templateUrl: './cli-cadastropet.component.html',
  styleUrls: ['./cli-cadastropet.component.css']
})
export class CliCadastropetComponent implements OnInit {

  cli: Cliente = new Cliente()
  pet: Pet = new Pet();

  token = environment.token
  idClient = environment.id
  nome = environment.nome
  email = environment.email
  imagem = environment.imagem


  constructor(
    private router: Router,
    private petService: PetSerice,
    private clienteService: ClienteService
  ) { }

  ngOnInit(){
    if (environment.token == '') {
      alert('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/login'])
    }
    this.petService.refreshToken()
    this.buscarClienteById()
  }
  buscarClienteById(){
    this.clienteService.getClienteById(this.idClient).subscribe((resp: Cliente)=>{
      this.cli = resp
    })
  }

  cadastroPet(){
    this.pet.clientePet = this.cli
    this.petService.postPet(this.pet).subscribe((resp: Pet)=>{
      this.pet = resp
      alert('Pet Registrado com sucesso!')
      this.router.navigate(['/cli-pet'])
    })
  }
}
