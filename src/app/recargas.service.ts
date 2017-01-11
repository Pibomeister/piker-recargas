import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Http, Response } from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Recarga } from './recarga';

@Injectable()
export class RecargasService {
  
  constructor(private http: Http) { }

  parseResponse(res: Response) {
    return res.json();
  }

  getRecargas(): Observable<Recarga[]> {
    return this.http.get('/api/recargas').map(this.parseResponse);
  }

  createRecarga(recarga: any): Observable<Recarga> {
    return this.http.post('/api/recargas', recarga).map(this.parseResponse);
  }

}