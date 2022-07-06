import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  test1 = {
    a: 1
  };

  constructor() { }

  ngOnInit() {
  }

  aaa() {
    console.log('xxxx');
    return this.test1;
  }

}
