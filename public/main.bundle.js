webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <nav>\r\n        <div class=\"nav-wrapper pw-screen-margin\">\r\n            <a href=\"#\" class=\"pw-logo\">PuWifi</a>\r\n            <ul id=\"nav-mobile\" class=\"right hide-on-small-and-down\">\r\n                <li>\r\n                    <a [routerLink]=\"['/home']\">Home</a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['/app-events']\">App Events</a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['/about-us']\">About Us</a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['/contact-us']\">Contact Us</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</div>\r\n\r\n<div class=\"pw-content-area\">\r\n    <!-- Router Outlet -->\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n<div class=\"pw-footer\">\r\n    <div class=\"pw-footer__title\">\r\n        Follow Us\r\n    </div>\r\n    <div>\r\n        <ul class=\"pw-footer__social\">\r\n            <li>\r\n                <a target=\"_blank\" title=\"Facebook\" href=\"https://www.facebook.com/ishleenkaurofficial/\">\r\n                    <div class=\"genericon icon-hover genericon-facebook-alt pw-footer__social-icon\">\r\n                        <span class=\"screen-reader-text\">Facebook</span>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n\r\n            <li>\r\n                <a target=\"_blank\" title=\"Twitter\" href=\"https://twitter.com/ishleenkaurbti?s=08\" class=\"icon-animation icon-hover-effect\">\r\n                    <div class=\"genericon icon-hover genericon-twitter pw-footer__social-icon\">\r\n                        <span class=\"screen-reader-text\">Twitter</span>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n\r\n            <li>\r\n                <a target=\"_blank\" title=\"Email\" href=\" mailto:info@ishleenkaur.com\" class=\"icon-animation icon-hover-effect\">\r\n                    <div class=\"genericon icon-hover genericon-mail pw-footer__social-icon\">\r\n                        <span class=\"screen-reader-text\">Email</span>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n\r\n            <li>\r\n                <a target=\"_blank\" title=\"YouTube\" href=\"https://www.youtube.com/channel/UCNyqZQeomFbw4YpIxW03xxw\" class=\"icon-animation icon-hover-effect\">\r\n                    <div class=\"genericon icon-hover genericon-youtube pw-footer__social-icon\">\r\n                        <span class=\"screen-reader-text\">YouTube</span>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n\r\n            <li>\r\n                <a target=\"_blank\" title=\"Instagram\" href=\"https://www.instagram.com/ishleenkaurofficial/\" class=\"icon-animation icon-hover-effect\">\r\n                    <div class=\"genericon icon-hover genericon-instagram pw-footer__social-icon\">\r\n                        <span class=\"screen-reader-text\">Instagram</span>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"pw-footer__copyright\">\r\n        Copyright © 2018 PuWifi\r\n        <div style=\"text-align: center\">\r\n            <a href=\"\" target=\"_blank\">Array151</a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: "puwifi-app",
            template: __webpack_require__("../../../../../src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_about_app_about_app_component__ = __webpack_require__("../../../../../src/app/components/about-app/about-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_about_us_about_us_component__ = __webpack_require__("../../../../../src/app/components/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_app_events_app_events_component__ = __webpack_require__("../../../../../src/app/components/app-events/app-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/components/contact-us/contact-us.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// routings

// import components





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_about_app_about_app_component__["a" /* AboutAppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_app_events_app_events_component__["a" /* AppEventsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_contact_us_contact_us_component__["a" /* ContactUsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* routing */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_about_app_about_app_component__ = __webpack_require__("../../../../../src/app/components/about-app/about-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_about_us_about_us_component__ = __webpack_require__("../../../../../src/app/components/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_app_events_app_events_component__ = __webpack_require__("../../../../../src/app/components/app-events/app-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/components/contact-us/contact-us.component.ts");





// Route Configuration
var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_1__components_about_app_about_app_component__["a" /* AboutAppComponent */]
    },
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_1__components_about_app_about_app_component__["a" /* AboutAppComponent */] },
    { path: "about-us", component: __WEBPACK_IMPORTED_MODULE_2__components_about_us_about_us_component__["a" /* AboutUsComponent */] },
    { path: "app-events", component: __WEBPACK_IMPORTED_MODULE_3__components_app_events_app_events_component__["a" /* AppEventsComponent */] },
    { path: "contact-us", component: __WEBPACK_IMPORTED_MODULE_4__components_contact_us_contact_us_component__["a" /* ContactUsComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/about-app/about-app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pw-screen-margin\">\r\n    <div class=\"pw-app__text-content\">\r\n        <span class=\"pw-app__title\">\r\n            So, What is PuWifi?\r\n        </span>\r\n        <p>\r\n            PuWifi is a mobile application for both platforms Android and iOS that enables\r\n            <b>Panjab University Campus</b> students to connect whith the Campus wifi(PU@Campus). It comes with the\r\n            <b>Auto Connect</b> feature that can login your device automatically to PU wifi when you connect to PU Wifi.\r\n            <br> Along with this, it will let you know what is happening in Panjab University, what are the events that are going\r\n            on and what is the trending news.\r\n        </p>\r\n        <span class=\"pw-app__title\">\r\n            Why’s it is hard to connect Pu@Campus?\r\n        </span>\r\n        <p>\r\n            It is quite irritating to wait for the login page and then enter your login details on the\r\n            <b>Sign in to Wi-Fi</b> page whenever you connect to Campus WiFi. And what is more difficult is remembering those\r\n            random user names and passwords every time.\r\n        </p>\r\n\r\n        <blockquote class=\"pw-app__quote\">\r\n            Simplicity is the policy\r\n        </blockquote>\r\n        <p>\r\n            PuWifi App follows the moderate UI design, where you just login once with your username and password and let the Wifi App\r\n            save your account.\r\n        </p>\r\n        <p>\r\n            When you are connected to PU@Campus Wi-Fi, you’ll just need to tap on\r\n            <b>Connect</b> button after adding your account and you are now connected to Campus Wi-Fi with single tap. PuWifi\r\n            App Auto-Connect Campus Wifi every time when you are in range of campus wifi.\r\n        </p>\r\n        <p>\r\n            Just like that, Disconnecting your account is even easier with this app. After you connected, Then ‘Connect’ button will\r\n            be converted to ‘disconnect’. As soon as you click it, you will be successfully disconnected.\r\n        </p>\r\n        <p>\r\n            Download the PuWifi App now and makes your Panjab University Chandigarh Wi-Fi experience much better.\r\n        </p>\r\n\r\n        <span class=\"pw-app__title\">\r\n            What else you get?\r\n        </span>\r\n\r\n        <p>\r\n            We are trying our best to provide you better services and the useful features. So these are some other fruits you get from\r\n            PuWifi.\r\n        </p>\r\n        <ul class=\"pw-app__listing\">\r\n            <li>\r\n                Simple Design & Interactive User Interface\r\n            </li>\r\n            <li>\r\n                Auto Connect Campus Wifi\r\n            </li>\r\n            <li>\r\n                Add/Delete multiple User Accounts\r\n            </li>\r\n            <li>\r\n                Easy Connect/Disconnect Campus Wifi\r\n            </li>\r\n            <li>\r\n                Change Password\r\n            </li>\r\n            <li>\r\n                Network Speed Test (Wifi & Mobile Data)\r\n            </li>\r\n            <li>\r\n                Notification of Campus Events and Popular News\r\n            </li>\r\n        </ul>\r\n\r\n        <span class=\"pw-app__title\">\r\n            What next?\r\n        </span>\r\n\r\n        <p>\r\n            Any idea or feature list that you think it should be implemente in the PuWifi App, do let us know. We are open to suggestion\r\n            :).\r\n        </p>\r\n        <p>\r\n            And if you face any problem or want to share your experience then we will be very happy to hear that and try to improve. \r\n        </p>\r\n        <p>\r\n            You can mark us mail on <b>support@array151.com</b> or fill \r\n            <a [routerLink]=\"['/contact-us']\">this form.</a> \r\n        </p>\r\n    </div>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/about-app/about-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutAppComponent = /** @class */ (function () {
    function AboutAppComponent() {
    }
    AboutAppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: "about-app",
            template: __webpack_require__("../../../../../src/app/components/about-app/about-app.component.html")
        })
    ], AboutAppComponent);
    return AboutAppComponent;
}());

//# sourceMappingURL=about-app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "About Us"

/***/ }),

/***/ "../../../../../src/app/components/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: "about-us",
            template: __webpack_require__("../../../../../src/app/components/about-us/about-us.component.html")
        })
    ], AboutUsComponent);
    return AboutUsComponent;
}());

//# sourceMappingURL=about-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-events/app-events.component.html":
/***/ (function(module, exports) {

module.exports = "App Events"

/***/ }),

/***/ "../../../../../src/app/components/app-events/app-events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppEventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppEventsComponent = /** @class */ (function () {
    function AppEventsComponent() {
    }
    AppEventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: "app-events",
            template: __webpack_require__("../../../../../src/app/components/app-events/app-events.component.html")
        })
    ], AppEventsComponent);
    return AppEventsComponent;
}());

//# sourceMappingURL=app-events.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "App Events"

/***/ }),

/***/ "../../../../../src/app/components/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: "contact-us",
            template: __webpack_require__("../../../../../src/app/components/contact-us/contact-us.component.html")
        })
    ], ContactUsComponent);
    return ContactUsComponent;
}());

//# sourceMappingURL=contact-us.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map