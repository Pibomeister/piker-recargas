import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecargasService } from './../recargas.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('content') content;
  @ViewChild('errorContent') errorContent;
  isLoading: boolean = false;
  amountF: number;
  numberF: string;
  error: Response;

  constructor(private rs: RecargasService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  onSubmit(f){
    this.isLoading = true;
    this.rs.createRecarga(f.value).subscribe( recarga => {
      this.isLoading = false;
      if(recarga._id){
        this.amountF = recarga.amount;
        this.numberF = recarga.number;
        this.isLoading = false;
        f.reset();
        this.modalService.open(this.content);
      }  else {
          console.log('error');
          this.isLoading = false;
          f.reset();
      }
    }, err=> {
      this.error = err as Response;
      this.modalService.open(this.errorContent);
      this.isLoading = false;
      f.reset();
    });

  }

}
