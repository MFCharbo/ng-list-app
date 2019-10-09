import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetListsService {

  constructor(private http: HttpClient) { }

  ping$(): Observable<any> {
    return this.http.get("http://localhost:8000/api/v1/lists");
  }

}




// import { Injectable } from '@angular/core';
// import { HttpClient } from "@angular/common/http";

// @Injectable({
//   providedIn: 'root'
// })
// export class GetListsService {

//   constructor(private http: HttpClient) { }

//   getLists() {
//     return this.http.get("http://localhost:8000/api/v1/lists")
//   }

// }
