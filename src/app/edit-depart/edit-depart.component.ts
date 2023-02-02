import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-depart',
  templateUrl: './edit-depart.component.html',
  styleUrls: ['./edit-depart.component.css']
})
export class EditDepartComponent implements OnInit {

  les_departements:{iddepart:number,faculte:string,chef_departement:string}={
    iddepart:0,
    faculte:"",
    chef_departement:""
  }
  iddepart:number=0
  constructor(rout_actuelle:ActivatedRoute,private http:HttpClient) { 
    rout_actuelle.params.subscribe((les_parametres:any)=>{
      this.iddepart=les_parametres["iddepart"]
      this.editer()
    })
  }

  editer(){
    this.http.get("http://localhost/UAHB/?iddepart="+this.iddepart)
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_departements = reponse
    })
    
  }

  ngOnInit(): void {
    
  }

}

