import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

pelicula: any [] = [];
urlImg: string = 'http://image.tmdb.org/t/p/w500';

  constructor(
    private router: ActivatedRoute,
    private ps: PeliculasService,
    private ro: Router
  ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe( res => {
      console.log(res['params']['i']);
      console.log(res['params']);
      this.ps.getPeliId(res['params']['i']).subscribe( (res: any) => {
        this.pelicula = res;
        console.log(this.pelicula);
      })
    });

  }

  regresar() {
    this.router.paramMap.subscribe( res => { 
      if ( res['params']['select'] === 'home') {
        this.ro.navigate(['/home']);
      }else {
        this.ro.navigate([`/buscar/${res['params']['select']}`]);
      }
    });
  }

}
