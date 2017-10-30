webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrazniciProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrazniciProvider = (function () {
    function PrazniciProvider() {
    }
    /**
     * Algorithm for calculation of the Orthodox Easter. Accurate till 2400
     *
     * @param {any} year
     * @returns {Date}
     * @memberof PrazniciProvider
     */
    PrazniciProvider.prototype.getVeligden = function (year) {
        if (this.veligdenDatum && this.veligdenDatum.getFullYear() === year) {
            return this.veligdenDatum;
        }
        else {
            var a = year % 19;
            var b = year % 7;
            var c = year % 4;
            var d = (19 * a + 16) % 30;
            var e = (2 * c + 4 * b + 6 * d) % 7;
            var f = (19 * a + 16) % 30;
            var key = f + e + 3;
            var month = (key > 30) ? 5 : 4;
            var day = (key > 30) ? key - 30 : key;
            this.veligdenDatum = new Date(year, month - 1, day);
            return this.veligdenDatum;
            ;
        }
    };
    /**
     *
     *
     * @param {any} year
     * @returns
     * @memberof CalendarProvider
     */
    PrazniciProvider.prototype.getVeligdenVtorden = function (year) {
        var veligden = this.getVeligden(year);
        return new Date(year, veligden.getMonth(), veligden.getDate() + 1);
    };
    /**
     *
     *
     * @param {any} year
     * @returns
     * @memberof CalendarProvider
     */
    PrazniciProvider.prototype.getVeligdenTretDen = function (year) {
        var veligden = this.getVeligden(year);
        return new Date(year, veligden.getMonth(), veligden.getDate() + 2);
    };
    /**
     *
     *
     * @param {any} year
     * @returns
     * @memberof CalendarProvider
     */
    PrazniciProvider.prototype.getSpasovDen = function (year) {
        var veligden = this.getVeligden(year);
        return new Date(year, veligden.getMonth(), veligden.getDate() + 39);
    };
    /**
     *
     *
     * @param {any} year
     * @returns
     * @memberof CalendarProvider
     */
    PrazniciProvider.prototype.getProchka = function (year) {
        var veligden = this.getVeligden(year);
        return new Date(year, veligden.getMonth(), veligden.getDate() - 49);
    };
    /**
     *
     *
     * @param {any} year
     * @returns
     * @memberof CalendarProvider
     */
    PrazniciProvider.prototype.getTodorovaSabota = function (year) {
        var veligden = this.getVeligden(year);
        return new Date(year, veligden.getMonth(), veligden.getDate() - 43);
    };
    /**
     *
     *
     * @param {any} year
     * @returns
     * @memberof CalendarProvider
     */
    PrazniciProvider.prototype.getLazarovaSabota = function (year) {
        var veligden = this.getVeligden(year);
        return new Date(year, veligden.getMonth(), veligden.getDate() - 8);
    };
    /**
     *
     *
     * @param {any} year
     * @returns
     * @memberof CalendarProvider
     */
    PrazniciProvider.prototype.getCvetnici = function (year) {
        var veligden = this.getVeligden(year);
        return new Date(year, veligden.getMonth(), veligden.getDate() - 7);
    };
    PrazniciProvider.prototype.getVelikiChetvrtok = function (year) {
        var veligden = this.getVeligden(year);
        return new Date(year, veligden.getMonth(), veligden.getDate() - 3);
    };
    PrazniciProvider.prototype.getVelikiPetok = function (year) {
        var veligden = this.getVeligden(year);
        return new Date(year, veligden.getMonth(), veligden.getDate() - 2);
    };
    PrazniciProvider.prototype.getVelikaSabota = function (year) {
        var veligden = this.getVeligden(year);
        return new Date(year, veligden.getMonth(), veligden.getDate() - 1);
    };
    PrazniciProvider.prototype.getIstochenPetok = function (year) {
        var veligden = this.getVeligden(year);
        return new Date(year, veligden.getMonth(), veligden.getDate() + 5);
    };
    PrazniciProvider.prototype.getVeligdenskiPosti = function (year) {
        var veligden = this.getVeligden(year);
        return new Date(year, veligden.getMonth(), veligden.getDate() - 48);
    };
    PrazniciProvider.prototype.getPetroviPosti = function (year) {
        var veligden = this.getVeligden(year);
        return new Date(year, veligden.getMonth(), veligden.getDate() + 57);
    };
    /**
     *
     *
     * @param {any} year
     * @returns
     * @memberof CalendarProvider
     */
    PrazniciProvider.prototype.getDuhovDen = function (year) {
        var veligden = this.getVeligden(year);
        return new Date(year, veligden.getMonth(), veligden.getDate() + 49);
    };
    /**
     *
     *
     * @param {any} year
     * @returns
     * @memberof CalendarProvider
     */
    PrazniciProvider.prototype.getDuhovDen2 = function (year) {
        var veligden = this.getVeligden(year);
        return new Date(year, veligden.getMonth(), veligden.getDate() + 50);
    };
    /**
     *
     *
     * @param {any} year
     * @returns
     * @memberof CalendarProvider
     */
    PrazniciProvider.prototype.getDuhovDen3 = function (year) {
        var veligden = this.getVeligden(year);
        return new Date(year, veligden.getMonth(), veligden.getDate() + 51);
    };
    /**
     *
     *
     * @param {any} year
     * @returns
     * @memberof CalendarProvider
     */
    PrazniciProvider.prototype.getZadushnicaZimska = function (year) {
        var veligden = this.getVeligden(year);
        return new Date(year, veligden.getMonth(), veligden.getDate() - 59);
    };
    /**
     *
     *
     * @param {any} year
     * @returns
     * @memberof CalendarProvider
     */
    PrazniciProvider.prototype.getZadushnicaNoemvri = function (year) {
        var zadushnicaNoemvri = new Date(year, 10, 1);
        if (zadushnicaNoemvri.getDay() === 6) {
            return zadushnicaNoemvri;
        }
        else {
            for (var i = 2; i < 8; i++) {
                zadushnicaNoemvri = new Date(year, 10, i);
                if (zadushnicaNoemvri.getDay() === 6) {
                    return zadushnicaNoemvri;
                }
            }
        }
    };
    PrazniciProvider.prototype.getYearMovingHolydays = function (year) {
        return {
            zadushnica_zimska: this.getZadushnicaZimska(year).setHours(0, 0, 0, 0),
            prochka: this.getProchka(year).setHours(0, 0, 0, 0),
            veligdenski_posti: this.getVeligdenskiPosti(year).setHours(0, 0, 0, 0),
            todorovaSabota: this.getTodorovaSabota(year).setHours(0, 0, 0, 0),
            lazarovaSabota: this.getLazarovaSabota(year).setHours(0, 0, 0, 0),
            cvetnici: this.getCvetnici(year).setHours(0, 0, 0, 0),
            velikiChetvrtok: this.getVelikiChetvrtok(year).setHours(0, 0, 0, 0),
            velikiPetok: this.getVelikiPetok(year).setHours(0, 0, 0, 0),
            velikaSabota: this.getVelikaSabota(year).setHours(0, 0, 0, 0),
            veligden: this.getVeligden(year).setHours(0, 0, 0, 0),
            veligden_2: this.getVeligdenVtorden(year).setHours(0, 0, 0, 0),
            veligden_3: this.getVeligdenTretDen(year).setHours(0, 0, 0, 0),
            istochenPetok: this.getIstochenPetok(year).setHours(0, 0, 0, 0),
            spasovden: this.getSpasovDen(year).setHours(0, 0, 0, 0),
            duovden: this.getDuhovDen(year).setHours(0, 0, 0, 0),
            duovden2: this.getDuhovDen2(year).setHours(0, 0, 0, 0),
            duovden3: this.getDuhovDen3(year).setHours(0, 0, 0, 0),
            petroviPosti: this.getPetroviPosti(year).setHours(0, 0, 0, 0),
            zadushnica_noemvri: this.getZadushnicaNoemvri(year).setHours(0, 0, 0, 0)
        };
    };
    return PrazniciProvider;
}());
PrazniciProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PrazniciProvider);

