import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Noticia } from './noticia'



@Injectable({
  providedIn: 'root'
})
export class BdserviceService {
  //Variable para manipular la conexión a la BD
  public database!: SQLiteObject;


  //variables para la creación de tablas
  tablaNoticia: string = "CREATE TABLE IF NOT EXISTS noticia(id INTEGER PRIMARY KEY autoincrement, titulo VARCHAR(100) NOT NULL, texto VARCHAR(300) NOT NULL);";


  //variables de insert en las tablas de registros iniciales
  registroNoticia: string = "INSERT OR IGNORE INTO noticia(id,titulo,texto) VALUES (1,'Soy un titulo','Soy un texto de una noticia');";


  //variables observables para las consultas en las tablas
  listaNoticias = new BehaviorSubject([]);


  //variable para manipulacíon del estatus de la BD
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);


 
  constructor(private alertController: AlertController ,private sqlite: SQLite, private platform: Platform) {
    this.crearBD();
  }

  //función para suscribirme al observable
  dbState(){
    return this.isDBReady.asObservable();
  }


  fetchNoticia(): Observable<Noticia[]>{
    return this.listaNoticias.asObservable();
  }

  buscarNoticia(){
    return this.database.executeSql('select * from noticia',[]).then(res=>{
      //variable para almacenar consulta
      let items: Noticia[] = [];
      //validar si existen registros
      if (res.rows.length > 0){
        //procedo a recorrer y guardar
        for(var i=0; i<res.rows.length; i++){
          //agregar los datos a mi variable
          items.push({
            id: res.rows.item(i).id,
            titulo: res.rows.item(i).titulo,
            texto: res.rows.item(i).texto
          })
        }
      }
      //actualizar observable
      this.listaNoticias.next(items as any);
    })
  }

  insertarNoticias(titulo:any,texto:any){
    return this.database.executeSql('insert into noticia(titulo,texto) values (?,?)',[titulo,texto]).then(res=>{
      this.buscarNoticia();
    })
  }

  actualizarNoticia(id:any,titulo:any,texto:any){
    return this.database.executeSql('update noticia set titulo=?, texto=? where id=?',[titulo,texto,id]).then(res=>{
      this.buscarNoticia();
    })
  }

  eliminarNoticia(id:any){
    return this.database.executeSql('delete from noticia where id=?',[id]).then(res=>{
      this.buscarNoticia();
    })
  }

  //funcion para crear la base de datos
  crearBD(){
    //verificamos que la plataforma está lista
    this.platform.ready().then(()=>{
      //crear la bd
      this.sqlite.create({
        name: 'bdnoticias.db',
        location: 'default'
      }).then((db: SQLiteObject)=>{
        //guardamos la conexión en mi variable global
        this.database = db;
        //llamar a la funcion que crea las tablas
        this.crearTablas();
      }).catch(e=>{
        //capturamos y mostraremos el error en la creacion de la BD
        this.presentAlert("Error en crear BD: " + e);
      })
    })
  }

  async crearTablas(){
    try{
      //ejecutar la creacion de tablas
      await this.database.executeSql(this.tablaNoticia,[]);

      //ejecuto los registros
      await this.database.executeSql(this.registroNoticia,[]);
      
      //actualizar el estatus de la BD
      this.isDBReady.next(true);
      this.buscarNoticia();
    }catch(e){
      //capturamos y mostramos el error en la creacion de las tablas
      this.presentAlert("Error en Crear tablas: " + e);
    }
  }




  async presentAlert(msj:string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

 
}




