webpackJsonp([1,4],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AthletesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AthletesService = (function () {
    function AthletesService(http) {
        this.http = http;
    }
    AthletesService.prototype.getAthletes = function (limit, offset, name, affiliate, division, occupation, region, rank, minage, maxage, minweight, maxweight, minheight, maxheight) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        if (name) {
            params.set('name', JSON.stringify(name));
        }
        if (affiliate) {
            params.set('affiliateid', JSON.stringify(affiliate));
        }
        if (division && division !== 0) {
            params.set('division', JSON.stringify(division));
        }
        if (occupation) {
            params.set('occupation', JSON.stringify(occupation));
        }
        if (region) {
            params.set('region', JSON.stringify(region));
        }
        if (rank) {
            params.set('sortby', rank);
        }
        if (minage) {
            params.set('minage', JSON.stringify(minage));
        }
        if (maxage) {
            params.set('maxage', JSON.stringify(maxage));
        }
        if (minweight) {
            params.set('minweight', JSON.stringify(minweight));
        }
        if (maxweight) {
            params.set('maxweight', JSON.stringify(maxweight));
        }
        if (minheight) {
            params.set('minheight', JSON.stringify(minheight));
        }
        if (maxheight) {
            params.set('maxheight', JSON.stringify(maxheight));
        }
        params.set('offset', JSON.stringify(offset));
        params.set('limit', JSON.stringify(limit));
        return this.http.get('/api', { search: params }).map(function (res) {
            return res.json().data;
        });
    };
    AthletesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], AthletesService);
    return AthletesService;
    var _a;
}());
//# sourceMappingURL=/Users/timludik/Projects/Personal/crossfit-leaderboard/src/athletes.service.js.map

/***/ }),

/***/ 493:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 493;


