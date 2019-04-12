import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserBoardInfo } from "./userboard.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  board: any;
  errorMessage: string;
  id: string;
  message: string;
  displayedColumns: string[] = ['mentor', 'skill', 'status', 'progress', 'action'];
  userBoardInfoTable : UserBoardInfo[] = [];
  userBoardInfoTableDataSource: any;
  trainingStatus = [ 'ALL', 'PROPOSED', 'CONFIRMED', 'STARTED', 'COMPLETED'];
  selected : string;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {

  }
}
