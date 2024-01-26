import { Component } from '@angular/core';
import { ProizvodVrednost } from 'src/app/proizvodVrednost';

@Component({
  selector: 'app-psi',
  templateUrl: './psi.component.html',
  styleUrls: ['./psi.component.css']
})
export class PsiComponent {
  proizvodi = ProizvodVrednost.filter(p => p.zivotinja == 'pas');
  kolicina: number = 0;


  dodaj(id: number){
    alert("proizvod: "+ id + " kolicina: "+ (document.getElementById('kolicina' + id) as HTMLInputElement).value);
  }
}
