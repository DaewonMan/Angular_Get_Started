import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { GridServiceService } from './grid-service.service';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit, OnChanges {

  @Input() test;
  @Input() settingInfo?: any;

  count: number = 0;

  constructor(private gridService: GridServiceService) {
   }

  ngOnInit() {
    // this.gridService.setGridFocusEvent();
    this.gridService.eventExec(document.getElementById('mainGrid'));
  }

  ngOnChanges(props) {
   debugger;
  }

  callTest() {
    console.log('fds')
    debugger;
  }

  sendData() {
    this.count += 1;
    this.gridService.sendData({
      title: 'fsdfsd' + this.count,
      regDate: 'date123',
      categoryName: 'f111121312313213'
    });
  }

  deleteEventTest() {
    debugger;
    this.settingInfo?.changeProcess?.delete();
  }

  testScan() {
    this.gridService.testScan();
  }

  focusOutTest() {
    debugger
    let a = document.querySelectorAll('#input_test')[0];
    let b = document.querySelectorAll('ion-input')[1];
    // setTimeout(()=> a.focus(), 1000)
    let c = document.getElementById('input_test');
    // b.focus();
    // c.focus();
    // c.click();
    // a.click();
    b.click();
  }

}
