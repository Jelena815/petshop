import { Component, Input } from '@angular/core';

export interface Slide{
  imgSrc: string;
  imgAlt: string;
}

@Component({
  selector: 'app-touch-slider',
  templateUrl: './touch-slider.component.html',
  styleUrls: ['./touch-slider.component.css']
})

export class TouchSliderComponent {
  @Input() slike: Slide[] = [];

  selectedIndex = 0;

  showPrev(i: number){
    if(this.selectedIndex>0){
      this.selectedIndex = i-1;
    }
  }

  showNext(i: number){
    if(this.selectedIndex < this.slike?.length - 1){
      this.selectedIndex = i+1;
    }
  }
}
