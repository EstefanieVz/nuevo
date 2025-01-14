import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventana1',
  templateUrl: './ventana1.page.html',
  styleUrls: ['./ventana1.page.scss'],
  standalone:false,
})
export class Ventana1Page implements OnInit {
  selectedSegment:string='all';//Valor inicial del segmento
  constructor() { }

  ngOnInit() {
  }

}
