import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AI} from '../models/ai';
import 'rxjs/add/operator/map';

@Injectable()
export class AiService {

  constructor(private http:Http) { }
     //retrieving ai
     getAI(){
      return this.http.get('http://localhost:3000/api/ais')
      .map(res => res.json());
    }
    addAi(newAi){
      var headers=new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/api/ai', newAi, {headers:headers})
          .map(res => res.json());
    }
    deleteAi(id){
      return this.http.delete('http://localhost:3000/api/ai/'+id)
        .map(res => res.json());
    }
}
