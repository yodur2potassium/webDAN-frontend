// ErrorDetailComponent, affiche le détail d'une Erreur
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
// Importe Component pour la déclaration et Input pour récuperer les données du parent
var core_1 = require("@angular/core");
var error_1 = require("./error");
// Charge le template affichant le détail d'une Erreur et parcours et affiche le tableau de Documentation
// (click)= assigne la methode sur le clic de l'utilisateur
// *ngIf= verifie l'existence de l'attribut avant affichage du template
// {{ error.title }} "bind" l'affichage sur l'attribut de l'instance
var ErrorDetailComponent = (function () {
    function ErrorDetailComponent() {
    }
    // Récupère et affiche dans la console la cible de l'erreur...
    ErrorDetailComponent.prototype.getLinkedTo = function () {
        console.log(this.error);
        if (this.error.article) {
            console.log('Cette erreur est lié a :' + this.error.article.title);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', error_1.Error)
    ], ErrorDetailComponent.prototype, "error", void 0);
    ErrorDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-error-detail',
            template: "\n    <div class=\"panel panel-info\" *ngIf=\"error\" (click)=\"getLinkedTo()\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">D\u00E9tail de l'erreur</h3>\n      </div>\n      <div class=\"panel-body\">\n        <h4>Description :</h4>\n        <p>{{error.title}}</p>\n        <h4>Correction :</h4>\n        <p>{{ error.description }}</p>\n        <h4>Documentation :</h4>\n        <ul>\n          <li *ngFor=\"let doc of error.documentations\">\n            <a href=\"{{doc.source}}\">Lien vers ressources externes en {{doc.lang}}</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorDetailComponent);
    return ErrorDetailComponent;
}());
exports.ErrorDetailComponent = ErrorDetailComponent;
//# sourceMappingURL=error-detail.component.js.map