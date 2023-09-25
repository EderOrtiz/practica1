import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  //url de acceso a la api
  ApiURL = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }


  getUsuarios(): Observable<any>{
    return this.http.get(this.ApiURL + "/users/").pipe(
      retry(3)
    );
  }

}
