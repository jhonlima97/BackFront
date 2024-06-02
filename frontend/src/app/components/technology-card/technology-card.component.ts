import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-technology-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './technology-card.component.html',
  styleUrls: ['./technology-card.component.css']
})
export class TechnologyCardComponent implements OnInit {

  @Input() technology: any = {};
  constructor() {}

  ngOnInit() {}

}