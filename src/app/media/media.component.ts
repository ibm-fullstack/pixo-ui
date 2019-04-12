import { Component, OnInit } from '@angular/core';
import { MediaInfo } from '../media/media-info';
import { MediaService } from '../services/media.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  errorMessage: string;
  mediaList: any;

  constructor(private mediaService: MediaService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.mediaService.getMyMedia().subscribe(
      data => {
        console.log(data);
        this.mediaList = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }

}
