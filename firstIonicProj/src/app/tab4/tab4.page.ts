import { Component, OnInit } from '@angular/core';
import { PdfDownloadService } from '../pdf-download.service';
import { ModalController } from '@ionic/angular';

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

  imageIndex: number = 0;
  images: Array<string> = [
    '../../assets/common/fishing1.jpeg',
    '../../assets/common/fishing2.jpeg',
    '../../assets/common/fishing3.jpeg'
  ];
  imgConfig = {
    btnClass: 'default', // The CSS class(es) that will apply to the buttons
    zoomFactor: 0.1, // The amount that the scale will be increased by
    containerBackgroundColor: '#78787820', // The color to use for the background. This can provided in hex, or rgb(a).
    wheelZoom: true, // If true, the mouse wheel can be used to zoom in
    allowFullscreen: true, // If true, the fullscreen button will be shown, allowing the user to entr fullscreen mode
    allowKeyboardNavigation: true, // If true, the left / right arrow keys can be used for navigation
    btnIcons: { // The icon classes that will apply to the buttons. By default, font-awesome is used.
      zoomIn: 'fa fa-plus',
      zoomOut: 'fa fa-minus',
      rotateClockwise: 'fa fa-repeat',
      rotateCounterClockwise: 'fa fa-undo',
      next: 'fa fa-arrow-right',
      prev: 'fa fa-arrow-left',
      fullscreen: 'fa fa-arrows-alt',
    },
    btnShow: {
      zoomIn: true,
      zoomOut: true,
      rotateClockwise: false,
      rotateCounterClockwise: false,
      next: false,
      prev: false
    }
  };
  isImageView: boolean = false;

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
    private pdfDownloadSvc: PdfDownloadService,
    public modalController: ModalController
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

  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: ModalPage,
  //     cssClass: 'my-custom-class',
  //   });
  //   return await modal.present();
  // }

}
