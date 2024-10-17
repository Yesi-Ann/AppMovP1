import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.page.html',
  styleUrls: ['./promedio.page.scss'],
})
export class PromedioPage implements OnInit {

  numero1 : number =0;
  numero2 : number =0;
  numero3 : number =0;
  MsgError : string= '';
  resultado : number= 0;

  constructor() { }

  ngOnInit() {
  }

  getProm(){
if (this.numero1 >0 && this.numero2 >0 && this.numero3 >0)  {
this. resultado = (this.numero1 + this.numero2 + this.numero3)/3
  
} else {
  this.MsgError= "Ingrese un numero valido"
  }

  }

}
