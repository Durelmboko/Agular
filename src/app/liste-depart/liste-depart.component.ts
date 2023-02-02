import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-depart',
  templateUrl: './liste-depart.component.html',
  styleUrls: ['./liste-depart.component.css']
})
export class ListeDepartComponent implements OnInit {

  les_departements:{iddepart:number,faculte:string,chef_departement:string}[] = []

  backend_path:string = "http://localhost/UAHB"


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.lister()
  }

  lister(){
    this.http.get("http://localhost/UAHB/selectdepart.php")
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_departements = reponse
    })
  }

}
