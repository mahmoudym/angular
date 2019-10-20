import { Component, OnInit } from '@angular/core';
import { SortService } from '../services/sort.service';

@Component({
  selector: 'app-tp',
  templateUrl: './tp.component.html',
  styleUrls: ['./tp.component.css']
})
export class TpComponent implements OnInit {
  numbers = [2,5,3,1,4]

  constructor() {
  }

  ngOnInit() {
  }

}
