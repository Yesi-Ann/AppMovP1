import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplicadora',
  templateUrl: './multiplicadora.page.html',
  styleUrls: ['./multiplicadora.page.scss'],
})
export class MultiplicadoraPage implements OnInit {

  numero: number = 0;
  tabla: string[] =[];

  constructor() { }

  ngOnInit() {
  }

  generarTabla(){

this.tabla = []
if (this.numero <= 0) {
  this.tabla.push('Por favor, ingrese un numero positivo.');
  return;
}

for (let i = 1; i <= 14; i++) {
  this.tabla.push(`${this.numero} x ${i} = ${this.numero * i}`);
  
}

  }

}