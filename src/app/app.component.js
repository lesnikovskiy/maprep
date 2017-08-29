"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Hero';
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\t\t\t<h1>{{title}}</h1>\n\t\t\t<h2>My Heroes</h2>\n\t\t\t<ul class=\"heroes\">\n\t\t\t\t<li *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\">\n\t\t\t\t\t<span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t\t\t\t</li>\n\t\t\t<ul>\n\t\t\t<div *ngIf=\"selectedHero\">\n\t\t\t\t<h2>{{selectedHero.name}} details!</h2>\n\t\t\t\t<div><label>id: </label> {{selectedHero.id}}</div>\n\t\t\t\t<div>\n\t\t\t\t\t<label>name: </label>\n\t\t\t\t\t<input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t",
        styles: ["\n\t\t\t.selected {\n\t\t\t\tbackground-color: #CFD8DC !important;\n\t\t\t\tcolor: white;\n\t\t\t}\n\t\t\t.heroes {\n\t\t\t\tmargin: 0 0 2em 0;\n\t\t\t\tlist-style-type: none;\n\t\t\t\tpadding: 0;\n\t\t\t\twidth: 15em;\n\t\t\t}\n\t\t\t.heroes li {\n\t\t\t\tcursor: pointer;\n\t\t\t\tposition: relative;\n\t\t\t\tleft: 0;\n\t\t\t\tbackground-color: #EEE;\n\t\t\t\tmargin: .5em;\n\t\t\t\tpadding: .3em 0;\n\t\t\t\theight: 1.6em;\n\t\t\t\tborder-radius: 4px;\n\t\t\t}\n\t\t\t.heroes li.selected:hover {\n\t\t\t\tbackground-color: #BBD8DC !important;\n\t\t\t\tcolor: white;\n\t\t\t}\n\t\t\t.heroes li:hover {\n\t\t\t\tcolor: #607D8B;\n\t\t\t\tbackground-color: #DDD;\n\t\t\t\tleft: .1em;\n\t\t\t}\n\t\t\t.heroes .text {\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -3px;\n\t\t\t}\n\t\t\t.heroes .badge {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfont-size: small;\n\t\t\t\tcolor: white;\n\t\t\t\tpadding: 0.8em 0.7em 0 0.7em;\n\t\t\t\tbackground-color: #607D8B;\n\t\t\t\tline-height: 1em;\n\t\t\t\tposition: relative;\n\t\t\t\tleft: -1px;\n\t\t\t\ttop: -4px;\n\t\t\t\theight: 1.8em;\n\t\t\t\tmargin-right: .8em;\n\t\t\t\tborder-radius: 4px 0 0 4px;\n\t\t\t}\n\t"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map