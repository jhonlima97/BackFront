import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  searchTechnology(query: string) {
    if (query.trim() === '') {
      // Si el término de búsqueda está vacío, navega a '/technologies'
      this._router.navigate(['/technologies']);
    } else {
      // Si el término de búsqueda no está vacío, navega a la ruta de búsqueda
      this._router.navigate(['/search', query]);
    }
  }
  
}