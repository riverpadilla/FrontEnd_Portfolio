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

  private apiUrl= 'http://localhost:8080';
  private showFormulario:boolean = false;
  private subjectAbout = new Subject<any>();
  private subjectHeader = new Subject<any>();
  private item:any = {};
  private checkNew:Boolean = false;

  constructor(private http:HttpClient) {}


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

  sendData(item:any,check:Boolean):void {
    this.item=item;
    this.checkNew=check;
  }

  receiveData():any{
    return this.item;
  }

  onNew():any{
    return this.checkNew;
  }



  borrarItem(componente:string, item:any):Observable<any>{
    const url=this.apiUrl + "/" + componente + "/delete/"+ `${item.id}`;

    console.log(url);

    return  this.http.delete(url);
  }

  editarItem(componente:string, item:any, check:boolean):Observable<any>{
    let url:string="";
    if (check){
      url =this.apiUrl + "/" + componente + "/edit/"+ `${item.id}`;
    } else{
      url=this.apiUrl + "/" + componente+ "/edit";
    }

    return this.http.put<any>(url,item,httpOptions);
  }

  crearItem(componente:string, item:any, check:boolean):Observable<any>{
    const url =this.apiUrl + "/" + componente + "/new";

    return this.http.post<any>(url,item,httpOptions);
  }

}