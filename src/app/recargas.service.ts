import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Recarga } from './recarga';

@Injectable()
export class RecargasService {
  
  constructor(private http: Http, private auth: AuthService) { }

  parseResponse(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError (error: Response | any) {
    return Observable.throw(error);
  }

  getRecargas(): Observable<Recarga[]> {
    let headers = new Headers({ 'x-auth':this.auth.getHeaders()});
    let options = new RequestOptions({ headers: headers }); 
    return this.http.get('/api/recargas', options).map(this.parseResponse).catch(this.handleError);
  }

  createRecarga(recarga: any): Observable<Recarga> {
    let headers = new Headers({ 'x-auth':this.auth.getHeaders()});
    let options = new RequestOptions({ headers: headers }); 
    return this.http.post('/api/recargas', recarga, options).map(this.parseResponse).catch(this.handleError);
  }

}