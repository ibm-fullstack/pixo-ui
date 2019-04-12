import { Injectable } from '@angular/core';
import { Progress } from './progress.service';

@Injectable()
export class Bd {

  constructor(private progressService: Progress) { }

}
