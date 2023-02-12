import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { header } from '../model/header.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private apiUrl= 'http://localhost:8080';
  private showFormulario:boolean = false;
  private showFormularioAbout:boolean = false;
  private subject = new Subject<any>();
  private subjectAbout = new Subject<any>();
  private subjectHeader = new Subject<any>();
  private item :any="";

  constructor(private http:HttpClient) { }


  toggleFormulario(code:Number, check:boolean):void{
    this.showFormulario = check;
    if (code==1) {
      this.subjectAbout.next(this.showFormulario);
    }else{
      this.subjectHeader.next(this.showFormulario);
    }
    
  }

  onToggle(code:Number):Observable<any>{
    if(code==1){
      return this.subjectAbout.asObservable();
    }else{
      return this.subjectHeader.asObservable();
    }
  }

  obtenerDatos(componente:string):Observable<any> {
    const url = this.apiUrl + "/" + componente + "/view";
    return this.http.get<any>(url);
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
      url =this.apiUrl + "/" + componente + "/edit/"+ `${item.id}`;
    } else{
      url=this.apiUrl + "/" + componente+ "/edit";
    }
    console.log(url, item);
    return  this.http.put(url,item,httpOptions);
  }

  crearItem(componente:string, item:any, check:boolean):Observable<any>{
    let url:string="";
    if (check){
      url =this.apiUrl + "/" + componente + "/"+ `${item.id}`;
    } else{
      url=this.apiUrl + "/" + componente;
    }
    
    return  this.http.post(url,item,httpOptions);
  }

  headerRefresh(){
    window.location.reload();
  }
}