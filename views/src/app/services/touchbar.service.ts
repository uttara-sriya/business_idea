import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Touchbar} from '../models/touchbar';
import 'rxjs/add/operator/map';

@Injectable()
export class TouchbarService {

  constructor(private http:Http) { }
   //retrieving touchbars
   getTouchbars(){
    return this.http.get('http://localhost:3000/api/touchbars')
    .map(res => res.json());
  }
  addTouchbar(newTouchbar){
    var headers=new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/touchbar', newTouchbar, {headers:headers})
        .map(res => res.json());
  }
  deleteTouchbar(id){
    return this.http.delete('http://localhost:3000/api/touchbar/'+id)
      .map(res => res.json());
  }

}
 