import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit, OnChanges {

  @Input() test;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(props) {
   debugger;
  }

}
