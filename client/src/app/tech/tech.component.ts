import { Component, OnInit, NgModule } from '@angular/core';
import { IdeaService } from '../services/idea.service';
import { Idea } from '../models/idea';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css'],
  providers: [IdeaService]
})


export class TechComponent implements OnInit { 
  techies: Idea[];
  tech: Idea;
  
  constructor(private IdeaService: IdeaService) { }

  ngOnInit() {
    this.IdeaService.getIdeas()
    .subscribe(techies => this.techies = techies);
  }

}
