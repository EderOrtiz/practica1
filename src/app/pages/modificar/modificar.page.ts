import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {
  idNoticia = "";
  tituloNoticia = "";
  textoNoticia = "";

  constructor() {
    

   }

  ngOnInit() {
  }
  

}
