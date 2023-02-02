import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listecandidat',
  templateUrl: './listecandidat.component.html',
  styleUrls: ['./listecandidat.component.css']
})
export class ListecandidatComponent implements OnInit {

  les_candidats:{idcon:number, nom:string, prenom:string, naissance:string, sexe:string, adresse:string, nationalite:string, email:string, codef:string, niveau:string, pre_requis:string}[] = []

  backend_path:string = "http://localhost/UAHB"


  constructor(private http:HttpClient) {}

  ngOnInit(): void {
   this.lister() 
  }

  lister(){
    this.http.get("http://localhost/UAHB/selectcondidat.php")
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_candidats = reponse
    })
  }

}
