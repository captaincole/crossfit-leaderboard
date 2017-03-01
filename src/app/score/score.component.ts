import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() athlete;
  @Input() position;
  constructor() { }

  ngOnInit() {
    console.log('Athlete Recieved');
  }

}
