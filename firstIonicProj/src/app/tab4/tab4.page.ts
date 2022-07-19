import { Component, OnInit } from '@angular/core';

interface IChangeProcess {
  delete?(localGridList: Array<object>): void;
  new?(localGridList: Array<object>): void;
  save?(localGridList: Array<object>): void;
}

interface ISettingInfo {
  changeProcess: IChangeProcess;
}

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  test1 = {
    a: 1
  };

  settingInfo: ISettingInfo = {
    changeProcess: {
      delete: (localGridList: Array<object>) => {
        debugger;
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

  aaa() {
    console.log('xxxx');
    return this.test1;
  }

}
