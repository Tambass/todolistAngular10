import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-techno-add',
  templateUrl: './techno-add.component.html',
  styleUrls: ['./techno-add.component.css']
})
export class TechnoAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addTechno(f:NgForm) {
    console.log(f.value);
    
  }

}
