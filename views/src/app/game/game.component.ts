import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Game } from '../models/game'; 

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [GameService]
})
export class GameComponent implements OnInit {
  allGames: Game[];
  game: Game;

  constructor(private GameService: GameService) { }

  ngOnInit() {
    this.GameService.getGames()
    .subscribe(allGames => this.allGames = allGames);
  }

}
