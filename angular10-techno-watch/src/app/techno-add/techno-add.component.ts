import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TechnoService } from '../services/techno.service';

@Component({
  selector: 'app-techno-add',
  templateUrl: './techno-add.component.html',
  styleUrls: ['./techno-add.component.css']
})
export class TechnoAddComponent implements OnInit {

  constructor(private ts: TechnoService) { }

  ngOnInit(): void {
  }

  addTechno(f:NgForm) {
    console.log(f.value);
    this.ts.createTechno(f.value);
    f.reset();
  }

}
