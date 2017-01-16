import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoading: boolean = false;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f){
    let form = f.value;
    if(form.password === form.password2){
      this.auth.createUser(f.value.email, f.value.password).subscribe((user)=> {
      f.reset();
      console.log(user);
      this.router.navigateByUrl('/home');
    }, (err)=> {
      alert(err);
      f.reset();
    });
    } else {
      alert('Passwords must match');
      f.reset();
    }
    
  }

}
