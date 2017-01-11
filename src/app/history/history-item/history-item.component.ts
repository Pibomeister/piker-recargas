import { Component, Input, OnInit } from '@angular/core';

import { Recarga } from './../../recarga';

@Component({
  selector: 'app-history-item',
  template: `
        <li class="list-group-item justify-content-between">
          <span>{{rec.date | date: "short"}}</span>
              {{rec.number}}
          <span class="badge badge-default badge-pill">$ {{rec.amount}}.00</span>
        </li>
  `,
  styles: [`
    .list-group-item{
      margin-top: 10px;
    }
  `]
})
export class HistoryItemComponent implements OnInit {
  @Input() rec: Recarga;
  
  constructor() { }

  ngOnInit() {
  }

}
