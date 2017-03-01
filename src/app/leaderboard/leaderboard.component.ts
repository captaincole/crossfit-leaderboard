import { Component, OnInit } from '@angular/core';
import { AthletesService } from '../athletes.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  public data;
  public limit = 10;
  public offset = 0;
  public name;
  public affiliate;
  public division;
  public occupation;
  public region;

  constructor(public athletes: AthletesService) { }

  ngOnInit() {
    this.data = this.athletes.getAthletes(10, 0, null, null);
  }

  changeLimit(num) {
    this.limit = parseInt(num, 10);
    this.data = this.athletes.getAthletes(this.limit, 0, this.name, this.affiliate);
  }

  searchNames(name) {
    this.name = name;
    this.data = this.athletes.getAthletes(this.limit, 0, this.name, this.affiliate);
  }

  searchAffiliate(affName) {
    this.affiliate = affName;
    this.data = this.athletes.getAthletes(this.limit, 0, this.name, this.affiliate);
  }

  changePage(pageNum) {
    this.data = this.athletes.getAthletes(this.limit, this.limit * (pageNum - 1), this.name, this.affiliate);
  }

  changeDivision(division) {
    this.offset = 0;
    this.division = parseInt(division, 10);
    this.data = this.athletes.getAthletes(this.limit, 0, this.name, this.affiliate, this.division);
  }

  changeOccupation(occupationNum) {
    this.offset = 0;
    this.occupation = occupationNum;
    this.data = this.athletes.getAthletes(this.limit, 0, this.name, this.affiliate, this.division, this.occupation);
  }

  changeRegion(region) {
    this.region = parseInt(region, 10);
    this.offset = 0;
    this.data = this.athletes.getAthletes(this.limit, 0, this.name, this.affiliate, this.division, this.occupation, this.region);
  }
}
