import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-dossier',
  templateUrl: './liste-dossier.component.html',
  styleUrls: ['./liste-dossier.component.css']
})
export class ListeDossierComponent implements OnInit {

  les_dossiers:{id:number,idcon:string, nom:string, prenom:string, sexe:string, pre_requis:string, etat_dossier:string, idsec:string}[] = []

  backend_path:string = "http://localhost/UAHB"


  constructor(private http:HttpClient) {}

  ngOnInit(): void {
   this.lister() 
  }

  lister(){
    this.http.get("http://localhost/UAHB/dossier.php")
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_dossiers = reponse
    })
  }

}
