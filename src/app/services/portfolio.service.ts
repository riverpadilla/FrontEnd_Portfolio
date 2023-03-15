import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { Credentials } from '../model/Credentials';
import { style } from '@angular/animations';
import { TagContentType } from '@angular/compiler';

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
  private subjectModButtons = new Subject<any>;
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
    const url = this.apiUrl + "/api/view/" + componente;
    
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
    const url=this.apiUrl + "/api/delete/" + componente + "/"+ `${item.id}`;

    console.log(url);

    return  this.http.delete(url);
  }

  editarItem(componente:string, item:any, check:boolean):Observable<any>{
    let url:string="";
    if (check){
      url =this.apiUrl + "/api/edit/" + componente + "/"+ `${item.id}`;
    } else{
      url=this.apiUrl + "/api/edit/" + componente;
    }

    return this.http.put<any>(url,item,httpOptions);
  }

  crearItem(componente:string, item:any, check:boolean):Observable<any>{
    const url =this.apiUrl + "/api/new/" + componente + "";

    return this.http.post<any>(url,item,httpOptions);
  }

  login(creds: Credentials){
    const url = this.apiUrl + "/login"
    const loginBtn = document.querySelector(".social button");
       
    loginBtn!.innerHTML="Login";
   
   const loginResponse = this.http.post(url,creds,{
      observe:'response'
    }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers;
      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ', '');

      loginBtn!.innerHTML="Logout";
      loginBtn?.classList.remove("disabled");
      
      localStorage.setItem('token',token);
     
      return body;
    }));

    return loginResponse;
  }

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
      return localStorage.removeItem('token');
  }

}