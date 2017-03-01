import { Component, OnInit } from '@angular/core';
import { AthletesService } from '../athletes.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  public data;

  constructor(public athletes: AthletesService) { }

  ngOnInit() {
    this.data = this.athletes.getAthletes(2);
  }

}
