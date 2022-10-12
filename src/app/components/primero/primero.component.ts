import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

enum PAISES{
  'MEXICO',
  'JAPON',
  'RUSIA'
}

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.scss']
})
export class PrimeroComponent implements OnInit, AfterViewInit {

  @ViewChild('text',{static:true}) titleE!: ElementRef;


  public PAISES = PAISES;

  public flag : boolean = true;
  public countries: any[] = [
    {
    id: 10,
    name: "Mexico"
    },
    {
    id: 20,
    name: "Canada"},
    {
    id: 30,
    name: "Colombia"
    }]

  public dishes : any[] = [
    {
      dish: 'Taco',
      country: PAISES.MEXICO
    },
    {
      dish: 'Pambazo',
      country: PAISES.MEXICO
    },
    {
      dish: 'Sushi',
      country: PAISES.JAPON
    },
    {
      dish: 'Ramen',
      country: PAISES.JAPON
    },
    {
      dish: 'Vodka',
      country: PAISES.RUSIA
    },
  ];


  constructor(private render2: Renderer2) { }

  ngOnInit(): void {
    this.getButton();
  
  }

  ngAfterViewInit(): void {
    console.log(this.titleE);
    this.render2.setAttribute(this.titleE.nativeElement, "id", "another text");
    this.render2.setStyle(this.titleE.nativeElement, "color", "yellow");

  }

  getButton(){
    let button = document.getElementById("btn");
    button?.addEventListener("click", () => {
      this.flag = ! this.flag;
    })
  }

}
