import { Component, OnInit } from '@angular/core';

import { RecargasService } from './../recargas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rs: RecargasService) { }

  ngOnInit() {
  }

  onSubmit(f){
    this.rs.createRecarga(f.value).subscribe( recarga => console.log(recarga));
  }

}
