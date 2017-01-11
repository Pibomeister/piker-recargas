import { Component, OnInit } from '@angular/core';

import { Recarga } from '../recarga';
import { RecargasService } from './../recargas.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  
  recargas: Recarga[];
  constructor(private rs: RecargasService) { }

  ngOnInit() {
    this.rs.getRecargas().subscribe(recargas => this.recargas = recargas);
  }

}
