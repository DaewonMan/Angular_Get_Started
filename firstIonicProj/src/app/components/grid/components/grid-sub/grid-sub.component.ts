import { Component, OnInit, OnDestroy } from '@angular/core';
import { GridServiceService } from '../../grid-service.service';


@Component({
  selector: 'grid-sub',
  templateUrl: './grid-sub.component.html',
  styleUrls: ['./grid-sub.component.scss'],
})
export class GridSubComponent implements OnInit, OnDestroy {

  title;
  regDate;
  categoryName;
  subscription;

  constructor(
    private gridService: GridServiceService
  ) { 
    this.subscription = this.gridService.getData().subscribe(data => {
      debugger;
      console.log("banner subscription : " , data);
      this.title = data.title;
      this.regDate = data.regDate;
      this.categoryName = data.categoryName;
    });
 
  }

  ngOnInit() {}

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
