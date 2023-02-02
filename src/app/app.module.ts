import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatComponent } from './candidat/candidat.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ListecandidatComponent } from './listecandidat/listecandidat.component';
import { FormsModule } from '@angular/forms';
import { DepartementComponent } from './departement/departement.component';
import { ListeDepartComponent } from './liste-depart/liste-depart.component';
import { FooterComponent } from './footer/footer.component';
import { EditDepartComponent } from './edit-depart/edit-depart.component';
import { FiliereComponent } from './filiere/filiere.component';
import { ListeFiliereComponent } from './liste-filiere/liste-filiere.component';
import { AcueilComponent } from './acueil/acueil.component';
import { LoginComponent } from './login/login.component';
import { DossierComponent } from './dossier/dossier.component';
import { ListeDossierComponent } from './liste-dossier/liste-dossier.component';
import { SecretaireComponent } from './secretaire/secretaire.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatComponent,
    NavbarComponent,
    ListecandidatComponent,
    DepartementComponent,
    ListeDepartComponent,
    FooterComponent,
    EditDepartComponent,
    FiliereComponent,
    ListeFiliereComponent,
    AcueilComponent,
    LoginComponent,
    DossierComponent,
    ListeDossierComponent,
    SecretaireComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
