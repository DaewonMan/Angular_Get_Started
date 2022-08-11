import { Component, OnInit } from '@angular/core';
import { PdfDownloadService } from '../pdf-download.service';

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

  timeoutItcs = {
    buttonTestId: undefined
  };

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

  constructor(
    private pdfDownloadSvc: PdfDownloadService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutItcs.buttonTestId);
  }

  aaa() {
    console.log('xxxx');
    return this.test1;
  }

  clickTest() {
    clearTimeout(this.timeoutItcs.buttonTestId);

    this.timeoutItcs.buttonTestId = setTimeout(() => {
      console.log(121212);
    }, 0);

  }

  testPdf() {
    this.pdfDownloadSvc.testPdf2('testApp');
  }

}
