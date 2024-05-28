import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirettiva1]'
})
export class Direttiva1Directive {

  constructor(private ref : ElementRef) {}

  ngOnInit(){
this.ref.nativeElement.style.backgroundColor = this.randomColor();

  }

  randomColor(){
    const rosso = Math.floor(Math.random() * 256);
    const verde = Math.floor(Math.random() * 256);
    const blu = Math.floor(Math.random() * 256);
    return (`rgb(${rosso}, ${verde}, ${blu})`);
  }


}
