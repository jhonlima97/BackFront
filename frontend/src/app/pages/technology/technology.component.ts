import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from "@angular/router";
import { HttpService } from "../../services/http.service";
import { Technology } from "../../models/technology.model";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [RouterModule, CommonModule, TechnologyComponent],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css',
  providers: [HttpService, HttpClientModule]

})
export class TechnologyComponent implements OnInit {
  public technology: Technology = {
    name: "",
    description: "",
    logo: "",
    _id: "",
    tags: [],
    updatedAt: new Date(),
    createdAt: new Date()
  };

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _httpService: HttpService
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      const id: string = params["id"];
      console.log('Technology ID:', id); // Log the technology ID
      this._httpService
        .getTechnology(id)
        .subscribe({
          next: (response: any) => {
            console.log('Response:', response); // Log the response
            this.technology = response.data; // Assign the data property of the response to technology
          },
          error: error => {
            console.error('Error:', error); // Log any error
          }
        });
    });
  }
    
}
