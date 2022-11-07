import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VetHomepageComponent } from './vet-homepage/vet-homepage.component';

const routes: Routes = [
  {path: "", redirectTo: "landing-page", pathMatch: "full"},
  {path: "sign-in", component: SignInComponent },
  {path: "sign-up", component: SignUpComponent},
  {path: "landing-page", component: LandingPageComponent},
  {path: "vet-homepage", component: VetHomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
