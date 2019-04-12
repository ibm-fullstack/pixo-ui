import { Component, OnInit } from '@angular/core';
import { UploadInfo } from '../upload/upload-info';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  message: string;
  form: any = {};
  private uploadInfo: UploadInfo;
  selectedFiles: FileList
  currentFileUpload: File

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  onUpload() {
    console.log(this.form);

    this.uploadInfo = new UploadInfo(
      this.form.uploadfile,
      this.form.caption);

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadInfo.uploadFile = this.currentFileUpload;  

    this.uploadService.pushFileToStorage(this.uploadInfo).subscribe(
      data => {
        console.log('data:::: ' + data);
      },
      error => {
        console.log('error:::: ' + error);
      }
    );
  }

}
