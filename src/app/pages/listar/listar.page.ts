import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BdserviceService } from 'src/app/services/bdservice.service';
import { DbservicioService } from 'src/app/services/dbservicio.service';

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

  constructor(private bd: BdserviceService, private router: Router) { }

  ngOnInit() {
    this.bd.dbState().subscribe(res=>{
      if (res){
        this.bd.fetchNoticia().subscribe(datos=>{
          this.arregloNoticias = datos;
        })
      }
    })

  }

  modificar(x:any){
    let NavigationExtras: NavigationExtras = {
      state: {
        idEnviado: x.id,
        tituloEnviado: x.titulo,
        textoEnviado: x.texto
      }
    }
    this.router.navigate(['/modificar'], NavigationExtras)
  }

  eliminar(x:any){
    this.bd.eliminarNoticia(x.id);
    this.bd.presentAlert("Noticia Eliminada");
  }
}
