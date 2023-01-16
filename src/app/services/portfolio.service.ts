import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private apiUrl= 'http://localhost:5000';

  constructor(private http:HttpClient) { }

  obtenerDatos(componente:string):Observable<any> {
    const url = this.apiUrl + "/" + componente;
    console.log()
    return this.http.get(url);
  }

  borrarEducation(education:any){
    const url='assets/data/data/education/'+ `${education.id}` +'.json';
    console.log(url);
    return  this.http.get(url);
  }

  borrarAbout(textoAbout:any){
    const url='assets/data/data/education/'+ `${textoAbout.id}` +'.json';
    console.log(url);
    return  this.http.get(url);
  }


  editarAbout(textoAbout:string):Observable<any>{
    const url='assets/data/data/about.json'
    return this.http.post(this.apiUrl,textoAbout);
  }
}