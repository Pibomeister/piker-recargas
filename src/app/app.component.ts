import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  navVisible: boolean = false;
  user: any = false;
  
  constructor(private auth: AuthService, private router: Router){
    router.events.subscribe((val) => {
        if(val.url === '/welcome' || val.url === '/login' || val.url === '/signup' || val.url === '/'){
          this.navVisible = false;
        } else {
          this.navVisible = true;
        }
    });
  }

  ngOnInit(){
    this.auth.currentUser.subscribe(
      user => this.user = user
    );
  }
}
