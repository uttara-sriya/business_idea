import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {VR} from '../models/vr';
import 'rxjs/add/operator/map';

@Injectable()
export class VrService {

  constructor(private http:Http) { }
   //retrieving vrs
   getvrs(){
    return this.http.get('http://localhost:3000/api/vrs')
    .map(res => res.json());
  }
  addVr(newVr){
    var headers=new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/vr', newVr, {headers:headers})
        .map(res => res.json());
  }
  deleteVr(id){
    return this.http.delete('http://localhost:3000/api/vr/'+id)
      .map(res => res.json());
  }

}
 