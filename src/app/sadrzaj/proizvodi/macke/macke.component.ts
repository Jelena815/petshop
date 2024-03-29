import { Component } from '@angular/core';
import { ProizvodVrednost } from 'src/app/proizvodVrednost';

@Component({
  selector: 'app-macke',
  templateUrl: './macke.component.html',
  styleUrls: ['./macke.component.css']
})
export class MackeComponent {

  proizvodi = ProizvodVrednost.filter(p => p.zivotinja == 'macka');
  kolicina: number = 0;
  ukupnaKolicina: number=0;

  // dodaj(id: number){
  //   alert("proizvod: "+ id + " kolicina: "+ (document.getElementById('kolicina' + id) as HTMLInputElement).value);
  // }
  dodaj(naziv: string,id: number){
    let ukupnaKolicina = (Number)((document.getElementById('kolicina' + id) as HTMLInputElement).value);
    
    if(ukupnaKolicina  <= 10)
    {
      alert("Dodat proizvod u korpu: "+ naziv + " \nKolicina: "+ (document.getElementById('kolicina' + id) as HTMLInputElement).value);
    }
    else
    {
      alert("Nije moguće uneti ovu količinu, maksimalna količina je 10.");
    }
    
  }

}
