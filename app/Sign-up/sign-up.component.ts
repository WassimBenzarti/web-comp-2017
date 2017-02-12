import { Component, OnInit } from '@angular/core';
import {SignUpService} from "./sign-up.service";
import {Router} from "@angular/router";


@Component({
  moduleId:module.id,
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  private pseudo:string="";
  private email:string = "";
  private pass:string= "";
  private completed:boolean = false;
  constructor(private signUpService:SignUpService,private router:Router) { }

  ngOnInit() {
  }

  signIn(){
    if(this.pseudo.length && this.email.length && this.pass.length){
      this.signUpService.signUp(this.pseudo,this.email,this.pass)
        .subscribe((result)=>{console.log(result);this.completed = true;},
          (err) => console.error(err));

    }
  }

  goToDashboard(){
    this.router.navigate(['dashboard']);
  }

}
