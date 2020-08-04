import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {



  descripcion:any='';
  stock:any='';
  constructor(public http: HttpClient) {}



  public CrearPRO() {
  
    return new Promise(resolve => {
  //    http://localhost:8080/ServidorCamasWilmer/wr/inventario/producto?descripcion={String}&stock={int}
      this.http.get('http://127.0.0.1:8080/ServidorCamasWilmer/wr/inventario/producto?descripcion='+this.descripcion+'&stock='+this.stock).subscribe(data => {
      console.log(data);  
     

        
      }, () => {
       // this.presentAlert();
      }
      );
    });
  }






}
