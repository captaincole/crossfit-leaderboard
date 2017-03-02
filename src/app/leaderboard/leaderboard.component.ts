import { Component, OnInit } from '@angular/core';
import { AthletesService } from '../athletes.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/throttleTime';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  public data: Observable<any>;
  public limit = 10;
  public page = 1;
  public name;
  public nameInput: Subject<any>;
  public affiliateInput: Subject<any>;
  public affiliate;
  public division;
  public occupation;
  public region;
  public loading = false;

  constructor(public athletes: AthletesService) {
    this.nameInput = new Subject<any>();
    this.affiliateInput = new Subject<any>();
  }

  ngOnInit() {
    this.data = this.athletes.getAthletes(10, 0, null, null);
    this.nameInput.throttleTime(200).subscribe( (val) => {
        console.log('Name Trigger: ' , val);
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
    console.log('Name: ' , name);
    this.nameInput.next(name);
  }

  searchAffiliate(afid) {
    this.page = 1;
    this.affiliate = afid;
    this.affiliateInput.next(afid);
  }

  changePage(pageNum) {
    let newPage = parseInt(pageNum, 10);
    if (newPage >= 1) {
      this.page = newPage;
      this.data = this.athletes.getAthletes(this.limit, this.limit * (pageNum - 1), this.name, this.affiliate, this.division, this.occupation, this.region);
    } else {
      this.page = this.page;
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

  downloadItunes() {
    window.location.href = 'https://itunes.apple.com/us/app/38plank-workouts-to-reach/id1155623794?mt=8';
  }

  downloadGoogle() {
    window.location.href = 'https://play.google.com/store/apps/developer?id=38Plank';
  }
}
