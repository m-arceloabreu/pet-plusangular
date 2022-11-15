import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VetAgendamentosComponent } from './vet-agendamentos/vet-agendamentos.component';
import { VetCadastroClinicaComponent } from './vet-cadastro-clinica/vet-cadastro-clinica.component';
import { VetFinalizarcadastroComponent } from './vet-finalizarcadastro/vet-finalizarcadastro.component';
import { VetGerenciarclinicaComponent } from './vet-gerenciarclinica/vet-gerenciarclinica.component';
import { VetHomepageComponent } from './vet-homepage/vet-homepage.component';
import { VetRelatoriosComponent } from './vet-relatorios/vet-relatorios.component';

const routes: Routes = [
  {path: "", redirectTo: "landing-page", pathMatch: "full"},
  {path: "sign-in", component: SignInComponent },
  {path: "sign-up", component: SignUpComponent},
  {path: "landing-page", component: LandingPageComponent},
  {path: "vet-homepage", component: VetHomepageComponent},
  {path: "vet-cadastro-clinica", component: VetCadastroClinicaComponent},
  {path: "vet-finalizarcadastro", component: VetFinalizarcadastroComponent},
  {path: "vet-gerenciarclinica", component: VetGerenciarclinicaComponent},
  {path: "vet-relatorios", component: VetRelatoriosComponent},
  {path: "vet-agendamentos", component: VetAgendamentosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
