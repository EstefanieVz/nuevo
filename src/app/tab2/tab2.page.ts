import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  public BotonAlerta= ["Alerta"]
  public Buttons=[
    {
      text:'Eliminar',
      icon:'close-circle',
      role:'destructive',
      data:{
        action: 'delete',
      },
      handler: () => { //Es el evento click
        console.log("Eliminado");
      }
    },
    {
      text:'Compartir',
      icon:'share',
      data:{
        action:'share',
      },
      handler: () => {
        console.log("Compartir");
      }
    },
    {
      text: 'Cancelar',
      icon:'close',
      role: 'cancel',
      data:{
        action:'cancel',
      },
      handler:()=>{
        console.log("Cancelado");
      }
    },
    {
      text:'Basura',
      role:'basura',
      icon: 'trash',
      data:{
        action:'cancel',
      },
      handler: () => {
        console.log(" Eliminado");
      }
    },
  ]

  constructor() {}

}
