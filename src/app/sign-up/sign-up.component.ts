import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../model/Cliente';
import { Veterinario } from '../model/Veterinario';
import { AuthService } from '../service/auth.service';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  vet: Veterinario = new Veterinario()
  cli: Cliente = new Cliente()
  confirmarSenha: string

  tipoUsuario: string
  email: string
  nome: string
  senha: string
  cpf: string


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }
  getNome(event: any) {
    this.nome = event.target.value
  }
  getEmail(event: any) {
    this.email = event.target.value
  }
  getSenha(event: any) {
    this.senha = event.target.value
  }
  getCpf(event: any) {
    this.cpf = event.target.value
  }
  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }
  getTipousuario(event: any) {
    this.tipoUsuario = event.target.value
  }

  cadastrar() {
    if (this.senha != this.confirmarSenha) {
      alert("As senhas estão incorretas! ⛔ ")
    }
    else if(this.nome == '' || this.email == '' || this.senha == '' || this.cpf == '')
    {
      alert("Favor preencher TODOS os campos! ⛔ ")
    }
    else 
    {
        if (this.tipoUsuario == "cliente") {
          this.cli.nome = this.nome
          this.cli.email = this.email
          this.cli.senha = this.senha
          this.cli.cpf = this.cpf
          console.log(this.cli)
          
          this.authService.cadastrarCli(this.cli).subscribe({
            next: (resp: Cliente) =>{
              this.cli = resp
              alert("Cliente Cadastrado com sucesso ✅")
              this.router.navigate(['/sign-in'])
            }
          })

        }
        else if (this.tipoUsuario == "veterinario") {
          this.vet.nome = this.nome
          this.vet.email = this.email
          this.vet.senha = this.senha
          this.vet.cpf = this.cpf
          console.log(this.vet)

          this.authService.cadastrarVet(this.vet).subscribe({
            next: (resp: Veterinario) =>{
              this.vet = resp
              alert("Veterinario Cadastrado com sucesso ✅")
              this.router.navigate(['/sign-in'])
            }
          })
        }
    }
  }

}
