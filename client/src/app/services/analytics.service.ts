import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Analytics} from '../models/analytics';
import 'rxjs/add/operator/map';

@Injectable()
export class AnalyticsService {

  constructor(private http:Http) { }

   //retrieving analytics
   getAnalytics(){
    return this.http.get('http://localhost:3000/api/analytics')
    .map(res => res.json());
  }
  addAnalytics(newAnalytics){
    var headers=new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/analytic', newAnalytics, {headers:headers})
        .map(res => res.json());
  }
  deleteAnalytics(id){
    return this.http.delete('http://localhost:3000/api/analytic/'+id)
      .map(res => res.json());
  }

} 
