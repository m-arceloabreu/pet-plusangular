
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderInComponent } from './header-in/header-in.component';
import { HeaderOutComponent } from './header-out/header-out.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VetHomepageComponent } from './vet-homepage/vet-homepage.component';
import { VetCadastroClinicaComponent } from './vet-cadastro-clinica/vet-cadastro-clinica.component';
import { VetFinalizarcadastroComponent } from './vet-finalizarcadastro/vet-finalizarcadastro.component';
import { VetGerenciarclinicaComponent } from './vet-gerenciarclinica/vet-gerenciarclinica.component';
import { VetRelatoriosComponent } from './vet-relatorios/vet-relatorios.component';
import { VetAgendamentosComponent } from './vet-agendamentos/vet-agendamentos.component';
import { VetServicosComponent } from './vet-servicos/vet-servicos.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderInComponent,
    HeaderOutComponent,
    LandingPageComponent,
    SignInComponent,
    SignUpComponent,
    VetHomepageComponent,
    VetCadastroClinicaComponent,
    VetFinalizarcadastroComponent,
    VetGerenciarclinicaComponent,
    VetRelatoriosComponent,
    VetAgendamentosComponent,
    VetServicosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
