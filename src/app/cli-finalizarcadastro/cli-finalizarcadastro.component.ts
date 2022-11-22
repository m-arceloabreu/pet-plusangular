import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Cliente } from '../model/Cliente';
import { AuthService } from '../service/auth.service';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cli-finalizarcadastro',
  templateUrl: './cli-finalizarcadastro.component.html',
  styleUrls: ['./cli-finalizarcadastro.component.css']
})
export class CliFinalizarcadastroComponent implements OnInit {

  cli: Cliente = new Cliente()

  token = environment.token
  idClient = environment.id
  nome = environment.nome
  email = environment.email
  imagem = environment.imagem

  senha: string
  cpf: string
  telefone: string
  bairro: string
  logradouro: string
  numero: number
  cidade: string
  uf: string

  constructor(
    private router: Router,
    private authService: AuthService,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
 
      if(environment.token == ''){
        alert('Sua sessão expirou, faça o login novamente!')
        this.router.navigate(['/sign-in'])
      }
      console.log(this.token)
      this.clienteService.refreshToken()
      this.buscarClienteById()
    }
    nomeChange(event: any){
      this.nome = event.target.value
    }
    senhaChange(event: any){
      this.senha = event.target.value
    }
    telefoneChange(event: any){
      this.telefone = event.target.value
    }
    imagemChange(event: any){
      this.imagem = event.target.value
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

    buscarClienteById(){
      this.clienteService.getClienteById(this.idClient).subscribe((resp: Cliente)=>{
        this.cli = resp
        this.logradouro = this.cli.logradouro
        this.bairro = this.cli.bairro
        this.telefone = this.cli.telefone
        this.numero = this.cli.numero
        this.cidade = this.cli.cidade
        this.uf = this.cli.uf
      })
    }
    editarCliente(){
      this.cli.idClient = this.idClient
      this.cli.nome = this.nome
      this.cli.cpf = this.cpf
      this.cli.imagem = this.imagem
      this.cli.senha = this.senha
      this.cli.telefone = this.telefone
      this.cli.logradouro = this.logradouro
      this.cli.numero = this.numero
      this.cli.bairro = this.bairro
      this.cli.cidade = this.cidade
      this.cli.uf = this.uf 

      console.log(this.cli)

      this.clienteService.atualizar(this.cli).subscribe((resp: Cliente)=>{
        this.cli = resp
        environment.imagem = this.cli.imagem

        alert("Alterações feitas com sucesso! Faça o login novamente!")
        this.router.navigate(["/sign-in"])
        environment.token = ''
        environment.nome = ''
        environment.imagem = ''
        environment.id = 0
        

      })
  
    }

  }


