import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AthletesService {

  constructor(private http: Http) { }

  getAthletes(limit: number, offset: number,
              name?: Array<any>, affiliate?: Array<any>,
              division?: number, occupation?: number,
              region?: number, rank?: string,
               minage?: number, maxage?: number,
              minweight?: number, maxweight?: number,
              minheight?: number, maxheight?: number) {

    let params = new URLSearchParams();
    if (name) {
      params.set('name', JSON.stringify(name));
    }
    if (affiliate) {
      params.set('affiliateid', JSON.stringify(affiliate));
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

    if (rank) {
      params.set('sortby', rank);
    }

    if (minage) {
      params.set('minage', JSON.stringify(minage));
    }

    if (maxage) {
      params.set('maxage' , JSON.stringify(maxage));
    }

    if (minweight) {
      params.set('minweight', JSON.stringify(minweight));
    }

    if (maxweight) {
      params.set('maxweight' , JSON.stringify(maxweight));
    }

    if (minheight) {
      params.set('minheight', JSON.stringify(minheight));
    }

    if (maxheight) {
      params.set('maxheight' , JSON.stringify(maxheight));
    }

    params.set('offset' , JSON.stringify(offset));
    params.set('limit', JSON.stringify(limit));
    return this.http.get('/api', { search: params }).map( (res) => {
      return res.json().data;
    });
  }
}
