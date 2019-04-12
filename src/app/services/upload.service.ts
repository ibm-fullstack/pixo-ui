import { Injectable } from '@angular/core';
import { UploadInfo } from '../upload/upload-info';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private uploadUrl = 'http://localhost:8080/uploadFile';

  constructor(private http: HttpClient) { }

  uploadFile(uploadInfo: UploadInfo): Observable<object> {
    return this.http.post<object>(this.uploadUrl, uploadInfo);
  }

  pushFileToStorage(uploadInfo: UploadInfo): Observable<object> {
    let formdata: FormData = new FormData();

    formdata.append('file', uploadInfo.uploadFile);
    //formdata.append('caption', uploadInfo.caption);
    const req = new HttpRequest('POST', this.uploadUrl, formdata);

    return this.http.request(req);
  }
}
