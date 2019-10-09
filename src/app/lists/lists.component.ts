import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GetListsService } from '../get-lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  responseJson: string;

  constructor(private api: GetListsService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.api.ping$().subscribe(
      res => this.responseJson = res
    );

  }

  clickedList(id) {
    console.log(id);
  }
}




// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';

// @Component({
//   selector: 'app-lists',
//   templateUrl: './lists.component.html',
//   styleUrls: ['./lists.component.scss']
// })
// export class ListsComponent implements OnInit {
//   responseJson: string;

//   constructor(private api: ApiService) { }

//   ngOnInit() {
//   }

//   pingApi() {
//     this.api.ping$().subscribe(
//       res => this.responseJson = res
//     )
//   }

// }
