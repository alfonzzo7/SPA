import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styles: []
})
export class BuscarHeroeComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;

  constructor(private _heroesService:HeroesService,
              private _activatedRoute:ActivatedRoute,
              private _router:Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    });
  }

  verHeroe(idx:number){
    this._router.navigate(['/heroe',idx]);
  }

}
