import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private fb:FormBuilder,private api:ApiService,private router:Router){}
  login(){
    if(this.loginForm.valid){
      const password = this.loginForm.value.password
      const email = this.loginForm.value.email
      const user = {password,email}
      this.api.LoginAPI(user).subscribe({
        next:(res:any)=>{
          console.log(res);  
          alert(`${res.existingUser.username} logined sucessfully!!!`)
          sessionStorage.setItem("username",res.existingUser.username)
          sessionStorage.setItem("token",res.token)
          this.loginForm.reset()
          this.router.navigateByUrl("")
        },
        error:(data:any)=>{
          alert(data.error)
        }
      })
    }else{
      alert("Invalid Form!!!")
    }
  }

}
