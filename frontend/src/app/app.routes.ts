import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { TechnologyComponent } from "./pages/technology/technology.component";
import { SearchComponent } from "./pages/search/search.component";
import { HttpClientModule } from '@angular/common/http';
import { TechnologyCardComponent } from './components/technology-card/technology-card.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'technologies', component: TechnologiesComponent },
    { path: 'about', component: AboutComponent },
    { path: "technology/:id", component: TechnologyComponent },
    { path: "search/:query", component: SearchComponent },
    { path: "**", pathMatch: "full", redirectTo: "home" }
];

export const components = [
    HomeComponent,
    AboutComponent,
    TechnologiesComponent,
    TechnologyComponent,
    SearchComponent,
    HttpClientModule,
    TechnologyCardComponent,
    RouterModule
];