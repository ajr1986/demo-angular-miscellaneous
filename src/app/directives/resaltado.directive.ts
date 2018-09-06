import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") 
  color: string;

  constructor(private e: ElementRef) { 
    console.log(this.color);
  }

  @HostListener("mouseenter")
  mouseEnter(){
    this.resaltar(this.color);
  }

  @HostListener("mouseleave")
  mouseLeave(){
    this.resaltar(null);
  }

  resaltar(color:string = "yellow"){
    this.e.nativeElement.style.backgroundColor = color;
  }
}
