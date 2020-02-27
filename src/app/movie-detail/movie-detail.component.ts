import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MovieService } from '../services/movie.service';
import { Movie } from '../movie';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  constructor(
    private route: ActivatedRoute, // holds info about route
    private movieService: MovieService, // gets data from server
    private location: Location // interacts with browser, i.e. back naviagtion
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    // '+' operator converts str to number
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }

}
