import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Veterinario } from '../model/Veterinario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-vet-homepage',
  templateUrl: './vet-homepage.component.html',
  styleUrls: ['./vet-homepage.component.css']
})
export class VetHomepageComponent implements OnInit {

  vet: Veterinario = new Veterinario()


  idVeterinario = environment.id
  nome = environment.nome
  imagem = environment.imagem

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    if(environment.token ==''){
      alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/sign-in'])
    }
   }

  ngOnInit(): void {
  }

}
