
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './views/register/register.component';
import { MatSelectModule } from '@angular/material/select'
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './views/home/home.component'
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { PacientesComponent } from './views/pacientes/pacientes.component';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { NovoPacienteComponent } from './views/novo-paciente/novo-paciente.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './views/header/header.component';

import { Globals } from '../../src/app/shared/Globals'
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { EditarPacienteComponent } from './views/editar-paciente/editar-paciente.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PacientesComponent,
    NovoPacienteComponent,
    HeaderComponent,
    EditarPacienteComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
