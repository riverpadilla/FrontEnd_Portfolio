import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private apiUrl= 'http://localhost:5000';

  constructor(private http:HttpClient) { }

  obtenerDatos(componente:string):Observable<any> {
    const url = this.apiUrl + "/" + componente;
    return this.http.get(url);
  }

  borrarItem(componente:string, item:any):Observable<any>{
    const url=this.apiUrl + "/" + componente + "/"+ `${item.id}`;
    console.log(url);
    return  this.http.delete(url);
  }

  editarItem(componente:string, item:any):Observable<any>{
    const url=this.apiUrl + "/" + componente + "/"+ `${item.id}`;
    console.log(url);
    return  this.http.put(url,item,httpOptions);
  }
}