import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  arregloNoticias: any = [
    {
      id: '',
      titulo: '',
      texto: ''
    }

  ]

  constructor() { }

  ngOnInit() {
    

  }

  
}
