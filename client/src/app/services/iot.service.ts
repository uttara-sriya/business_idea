import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {IOT} from '../models/iot';
import 'rxjs/add/operator/map';

@Injectable()
export class IotService {

  constructor(private http:Http) { }
   //retrieving iots
   getIots(){
    return this.http.get('http://localhost:3000/api/iots')
    .map(res => res.json());
  }
  addIot(newIot){
    var headers=new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/iot', newIot, {headers:headers})
        .map(res => res.json());
  }
  deleteIot(id){
    return this.http.delete('http://localhost:3000/api/iot/'+id)
      .map(res => res.json());
  }

} 
