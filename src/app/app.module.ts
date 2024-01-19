import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZaglavljeComponent } from './zaglavlje/zaglavlje.component';
import { SadrzajComponent } from './sadrzaj/sadrzaj.component';
import { LogoComponent } from './zaglavlje/logo/logo.component';
import { NavbarComponent } from './zaglavlje/navbar/navbar.component';
import { ProizvodiComponent } from './sadrzaj/proizvodi/proizvodi.component';
import { GalerijaComponent } from './sadrzaj/galerija/galerija.component';
import { ONamaComponent } from './sadrzaj/o-nama/o-nama.component';

@NgModule({
  declarations: [
    AppComponent,
    ZaglavljeComponent,
    SadrzajComponent,
    LogoComponent,
    NavbarComponent,
    ProizvodiComponent,
    GalerijaComponent,
    ONamaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
