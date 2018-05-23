import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Dev} from '../models/dev';
import 'rxjs/add/operator/map';

@Injectable()
export class DevService {

  constructor(private http:Http) { }
   //retrieving dev
   getDevs(){
    return this.http.get('http://localhost:3000/api/devs')
    .map(res => res.json());
  }
  addDev(newDev){
    var headers=new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/dev', newDev, {headers:headers})
        .map(res => res.json());
  }
  deleteDev(id){
    return this.http.delete('http://localhost:3000/api/dev/'+id)
      .map(res => res.json());
  }

}
 