import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {

  backend_path='http://localhost/UAHB'
  constructor(private http:HttpClient) { }
  les_filieres:{codef:number, nom:string ,iddepart:number}[] = []

  new_candidat:{nom:string, prenom:string, naissance:string, sexe:string, adresse:string, nationalite:string, email:string, codef:string, niveau:string,pre_requis:string}={
    nom:" ",
    prenom:" ",
    naissance:"",
    sexe:" ",
    adresse:" ",
    nationalite:"",
    email:"",
    codef:"",
    niveau:"",
    pre_requis:""
  }
  ngOnInit(): void {
  
    this.lister()
  }

    envoyer(){
      this.http.post(this.backend_path+"/add.php",this.new_candidat)
  .subscribe((reponse:any)=>{
    this.new_candidat={nom:"", prenom:"", naissance:"", sexe:"", adresse:"", nationalite:"", email:"", codef:"", niveau:"",pre_requis:""}
  console.log("Réponse du backend= ",reponse)
  })
  } 
  lister(){
    this.http.get(this.backend_path+"/selectF.php") 
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_filieres = reponse
    })
  }
}