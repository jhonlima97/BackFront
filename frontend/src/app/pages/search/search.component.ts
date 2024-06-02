import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Technology } from '../../models/technology.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TechnologyCardComponent } from '../../components/technology-card/technology-card.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,TechnologyCardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers: [HttpService, HttpClientModule]

})
export class SearchComponent implements OnInit {
  technologies: Technology[] = [];
  query!: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _httpService: HttpService
  ){}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.query = params['query'];
      this._httpService
      .searchTechnology(this.query) // Usa este método en tu service
      .subscribe((response: {data: Technology[]}) => {
        this.technologies = response.data; // Asigna response.data a this.technologies
        console.log('Query:', this.query); // Ver el valor de entrada
        console.log('Technologies:', this.technologies);
      });          
    });
  }
  
}
