import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Bd } from './../../bd.service';
import { Progress } from './../../progress.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-includes-post',
  templateUrl: './includes-post.component.html',
  styleUrls: ['./includes-post.component.css']
})
export class IncludePostComponent implements OnInit {

  public email: string;
  private imagem: any;
  public progress = 'pending';
  public percentageUpload: number;

  @Output() public updateTimeLine: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup = new FormGroup({
    'title': new FormControl(null)
  });

  constructor(private bd: Bd, private progressService: Progress) { }

  ngOnInit() {
  }

  public toPost(): void {


  }

  public prepareImageUpload(event: Event): void {
    this.imagem = (<HTMLInputElement>event.target).files;
  }

}
