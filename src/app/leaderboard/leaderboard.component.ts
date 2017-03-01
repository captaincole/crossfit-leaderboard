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
  public page = 1;
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
    this.page = 1;
    this.name = name;
    this.data = this.athletes.getAthletes(this.limit, 0, this.name, this.affiliate, this.division, this.occupation, this.region);
  }

  searchAffiliate(affName) {
    this.page = 1;
    this.affiliate = affName;
    this.data = this.athletes.getAthletes(this.limit, 0, this.name, this.affiliate, this.division, this.occupation, this.region);
  }

  changePage(pageNum) {
    if (pageNum >= 1) {
      this.page = pageNum;
      this.data = this.athletes.getAthletes(this.limit, this.limit * (pageNum - 1), this.name, this.affiliate, this.division, this.occupation, this.region);
    }
  }

  changeDivision(division) {
    this.page = 1;
    this.division = parseInt(division, 10);
    this.data = this.athletes.getAthletes(this.limit, 0, this.name, this.affiliate, this.division, this.occupation, this.region);
  }

  changeOccupation(occupationNum) {
    this.page = 1;
    this.occupation = occupationNum;
    this.data = this.athletes.getAthletes(this.limit, 0, this.name, this.affiliate, this.division, this.occupation, this.region);
  }

  changeRegion(region) {
    this.region = parseInt(region, 10);
    this.page = 1;
    this.data = this.athletes.getAthletes(this.limit, 0, this.name, this.affiliate, this.division, this.occupation, this.region);
  }

  backPage() {
    if (this.page > 1) {
      this.changePage(this.page - 1);
    }
  }

  nextPage() {
    this.changePage(this.page + 1);
  }
}
