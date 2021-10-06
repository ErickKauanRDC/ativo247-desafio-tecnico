import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { EditarPacienteComponent } from './views/editar-paciente/editar-paciente.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NovoPacienteComponent } from './views/novo-paciente/novo-paciente.component';
import { RegisterComponent } from './views/register/register.component';


const routes: Routes = [{
  path:"",
  component: LoginComponent
},
{
  path:"cadastro",
  component: RegisterComponent
},
{
  path:"home",
  component: HomeComponent
},
{
  path:"home/novo-paciente",
  component:NovoPacienteComponent
},
{
  path:"home/editar-paciente",
  component: EditarPacienteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,BrowserAnimationsModule]
})
export class AppRoutingModule { }
