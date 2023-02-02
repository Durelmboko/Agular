import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent implements OnInit {

  backend_path='http://localhost/UAHB'
  constructor(private http:HttpClient) { }
  les_departements:{iddepart:number, faculte:string,chef_departement:string}[] = []
  

  new_filiere:{nom:string, iddepart:string}={

    nom:" ",
    iddepart:" "
    
  }
  ngOnInit(): void {
    this.lister()
   
  }

    envoyer(){
      this.http.post(this.backend_path+"/adddfiliere.php",this.new_filiere)
  .subscribe((reponse:any)=>{
    this.new_filiere={nom:"", iddepart:""}
  console.log("Réponse du backend= ",reponse)
  })
  } 
  lister(){
    this.http.get(this.backend_path+"/selectdepart.php") 
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_departements = reponse
    })
  }
}
