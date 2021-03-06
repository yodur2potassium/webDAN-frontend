// Component principal, comprends l'intégralité de la page, le CSS etc
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require("@angular/platform-browser");
var article_service_1 = require('./article/article.service');
var article_list_component_1 = require('./article/article-list.component');
var error_service_1 = require("./error/error.service");
var error_handler_directive_1 = require("./error/error-handler.directive");
var error_detail_component_1 = require("./error/error-detail.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var toolbar_component_1 = require("./toolbar/toolbar.component");
var AppComponent = (function () {
    function AppComponent(_articleService, _errorService, _titleService) {
        this._articleService = _articleService;
        this._errorService = _errorService;
        this._titleService = _titleService;
        this.currArticles = [];
        this.isShowDetail = false;
    }
    // Récupère l'intégralité des Articles via le service
    AppComponent.prototype.getArticles = function () {
        var _this = this;
        this._articleService.loadArticles().then(function (response) { return _this.articles = response; })
            .catch(function (failed) { return _this.failed = _this.getMockArticles(); }); // Erreur de connexion a l'API
    };
    // Fallback problème de connexion, charge mock-articles.json
    AppComponent.prototype.getMockArticles = function () {
        var _this = this;
        this._articleService.loadMockArticles().then(function (response) { return _this.articles = response; });
    };
    // Récupère l'intégralité des Erreurs via le service
    AppComponent.prototype.getErrors = function () {
        var _this = this;
        this._errorService.loadErrors().then(function (response) { return _this.errors = response; })
            .catch(function (failed) { return _this.failed = _this.getMockErrors(); }); // Erreur de connexion a l'API
    };
    // Fallback problème de connexion, charge mock-errors.json
    AppComponent.prototype.getMockErrors = function () {
        var _this = this;
        this._errorService.loadMockErrors().then(function (response) { return _this.errors = response; });
    };
    // Lifecycle hook, lance les fonctions a l'initialisation du Component
    AppComponent.prototype.ngOnInit = function () {
        this.getArticles();
        this.getErrors();
        this.setTitle('Accueil - webDAN');
        this.currArticles = welcome;
    };
    // Routeur "maison", récupère le nom de la page, assigne le titre et assigne les articles a currArticles
    // A ameliorer ou a repenser...
    AppComponent.prototype.selectPage = function (page) {
        this.broadcast = "";
        var tab = this.articles;
        var siteName = 'Le Groupe La Poste';
        console.log(page);
        if (page === 'Résultats') {
            this.currArticles = this.articles.slice(0, 4);
            this.setTitle(page + ' | ' + siteName);
        }
        else if (page === 'Dates clés') {
            this.currArticles = this.articles.slice(5, 8);
            this.setTitle(page + ' | ' + siteName);
        }
        else if (page === 'COMEX') {
            this.currArticles = this.articles.slice(8);
            this.setTitle(page);
        }
        else if (page === 'Accueil') {
            this.currArticles = welcome;
            this.setTitle(homeTitle);
        }
    };
    // Utilise titleService pour modifier le titre de la page
    AppComponent.prototype.setTitle = function (newTitle) {
        this._titleService.setTitle(newTitle);
    };
    // Cette section nécessite d'être retravaillée, voir utilisation d'un service EventEmitter...
    // Transmets les données de l'event au enfants, données reçus depuis ToolbarComponent.emitShowError
    AppComponent.prototype.onDisplay = function ($event) {
        this.broadcast = $event;
        console.log("AppComponent: " + this.broadcast);
    };
    // Transmets l'erreur sélectionnée au enfants, reçue depuis ToolbarComponent.emitDetailError
    AppComponent.prototype.onShowError = function ($event) {
        this.isShowDetail = true;
        this.selectedError = $event;
    };
    // Ferme le panel de detail de l'erreur
    AppComponent.prototype.closeErrorDetail = function () {
        this.isShowDetail = false;
        this.selectedError = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            // Definis la balise HTML custom
            selector: 'my-app',
            // Charge la template HMTL
            templateUrl: 'app/app.html',
            // Charge le page de style CSS générale
            styleUrls: ['app/app.css'],
            // Déclare les directives
            directives: [article_list_component_1.ArticleListComponent, sidebar_component_1.SidebarComponent, toolbar_component_1.ToolbarComponent, error_detail_component_1.ErrorDetailComponent, error_handler_directive_1.ErrorHandlerDirective],
            // Déclare les providers de service de recupération de données API
            providers: [article_service_1.ArticleService, error_service_1.ErrorService],
        }), 
        __metadata('design:paramtypes', [article_service_1.ArticleService, error_service_1.ErrorService, platform_browser_1.Title])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// Definis les données visibles sur la page d'accueil, à ameliorer...
var homeTitle = "Accueil - webDAN";
var welcome = [{ id: 1000, title: "<h2>Bienvenue</h2>", subtitle: "<h3>sur le projet webDAN</h3>", content: "<p>Utilisez les liens pour naviguer sur le site et voir les articles, les outils pour acceder au erreurs se trouvent en haut de la page...", created: "", author: "", errors: [], images: [], videos: [] }];
//# sourceMappingURL=app.component.js.map