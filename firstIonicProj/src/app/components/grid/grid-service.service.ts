import { Injectable } from '@angular/core';
import { 
  fromEvent, 
  Subject,
  Observable,
  of, 
  interval, 
  // scan, 
  // map, 
  // startWith
} from 'rxjs';
// import { scan }  from 'rxjs/operator'; 
@Injectable({
  providedIn: 'root'
})
export class GridServiceService {
  private subject = new Subject<any>();
  tClick;
  tKeyPress;
  
  numbers$ = of(1, 2, 3);
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
    // this.tClick.unsubscribe();
  }

  sendData(data) {
    debugger;
    this.subject.next(data);
  }

  getData() {
    debugger;
    return this.subject.asObservable();
  }

  testScan() {
    this.numbers$
      .pipe(
        // Get the sum of the numbers coming in.
        // scan((total, n) => total + n),
        // Get the average by dividing the sum by the total number
        // received so var (which is 1 more than the zero-based index).
        // map((sum, index) => sum / (index + 1))
      )
      .subscribe(console.log);
  }

}
