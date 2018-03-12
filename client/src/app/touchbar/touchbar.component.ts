import { Component, OnInit } from '@angular/core';
import { TouchbarService } from '../services/touchbar.service';
import { Touchbar } from '../models/touchbar'; 


@Component({
  selector: 'app-touchbar',
  templateUrl: './touchbar.component.html',
  styleUrls: ['./touchbar.component.css'],
  providers: [TouchbarService]
})
export class TouchbarComponent implements OnInit { 
  touchbars: Touchbar[];
  touchbar: Touchbar;
  constructor(private TouchbarService: TouchbarService) { }

  ngOnInit() {
    this.TouchbarService.getTouchbars()
    .subscribe(touchbars => this.touchbars = touchbars);
  }

}
