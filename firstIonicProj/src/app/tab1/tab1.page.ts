import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  mainTo() {
    // window.location.href = "mailto:xyz@something.com";
    window.location.href = "sms:01089258382?body='test123'";
  }
}
