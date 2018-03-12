import { Component, OnInit } from '@angular/core';
import { VrService } from '../services/vr.service';
import { VR } from '../models/vr'; 


@Component({
  selector: 'app-vr',
  templateUrl: './vr.component.html',
  styleUrls: ['./vr.component.css'],
  providers: [VrService]
})
export class VrComponent implements OnInit {
  vrs: VR[];
  vr: VR;
  constructor(private VrService: VrService) { }

  ngOnInit() {
    this.VrService.getvrs()
    .subscribe(vrs => this.vrs = vrs);
  }

}
