import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcueilComponent } from './acueil/acueil.component';
import { CandidatComponent } from './candidat/candidat.component';
import { DepartementComponent } from './departement/departement.component';
import { DossierComponent } from './dossier/dossier.component';
import { EditDepartComponent } from './edit-depart/edit-depart.component';
import { FiliereComponent } from './filiere/filiere.component';
import { FooterComponent } from './footer/footer.component';
import { ListeDepartComponent } from './liste-depart/liste-depart.component';
import { ListeDossierComponent } from './liste-dossier/liste-dossier.component';
import { ListeFiliereComponent } from './liste-filiere/liste-filiere.component';
import { ListecandidatComponent } from './listecandidat/listecandidat.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: "acueil"},
  {path: 'acueil', component:AcueilComponent},
  {path: 'candidat', component:CandidatComponent},
  {path: 'listecandidat', component:ListecandidatComponent},
  {path: 'dossier/:id', component:DossierComponent},
  {path: 'liste-depart', component:ListeDepartComponent},
  {path: 'edit_depart', component:EditDepartComponent},
  {path: 'departement', component:DepartementComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'liste_dossier', component:ListeDossierComponent},
  {path: 'filiere', component:FiliereComponent},
  {path: 'liste-filiere', component:ListeFiliereComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: 'login', component:LoginComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
