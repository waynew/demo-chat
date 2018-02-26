webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\nbody, h1, h2, h3, h4, h5, h6, p, a, .app-chrome {\n\tfont-family: 'Poppins', sans-serif;\n}\n\n.app-chrome {\n\tborder-radius: 3em;\n\tborder: 1px solid #aaa;\n\tmargin: 2em 0em;\n\toverflow: hidden;\n}\n\n.nav-pills .nav-item a {\n\theight: 3em;\n\tborder-radius: 0;\n\tmargin: 2pt;\n\tborder: 2px solid #aaa;\n}\n\n.nav-pills .nav-item:first-child a {\n\tborder-top-left-radius: 3em;\n}\n\n.nav-pills .nav-item:last-child a {\n\tborder-top-right-radius: 3em;\n}\n\n.app-header {\n\t/*height: 3em;*/\n\tpadding: 1em 1.5em;\n\tborder-bottom: 1px solid #aaa;\n}\n\n.app-title {\n\tmargin:0;\n\tfont-weight: bold;\n}\n\n.app-title a {\n\tcolor: #888;\n\ttext-decoration: underline;\n}\n\n.app-title a:hover {\n\tcolor: black;\n}\n\n.chevron {\n\tmargin-left:0.5em;\n\tdisplay: inline-block;\n\tcolor: #aaa;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n\t<div class=\"app-chrome\">\n\t\t<div class=\"app-header\">\n\t\t\t<h5 class=\"app-title\"><a href=\"#\">SketchDeck</a><span class=\"chevron\">〉</span><a href=\"#\">Project</a><span class=\"chevron\">〉</span>Okta Whitepaper</h5>\n\t\t</div>\n\n\t\t<app-chat></app-chat>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chat_chat_component__ = __webpack_require__("./src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_storage__["a" /* AngularFireStorageModule */] // imports firebase/storage only needed for storage features
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__data_service__["a" /* DataService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_10__chat_chat_component__["a" /* ChatComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/***/ (function(module, exports) {

module.exports = "\n.chat-item {\n\tmargin: 1em 0;\n}\n\n.chat-thumbnail {\n\tborder-radius: 50%;\n\twidth: 4em;\n}\n\n.chat-name {\n\tfont-size: 50%;\n\tcolor: #aaa;\n\tmargin-top: 0.5ex;\n}\n\n.chat-message-group {\n\tmargin: 1em;\n\n}\n\n.chat-message {\n\tpadding: 1ex;\n\tbackground: #eee;\n\tborder-radius: 1em;\n\t/*min-width: 10em;*/\n}\n\n.chat-author-group {\n\n}\n\n.author-thumbnail {\n\tborder-top-left-radius: 4px;\n\tborder-bottom-left-radius: 4px;\n}\n\n.chat-control {\n\tpadding: 1.5em 1.5em;\n\tborder-top: 1px solid #aaa;\n\tbackground: #eee;\n}\n\n.chat-control .form-group {\n\tmargin: 0;\n}\n\n.chat-stream {\n\tpadding: 0 1.5em;\n\tmax-height: 60vh;\n\toverflow-y: scroll;\n}"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form (ngSubmit)=\"onSubmit()\" #chat=\"ngForm\">\n\t<div class=\"chat-stream\" #chatStream>\n\t\t<div *ngFor=\"let c of chat$ | async; trackBy tracker\">\n\t\t\t<div class=\"chat-item d-flex align-items-center\">\n\n\t\t\t\t<div class=\"chat-author-group d-flex flex-column justify-content-center align-items-center\">\n\t\t\t\t\t<img [src]=\"c.from.picture.medium\" class=\"chat-thumbnail\"/>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"chat-message-group\">\n\t\t\t\t\t<div class=\"chat-message\">{{c.text}}</div>\n\t\t\t\t\t<div class=\"chat-name\">{{c.from.name.first | titlecase}}</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t\t<a id=\"endOfChat\"></a>\n\t</div>\n\n\t<div class=\"chat-control\">\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t<img [src]=\"userObject?.picture.thumbnail\" class=\"author-thumbnail\"/>\n\t\t\t\t\t</div>\n\t\t\t\t<input id=\"message\" name=\"message\" type=\"text\" [(ngModel)]=\"model.text\" class=\"form-control\"/>\n\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-success\">Send</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t\n</form>"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// class Chat implements IChat {}
var ChatComponent = /** @class */ (function () {
    function ChatComponent(db, data) {
        var _this = this;
        this.chatCollection = db.collection('chat', function (ref) { return ref.orderBy("dateCreated"); });
        this.chat$ = this.chatCollection.valueChanges();
        this.user$ = data.getUser();
        this.chat$.subscribe(function () { _this.scrollToBottom(); });
        this.resetModel();
    }
    ChatComponent.prototype.resetModel = function () {
        this.model = {};
    };
    ChatComponent.prototype.scrollToBottom = function () {
        try {
            this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
        }
        catch (err) {
            console.error(err);
            console.log(this.container);
        }
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user$.first().subscribe(function (u) { return _this.userObject = u; });
        this.scrollToBottom();
    };
    ChatComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChatComponent.prototype.onSubmit = function () {
        if (this.model.text != "" && this.model.text != undefined) {
            this.model.dateCreated = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"].FieldValue.serverTimestamp();
            this.model.from = this.userObject;
            this.chatCollection.add(this.model);
            this.resetModel();
            this.scrollToBottom();
        }
    };
    ChatComponent.prototype.tracker = function (index, item) {
        return item.$id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('chatStream'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], ChatComponent.prototype, "container", void 0);
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("./src/app/chat/chat.component.html"),
            styles: [__webpack_require__("./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getUser = function () {
        return this.http.get('https://randomuser.me/api/').map(function (i) { return i['results'][0]; });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCT5kZYZ5BFXcUxIfY5Oqkog7N63lWeL1o",
        authDomain: "sketchdeck-demo-chat.firebaseapp.com",
        databaseURL: "https://sketchdeck-demo-chat.firebaseio.com",
        projectId: "sketchdeck-demo-chat",
        storageBucket: "sketchdeck-demo-chat.appspot.com",
        messagingSenderId: "270356515076"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map