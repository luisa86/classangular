import { Component, OnInit } from '@angular/core';
import { MACS } from '../../mocks-macs'

@Component({
  selector: 'app-macs',
  templateUrl: './macs.component.html',
  styleUrls: ['./macs.component.scss']
})
export class MacsComponent implements OnInit {

    macs = MACS;

  constructor() { }

  ngOnInit() {
  }

}