//# sourceMappingURL=praznici.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mesec_mesec__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__godina_godina__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(translate) {
        this.translate = translate;
        this.meseci = ['jan', 'fev', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dek'];
        this.mesec = this.meseci[(new Date().getMonth())];
        this.today = 'today';
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__mesec_mesec__["a" /* MesecPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__godina_godina__["a" /* GodinaPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */];
        this.year = '';
        this.year = new Date().getFullYear().toString();
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dak/workspace/orthodoxcalendar/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" [tabTitle]="translate.instant(\'today\')" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" [tabTitle]="translate.instant(mesec) + \' \' + year" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="{{ year }}" tabIcon="albums"></ion-tab>\n  <ion-tab [root]="tab4Root" [tabTitle]="translate.instant(\'settings\')" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/dak/workspace/orthodoxcalendar/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesecPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalDayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calendar_calendar__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MesecPage = (function () {
    function MesecPage(navCtrl, calendar, modalCtrl) {
        this.navCtrl = navCtrl;
        this.calendar = calendar;
        this.modalCtrl = modalCtrl;
        this.movingDate = new Date();
        this.year = this.movingDate.getFullYear();
        this.daysData = {
            year: this.year,
            month: this.movingDate.getMonth(),
            dayOfWeek: '',
            date_greg: 0,
            date_julian: 0,
            title: {
                part_title_important: '',
                part_title_regular: ''
            }
        };
        this.tabData = [];
    }
    MesecPage.prototype.ionViewWillEnter = function () {
        this.movingDate = new Date();
        this.loadGridData();
    };
    MesecPage.prototype.openModal = function (date) {
        var modal = this.modalCtrl.create(ModalDayPage, date);
        modal.present();
    };
    MesecPage.prototype.loadGridData = function () {
        var _this = this;
        this.year = this.movingDate.getFullYear();
        this.calendar.setYear(this.year);
        this.calendar.loadMonth(this.movingDate.getMonth() + 1)
            .then(function (data) {
            _this.mesec = _this.calendar.getMesecName((_this.movingDate.getMonth()));
            _this.tabData = [];
            for (var i = 0; i < data.days.length; i++) {
                _this.daysData = {
                    year: _this.year,
                    month: _this.movingDate.getMonth(),
                    dayOfWeek: '',
                    date_greg: 0,
                    date_julian: 0,
                    title: {
                        part_title_important: '',
                        part_title_regular: ''
                    }
                };
                _this.calendar.handleMovingHolyday(data.days[i]);
                var date = new Date(_this.movingDate.getFullYear(), _this.movingDate.getMonth(), data.days[i].day);
                _this.daysData.dayOfWeek = _this.calendar.getDayOfWeek(date.getDay()).substring(0, 3);
                _this.daysData.date_greg = data.days[i].day;
                for (var j = 0; j < data.days[i].holydays.length; j++) {
                    if (date.getDay() === 0) {
                        _this.daysData.title.part_title_important += data.days[i].holydays[j].title + '; ';
                    }
                    else {
                        if (data.days[i].holydays[j].important) {
                            _this.daysData.title.part_title_important += data.days[i].holydays[j].title + '; ';
                        }
                        else {
                            _this.daysData.title.part_title_regular += data.days[i].holydays[j].title + '; ';
                        }
                    }
                }
                date.setDate(date.getDate() - 13);
                _this.daysData.date_julian = date.getDate();
                _this.tabData.push(_this.daysData);
            }
        });
    };
    MesecPage.prototype.previousMonth = function () {
        this.movingDate.setMonth(this.movingDate.getMonth() - 1);
        this.loadGridData();
    };
    MesecPage.prototype.nextMonth = function () {
        this.movingDate.setMonth(this.movingDate.getMonth() + 1);
        this.loadGridData();
    };
    MesecPage.prototype.swipeEvent = function (event) {
        // from left to right then the delta is positive
        if (event.deltaX > 0) {
            this.previousMonth();
        }
        else {
            this.nextMonth();
        }
    };
    return MesecPage;
}());
MesecPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mesec',template:/*ion-inline-start:"/Users/dak/workspace/orthodoxcalendar/src/pages/mesec/mesec.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only color="royal" (click)="previousMonth()">\n        <ion-icon name="arrow-dropleft"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      {{mesec}} {{year}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="nextMonth()">\n        <ion-icon name="arrow-dropright"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid (swipe)="swipeEvent($event)">\n    <ion-row class="grid-row">\n      <ion-col>\n        <div>{{\'day\' | translate}}</div>\n      </ion-col>\n      <ion-col>\n        <div>{{\'gregorijanski\' | translate}}</div>\n      </ion-col>\n      <ion-col>\n        <div>{{\'julijanski\' | translate}}</div>\n      </ion-col>\n      <ion-col col-9>\n        <div></div>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor="let rowData of tabData; even as isEven" class="grid-row" [ngClass]="isEven?\'grid-col-even\':\'\'" (click)="openModal({year: rowData.year, month: rowData.month, day: rowData.date_greg})">\n      <ion-col>\n        <div>{{rowData.dayOfWeek}}</div>\n      </ion-col>\n      <ion-col>\n        <div>{{rowData.date_greg}}</div>\n      </ion-col>\n      <ion-col>\n        <div>{{rowData.date_julian}}</div>\n      </ion-col>\n      <ion-col col-9 class="grid-col-title">\n        <div class="grid-col-title" text-wrap><div class="grid-col-title-important">{{rowData.title.part_title_important}}</div><div>{{rowData.title.part_title_regular}}</div></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/dak/workspace/orthodoxcalendar/src/pages/mesec/mesec.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_calendar_calendar__["a" /* CalendarProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
], MesecPage);