/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(651);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/timludik/Projects/Personal/crossfit-leaderboard/src/main.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'App';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(814),
            styles: [__webpack_require__(810)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/timludik/Projects/Personal/crossfit-leaderboard/src/app.component.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__leaderboard_leaderboard_component__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__score_score_component__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__athletes_service__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__extra_data_extra_data_component__ = __webpack_require__(652);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var routes = [];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__leaderboard_leaderboard_component__["a" /* LeaderboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__score_score_component__["a" /* ScoreComponent */],
                __WEBPACK_IMPORTED_MODULE_11__extra_data_extra_data_component__["a" /* ExtraDataComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__athletes_service__["a" /* AthletesService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/timludik/Projects/Personal/crossfit-leaderboard/src/app.module.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtraDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExtraDataComponent = (function () {
    function ExtraDataComponent() {
    }
    ExtraDataComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], ExtraDataComponent.prototype, "athlete", void 0);
    ExtraDataComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: '[app-extra-data]',
            template: __webpack_require__(815),
            styles: [__webpack_require__(811)]
        }), 
        __metadata('design:paramtypes', [])
    ], ExtraDataComponent);
    return ExtraDataComponent;
}());
//# sourceMappingURL=/Users/timludik/Projects/Personal/crossfit-leaderboard/src/extra-data.component.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__athletes_service__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_throttleTime__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_throttleTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_throttleTime__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeaderboardComponent = (function () {
    function LeaderboardComponent(athletes, route) {
        this.athletes = athletes;
        this.route = route;
        this.limit = 10;
        this.page = 1;
        this.minage = 18;
        this.maxage = 80;
        this.loading = false;
        this.moreData = {};
        this.showAdvanced = false;
        this.nameInput = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.affiliateInput = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.route.queryParams.subscribe(function (params) {
            _this.name = params['name']
                ? params['name'].split(',')
                : '';
            _this.reloadData();
        });
        this.athletes.getAthletes(10, 0, this.name, null).subscribe(function (list) {
            _this.data = list;
            _this.loading = false;
        });
        this.nameInput.throttleTime(200).subscribe(function (val) {
            console.log('Name Trigger: ', val);
            _this.reloadData();
        });
        this.affiliateInput.throttleTime(200).subscribe(function (val) {
            _this.reloadData();
        });
    };
    LeaderboardComponent.prototype.reloadData = function () {
        var _this = this;
        if (this.showAdvanced) {
            this.athletes.getAthletes(this.limit, this.limit * (this.page - 1), this.name, this.affiliate, this.division, this.occupation, this.region, this.ranking, this.minage, this.maxage, this.minweight, this.maxweight, this.minheight, this.maxheight).subscribe(function (list) {
                _this.data = list;
                _this.loading = false;
            });
        }
        else {
            this.athletes.getAthletes(this.limit, this.limit * (this.page - 1), this.name, this.affiliate, this.division, this.occupation, this.region, this.ranking, this.minage, this.maxage).subscribe(function (list) {
                _this.data = list;
                _this.loading = false;
            });
        }
    };
    LeaderboardComponent.prototype.changeLimit = function (num) {
        this.moreData = {};
        this.loading = true;
        this.limit = parseInt(num, 10);
        this.reloadData();
    };
    LeaderboardComponent.prototype.searchNames = function (nameList) {
        this.moreData = {};
        this.loading = true;
        this.page = 1;
        this.name = nameList.split(',');
        console.log('Name: ', nameList);
        this.nameInput.next(nameList);
    };
    LeaderboardComponent.prototype.searchAffiliate = function (afidList) {
        this.moreData = {};
        this.loading = true;
        this.page = 1;
        this.affiliate = afidList.split(',');
        this.affiliateInput.next(afidList);
    };
    LeaderboardComponent.prototype.changePage = function (pageNum) {
        var newPage = parseInt(pageNum, 10);
        if (newPage >= 1) {
            this.moreData = {};
            this.loading = true;
            this.page = newPage;
            this.reloadData();
        }
        else {
            this.page = this.page;
        }
    };
    LeaderboardComponent.prototype.changeDivision = function (division) {
        this.moreData = {};
        this.loading = true;
        this.page = 1;
        this.division = parseInt(division, 10);
        this.reloadData();
    };
    LeaderboardComponent.prototype.changeOccupation = function (occupationNum) {
        this.moreData = {};
        this.loading = true;
        this.page = 1;
        this.occupation = occupationNum;
        this.reloadData();
    };
    LeaderboardComponent.prototype.changeRegion = function (region) {
        this.moreData = {};
        this.loading = true;
        this.region = parseInt(region, 10);
        this.page = 1;
        this.reloadData();
    };
    LeaderboardComponent.prototype.changeRanking = function (rank) {
        this.ranking = rank;
        this.loading = true;
        this.page = 1;
        this.reloadData();
    };
    LeaderboardComponent.prototype.backPage = function () {
        if (this.page > 1) {
            this.changePage(this.page - 1);
        }
    };
    LeaderboardComponent.prototype.nextPage = function () {
        this.changePage(this.page + 1);
    };
    LeaderboardComponent.prototype.showMoreData = function (index) {
        if (this.moreData[index]) {
            this.moreData[index] = false;
        }
        else {
            this.moreData[index] = true;
        }
    };
    LeaderboardComponent.prototype.changeMinAge = function (val) {
        this.loading = true;
        this.minage = parseInt(val, 10);
        this.page = 1;
        this.reloadData();
    };
    LeaderboardComponent.prototype.changeMaxAge = function (val) {
        this.loading = true;
        this.maxage = parseInt(val, 10);
        this.page = 1;
        this.reloadData();
    };
    LeaderboardComponent.prototype.changeMinWeight = function (val) {
        this.loading = true;
        this.minweight = parseFloat(val);
        this.page = 1;
        this.reloadData();
    };
    LeaderboardComponent.prototype.changeMaxWeight = function (val) {
        this.loading = true;
        this.maxweight = parseFloat(val);
        this.page = 1;
        this.reloadData();
    };
    LeaderboardComponent.prototype.changeMinHeight = function (val) {
        this.loading = true;
        this.minheight = parseFloat(val);
        this.page = 1;
        this.reloadData();
    };
    LeaderboardComponent.prototype.changeMaxHeight = function (val) {
        this.loading = true;
        this.maxheight = parseFloat(val);
        this.page = 1;
        this.reloadData();
    };
    LeaderboardComponent.prototype.showAdvancedFilters = function (val) {
        if (val === false) {
            this.showAdvanced = false;
        }
        else {
            this.showAdvanced = true;
        }
    };
    LeaderboardComponent.prototype.goToSite = function () {
        window.location.href = 'http://www.38plank.com';
    };
    LeaderboardComponent.prototype.downloadItunes = function () {
        ga('send', 'event', {
            eventCategory: 'Download Redirect',
            eventAction: 'Click',
            eventLabel: 'Itunes'
        });
        window.open('https://itunes.apple.com/us/app/38plank-workouts-to-reach/id1155623794?mt=8');
    };
    LeaderboardComponent.prototype.downloadGoogle = function () {
        ga('send', 'event', {
            eventCategory: 'Download Redirect',
            eventAction: 'Click',
            eventLabel: 'Android'
        });
        window.open('https://play.google.com/store/apps/developer?id=38Plank');
    };
    LeaderboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-leaderboard',
            template: __webpack_require__(816),
            styles: [__webpack_require__(812)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__athletes_service__["a" /* AthletesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__athletes_service__["a" /* AthletesService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], LeaderboardComponent);
    return LeaderboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/timludik/Projects/Personal/crossfit-leaderboard/src/leaderboard.component.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScoreComponent = (function () {
    function ScoreComponent() {
        this.moreData = false;
    }
    ScoreComponent.prototype.ngOnInit = function () {
        console.log('Athlete Recieved');
    };
    ScoreComponent.prototype.getMoreData = function () {
        this.moreData = !this.moreData;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], ScoreComponent.prototype, "athlete", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], ScoreComponent.prototype, "position", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], ScoreComponent.prototype, "moreData", void 0);
    ScoreComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: '[app-score]',
            template: __webpack_require__(817),
            styles: [__webpack_require__(813)]
        }), 
        __metadata('design:paramtypes', [])
    ], ScoreComponent);
    return ScoreComponent;
}());
//# sourceMappingURL=/Users/timludik/Projects/Personal/crossfit-leaderboard/src/score.component.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/timludik/Projects/Personal/crossfit-leaderboard/src/environment.js.map

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = ".leaderboard-header {\n    width: 100%;\n    text-align: center;\n    font-family: 'Roboto', sans-serif;\n    margin-top: 5px;\n}\n\n.header {\n    text-align: center;\n    color: slategrey;\n    width: 100%;\n    margin: auto;\n    padding: 5px;\n}\n\n.num {\n    color: #06D3CA;\n}\n\n.reg {\n    font-weight: normal;\n    font-size: 26px;\n}\n\n.logo {\n    font-family: 'Avenir Next';\n    font-weight: bold;\n    font-size: 28px;\n    color: #314655;\n}\n\n.leaderboard-options {\n    margin-bottom: 10px;\n}\n\n.subheader {\n    font-family: 'Avenir Next';\n    font-weight: bold;\n    width: 100%;\n    margin-top: 10px;\n    color: #314655;\n    letter-spacing: -2px;\n    border-bottom: 1px solid #314655;\n    font-size: 20px;\n}\n\n.container .score {\n    display: table-row;\n}\n.container .moredata {\n    display: table-row;\n}\n\n.left-header {\n    float: left;\n    margin-left: 20px;\n}\n\n.right-header {\n    float: right;\n}\n\n.right-header a {\n    display: inline;\n    padding-left: 10px;\n}\n.subheader .number {\n    color: #06D3CA;\n}\n\n.min-age-slider {\n    display: block;\n    width: 100%;\n}\n\n.max-age-slider {\n    display: block;\n    width: 100%;\n}\n\ntable {\n    border: 1px solid #EEEEEE;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n}\n\n.pagination {\n    width: 100%;\n    text-align: center;\n}\n\n.pagination a {\n    padding: 0px 5px;\n    color: #337ab7;\n}\n.option label {\n    padding-top: 5px;\n    display: block;\n}\n.option input {\n    width: 100%;\n}\n\n.option select {\n    width: 100%;\n}\n\nlabel {\n    padding-top: 5px;\n}\n\n.show-advanced {\n    width: 150px;\n    display: inline;\n}\n\n.data-loading {\n    margin: auto;\n    margin-bottom: -150px;\n    padding-top: 100px;\n}\n\n.page-input {\n    width: 4em;\n}\n.gotopage {\n    display: inline-block;\n}\n\n.footer {\n    text-align: center;\n    color: slategrey;\n    width: 100%;\n    margin: auto;\n    padding: 5px;\n}\n\n.footer .text {\n    display: block;\n}\n.footer .download img {\n    display: inline;\n    margin: 0;\n}"

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = "<app-leaderboard></app-leaderboard>\n\n"

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = "<td colspan=\"8\" class=\"container\">\n  <div class=\"athleteid col-xs-6 col-sm-4\">\n    Athlete Id: {{athlete.userid}}\n  </div>\n  <div class=\"affiliateid col-xs-6 col-sm-4\">\n    Affiliate: {{athlete.affiliateid}}\n  </div>\n  <div class=\"age col-xs-6 col-sm-4\">\n    Age: {{athlete.age}}\n  </div>\n  <div class=\"height col-xs-6 col-sm-4\">\n    Height: {{athlete.height}}\n  </div>\n  <div class=\"weight col-xs-6 col-sm-4\">\n    Weight: {{athlete.weight}}\n  </div>\n  <div class=\"region-rank col-xs-6 col-sm-4\">\n    Region Rank: {{athlete.regionalrank}}\n  </div>  \n  <div class=\"region-rank col-xs-6 col-sm-4\">\n    Worldwide Rank: {{athlete.overallrank}}\n  </div>\n</td>"

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"header\">\n    <div class=\"download\">\n      <div class=\"logo\"><span class=\"num\">38</span>Plank<span class=\"reg\">: Workouts to reach your fitness goals</span></div>\n      <div class=\"text\">Want to improve your scores next year? Download the 38Plank to discover new workouts, log your training, and compete with friends</div>\n      <img (click)=\"downloadItunes()\" src=\"assets/appstoredownload.png\" width=\"120px\" height=\"40px\">\n      <img (click)=\"downloadGoogle()\" src=\"assets/googleplaydownload.png\" width=\"120px\" height=\"57px\">\n    </div>\n  </div>\n<h2 class=\"leaderboard-header\">\n  CrossFit Open 2017 Leaderboard\n</h2>\n<div class=\"leaderboard-options container\">\n  <div class=\"row\">\n    <div class=\"option col-sm-3\">\n      <label for=\"limit-input\">Number of Results</label>\n      <select class=\"limit-input form-control\" name=\"limit-input\" (change)=\"changeLimit($event.target.value)\">\n        <option selected value=\"10\">10</option>\n        <option value=\"25\">25</option>\n        <option value=\"50\">50</option>\n      </select>\n    </div>\n    <div class=\"option col-sm-3\">\n      <label for=\"division-input\">Division</label>\n      <select class=\"division-input form-control\" name=\"division-input\" (change)=\"changeDivision($event.target.value)\">\n        <option selected value=\"0\">Both</option>\n        <option value=\"1\">Individual Men</option>\n        <option value=\"2\">Individual Women</option>\n        <option value=\"15\">Teenage Girls (14-15)</option>\n        <option value=\"14\">Teenage Boys (14-15)</option>\n        <option value=\"17\">Teenage Girls (16-17)</option>\n        <option value=\"16\">Teenage Boys (16-17)</option>\n        <option value=\"19\">Masters Women (35-39)</option>\n        <option value=\"18\">Masters Men (35-39)</option>\n        <option value=\"13\">Masters Women (40-44)</option>\n        <option value=\"12\">Masters Men (40-44)</option>\n        <option value=\"4\">Masters Women (45-49)</option>\n        <option value=\"3\">Masters Men (45-49)</option>\n        <option value=\"6\">Masters Women (50-54)</option>\n        <option value=\"5\">Masters Men (50-54)</option>\n        <option value=\"8\">Masters Women (55-59)</option>\n        <option value=\"7\">Masters Men (55-59)</option>\n        <option value=\"10\">Masters Women (60+)</option>\n        <option value=\"9\">Masters Men (60+)</option>\n      </select>\n    </div>\n    <div class=\"option col-sm-3\">\n      <label for=\"region-input\">Region</label>\n      <select class=\"region-input form-control\" name=\"region-input\" (change)=\"changeRegion($event.target.value)\">\n        <option selected value=\"0\">Worldwide</option>\n        <option value=\"1\">Africa</option>\n        <option value=\"2\">Asia</option>\n        <option value=\"3\">Australia</option>\n        <option value=\"4\">Canada East</option>\n        <option value=\"5\">Canada West</option>\n        <option value=\"6\">Central East</option>\n        <option value=\"7\">Europe</option>\n        <option value=\"8\">Latin America</option>\n        <option value=\"9\">Mid Atlantic</option>\n        <option value=\"10\">North Central</option>\n        <option value=\"11\">North East</option>\n        <option value=\"12\">Northern California</option>\n        <option value=\"13\">North West</option>\n        <option value=\"14\">South Central</option>\n        <option value=\"15\">South East</option>\n        <option value=\"16\">Southern California</option>\n        <option value=\"17\">South West</option>\n      </select>\n    </div>\n    <div class=\"option col-sm-3\">\n      <label for=\"region-input\">Rank By</label>\n      <select class=\"region-input form-control\" name=\"region-input\" (change)=\"changeRanking($event.target.value)\">\n        <option selected value=\"world\">Worldwide</option>\n        <option value=\"region\">Region Rank</option>\n        <option value=\"workout1\">17.1</option>\n        <option value=\"workout2\">17.2</option>\n        <option value=\"workout3\">17.3</option>\n        <option value=\"workout4\">17.4</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"option col-sm-6\">\n      <label for=\"name\">Athlete Name</label>\n      <input name=\"name\" [(ngModel)]=\"name\" class=\"name-input form-control\" (keyup)=\"searchNames($event.target.value)\" type=\"text\">\n    </div>\n    <div class=\"option col-sm-6\">\n      <label for=\"affiliate\">Affiliate</label>\n      <input name=\"affiliate\" class=\"name-input form-control\" (keyup)=\"searchAffiliate($event.target.value)\" type=\"text\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"min-age col-sm-6\">\n      <label> Min Age: {{minage}} </label>\n      <md-slider (change)=\"changeMinAge($event.value)\" class=\"min-age-slider\" thumbLabel=\"true\" min=\"18\" max=\"80\" step=\"1\" value=\"18\" tickInterval=\"10\"></md-slider>\n    </div>\n    <div class=\"max-age col-sm-6\">\n      <label> Max Age: {{maxage}} </label>\n      <md-slider (change)=\"changeMaxAge($event.value)\" class=\"max-age-slider\" thumbLabel=\"true\" min=\"18\" max=\"80\" step=\"1\" value=\"80\" tickInterval=\"10\"></md-slider>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <label> Show Advanced Filters</label>\n      <md-slide-toggle class=\"show-advanced\" (change)=\"showAdvancedFilters($event.checked)\"></md-slide-toggle>\n    </div>\n  </div>\n</div>\n<div class=\"container advanced-filters\" *ngIf=\"showAdvanced\">\n  <div class=\"row\">\n    <div class=\"min-heigh col-sm-6\">\n      <label> Min Height (ft): {{minheight}} </label>\n      <md-slider (change)=\"changeMinHeight($event.value)\" class=\"min-age-slider\" thumbLabel=\"true\" min=\"4\" max=\"7\" step=\".1\" value=\"5\" tickInterval=\".5\"></md-slider>\n    </div>\n    <div class=\"max-height col-sm-6\">\n      <label> Max Height (ft): {{maxheight}} </label>\n      <md-slider (change)=\"changeMaxHeight($event.value)\" class=\"max-age-slider\" thumbLabel=\"true\" min=\"4\" max=\"7\" step=\".1\" value=\"7\" tickInterval=\".5\"></md-slider>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"min-age col-sm-6\">\n      <label> Min Weight (lbs): {{minweight}} </label>\n      <md-slider (change)=\"changeMinWeight($event.value)\" class=\"min-age-slider\" thumbLabel=\"true\" min=\"100\" max=\"350\" step=\"5\" value=\"100\" tickInterval=\"20\"></md-slider>\n    </div>\n    <div class=\"max-age col-sm-6\">\n      <label> Max Weight (lbs): {{maxweight}} </label>\n      <md-slider (change)=\"changeMaxWeight($event.value)\" class=\"max-age-slider\" thumbLabel=\"true\" min=\"100\" max=\"350\" step=\"5\" value=\"300\" tickInterval=\"20\"></md-slider>\n    </div>\n  </div>\n</div>\n<md-spinner *ngIf=\"loading\" color=\"primary\" style=\"margin: auto;margin-bottom: -150px;margin-top: 100px;\"></md-spinner>\n<table class=\"table table-striped table-hover\">\n  <thead>\n    <tr>\n      <th class=\"number\">Position</th>\n      <th class=\"text\">Name</th>\n      <th class=\"text\">Region</th>\n      <th class=\"text\">Affiliate Id</th>\n      <th class=\"text\">17.1</th>\n      <th class=\"text\">17.2</th>\n      <th class=\"text\">17.3</th>\n      <th class=\"text\">17.4</th>\n    </tr>\n  </thead>\n  <tbody *ngFor=\"let athlete of data; let i = index;\" >\n    <tr app-score class=\"score\"\n      [moreData]=\"moreData[i]\"\n      [position]=\"i + (limit * (page -1)) + 1\"\n      [athlete]=\"athlete\" (click)=\"showMoreData(i)\"></tr>\n    <tr app-extra-data class=\"moreData\" [hidden]=\"!moreData[i]\" [athlete]=\"athlete\">\n    </tr>\n  </tbody>\n</table>\n  <div class=\"pagination\">\n    <button class=\"first btn btn-primary\" (click)=\"changePage(1)\">First</button>\n    <button class=\"previous btn btn-primary\" (click)=\"backPage()\">Previous</button>\n    <div class=\"gotopage\">\n      <label for=\"gotopage\">Go To Page</label>\n      <input class=\"form-control page-input\" (keyup)=\"changePage($event.target.value)\" type=\"number\" [value]=\"page\">\n    </div>\n    <button class=\"previous btn btn-primary\" (click)=\"nextPage()\">Next</button>\n  </div>\n  <div class=\"footer\">\n    <div>Data Updated: Tuesday March 21st 2:00PM PCT</div>\n    <div>Questions or comments? Email me at andrew@38plank.com . This leaderboard is an open-source project, and you can contribute by going to https://github.com/thielCole/crossfit-leaderboard</div>\n    <div class=\"contributers\">\n      Contributers: @pmobrien, @thielcole\n    </div>\n  </div>\n"

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = "\n<th scope=\"row\">{{position}} \n  <i *ngIf=\"!moreData\" class=\"fa fa-caret-right fa-lg\"></i>\n  <i *ngIf=\"moreData\" class=\"fa fa-caret-down fa-lg\"></i>\n</th>\n<td class=\"text\">{{athlete.name}}</td>\n<td class=\"text\">{{athlete.region}}</td>\n<td class=\"text\">{{athlete.affiliateid}}</td>\n<td class=\"text\">{{athlete.scores[0]?.scoredisplay}}</td>\n<td class=\"text\">{{athlete.scores[1]?.scoredisplay}}</td>\n<td class=\"text\">{{athlete.scores[2]?.scoredisplay}}</td>\n<td class=\"text\">{{athlete.scores[3]?.scoredisplay}}</td>\n"

/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(494);


/***/ })

},[863]);
//# sourceMappingURL=main.bundle.map