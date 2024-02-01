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
