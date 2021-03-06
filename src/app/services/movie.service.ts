import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Movie } from '../movie';
import { MOVIES } from '../mock-movies';



@Injectable({ providedIn: 'root' })
export class MovieService {

  constructor() { }

  getMovie(id: number): Observable<Movie>{
    return of(MOVIES.find(movie => movie.id === id));
  }
  // HttpClient methods returns RxJS Observables
  getMovies(): Observable<Movie[]>{
    // simulate getting data from server with RxJS  of()
    return of(MOVIES);
  }
}
