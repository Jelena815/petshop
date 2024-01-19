import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalerijaComponent } from './sadrzaj/galerija/galerija.component';
import { ONamaComponent } from './sadrzaj/o-nama/o-nama.component';
import { ProizvodiComponent } from './sadrzaj/proizvodi/proizvodi.component';

const routes: Routes = [
  {path: 'galerija', component: GalerijaComponent},
  {path: 'o-nama', component: ONamaComponent},
  {path: 'proizvodi', component: ProizvodiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
