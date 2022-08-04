import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgPeli'
})
export class ImgPeliPipe implements PipeTransform {
// recibe en este caso un objeto con las peliculas  y eso es lo que se transforma
  transform(pelicula: any): any {
    if (pelicula.backdrop_path) {
      return pelicula.backdrop_path;
    }else{
      if (pelicula.poster_path) {
        return pelicula.poster_path;
      }else {
        return pelicula.default;
      }
    }

  }

}
