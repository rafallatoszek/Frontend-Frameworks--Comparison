import { Component, OnInit } from '@angular/core';
import data from '../../../../../data/data.json';

@Component({
  selector: 'app-bulk-data',
  templateUrl: './bulk-data.component.html',
  styleUrls: ['./bulk-data.component.scss']
})
export class BulkDataComponent implements OnInit {

  public list: any = data;

  constructor() { }

  ngOnInit(): void {
  }

}
