import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-apiexterna',
  templateUrl: './apiexterna.page.html',
  styleUrls: ['./apiexterna.page.scss'],
})
export class ApiexternaPage implements OnInit {
  users:any;
  user:any;
  constructor(private api: ApiserviceService) { }

  ngOnInit() {
  }

  //funcion para suscribirse al observable
  obtenerUsuarios(){
    this.api.getUsuarios().subscribe((data)=>{
      this.users = data;
    })
  }

  ionViewWillEnter(){
    this.obtenerUsuarios();
  }

}
