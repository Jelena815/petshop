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

  // constructor(getId:number, getNaziv: string)
  // {
  //   this.getId = getId;
  //   this.getNaziv = getNaziv
  // }  
  
  // public getId: number =0;
  // public getNaziv: string = "";
  
/////
  proizvodi = ProizvodVrednost;
  kolicina: number = 0;


  dodaj(id: number){
    alert("proizvod: "+ id + " kolicina: "+ (document.getElementById('kolicina' + id) as HTMLInputElement).value);
  }


  // dohvatiPodatke(id: number,naziv: string){
  //   // kolicina = document.getElementById('kolicina' + id);
  //   this.getId = id;
  //   this.getNaziv = naziv;
  // }
}
