import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'peliculasApp';
  peilisPopulares: any [] = [];
  peilisCartelera: any [] = [];
  peilisPopularesNinos: any [] = [];
  peilisPopularesNinosLimit: any [] = [];
  peilisPopularesLimit: any [] = [];
  peilisCarteleraLimit: any [] = [];
  contPeli: number;
  urlImg: string = 'http://image.tmdb.org/t/p/w300';

  constructor(
    public peliService: PeliculasService,
    public http: HttpClient,
    public router: Router
  ) { 
    this.cargarPelisPopulares();
    this.cargarPopularesNinos();
    this.cargarCartelera();
  }

  ngOnInit(): void {
  }

  cargarPelisPopulares() {
    this.contPeli = 3;
    this.peliService.getPopulares().subscribe(rest => {
      this.peilisPopulares = rest['results'];
      // tslint:disable-next-line: forin
      for (const key in this.peilisPopulares) {
          const element = this.peilisPopulares[key];
          if (parseInt(key) < this.contPeli) {
            if (this.peilisPopulares[key]['poster_path'] === null) {
              this.contPeli = this.contPeli + 1;
            }else {
              this.peilisPopularesLimit.push(this.peilisPopulares[key]);
            }
          }

      }
      console.log(this.peilisPopulares);
    });

  }

  cargarPopularesNinos() {
    this.contPeli = 3;
    this.peliService.getPopularNino().subscribe(res => {
      this.peilisPopularesNinos = res['results'];
      // tslint:disable-next-line: forin
      for (const key in this.peilisPopularesNinos) {
          const element = this.peilisPopularesNinos[key];
          if (parseInt(key) < this.contPeli) {
            if (this.peilisPopularesNinos[key]['poster_path'] === null) {
              this.contPeli = this.contPeli + 1;
            }else {
              this.peilisPopularesNinosLimit.push(this.peilisPopularesNinos[key]);
            }
          }
      }
      console.log(this.peilisPopularesNinos);
    });

  }

  cargarCartelera() {
    this.contPeli = 3;
    this.peliService.getCartelera().subscribe(res => {
      this.peilisCartelera = res['results'];
      // tslint:disable-next-line: forin
      for (const key in this.peilisCartelera) {
        const element = this.peilisCartelera[key];
        if (parseInt(key) < this.contPeli) {
          if (this.peilisCartelera[key]['poster_path'] === null) {
            this.contPeli = this.contPeli + 1;
          }else {
            this.peilisCarteleraLimit.push(this.peilisCartelera[key]);
          }
        }
    }
      console.log(this.peilisCartelera);
    });
  }

  irPelicula(index: number) {
    this.router.navigate([`/pelicula/${index}/home`]);
    console.log(index);
  }

}
