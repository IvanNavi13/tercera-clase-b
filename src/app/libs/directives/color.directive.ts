import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appcolor]'
})
export class ColorDirective implements OnInit {
  
  @Input('appcolor') color: string='';  //Input->decorador
  @Input('fontSize') fontSize: string='';
  @Input('fontStyle') fontStyle: string='';
  constructor(private element: ElementRef) {    //Nos da el elemento al que se coloco en la directiva
  }
  
  ngOnInit(): void {
    console.log(this.color, this.fontSize, this.fontStyle);
    this.element.nativeElement.style.color = this.color;
    this.element.nativeElement.style.fontSize = this.fontSize;
    this.element.nativeElement.style.fontStyle = this.fontStyle;
  }

}
