import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tabList: Array<string> = [
    'tab1',
    'tab2',
    'tab3',
    'tab4'
  ];

  constructor() {}

  a() {
    // window.alert('dfsdf');
  }

}
