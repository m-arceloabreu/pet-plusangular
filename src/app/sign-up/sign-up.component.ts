import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veterinario } from '../model/Veterinario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  vet: Veterinario = new Veterinario()
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }
  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  cadastrar(){
    if(this.vet.senha != this.confirmarSenha){
      alert("As senhas estão incorretas!")
    }else {
      this.authService.cadastrar(this.vet).subscribe({
        next: (resp: Veterinario) => {
          this.vet = resp
          alert("Usuario cadastrado com sucesso! ✅")
          this.router.navigate(['/sign-in'])
          
        },
        error: erro => {
          if (erro.status == 400) {
            alert("Favor preencher todos os campos")
          }
        },
      })
    }


  }

}
