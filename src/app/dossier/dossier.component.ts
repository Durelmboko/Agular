import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent implements OnInit {
  backend_path='http://localhost/UAHB'
  id:number=0
  
  les_secretaire:{idsec:number,nom:string}[] = []
  les_candidats!:{idcon:number,nom:string, prenom:string, naissance:string, sexe:string, adresse:string, nationalite:string, email:string, codef:string, niveau:string,pre_requis:string,etat_dossier:string,idSec:number}
  
  new_dossier:{nom:string, prenom:string, sexe:string,pre_requis:string,etat_dossier:string,idsec:string }={
   
    nom:" ",
    prenom:" ",
    sexe:" ",
    pre_requis:" ",
    etat_dossier:"",
    idsec:""
    
  }



  constructor(private http:HttpClient,id_candidat:ActivatedRoute) {
    id_candidat.params.subscribe((params: any) => {
      this.id = params["id"]
      
      })
     
   } 

  ngOnInit(): void {
  
    this.liste_secretaire()
    this.lister()
    console.log(this.id)
  }

    envoyer(){
      this.http.post(this.backend_path+"/adddossier.php",this.new_dossier)
  .subscribe((reponse:any)=>{
    console.log("Réponse du backend= ",reponse)
  })
  } 
  
  lister(){
    this.http.get("http://localhost/UAHB/select_id.php?id="+this.id) 
    .subscribe((reponse:any)=>{
      this.les_candidats = reponse
      console.log("dossier candidat",this.les_candidats)
      this.new_dossier.nom=this.les_candidats.nom
      this.new_dossier.prenom=this.les_candidats.prenom
      this.new_dossier.sexe=this.les_candidats.sexe
      this.new_dossier.pre_requis=this.les_candidats.pre_requis
    })
  }
  
  liste_secretaire(){
    this.http.get(this.backend_path+"/secretaire.php") 
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_secretaire = reponse
    })
  }
}