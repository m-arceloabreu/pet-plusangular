import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { VetLogin } from '../model/VetLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  vetLogin: VetLogin = new VetLogin()

  constructor(
    private auth: AuthService,
    private route: Router) {
    
   }

  ngOnInit() {
    window.scroll(0, 0)
  }

  entrar() {
    this.auth.entrar(this.vetLogin).subscribe({
      next: (resp: VetLogin) => {
        this.vetLogin = resp
        environment.token = this.vetLogin.token
        environment.nome = this.vetLogin.nome
        environment.idVeterinario = this.vetLogin.idVeterinario
        this.route.navigate(["/vet-homepage"])
      },
      error: erro =>{
        if(erro.status ==401){
          alert("Usuario ou senhas estão incorretos, tente novamwente!")
        }
      },
    });
  }
  

}
