import { Component, OnInit } from '@angular/core';
import { DevService } from '../services/dev.service';
import { Dev } from '../models/dev'; 


@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html', 
  styleUrls: ['./dev.component.css'],
  providers: [DevService]
})
export class DevComponent implements OnInit {
  devs: Dev[];
  dev: Dev;
  constructor(private DevService: DevService) { }

  ngOnInit() {
    this.DevService.getDevs()
    .subscribe(devs => this.devs = devs);
  }

}
