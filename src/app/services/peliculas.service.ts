import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  'rxjs/ajax';



@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey: string = 'bf97040222422c9e84a7a78a56c14e42';
  private urlMovie: string = 'https://api.themoviedb.org/3';
  private urlImg: string = 'image.tmdb.org/t/p/w200';
 

  constructor(
    private http: HttpClient,
  ) {

   }


  getPopulares() {
    const url = `${this.urlMovie}/movie/popular?api_key=${this.apikey}&language=es&page=1`;
   
    return this.http.get( url );
  }

  getCartelera() {
    // let dateActual = new Date();
    // let dateDesde = new Date();
    // // dateDesde.setDate( dateActual.getFullYear());
    // let dateActualStr = `${dateActual.getFullYear()}-0${dateActual.getMonth() + 1}-${dateActual.getDate()}`;
    // let dateDesdeStr = `${dateDesde.getFullYear()}-0${dateDesde.getMonth() + 1}-${dateDesde.getDate()}`;
    // console.log(dateActualStr);
    // console.log(dateDesdeStr);
    // /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${this.apikey}
    const url = `${this.urlMovie}/movie/now_playing?api_key=${this.apikey}&language=es&page=1`;
    // const url = `${this.urlMovie}/discover/movie?primary_release_date.gte=2014-10-15&primary_release_date.lte=${dateActualStr}&api_key=${this.apikey}`;
    return this.http.get( url );
  }

  getPopularNino() {
    // const url = `${this.urlMovie}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}`;
    const url = `${this.urlMovie}/movie/top_rated?api_key=${this.apikey}&language=en-US&page=1`;
    return this.http.get(url);
  } 

  getSearch(query: string) {
    // falta separar la cadena y porner %20 por cada espacio
    const url = `${this.urlMovie}/search/movie?api_key=${this.apikey}&language=es&query=${query}&page=1&include_adult=false`;
    // /search/movie?api_key=<<>>language=en-US&query=toy%20stoy&page=1&include_adult=false
    console.log('testing the service');
    return this.http.get(url);
  }

  getPeliId(id: number) {
    https://api.themoviedb.org/3/movie/651586?api_key=bf97040222422c9e84a7a78a56c14e42&language=es
        console.log(id);
        const url = `${this.urlMovie}/movie/${id}?api_key=${this.apikey}&language=es`;

        return this.http.get(url);
  }




}


