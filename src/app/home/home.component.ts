import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecargasService } from './../recargas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('content') content; 
  isLoading: boolean = false;
  amount: number;
  number: string;
  constructor(private rs: RecargasService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  onSubmit(f){
    this.isLoading = true;
    this.rs.createRecarga(f.value).subscribe( recarga => {
      this.isLoading = false;
      if(recarga._id){
        this.amount = recarga.amount;
        this.number = recarga.number;
        this.modalService.open(this.content);
      }  else {
          console.log('error');
      } 
    });

  }

}
