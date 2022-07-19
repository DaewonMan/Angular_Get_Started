import { Component, VERSION, OnInit } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpEventType,
} from '@angular/common/http';

@Component({
  selector: 'app-image-handler',
  templateUrl: './app-image-handler.component.html',
  styleUrls: ['./app-image-handler.component.scss'],
})
export class AppImageHandlerComponent implements OnInit {
  percentDone: number;
  uploadSuccess: boolean;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {}

  uploadImage(files: File[]) {
    this.uploadImageAndProgress(files);
  }

  // basicUploadImage(files: File[]) {
  //   var formData = new FormData();
  //   Array.from(files).forEach((f) => formData.append('file', f));
  //   this.http.post('https://file.io', formData).subscribe((event) => {
  //     console.log('done');
  //   });
  // }

  // basicUploadSingleImage(file: File) {
  //   this.http.post('https://file.io', file).subscribe((event) => {
  //     console.log('done');
  //   });
  // }

  uploadImageAndProgress(files: File[]) {
    console.log(files);
    var formData = new FormData();
    Array.from(files).forEach((f) => formData.append('file', f));

    this.http.post('https://file.io', formData, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round((100 * event.loaded) / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
      });
  }

  // uploadAndProgressSingleImage(file: File) {
  //   this.http
  //     .post('https://file.io', file, {
  //       reportProgress: true,
  //       observe: 'events',
  //     })
  //     .subscribe((event) => {
  //       if (event.type === HttpEventType.UploadProgress) {
  //         this.percentDone = Math.round((100 * event.loaded) / event.total);
  //       } else if (event instanceof HttpResponse) {
  //         this.uploadSuccess = true;
  //       }
  //     });
  // }
}
