import { Injectable } from '@angular/core';
import { Technology } from '../models/Technology';

@Injectable({
  providedIn: 'root'
})
export class TechnoService {
  private technos: Technology[] = [];

  constructor() { }

  createTechno(techno: Technology) {
    const newTechno = {id: Date.now(), ...techno};
    this.technos = [newTechno, ...this.technos];
    console.log(this.technos);
    
  }
}
