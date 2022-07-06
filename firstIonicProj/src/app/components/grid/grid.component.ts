import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { GridServiceService } from './grid-service.service';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit, OnChanges {

  @Input() test;

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

}
