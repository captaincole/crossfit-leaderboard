import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AthletesService {

  constructor(private http: Http) { }

  getAthletes(limit: number, offset: number, name?: string, affiliate?: string, division?: number, occupation?: number, region?: number) {
    let params = new URLSearchParams();
    if (name) {
      params.set('name', name);
    }
    if (affiliate) {
      params.set('affiliateid', affiliate);
    }
    if (division && division !== 0) {
      params.set('division', JSON.stringify(division));
    }
    if (occupation) {
      params.set('occupation', JSON.stringify(occupation));
    }

    if (region) {
      params.set('region', JSON.stringify(region));
    }

    params.set('offset' , JSON.stringify(offset));
    params.set('limit', JSON.stringify(limit));
    return this.http.get('/api', { search: params }).map( (res) => {
      return res.json().data;
    });
  }
}
