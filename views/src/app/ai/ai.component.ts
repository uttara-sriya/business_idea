import { Component, OnInit } from '@angular/core';
import { AiService } from '../services/ai.service';
import { AI } from '../models/ai'; 

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.css'],
  providers: [AiService]
})
export class AiComponent implements OnInit {
  ais: AI[];
  ai: AI;

  constructor(private AiService: AiService) { }

  ngOnInit() {
    this.AiService.getAI()
    .subscribe(ais => this.ais = ais);
  }

}
