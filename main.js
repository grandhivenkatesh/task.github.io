(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<header></header>\n<banner></banner>\n<search></search>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _search_crew_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search/crew-filter.pipe */ "./src/app/search/crew-filter.pipe.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideshow/slideshow.component */ "./src/app/slideshow/slideshow.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_6__["SlideshowComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                _search_crew_filter_pipe__WEBPACK_IMPORTED_MODULE_0__["CrewFilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer\r\n{\r\n    background-color: #353537;\r\n    padding-bottom: 20px\r\n}\r\n\r\n.footer h4,ul\r\n{\r\n    color: #fff;\r\n    padding: 0px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.footer h4\r\n{\r\n    text-transform: uppercase\r\n}\r\n\r\n.footer ul li{\r\n    list-style-type: none;\r\n}\r\n\r\n.newsletter-block h4\r\n{\r\n    border-bottom: 1px solid #686868;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.newsletter-block label\r\n{\r\n    color: #686868;\r\n    padding-top: 15px;\r\n}\r\n\r\n.newsletter-block input[type=\"text\"]\r\n{\r\n    background-color: #fff;\r\n    width: 220px;\r\n    border: none;\r\n    padding: 5px\r\n}\r\n\r\n.newsletter-block input[type=\"button\"]\r\n{\r\n    background-color: #000000;\r\n    color: #ffffff;\r\n    border: none;\r\n    padding: 5px 30px 5px 30px\r\n}\r\n\r\n.social-connect\r\n{\r\n    background: url(\"data:image/gif;base64,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\") no-repeat;\r\n    height: 30px;\r\n}\r\n\r\n.social-connect a\r\n{\r\n    width: 30px;\r\n    height: 30px;\r\n    float: left;\r\n}\r\n\r\n.reset_padding\r\n{\r\n    padding: 0px;\r\n}\r\n\r\nfooter\r\n{\r\n    background-color: #000000;\r\n    padding: 25px 0px;\r\n    color: #fff\r\n}\r\n\r\n@media screen and (min-width: 370px) and (max-width: 400px) {\r\n\r\n.social-connect-block\r\n{\r\n    position: relative;\r\n    top: -170px;\r\n    left: -15px;\r\n}\r\n.newsletter-block\r\n{\r\n   position: relative;\r\n   top: 100px;    \r\n}\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-3\">\n            <h4>Site</h4>\n            <ul>\n              <li>Sitemap</li>\n              <li>Trademarks</li>\n              <li>Privacy&amp;Policy</li>\n              <li>Legal&amp;Policies</li>\n              <li>Cookie Policy</li>\n              <li>Terms</li>\n            </ul>\n          </div>\n          <div class=\"col-md-3\">\n              <h4>About Us</h4>\n              <ul>\n                <li>Sitemap</li>\n                <li>Trademarks</li>\n                <li>Privacy&amp;Policy</li>\n                <li>Legal&amp;Policies</li>\n                <li>Cookie Policy</li>\n                <li>Terms</li>\n              </ul>\n            </div>\n            <div class=\"col-md-3\">\n                <h4>Store</h4>\n                <ul>\n                  <li>Sitemap</li>\n                  <li>Trademarks</li>\n                  <li>Privacy&amp;Policy</li>\n                  <li>Legal&amp;Policies</li>\n                  <li>Cookie Policy</li>\n                  <li>Terms</li>\n                </ul>\n              </div>\n              <div class=\"col-md-3\">\n                  <h4>G-Community</h4>\n                  <ul>\n                    <li>Sitemap</li>\n                    <li>Trademarks</li>\n                    <li>Privacy&amp;Policy</li>\n                    <li>Legal&amp;Policies</li>\n                    <li>Cookie Policy</li>\n                    <li>Terms</li>\n                  </ul>\n                </div>\n          </div>\n  \n  \n          <div class=\"row\">\n            <div class=\"container master-footer\">\n                <div class=\"col-md-4 newsletter-block float-left reset_padding\">\n                    <h4 class=\"underline\">newsletter signup</h4>\n                    <label>Get news, tips &amp; tricks!</label>\n                    <form>\n                        <input type=\"text\" placeholder=\"Sign up with your e-mail\" /> \n                        <input type=\"button\" value=\"Sign Up\" /> \n                    </form>\n                  </div>\n        \n                  <div class=\"col-md-3 float-right social-connect-block\">\n                      <h4 class=\"underline\">Connect</h4>\n                      <ul class=\"social-connect\">\n                          <li><a href=\"#\"></a></li>\n                          <li><a href=\"#\"></a></li>\n                          <li><a href=\"#\"></a></li>\n                          <li><a href=\"#\"></a></li>\n                          <li><a href=\"#\"></a></li>\n                      </ul>\n                  </div>\n            </div>\n          </div>\n      </div>\n    </div>\n  \n    <footer class=\"container-fluid\">\n      <p class=\"container\">\n        @2017. All rights reserved\n      </p>\n    </footer>\n  \n  "

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grayHeader\r\n{\r\nbackground-color: #363435;\r\nheight: 30px;\r\n}\r\n\r\n.grayHeader span,img\r\n{\r\n    margin-right: 10px;\r\n    color: #fff;\r\n}\r\n\r\nheader\r\n{\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.nav-item,.nav-link\r\n{\r\n    text-transform: uppercase;\r\n    color: #000000;\r\n    font-weight: bold\r\n}\r\n\r\n@media (max-width: 480px) {\r\n    .nav-link\r\n    {\r\n        font-size: 12px;\r\n        font-weight: 400;\r\n        text-transform: capitalize\r\n    }\r\n    .nav-item\r\n    {\r\n        margin-left: 0px !important;\r\n    }\r\n    .navigation\r\n    {\r\n        width: 120px;\r\n    }\r\n  }\r\n\r\n@media (min-width: 1200px) {\r\n.navigation\r\n{\r\nmargin-left: 235px !important;\r\n}\r\n\r\n}\r\n\r\n@media screen and (min-width: 370px) and (max-width: 768px){\r\n    .navigation\r\n    {\r\n        width: 120px;\r\n    }\r\n\r\n    .logo\r\n    {\r\n        margin-top: 10px;\r\n    }\r\n    .nav-link\r\n    {\r\n        font-size: 14px;\r\n        font-weight: 400;\r\n        text-transform: capitalize\r\n    }\r\n    .nav-item\r\n    {\r\n        margin-left: 0px !important;\r\n    }\r\n}\r\n\r\n@media (max-width: 370px) {\r\n   .logo\r\n    {\r\n    margin-left: -20px;\r\n    margin-top: 10px\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid grayHeader d-none d-sm-block\">\n  <div class=\"container\">\n    <div class=\"float-right\">\n      <span>EN-US</span>\n      <img src=\"assets/img/icon-globe.gif\" />\n      <img src=\"assets/img/icon-user.gif\" />\n    </div>\n  </div>\n</div>\n<div class=\"container mt-2 mb-2\">\n    <div class=\"d-flex flex-wrap justify-content-between\">\n        <div class=\"p-0 order-2 order-md-1 logo\">\n            <img src=\"assets/img/logo.jpg\" class=\"col-8 col-md-11\" />\n        </div>\n        <div class=\"p-0 order-1 navigation\">\n            <nav class=\"navbar navbar-expand-lg navbar-expand-md\">\n\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-icon\"><img src=\"assets/img/toggle.gif\" /></span>\n                </button>\n\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                    <ul class=\"navbar-nav\">\n                        <li class=\"mt-2\">\n                            <img src=\"assets/img/icon-search.gif\" />\n                        </li>\n                        <li class=\"nav-item ml-4 col-ml-0\">\n                            <a class=\"nav-link\" href=\"#\">Products</a>\n                        </li>\n                        <li class=\"nav-item ml-4\">\n                            <a class=\"nav-link\" href=\"#\">Solutions</a>\n                        </li>\n                        <li class=\"nav-item ml-4\">\n                            <a class=\"nav-link\" href=\"#\">G-Community</a>\n                        </li>\n                        <li class=\"nav-item ml-4\">\n                            <a class=\"nav-link\" href=\"#\">About</a>\n                        </li>\n                        <li class=\"nav-item ml-4\">\n                            <a class=\"nav-link\" href=\"#\">Support</a>\n                        </li>\n                    </ul>\n                    \n                </div>\n            </nav>\n        </div>\n\n        <div class=\"p-0 mt-3 order-3\">\n            <img src=\"assets/img/icon-cart.gif\" />\n            </div>\n        </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/search/crew-filter.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/search/crew-filter.pipe.ts ***!
  \********************************************/
/*! exports provided: CrewFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewFilterPipe", function() { return CrewFilterPipe; });
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CrewFilterPipe = /** @class */ (function () {
    function CrewFilterPipe() {
    }
    CrewFilterPipe.prototype.transform = function (crew, searchterm) {
        if (!crew || !searchterm) {
            return crew;
        }
        return crew.filter(function (crew) {
            return crew.name.toLowerCase().indexOf(searchterm.toLowerCase()) !== -1;
        });
    };
    CrewFilterPipe = __decorate([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'crewFilter'
        })
    ], CrewFilterPipe);
    return CrewFilterPipe;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gallery_background\r\n{\r\nbackground-color: #f7f7f7;\r\npadding-top: 20px;\r\npadding-bottom: 50px;\r\n}\r\n\r\n.search_block\r\n{\r\n    border: 1px solid #f0f0f0;\r\n    padding: 15px;\r\n}\r\n\r\n.search_block input{\r\n    border: 1px solid #ccc;\r\n    padding: 15px 0px 15px 25px;\r\n    content: \"Search G-Team members\"\r\n}\r\n\r\n.reset_padding\r\n{\r\n    padding: 0px;\r\n}\r\n\r\n.reset_padding img{\r\n    margin-top: 20px;\r\n}\r\n\r\n.gallery_background h5,p\r\n{\r\n    color: #000000\r\n}\r\n\r\n.gallery_background h5\r\n{\r\n    font-weight: bold;\r\n}\r\n\r\n.gallery_background a\r\n{\r\n    color: #000000;\r\n}\r\n\r\n.gallery_background a span\r\n{\r\n    color: #5babce;\r\n}\r\n\r\nselect {\r\n    padding: 18px 40px 18px 20px;\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n    width: 100%;\r\n    border: none;\r\n    box-shadow: none;\r\n    background-color: #00a0de ;\r\n    background-image: none;\r\n    -webkit-appearance: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    -moz-appearance: none;\r\n    text-indent: 0.01px;\r\n    text-overflow: ellipsis;\r\n    background-image: url(\"data:image/gif;base64,R0lGODlhEgAKAPcAAACg5ACj4fH//wSe3gCh5gqe2gSf3weg4wCg3ASf2BKd1ACj4r/y/+v//7n5/wWb6ACc4QCj2RKo2waj5gWb1jCOsub//8z//0Tc9ACj1waf2f78/wCg5f37/gCl4Quf2zWZywWg4waez3Dq/xSj3wGg4gCj2gCh2wqg0wic2gKd4AKf5Aai39P//wSj54rb/wah43fV+df//2/u/wSr11mMqQKh5QWj6rjJ2wqeznzW+/j2+V+YrAuj1Aec1guc2wai2wed0CXD6BSfsgmf2hWg1wCg1gSg7QCe3yzA8LbV8Zb6/wOX0wmd27zP1gCb5AKe2wCk2AGd2geb12Tv/wCW2a/o/M3//wCl2QKf0lGRmzKMsQKa2QSg2QCZ3wCk3wOc1geg3AKgxRCl3wSg3QCd3u///wCf5ACh4orN6gCg3gCl22Xw/wCh5Vne/wag1ACi3ujm6TKDrgWn5Q6g2SehuQCa3ACa3ReWwQCg5h6j3ACi2A2c2ASd17zN3wCf4Qma2bv0/w2f2IvU59ns8wCi3wuh1MX//wCg3Y3//wOh4gCh3QOg5SehyAOf7ACc5QOc3wic2ACg4wOo4gCa2wCf3QCl6NHs87nU2xCowACk0ACf4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAASAAoAAAjMAMskyREmhJc8k07AsAOky6MnFIiYECIAB54CNlwwKXCGACJNPKxkEvFAjB8BMyJt2jTlAwcChWgEaoGhxwNHgEY0wDQExQpGBnxocXBIB50qm478aHSpARtDECAYGOPgyqAtgg5s6gMAAIklApwoUFCDwYUYGeBQOjBAwyYAfEAQMkOlCAMZaSpgWaQI0oAEAQIs+CMh0YYdFl7cQbPGCBkpCACrWVAiSJ04HZTImYBkTwQWUBBE+eIhRRNJlvS4qTQnyxswXFTcaBMQADs=\");\r\n    background-repeat: no-repeat;\r\n    background-position: 10px;\r\n    padding-left: 35px;\r\n    color: #fff;\r\n}\r\n\r\n.select_type::before\r\n{\r\ncontent: \"Select member\";\r\ncolor: #808080;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n   .gallery_background .p-2 \r\n   {\r\n       margin-left: -25px;\r\n   }\r\n\r\n   .select_type::before\r\n{\r\ncontent: \"Select category\";\r\n}\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<div class=\"container-fluid\">\n    <div class=\"container mt-3 mb-3\">\n        <div class=\"search_block col-md-12\">\n          <label class=\"mr-4 ml-3 mb-2 select_type\"></label>\n          <select class=\"rounded col-md-2 mb-2 mr-4\">\n            <option>Filter by name</option>\n          </select>\n          <input type=\"text\" [(ngModel)]=\"searchterm\" placeholder=\"Search G-Team members\" class=\"col-md-7 rounded\" />\n        </div>\n      </div>\n</div>\n\n\n<div class=\"container-fluid gallery_background\">\n    <div class=\"container\"> \n      \n      <div class=\"d-flex col-md-12 justify-content-between flex-wrap flex-md-nowrap\">\n        <div *ngFor=\"let person of persons | crewFilter:searchterm\" class=\"p-2\">\n          <img [src]=\"person.Picture\" class=\"\" />\n          <h5 class=\"mt-3\">{{person.name}} - {{person.role}}</h5>\n          <p class=\"mt-3\">{{person.description}}</p>\n          <a href=\"#\">READ MORE <span>></span></a>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(http) {
        var _this = this;
        this.persons = [];
        http.get("../assets/crew.json")
            .subscribe(function (response) {
            _this.persons = response.json();
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/slideshow/slideshow.component.css":
/*!***************************************************!*\
  !*** ./src/app/slideshow/slideshow.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reset_padding\r\n{\r\n    padding: 0px;\r\n}"

/***/ }),

/***/ "./src/app/slideshow/slideshow.component.html":
/*!****************************************************!*\
  !*** ./src/app/slideshow/slideshow.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"container-fluid reset_padding\">\n      \n           <img src=\"assets/img/banner.gif\" class=\"img-fluid\"/>\n      \n    </div>"

/***/ }),

/***/ "./src/app/slideshow/slideshow.component.ts":
/*!**************************************************!*\
  !*** ./src/app/slideshow/slideshow.component.ts ***!
  \**************************************************/
/*! exports provided: SlideshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowComponent", function() { return SlideshowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlideshowComponent = /** @class */ (function () {
    function SlideshowComponent() {
    }
    SlideshowComponent.prototype.ngOnInit = function () {
    };
    SlideshowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'banner',
            template: __webpack_require__(/*! ./slideshow.component.html */ "./src/app/slideshow/slideshow.component.html"),
            styles: [__webpack_require__(/*! ./slideshow.component.css */ "./src/app/slideshow/slideshow.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SlideshowComponent);
    return SlideshowComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\srii\Desktop\HCL_task\wd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map