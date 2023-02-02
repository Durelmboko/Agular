import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-filiere',
  templateUrl: './liste-filiere.component.html',
  styleUrls: ['./liste-filiere.component.css']
})
export class ListeFiliereComponent implements OnInit {

  les_filieres:{codef:number,nom:string,iddepart:string}[] = []

  backend_path:string = "http://localhost/UAHB"


  constructor(private http:HttpClient) {}

  ngOnInit(): void {
   this.lister() 
  }

  lister(){
    this.http.get("http://localhost/UAHB/selectF.php")
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_filieres = reponse
    })
  }

}