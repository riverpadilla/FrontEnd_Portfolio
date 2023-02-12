import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private apiUrl= 'http://localhost:5000';
  // private apiUrl= 'http://localhost:8080';
  private showFormulario:boolean = false;
  private subject = new Subject<any>();
  private item :any="";

  constructor(private http:HttpClient) { }


  toggleFormulario(check:boolean):void{
    this.showFormulario = check;
    this.subject.next(this.showFormulario);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }

  obtenerDatos(componente:string):Observable<any> {
    const url = this.apiUrl + "/" + componente;
    console.log("Esta es la url " + url)
    return this.http.get(url);
  }

  borrarItem(componente:string, item:any):Observable<any>{
    const url=this.apiUrl + "/" + componente + "/"+ `${item.id}`;
    return  this.http.delete(url);
  }

  readData(item:any) :void{
    this.item=item;
  }

  writeData(){
    return this.item;
  }

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

  crearItem(componente:string, item:any, check:boolean):Observable<any>{
    let url:string="";
    if (check){
      url =this.apiUrl + "/" + componente + "/"+ `${item.id}`;
    } else{
      url=this.apiUrl + "/" + componente;
    }
    
    console.log(url);
    console.log(item);
    return  this.http.post(url,item,httpOptions);
  }
}