import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CliAgendamentosComponent } from './cli-agendamentos/cli-agendamentos.component';
import { CliCadastropetComponent } from './cli-cadastropet/cli-cadastropet.component';
import { CliConfirmaragendamentoComponent } from './cli-confirmaragendamento/cli-confirmaragendamento.component';
import { CliCriaragendamentoComponent } from './cli-criaragendamento/cli-criaragendamento.component';
import { CliFinalizarcadastroComponent } from './cli-finalizarcadastro/cli-finalizarcadastro.component';
import { CliHomepageComponent } from './cli-homepage/cli-homepage.component';
import { CliPetComponent } from './cli-pet/cli-pet.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VetAgendamentosComponent } from './vet-agendamentos/vet-agendamentos.component';
import { VetCadastroClinicaComponent } from './vet-cadastro-clinica/vet-cadastro-clinica.component';
import { VetFinalizarcadastroComponent } from './vet-finalizarcadastro/vet-finalizarcadastro.component';
import { VetGerenciarclinicaComponent } from './vet-gerenciarclinica/vet-gerenciarclinica.component';
import { VetHomepageComponent } from './vet-homepage/vet-homepage.component';
import { VetRelatoriosComponent } from './vet-relatorios/vet-relatorios.component';
import { VetServicosComponent } from './vet-servicos/vet-servicos.component';

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
  {path: "vet-agendamentos", component: VetAgendamentosComponent},
  {path: "vet-servicos", component:VetServicosComponent},
  {path: "cli-homepage", component: CliHomepageComponent},
  {path: "cli-agendamentos", component:CliAgendamentosComponent},
  {path: "cli-cadastropet", component:CliCadastropetComponent},
  {path: "cli-finalizarcadastro", component:CliFinalizarcadastroComponent},
  {path: "cli-pet", component: CliPetComponent},
  {path: "cli-criaragendamento", component: CliCriaragendamentoComponent},
  {path: "cli-confirmaragendamento", component: CliConfirmaragendamentoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
