import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-extra-data]',
  templateUrl: './extra-data.component.html',
  styleUrls: ['./extra-data.component.css']
})
export class ExtraDataComponent implements OnInit {
  @Input() athlete;
  constructor() { }

  ngOnInit() {
  }

}
