import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AthletesService {

  constructor(private http: Http) { }

  getAthletes(limit) {
    let params = new URLSearchParams();
    params.set('limit', JSON.stringify(limit));
    return this.http.get('/api', { search: params }).map( (res) => {
      return res.json().data;
    });
  }
}
