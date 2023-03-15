import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/model/Credentials';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  creds: Credentials ={
    username:'',
    password:''
  }
   
  constructor(
    private loginData: PortfolioService,
    private router: Router
    ) {}

  
  onSubmit(form: NgForm){
  
      this.loginData.login(this.creds)
      .subscribe({
        next:response => this.router.navigate(['/']),
        error:e => console.log("no se pudo autenticar")      
      })
  }

  onCancel(){
    const loginCheck = document.querySelector(".social button");
    loginCheck?.classList.remove("disabled");
  }

}
