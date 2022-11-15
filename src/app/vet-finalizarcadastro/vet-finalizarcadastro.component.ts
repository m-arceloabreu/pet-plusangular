import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Veterinario } from '../model/Veterinario';
import { VetLogin } from '../model/VetLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-vet-finalizarcadastro',
  templateUrl: './vet-finalizarcadastro.component.html',
  styleUrls: ['./vet-finalizarcadastro.component.css']
})
export class VetFinalizarcadastroComponent implements OnInit {

  vet: Veterinario = new Veterinario()


  token = environment.token
  idVet = environment.idVeterinario 
  nome = environment.nome
  email = environment.email;
  imagem = environment.imagem;

  senha: string
  cpf: string;
  rg: string;
  crmv: number
  telefone: string
  bairro: string;
  logradouro: string;
  numero: number;
  cidade: string
  uf: string

  


  constructor(
    private router: Router,
    private authService: AuthService) 
    {
   }


  ngOnInit() {
    if(environment.token == ''){
      alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/sign-in'])
    }
    console.log(this.token)
    this.authService.refreshToken()
    this.buscarIdVeterinario()
    
  }
  nomeChange(event: any){
    this.nome = event.target.value
  }
  rgChange(event: any){
    this.rg = event.target.value
  }
  imagemChange(event: any){
    this.imagem = event.target.value
  }
  crmvChange(event: any){
    this.crmv = event.target.value
  }
  senhaChange(event: any){
    this.senha = event.target.value
  }
  telefoneChange(event: any){
    this.telefone = event.target.value
  }
  logradouroChange(event: any){
    this.logradouro = event.target.value
  }
  numeroChange(event: any){
    this.numero = event.target.value
  }
  bairroChange(event: any){
    this.bairro = event.target.value
  }
  cidadeChange(event: any){
    this.cidade = event.target.value
  }
  ufChange(event: any){
    this.uf = event.target.value
  }
  buscarNomeUsuario(){
    
    this.authService.getByNomeVeterinario(this.nome).subscribe((resp: Veterinario)=>{
      this.vet = resp
      this.nome = this.vet.nome
      console.log(this.vet)
    })
  }
  buscarIdVeterinario(){
    this.authService.getVetById(this.idVet, this.token).subscribe((resp: Veterinario)=>{
      this.vet = resp
      this.nome = this.vet.nome
      this.rg = this.vet.rg
      this.crmv = this.vet.crmv
      console.log(this.vet.senha)
    })
  }

  editarVeterinario(){
    
    this.vet.idVeterinario = this.idVet
    this.vet.nome = this.nome
    this.vet.cpf = this.cpf
    this.vet.rg = this.rg
    this.vet.imagem = this.imagem
    this.vet.crmv  = this.crmv
    this.vet.senha = this.senha
    this.vet.telefone = this.telefone
    this.vet.logradouro = this.logradouro
    this.vet.numero = this.numero
    this.vet.bairro = this.bairro
    this.vet.cidade = this.cidade
    this.vet.uf = this.uf 


    console.log(this.vet)

    this.authService.atualizar(this.vet).subscribe((resp: Veterinario) =>{
      this.vet = resp
      environment.imagem = this.vet.imagem

      alert("Alterações feitas com sucesso! Faça o login novamente!")
      this.router.navigate(['/sign-in'])
      environment.token = ''
      environment.nome = ''
      environment.imagem = ''
      environment.idVeterinario = 0
    })
  }
}