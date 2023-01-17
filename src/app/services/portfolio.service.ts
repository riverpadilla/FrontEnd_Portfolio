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


 // editarAbout(componente:string,item:any):Observable<any>{
 //   const url=this.apiUrl + "/" + componente + "/"+ `${item.id}`;
 //   console.log(url);
//  return  this.http.put(url,item,httpOptions);
 // }

  editarItem(componente:string, item:any, check:boolean):Observable<any>{
    let url:string="";
    if (check){
      url =this.apiUrl + "/" + componente + "/"+ `${item.id}`;
    } else{
      url=this.apiUrl + "/" + componente;
    }
    
    console.log(url);
    console.log(item);
    return  this.http.put(url,item,httpOptions);
  }
}