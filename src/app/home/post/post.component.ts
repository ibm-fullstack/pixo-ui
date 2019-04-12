import { Component, OnInit } from '@angular/core';
import { Bd } from '../../bd.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public email: string;
  public post: any;

  constructor(private bd: Bd) { }

  ngOnInit() {
  }

  public updateTimeLine(): void {
  }

}
