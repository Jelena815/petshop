import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galerija',
  templateUrl: './galerija.component.html',
  styleUrls: ['./galerija.component.css']
})

export class GalerijaComponent {
  slike = 
  [
    {
      imgSrc:'assets/zivotinja12.jpg',
      imgAlt:'zivotinja12'
    }
    ,
    {
      imgSrc:'assets/zivotinja5.jpg',
      imgAlt:'zivotinja5'
    },
    {
      imgSrc:'assets/zivotinja13.jpg',
      imgAlt:'zivotinja13'
    },
    {
      imgSrc:'assets/zivotinja1.jpg',
      imgAlt:'zivotinja1'
    },
    {
      imgSrc:'assets/zivotinja14.jpg',
      imgAlt:'zivotinja14'
    }
  ]
}
