import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetElementsService {

  constructor(private http: HttpClient) { }

  ping$(id): Observable<any> {
    return this.http.get(`http://localhost:8000/api/v1/elements/?_list=${id}`);
  }

}

