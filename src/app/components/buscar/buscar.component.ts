import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PeliculasService } from '../../services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  query: FormGroup;
  peliculas: any  [] = [];
  urlImg: string = 'http://image.tmdb.org/t/p/w300';
  peliBuscar: string;
  peticion: string;

  constructor(
    private fb: FormBuilder,
    private ps: PeliculasService,
    private router: ActivatedRoute,
    private ro: Router
  ) {
    this.cargarFormulario();
  }


  ngOnInit(): void {
    this.router.paramMap.subscribe((params: any) => {
      this.peliBuscar = params.get('q');
      console.log(this.peliBuscar);
      if (this.peliBuscar === null) {
          this.peliBuscar = this.query.value['buscar'];
      } else {
        this.cargarPelis( this.peliBuscar);
        this.cargarFormulario();
      }
    });
  }

  cargarFormulario() {
    if (this.peliBuscar === null) {
      this.peliBuscar = '';
    }
    this.query = this.fb.group({
      buscar: new FormControl(this.peliBuscar, [])
    });
  }

  cargarPelis(peli: string) {
    console.log(peli);
  //  console.log(this.query.value['buscar']);
    this.ps.getSearch(peli)
                .subscribe( (res: any) => {
                  this.peliculas = res.results;
                  console.log(this.peliculas);
                });
  }

  irPelicula(index: number, peli: string) {
    this.ro.navigate([`/pelicula/${index}/${peli}`]);
    console.log(index);
  }

}
