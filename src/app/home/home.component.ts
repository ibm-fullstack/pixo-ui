import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('post') public posts: any;

  constructor() { }

  ngOnInit() {
  }

  public updateTimeLine(): void {
    this.posts.updateTimeLine();
  }

}
