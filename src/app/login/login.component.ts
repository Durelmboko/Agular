import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  backend_path='http://localhost/UAHB'
  constructor(private http: HttpClient, private router: Router) { }

  new_users:{email:string, password:string}={
    email:" ",
    password:"",
  }
  ngOnInit(): void {
    
  }

    envoyer(){
      console.log(this.new_users)
      this.http.post(this.backend_path+"/login.php",this.new_users)
  .subscribe((reponse:any)=>{
    this.new_users={email:"", password:""}
  console.log("Réponse du backend= ",reponse)
  if (reponse.etat) {
    
    this.router.navigate(['departement'])
  } else {
    
  }
  })
  } 
}