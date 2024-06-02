import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../services/http.service";
import { Technology } from "../../models/technology.model";

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TechnologyCardComponent } from '../../components/technology-card/technology-card.component'; // Ajusta la ruta relativa según sea necesario

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [RouterModule, CommonModule, TechnologyCardComponent],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
  providers: [HttpService, HttpClientModule]

})
export class TechnologiesComponent implements OnInit {
  public technologies: Technology[] = [];

  constructor(public _httpService: HttpService) {}

  ngOnInit(): void {
    this._httpService.getTechnologies().subscribe((response: {data: Technology[]}) => {
      this.technologies = response.data;
    });         
  }
}