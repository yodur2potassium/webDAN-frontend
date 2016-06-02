// ArticleComponent, affiche une liste article, modifications prevues

// Importe Component pour la déclaration et OnInit pour lancer le service et fetch les donnée au demarrage du Component
import { Component, OnInit } from '@angular/core';

import { Article } from './article';
import { ArticleService } from './article.service';
import { ImageComponent } from "../image/image.component";
import { Image } from "../image/image";
import { Video } from "../video/video";
import { VideoComponent } from "../video/video.component";


@Component({
    // Défini la balise HTML custom
    selector:'my-article',

    // Template HTML effectuant l'affichage, parcours le tabeau d'articles, appelle my-image et injecte l'image si présente
    template: `
                <div *ngFor="let article of articles">
                <section>
                    <div class="page-header" innerHTML="{{article.title}} {{article.subtitle}}"></div>
                    <my-image [image]="article.images[0]"></my-image>
                    <div innerHTML="{{article.content}}"></div>
                    <my-video [video]="article.videos[0]"></my-video>
                    <my-image [image]="article.images[1]"></my-image>
                </section>
                </div>
    `,
    // Déclare les directives utilisées par le composant
    directives: [ImageComponent, VideoComponent]

})
export class ArticleComponent implements OnInit {
    // Attributs du Component avec type
    articles: Article[];
    error: any;
    test: string;

    constructor(private _articleService: ArticleService) {}
    // Callback, fetch les données via le service et les assigne
    getArticles() {
        this._articleService.getArticles().then(response => this.articles = response)
                                        .catch(error => this.error = error);
    }
    // Lifecycle hook, lance les fonctions a l'init du Component
    ngOnInit(){
        this.getArticles();
    }

    testFunction() {
      console.log(this);
      console.log(this.test);
    }
}
