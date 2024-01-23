import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalerijaComponent } from './sadrzaj/galerija/galerija.component';
import { ONamaComponent } from './sadrzaj/o-nama/o-nama.component';
import { ProizvodiComponent } from './sadrzaj/proizvodi/proizvodi.component';
import { PsiComponent } from './sadrzaj/proizvodi/psi/psi.component';
import { MackeComponent } from './sadrzaj/proizvodi/macke/macke.component';
import { RibiceComponent } from './sadrzaj/proizvodi/ribice/ribice.component';
import { KorpaComponent } from './sadrzaj/korpa/korpa.component';

const routes: Routes = [
  {path: 'galerija', component: GalerijaComponent},
  {path: 'o-nama', component: ONamaComponent},
  {path: 'proizvodi', component: ProizvodiComponent},
  {path: 'psi', component: PsiComponent},
  {path: 'macke', component: MackeComponent},
  {path: 'ribice', component: RibiceComponent},
  {path: 'korpa', component: KorpaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
