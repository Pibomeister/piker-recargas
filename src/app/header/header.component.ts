import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  @Input() user;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
    this.router.navigateByUrl('/welcome');
  }

}
