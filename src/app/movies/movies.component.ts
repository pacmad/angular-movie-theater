import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: Movie = {
    id: 1,
    title: 'Iron Man',
    runtime: 126,
    rating: 'PG-13',
    genres: 'Action, Adventure, Sci-Fi'

  }

  constructor() { }

  ngOnInit() {
  }

}
