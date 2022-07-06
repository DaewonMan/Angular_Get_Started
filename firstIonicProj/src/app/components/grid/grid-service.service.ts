import { Injectable } from '@angular/core';
import { 
  fromEvent, 
  Subject,
  Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridServiceService {
  private subject = new Subject<any>();
  tClick;
  tKeyPress;
  // tFocus = fromEvent(document, 'focus').subscribe(() => console.log('focus!'));
  // tKeyPress = fromEvent(this.tabOutInput.nativeElement, 'keydown')
  // .pipe(
  //       takeUntil(this._destroy)
  //      )
  // .subscribe((event: KeyboardEvent) => {
  //   if(event.keyCode === TAB) {
  //     event.preventDefault();
  //     this.params.api.tabToNextCell(); <-- this does work with 1 grid on the page
  //   }
  // });
  constructor() {
  }
  
  setGridFocusEvent(target) {
    this.tKeyPress = fromEvent(target, 'keydown')
      // .pipe(
      //       takeUntil(this._destroy)
      //     )
      .subscribe((event: KeyboardEvent) => {
        debugger
        // if(event.keyCode === TAB) {
          event.preventDefault();
          // this.params.api.tabToNextCell();
        // }
      });
  }

  eventExec(grid) {
    this.tClick = fromEvent(grid, 'click').subscribe(() => console.log('Clicked!'));
    // fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));
  }

  sendData(data) {
    debugger;
    this.subject.next(data);
  }

  getData() {
    debugger;
    return this.subject.asObservable();
  }

}
