import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Idea} from '../models/idea';
import 'rxjs/add/operator/map';


@Injectable()
export class IdeaService {

  constructor(private http:Http) { }

  //retrieving ideas
  getIdeas(){
    return this.http.get('http://localhost:3000/api/ideas')
    .map(res => res.json());
  }
  addIdea(newIdea){
    var headers=new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/idea', newIdea, {headers:headers})
        .map(res => res.json());
  }
  deleteIdea(id){
    return this.http.delete('http://localhost:3000/api/idea/'+id)
      .map(res => res.json());
  }

}
