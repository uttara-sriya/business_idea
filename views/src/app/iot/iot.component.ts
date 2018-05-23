import { Component, OnInit } from '@angular/core';
import { IotService } from '../services/iot.service';
import { IOT } from '../models/iot'; 


@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html', 
  styleUrls: ['./iot.component.css'],
  providers: [IotService]
})
export class IotComponent implements OnInit {
  iots: IOT[];
  iot: IOT;
  constructor(private IotService: IotService) { }

  ngOnInit() {
    this.IotService.getIots()
    .subscribe(iots => this.iots = iots);
  }

}
