import { Component, OnInit } from '@angular/core';

import {Movie} from '../movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];
  selectedMovie: Movie;
  // Inject the MovieService
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  getMovies(): void{
    // asynchronous assignment emits array of heros
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

}
