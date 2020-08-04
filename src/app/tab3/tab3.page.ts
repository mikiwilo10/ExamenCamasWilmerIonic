import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  data:any=[];
  constructor(public http: HttpClient) {}
//http://127.0.0.1:8080/ServidorCamasWilmer/wr/inventario/listarMovimiento

ngOnInit() : void{
  // this.getApiJAVA();
  this.login();
 }


 doRefresh(event){
    
  setTimeout(() => {
    this.login();
    event.target.complete();
  },1500);
}

public login() {
   
     
  this.http.get('http://127.0.0.1:8080/ServidorCamasWilmer/wr/inventario/listarMovimiento').subscribe(data => {
      console.log(data);  
      this.data=data;
     // this.javaservi.CuentoOrigenSocio=this.data['idCuenta'];

        if (data == null) {
           
            console.log("vacio");  
          } else {
           
            console.log("Con Datos");  
          }
        }
        );
 
    } 


}
