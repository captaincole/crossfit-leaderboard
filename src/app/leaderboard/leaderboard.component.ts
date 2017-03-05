import { Component, OnInit } from '@angular/core';
import { AthletesService } from '../athletes.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/throttleTime';

declare var ga: any;

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  public data: Array<any>;
  public limit = 10;
  public page = 1;
  public name;
  public nameInput: Subject<any>;
  public affiliateInput: Subject<any>;
  public affiliate;
  public division;
  public occupation;
  public region;
  public minage: number = 18;
  public maxage: number = 80;
  public loading = false;
  public moreData: any = {};
  public showAdvanced: boolean = false;
  public minweight: number;
  public maxweight: number;
  public minheight: number;
  public maxheight: number;

  constructor(public athletes: AthletesService) {
    this.nameInput = new Subject<any>();
    this.affiliateInput = new Subject<any>();
  }

  ngOnInit() {
    this.loading = true;
    this.athletes.getAthletes(10, 0, null, null).subscribe( (list) => {
      this.data = list;
      this.loading = false;
    });
    this.nameInput.throttleTime(200).subscribe( (val) => {
        console.log('Name Trigger: ' , val);
        this.athletes.getAthletes(this.limit, 0, this.name,
         this.affiliate, this.division,
         this.occupation, this.region,
         this.minage, this.maxage).subscribe( (list) => {
          this.data = list;
          this.loading = false;
        });
    });
    this.affiliateInput.throttleTime(200).subscribe( (val) => {
        this.athletes.getAthletes(this.limit, 0, this.name,
         this.affiliate, this.division,
          this.occupation, this.region,
          this.minage, this.maxage).subscribe( (list) => {
          this.data = list;
          this.loading = false;
        });
    });
  }

  reloadData() {
    if (this.showAdvanced) {
        this.athletes.getAthletes(this.limit, this.limit * (this.page - 1), this.name,
         this.affiliate, this.division,
          this.occupation, this.region,
          this.minage, this.maxage,
          this.minweight, this.maxweight,
          this.minheight, this.maxheight).subscribe( (list) => {
          this.data = list;
          this.loading = false;
        }); 
    } else {
      this.athletes.getAthletes(this.limit, this.limit * (this.page - 1), this.name,
         this.affiliate, this.division,
          this.occupation, this.region,
          this.minage, this.maxage).subscribe( (list) => {
          this.data = list;
          this.loading = false;
        });
    }
  }

  changeLimit(num) {
    this.moreData = {};
    this.loading = true;
    this.limit = parseInt(num, 10);
    this.reloadData();
  }

  searchNames(name) {
    this.moreData = {};
    this.loading = true;
    this.page = 1;
    this.name = name;
    console.log('Name: ' , name);
    this.nameInput.next(name);
  }

  searchAffiliate(afid) {
    this.moreData = {};
    this.loading = true;
    this.page = 1;
    this.affiliate = afid;
    this.affiliateInput.next(afid);
  }

  changePage(pageNum) {
    let newPage = parseInt(pageNum, 10);
    if (newPage >= 1) {
      this.moreData = {};
      this.loading = true;
      this.page = newPage;
      this.reloadData();
    } else {
      this.page = this.page;
    }
  }

  changeDivision(division) {
    this.moreData = {};
    this.loading = true;
    this.page = 1;
    this.division = parseInt(division, 10);
    this.reloadData();
  }

  changeOccupation(occupationNum) {
    this.moreData = {};
    this.loading = true;
    this.page = 1;
    this.occupation = occupationNum;
    this.reloadData();
  }

  changeRegion(region) {
    this.moreData = {};
    this.loading = true;
    this.region = parseInt(region, 10);
    this.page = 1;
    this.reloadData();
  }

  backPage() {
    if (this.page > 1) {
      this.changePage(this.page - 1);
    }
  }

  nextPage() {
    this.changePage(this.page + 1);
  }

  showMoreData(index) {
    if (this.moreData[index]) {
      this.moreData[index] = false;
    } else {
      this.moreData[index] = true;
    }
  }

  changeMinAge(val) {
    this.loading = true;
    this.minage = parseInt(val, 10);
    this.page = 1;
    this.reloadData();
  }

  changeMaxAge(val) {
    this.loading = true;
    this.maxage = parseInt(val, 10);
    this.page = 1;
    this.reloadData();
  }

  changeMinWeight(val) {
    this.loading = true;
    this.minweight = parseInt(val, 10);
    this.page = 1;
    this.reloadData();
  }
  
  changeMaxWeight(val) {
    this.loading = true;
    this.maxweight = parseInt(val, 10);
    this.page = 1;
    this.reloadData();
  }

  changeMinHeight(val) {
    this.loading = true;
    this.minheight = parseInt(val, 10);
    this.page = 1;
    this.reloadData();
  }

  changeMaxHeight(val) {
    this.loading = true;
    this.maxheight = parseInt(val, 10);
    this.page = 1;
    this.reloadData();
  }

  showAdvancedFilters(val) {
    if (val === false) {
      this.showAdvanced = false;
    } else {
      this.showAdvanced = true;
    }
  }


  goToSite() {
    window.location.href = 'http://www.38plank.com';
  }

  downloadItunes() {
      ga('send', 'event', {
        eventCategory: 'Download Redirect',
        eventAction: 'Click',
        eventLabel: 'Itunes'
      });
    window.open('https://itunes.apple.com/us/app/38plank-workouts-to-reach/id1155623794?mt=8');
  }

  downloadGoogle() {
      ga('send', 'event', {
        eventCategory: 'Download Redirect',
        eventAction: 'Click',
        eventLabel: 'Android'
      });
    window.open('https://play.google.com/store/apps/developer?id=38Plank');
  }
}
