import { Component } from '@angular/core';
import { ProizvodVrednost } from 'src/app/proizvodVrednost';

@Component({
  selector: 'app-ribice',
  templateUrl: './ribice.component.html',
  styleUrls: ['./ribice.component.css']
})
export class RibiceComponent {
  proizvodi = ProizvodVrednost.filter(p => p.zivotinja == 'riba');
  kolicina: number = 0;


  dodaj(id: number){
    alert("proizvod: "+ id + " kolicina: "+ (document.getElementById('kolicina' + id) as HTMLInputElement).value);
  }
}
