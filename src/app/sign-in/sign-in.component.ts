import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Veterinario } from '../model/Veterinario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  vetLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private route: Router) {
    
   }

  ngOnInit() {
    window.scroll(0, 0)
  }

  entrar() {
    this.auth.entrar(this.vetLogin).subscribe({
      next: (resp: UsuarioLogin) => {
        this.vetLogin = resp
        environment.token = this.vetLogin.token
        environment.nome = this.vetLogin.nome
        environment.email = this.vetLogin.email
        environment.cpf = this.vetLogin.cpf
        environment.id = this.vetLogin.id
        environment.imagem = this.vetLogin.imagem

        if(this.vetLogin.tipo == "veterinario"){
        this.route.navigate(["/vet-homepage"])

        }
        else if(this.vetLogin.tipo == "cliente"){
          this.route.navigate(["/cli-homepage"])
        }
      },
      error: erro =>{
        if(erro.status ==401){
          alert("Usuario ou senhas estão incorretos, tente novamwente!")
        }
      },
    });
  }
  

}
