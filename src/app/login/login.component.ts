import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f){
    let body = f.value;
    this.auth.login(body.email, body.password).subscribe((success)=> {
      console.log(success);
      if(success){
        this.router.navigateByUrl('/home');    
      } else {
        alert('Credenciales inválidas');
      }
      f.reset();
    })
  }
}
