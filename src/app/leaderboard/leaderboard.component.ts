import { Component, OnInit } from '@angular/core';
import { AthletesService } from '../athletes.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/throttleTime';

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
  public nameInput: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public affiliateInput: BehaviorSubject<any> = new BehaviorSubject('');
  public affiliate;
  public division;
  public occupation;
  public region;
  public loading = false;

  constructor(public athletes: AthletesService) { }

  ngOnInit() {
    this.data = this.athletes.getAthletes(10, 0, null, null);
    this.nameInput.throttleTime(200).subscribe( (val) => {
        this.data = this.athletes.getAthletes(this.limit, 0, this.name, this.affiliate, this.division, this.occupation, this.region);
    });
    this.affiliateInput.throttleTime(200).subscribe( (val) => {
        this.data = this.athletes.getAthletes(this.limit, 0, this.name, this.affiliate, this.division, this.occupation, this.region);
    });
  }

  changeLimit(num) {
    this.limit = parseInt(num, 10);
    this.data = this.athletes.getAthletes(this.limit, 0, this.name, this.affiliate, this.division, this.occupation, this.region);
  }

  searchNames(name) {
    this.page = 1;
    this.name = name;
    this.nameInput.next(name);
  }

  searchAffiliate(afid) {
    this.page = 1;
    this.affiliate = afid;
    this.affiliateInput.next(afid);
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

  goToSite() {
    window.location.href = 'http://www.38plank.com';
  }
}
