import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GetElementsService } from '../get-elements.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {
  responseJson: string;

  constructor(private api: GetElementsService, private auth: AuthService) { }

  listId: number | string;
  urlString: string;

  ngOnInit() {

    const urlString = window.location.pathname
    const listId = urlString.substr(urlString.lastIndexOf('/') + 1);
    this.api.ping$(listId).subscribe(
      res => this.responseJson = res
    )
  }

  ngAfterViewInit() {


  }
}