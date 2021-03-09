import { Component, OnInit } from '@angular/core';
import { Technology } from '../models/Technology';
import { TechnoService } from '../services/techno.service';

@Component({
  selector: 'app-techno-list',
  templateUrl: './techno-list.component.html',
  styleUrls: ['./techno-list.component.css']
})
export class TechnoListComponent implements OnInit {

  allTechnos: Technology[] = [];

  constructor(private ts: TechnoService) { }

  ngOnInit(): void {
    this.getTechnos();
  }

  getTechnos() {
    this.allTechnos = this.ts.getTechnos();
  }

}
