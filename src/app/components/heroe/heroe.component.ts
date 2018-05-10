import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  imagenCasa:string;

  constructor(private _activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) {

    this._activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      if (this.heroe.casa=="DC") {
        this.imagenCasa = "assets/img/dc.png";
      }else{
        this.imagenCasa = "assets/img/marvel.png";
      }
    });

  }

  ngOnInit() {
  }

}
