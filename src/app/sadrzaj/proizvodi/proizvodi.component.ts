import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProizvodPromenjive } from 'src/app/proizvod';
import { ProizvodVrednost } from 'src/app/proizvodVrednost';

@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.component.html',
  styleUrls: ['./proizvodi.component.css']
})
export class ProizvodiComponent {

  // constructor(kolicina:number)
  // {
  //   this.kolicina = kolicina;
  // }

  proizvodi = ProizvodVrednost;
  kolicina: number = 0;

  dodaj(id: number){
    alert("proizvod: "+ id + " kolicina: "+ (document.getElementById('kolicina' + id) as HTMLInputElement).value);
  }

  // onSubmit(){
  //   alert("a");
  // }
}