var ModalDayPage = (function () {
    function ModalDayPage(platform, params, viewCtrl, calendar, translate) {
        var _this = this;
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.calendar = calendar;
        this.translate = translate;
        this.days = [];
        this.title_regular = '';
        this.title_important = '';
        this.dayDescription = '';
        this.year = this.params.get('year');
        this.month = this.params.get('month');
        this.day = this.params.get('day');
        this.dayInWeek = new Date(this.year, this.month, this.day).getDay();
        this.mesec = this.calendar.getMesecName((this.month));
        this.calendar.loadMonth(this.month)
            .then(function (data) {
            _this.loadDayData();
        });
    }
    ModalDayPage.prototype.loadDayData = function () {
        var _this = this;
        this.calendar.loadDay(this.day, this.month + 1)
            .then(function (dayData) {
            _this.days = dayData.holydays;
            _this.loadHeader(dayData);
        });
    };
    ModalDayPage.prototype.loadHeader = function (dayData) {
        this.title_important = '';
        this.title_regular = '';
        var th = this.translate.instant('th');
        var dayOfWeek = this.calendar.getDayOfWeek(this.dayInWeek);
        var dayInYear = dayData.id;
        this.dayDescription = dayOfWeek + ', ' + dayInYear + th;
        for (var i = 0; i < dayData.holydays.length; i++) {
            if (this.dayInWeek === 0) {
                this.title_important += dayData.holydays[i].title + ';';
            }
            else {
                if (dayData.holydays[i].important) {
                    this.title_important += dayData.holydays[i].title + ';';
                }
                else {
                    this.title_regular += dayData.holydays[i].title + ';';
                }
            }
        }
    };
    ModalDayPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ModalDayPage;
}());
ModalDayPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dak/workspace/orthodoxcalendar/src/pages/mesec/modal-day.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{day}} {{ mesec }} {{year}}\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">{{\'cancel\' | translate}}</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <div class="sub-header-description" text-center>{{dayDescription}}</div>\n      <div class="sub-header-title" text-wrap><div class="title_important">{{title_important}}</div><div>{{title_regular}}</div></div>\n    </ion-card-header>\n    <ion-card-content (swipe)="swipeEvent($event)">\n      <div *ngFor="let day of days">\n        <h3 [ngClass]="day.important ? \'day-title-important\' : \'day-title-regular\'">{{day.title}}</h3>\n        <div class="day-description" text-justify>{{day.desc}}</div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dak/workspace/orthodoxcalendar/src/pages/mesec/modal-day.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_calendar_calendar__["a" /* CalendarProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], ModalDayPage);

