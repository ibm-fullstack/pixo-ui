import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private myMediaUrl = 'http://localhost:8080/getallfiles';

  constructor(private http: HttpClient) { }

  getMyMedia(): Observable<string[]> {
    const url = this.myMediaUrl;
    return this.http.get<string[]>(url);
  }
}
