import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  backend_path='http://localhost/UAHB'
  constructor(private http:HttpClient) { }
  

  new_departement:{faculte:string, chef_departement:string}={

    faculte:" ",
    chef_departement:" "
    
  }
  ngOnInit(): void {

   
  }

    envoyer(){
      this.http.post(this.backend_path+"/adddepart.php",this.new_departement)
  .subscribe((reponse:any)=>{
    this.new_departement={faculte:"", chef_departement:""}
  console.log("Réponse du backend= ",reponse)
  })
  } 
 
}

