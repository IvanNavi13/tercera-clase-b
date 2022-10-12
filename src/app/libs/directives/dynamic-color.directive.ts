import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dynamicColor]'
})
export class DynamicColorDirective {

  @Input('dynamicColor') color : string = '';
  @Input('colorEnter') colorEnter : string = '';
  @Input('size') size: string='';
  
  @HostListener('mouseleave') mouse(){    //Escucha eventos del html
    console.log("this");
    this.element.nativeElement.style.color = this.colorEnter;
  } 
  @HostListener("mouseenter") mouseEnter(){
    this.element.nativeElement.style.color = this.color;
  }
  @HostListener("click") mouseClick(){
    this.element.nativeElement.style.fontSize = this.size;
  }
  constructor( private element: ElementRef) { }

  ngOnInit(): void {
    console.log(this.color);
    console.log(this.element.nativeElement);
  }

}
