import { Component } from '@angular/core';
import { PdfDownloadService } from '../pdf-download.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private pdfDownloadSvc: PdfDownloadService
  ) {}

  testPdf() {
    this.pdfDownloadSvc.testPdf2('tab3App');
  }

}
