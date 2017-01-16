import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Recarga } from '../recarga';
import { RecargasService } from './../recargas.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  error: Response;
  recargas: Recarga[];
  @ViewChild('errorContent') errorContent; 
  constructor(private rs: RecargasService, private modalService: NgbModal) { }

  ngOnInit() {
    this.rs.getRecargas().subscribe(
      recargas => this.recargas = recargas, 
      err => { 
        console.log(err);
        this.error = err as Response;
        this.modalService.open(this.errorContent);  
      });
  }

}
