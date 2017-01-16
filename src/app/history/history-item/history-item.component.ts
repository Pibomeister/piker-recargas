import {
  Component,
  Input,
  OnInit,
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/core';

import { Recarga } from './../../recarga';

@Component({
  selector: 'app-history-item',
  template: `
        <li [@flyInOut] class="list-group-item justify-content-between">
          <small>{{rec.date | date: "short"}}</small>
              <strong>{{rec.number}}</strong>
          <span class="badge badge-default badge-pill">$ {{rec.amount}}.00</span>
        </li>
  `,
  styles: [`
    .list-group-item{
      margin-top: 10px;
    }
  `],
  animations: [
  trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate('250ms ease-in')
    ]),
    transition(':leave', [
      animate('250ms ease-out', style({transform: 'translateX(100%)'}))
    ])
  ])
]
})

export class HistoryItemComponent implements OnInit {
  @Input() rec: Recarga;
  
  constructor() { }

  ngOnInit() {
  }

}
