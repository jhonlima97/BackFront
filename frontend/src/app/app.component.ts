import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TechnologyCardComponent } from './components/technology-card/technology-card.component';
import { AboutComponent } from './pages/about/about.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    TechnologyCardComponent,
    TechnologiesComponent,
    TechnologyComponent,
    AboutComponent,
    SearchComponent,
    HomeComponent,
    NavbarComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}