//# sourceMappingURL=mesec.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GodinaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_praznici_praznici__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GodinaPage = (function () {
    function GodinaPage(navCtrl, praznici, translate) {
        this.navCtrl = navCtrl;
        this.praznici = praznici;
        this.translate = translate;
        this.year = new Date().getFullYear();
        this.skipHolyDays = ['velikiChetvrtok', 'velikiPetok', 'velikaSabota', 'veligden_2', 'veligden_3', 'duovden2', 'duovden3'];
        this.prazniciList = [];
        // this.loadPraznici(this.year);
    }
    GodinaPage.prototype.ionViewWillEnter = function () {
        this.loadPraznici(this.year);
    };
    GodinaPage.prototype.loadPraznici = function (year) {
        this.prazniciList = [];
        var yearMovingHolyday = this.praznici.getYearMovingHolydays(this.year);
        var i = 0;
        for (var key in yearMovingHolyday) {
            if (yearMovingHolyday.hasOwnProperty(key) && this.skipHolyDays.indexOf(key) === -1) {
                this.prazniciList.splice(i, 0, {
                    title: this.translate.instant(key),
                    date: yearMovingHolyday[key],
                    img: 'assets/img/' + key + '.jpg'
                });
                i++;
            }
        }
    };
    GodinaPage.prototype.previousYear = function () {
        this.year -= 1;
        this.loadPraznici(this.year);
    };
    GodinaPage.prototype.nextYear = function () {
        this.year += 1;
        this.loadPraznici(this.year);
    };
    GodinaPage.prototype.swipeEvent = function (event) {
        // from left to right then the delta is positive
        if (event.deltaX > 0) {
            this.previousYear();
        }
        else {
            this.nextYear();
        }
    };
    return GodinaPage;
}());
GodinaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-godina',template:/*ion-inline-start:"/Users/dak/workspace/orthodoxcalendar/src/pages/godina/godina.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons start>\n          <button ion-button icon-only color="royal" (click)="previousYear()">\n            <ion-icon name="arrow-dropleft"></ion-icon>\n          </button>\n        </ion-buttons>\n      <ion-title>\n        {{year}}\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only color="royal" (click)="nextYear()">\n          <ion-icon name="arrow-dropright"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list (swipe)="swipeEvent($event)">\n      <ion-list-header>{{\'povazhni_praznici\' | translate}}</ion-list-header>\n      <ion-item *ngFor="let item of prazniciList" text-wrap>\n        <ion-thumbnail item-start>\n          <img [src]=item.img>\n        </ion-thumbnail>\n        <h2>{{item.title}}</h2>\n        <p>{{item.date | date: \'dd/M/y\'}}</p>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n<ion-header>\n'/*ion-inline-end:"/Users/dak/workspace/orthodoxcalendar/src/pages/godina/godina.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_praznici_praznici__["a" /* PrazniciProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], GodinaPage);

//# sourceMappingURL=godina.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calendar_calendar__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, translate, calendar) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.calendar = calendar;
        this.movingDate = new Date();
        this.year = this.movingDate.getFullYear();
        this.day = this.movingDate.getDate();
        this.dayInWeek = this.movingDate.getDay();
        this.title_regular = '';
        this.title_important = '';
        this.dayDescription = '';
        this.days = [];
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.goToToday();
    };
    /**
     *
     *
     * @param {any} dayData
     * @memberof HomePage
     */
    HomePage.prototype.loadHeader = function (dayData) {
        this.title_important = '';
        this.title_regular = '';
        this.dayInWeek = this.movingDate.getDay();
        var th = this.translate.instant('th');
        var dayOfWeek = this.calendar.getDayOfWeek(this.dayInWeek);
        this.mesec = this.calendar.getMesecName((this.movingDate.getMonth()));
        this.day = this.movingDate.getDate();
        var dayInYear = dayData.id;
        this.dayDescription = dayOfWeek + ', ' + dayInYear + th;
        for (var i = 0; i < dayData.holydays.length; i++) {
            if (this.dayInWeek === 0) {
                this.title_important += dayData.holydays[i].title + ';';
            }
            else {
                if (dayData.holydays[i].important) {
                    this.title_important += dayData.holydays[i].title + ';';
                }
                else {
                    this.title_regular += dayData.holydays[i].title + ';';
                }
            }
        }
    };
    /**
     *
     *
     * @memberof HomePage
     */
    HomePage.prototype.goToToday = function () {
        var _this = this;
        this.movingDate = new Date();
        this.year = this.movingDate.getFullYear();
        this.calendar.setYear(this.year);
        var month = this.movingDate.getMonth() + 1;
        this.calendar.loadMonth(month)
            .then(function (data) {
            // this.calendar.setCurrentMonth(data);
            _this.loadDayData();
        });
    };
    /**
     *
     *
     * @memberof HomePage
     */
    HomePage.prototype.loadDayData = function () {
        var _this = this;
        this.year = this.movingDate.getFullYear();
        this.calendar.setYear(this.year);
        this.day = this.movingDate.getDate();
        this.calendar.loadDay(this.movingDate.getDate(), this.movingDate.getMonth() + 1)
            .then(function (dayData) {
            _this.days = dayData.holydays;
            _this.loadHeader(dayData);
        });
    };
    /**
     *
     *
     * @memberof HomePage
     */
    HomePage.prototype.previousDay = function () {
        this.movingDate.setDate(this.movingDate.getDate() - 1);
        this.loadDayData();
    };
    /**
     *
     *
     * @memberof HomePage
     */
    HomePage.prototype.nextDay = function () {
        this.movingDate.setDate(this.movingDate.getDate() + 1);
        this.loadDayData();
    };
    /**
     *
     *
     * @param {any} event
     * @memberof HomePage
     */
    HomePage.prototype.swipeEvent = function (event) {
        // from left to right then the delta is positive
        if (event.deltaX > 0) {
            this.previousDay();
        }
        else {
            this.nextDay();
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/dak/workspace/orthodoxcalendar/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only color="royal" (click)="previousDay()">\n        <ion-icon name="arrow-dropleft"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      {{day}} {{ mesec }} {{year}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="nextDay()">\n        <ion-icon name="arrow-dropright"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab bottom right>\n    <button ion-fab mini (click)="goToToday()"><ion-icon name="contract"></ion-icon></button>\n  </ion-fab>\n  <ion-card>\n    <ion-card-header>\n      <div class="sub-header-description" text-center>{{dayDescription}}</div>\n      <div class="sub-header-title" text-wrap><div class="title_important">{{title_important}}</div><div>{{title_regular}}</div></div>\n    </ion-card-header>\n    <ion-card-content (swipe)="swipeEvent($event)">\n      <div *ngFor="let day of days">\n        <h3 [ngClass]="day.important ? \'day-title-important\' : \'day-title-regular\'">{{day.title}}</h3>\n        <div class="day-description" text-justify>{{day.desc}}</div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/dak/workspace/orthodoxcalendar/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_calendar_calendar__["a" /* CalendarProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calendar_calendar__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, translate, calendar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.calendar = calendar;
        this.language = this.translate.currentLang;
    }
    SettingsPage.prototype.onChange = function (lang) {
        this.calendar.clearMonthCache();
        this.calendar.setPath(lang);
        this.translate.use(lang);
        this.calendar.loadMonth(new Date().getMonth() + 1);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/dak/workspace/orthodoxcalendar/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'settings\' | translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>{{\'language\' | translate}}</ion-label>\n      <ion-select [(ngModel)]="language" cancelText="{{\'cancel\' | translate}}" (ngModelChange)="onChange($event)">\n        <ion-option value="en">{{\'english_language\' | translate}}</ion-option>\n        <ion-option value="mk">{{\'macedonian_language\' | translate}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dak/workspace/orthodoxcalendar/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_calendar_calendar__["a" /* CalendarProvider */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_mesec_mesec__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_godina_godina__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_http_loader__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_calendar_calendar__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_praznici_praznici__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_13__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_mesec_mesec__["a" /* MesecPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_godina_godina__["a" /* GodinaPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_mesec_mesec__["b" /* ModalDayPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]]
                }
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_mesec_mesec__["a" /* MesecPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_godina_godina__["a" /* GodinaPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_mesec_mesec__["b" /* ModalDayPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_14__providers_calendar_calendar__["a" /* CalendarProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_praznici_praznici__["a" /* PrazniciProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DEFAULT_LOCALE = 'mk';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, translate) {
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        translate.setDefaultLang(DEFAULT_LOCALE);
        translate.use(DEFAULT_LOCALE);
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dak/workspace/orthodoxcalendar/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/dak/workspace/orthodoxcalendar/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__praznici_praznici__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalendarProvider = (function () {
    function CalendarProvider(http, translate, praznici) {
        this.http = http;
        this.translate = translate;
        this.praznici = praznici;
        this.path = 'assets/months_' + this.translate.currentLang + '/';
        this.meseci = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dek'];
        this.denovi = ['ned', 'pon', 'vtor', 'sred', 'cet', 'pet', 'sab'];
    }
    CalendarProvider.prototype.setMonthCache = function (month) {
        this.month = month;
    };
    CalendarProvider.prototype.clearMonthCache = function () {
        this.month = null;
    };
    CalendarProvider.prototype.setPath = function (lang) {
        this.path = 'assets/months_' + lang + '/';
    };
    CalendarProvider.prototype.setYear = function (year) {
        this.year = year;
    };
    // public setCurrentMonth(month) {
    //   if(!this.current_month) {
    //     this.current_month = month;
    //   }
    // }
    /**
     *
     *
     * @param {Number} month
     * @returns {Promise<any>}
     * @memberof CalendarProvider
     */
    CalendarProvider.prototype.loadMonth = function (month) {
        var _this = this;
        if (month > 0 && month < 13) {
            if (this.month && this.month.month === month) {
                return Promise.resolve(this.month);
            }
            else {
                return new Promise(function (resolve) {
                    _this.http.get(_this.path + month + '.json')
                        .subscribe(function (data) {
                        if (!_this.isLeapYear(_this.year) && month == 2) {
                            data.days = data.days.slice(0, data.days.length - 1);
                        }
                        else {
                            if (month > 2) {
                                for (var i = 0; i < data.days.length; i++) {
                                    data.days[i].id = data.days[i].id + 1;
                                }
                            }
                        }
                        _this.setMonthCache(data);
                        resolve(data);
                    });
                });
            }
        }
        else {
            return Promise.reject("Requested month '" + month + "' is not OK");
        }
    };
    /**
     *
     *
     * @param {any} year
     * @returns {Boolean}
     * @memberof CalendarProvider
     */
    CalendarProvider.prototype.isLeapYear = function (year) {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    };
    /**
     *
     *
     * @param {Number} day
     * @param {Number} month
     * @returns {Promise<any>}
     * @memberof CalendarProvider
     */
    CalendarProvider.prototype.loadDay = function (day, month) {
        var _this = this;
        if (day > 0 && day < 32) {
            if (this.month.month === month) {
                this.handleMovingHolyday(this.month.days[Number(day) - 1]);
                return Promise.resolve(this.month.days[Number(day) - 1]);
            }
            else {
                return new Promise(function (resolve) {
                    _this.loadMonth(month)
                        .then(function (data) {
                        _this.handleMovingHolyday(data.days[Number(day) - 1]);
                        resolve(data.days[Number(day) - 1]);
                    });
                });
            }
        }
        else {
            return Promise.reject("Requested day '" + day + "' is not OK");
        }
        // TODO: manage Feb 29
    };
    /**
     *
     *
     * @param {any} day
     * @returns {String}
     * @memberof CalendarProvider
     */
    CalendarProvider.prototype.getDayOfWeek = function (day) {
        var key = this.denovi[day];
        return this.translate.instant(key);
    };
    /**
     *
     *
     * @param {any} mesec
     * @returns {String}
     * @memberof CalendarProvider
     */
    CalendarProvider.prototype.getMesecName = function (mesec) {
        var key = this.meseci[mesec];
        return this.translate.instant(key);
    };
    CalendarProvider.prototype.handleMovingHolyday = function (day) {
        var praznici = this.praznici.getYearMovingHolydays(this.year);
        var dateToCompare = new Date(Number(this.year), Number(this.month.month) - 1, Number(day.day)).setHours(0, 0, 0, 0);
        for (var key in praznici) {
            if (praznici.hasOwnProperty(key)) {
                switch (key) {
                    case 'zadushnica_zimska':
                        if (dateToCompare.valueOf() === praznici[key].valueOf()) {
                            day.holydays.push({
                                title: this.translate.instant('zadushnica_zimska'),
                                important: true,
                                desc: ""
                            });
                        }
                        break;
                    case 'prochka':
                        if (dateToCompare.valueOf() === praznici[key].valueOf()) {
                            day.holydays.push({
                                title: this.translate.instant('prochka'),
                                important: true,
                                desc: this.translate.instant('praznik_prochka')
                            });
                        }
                        break;
                    case 'veligdenski_posti':
                        if (dateToCompare.valueOf() === praznici[key].valueOf()) {
                            day.holydays.push({
                                title: this.translate.instant('veligdenski_posti'),
                                important: true,
                                desc: ""
                            });
                        }
                        break;
                    case 'todorovaSabota':
                        if (dateToCompare.valueOf() === praznici[key].valueOf()) {
                            day.holydays.push({
                                title: this.translate.instant('todorovaSabota'),
                                important: true,
                                desc: this.translate.instant('praznik_todorovaSabota')
                            });
                        }
                        break;
                    case 'lazarovaSabota':
                        if (dateToCompare.valueOf() === praznici[key].valueOf()) {
                            day.holydays.push({
                                title: this.translate.instant('lazarovaSabota'),
                                important: true,
                                desc: this.translate.instant('praznik_lazarovaSabota')
                            });
                        }
                        break;
                    case 'cvetnici':
                        if (dateToCompare.valueOf() === praznici[key].valueOf()) {
                            day.holydays.push({
                                title: this.translate.instant('cvetnici'),
                                important: true,
                                desc: this.translate.instant('praznik_cvetnici')
                            });
                        }
                        break;
                    case 'velikiChetvrtok':
                        if (dateToCompare.valueOf() === praznici[key].valueOf()) {
                            day.holydays.push({
                                title: this.translate.instant('velikiChetvrtok'),
                                important: true,
                                desc: this.translate.instant('praznik_velikiChetvrtok')
                            });
                        }
                        break;
                    case 'velikiPetok':
                        if (dateToCompare.valueOf() === praznici[key].valueOf()) {
                            day.holydays.push({
                                title: this.translate.instant('veliliPetok'),
                                important: true,
                                desc: this.translate.instant('praznik_velikiPetok')
                            });
                        }
                        break;
                    case 'velikaSabota':
                        if (dateToCompare.valueOf() === praznici[key].valueOf()) {
                            day.holydays.push({
                                title: this.translate.instant('velikaSabota'),
                                important: true,
                                desc: this.translate.instant('praznik_velikaSabota')
                            });
                        }
                        break;
                    case 'veligden':
                        if (dateToCompare.valueOf() === praznici[key].valueOf()) {
                            day.holydays.push({
                                title: this.translate.instant('veligden'),
                                important: true,
                                desc: this.translate.instant('praznik_veligden')
                            });
                        }
                        break;
                    case 'veligden_2':
                        if (dateToCompare.valueOf() === praznici[key].valueOf()) {
                            day.holydays.push({
                                title: this.translate.instant('veligden_2'),
                                important: true,
                                desc: ""
                            });
                        }
                        break;
                    case 'veligden_3':
                        if (dateToCompare.valueOf() === praznici[key].valueOf()) {
                            day.holydays.push({
                                title: this.translate.instant('veligden_3'),
                                important: true,
                                desc: ""
                            });
                        }
                        break;
                    case 'istochenPetok':
                        if (dateToCompare.valueOf() === praznici[key].valueOf()) {
                            day.holydays.push({
                                title: this.translate.instant('istochenPetok'),
                                important: true,
                                desc: this.translate.instant('praznik_istochenPetok')
                            });
                        }
                        break;
                    case 'spasovden':
                        if (dateToCompare.valueOf() === praznici[key].valueOf()) {
                            day.holydays.push({
                                title: this.translate.instant('spasovden'),
                                important: true,
                                desc: this.translate.instant('praznik_spasovden')
                            });
                        }
                        break;
                    case 'duovden':
                        if (dateToCompare.valueOf() === praznici[key].valueOf()) {
                            day.holydays.push({
                                title: this.translate.instant('duovden'),
                                important: true,
                                desc: this.translate.instant('praznik_duovden')
                            });
                        }
                        break;
                    case 'duovden2':
                        if (dateToCompare.valueOf() === praznici[key].valueOf()) {
                            day.holydays.push({
                                title: this.translate.instant('duovden2'),
                                important: true,
                                desc: ""
                            });
                        }
                        break;
                    case 'duovden3':
                        if (dateToCompare.valueOf() === praznici[key].valueOf()) {
                            day.holydays.push({
                                title: this.translate.instant('duovden3'),
                                important: true,
                                desc: ""
                            });
                        }
                        break;
                    case 'petroviPosti':
                        if (dateToCompare.valueOf() === praznici[key].valueOf()) {
                            day.holydays.push({
                                title: this.translate.instant('petroviPosti'),
                                important: true,
                                desc: ""
                            });
                        }
                        break;
                    case 'zadushnica_noemvri':
                        if (dateToCompare.valueOf() === praznici[key].valueOf()) {
                            day.holydays.push({
                                title: this.translate.instant('zadushnica_noemvri'),
                                important: true,
                                desc: ""
                            });
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    };
    return CalendarProvider;
}());
CalendarProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__praznici_praznici__["a" /* PrazniciProvider */]])
], CalendarProvider);

//# sourceMappingURL=calendar.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map