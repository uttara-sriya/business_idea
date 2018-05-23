import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Game } from '../models/game';
import 'rxjs/add/operator/map';

@Injectable()
export class GameService {

  constructor(private http:Http) { }
  //retrieving games
  getGames(){
    return this.http.get('http://localhost:3000/api/games')
    .map(res => res.json());
  }
  addGame(newGame){
    var headers=new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/game', newGame, {headers:headers})
        .map(res => res.json());
  }
  deleteGame(id){
    return this.http.delete('http://localhost:3000/api/game/'+id)
      .map(res => res.json());
  }

}
