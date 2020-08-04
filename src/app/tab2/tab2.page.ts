import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  Descripcion:any='';
  ingreso:any='0';
  fecha:any='';
  egreso:any='0';
  idproducto:any='';
  
  constructor(public router:Router,public http: HttpClient) {}


  public CrearMovimiento() {
  
    return new Promise(resolve => {
 
  //http://localhost:8080/ServidorCamasWilmer/wr/inventario/movimiento?fecha={String}&Descripcion={String}&ingreso={int}&egreso={int}&idproducto={int}
 this.http.get('http://127.0.0.1:8080/ServidorCamasWilmer/wr/inventario/movimiento?fecha='+this.fecha+'&Descripcion='+this.Descripcion+'&ingreso='+this.ingreso+'&egreso='+this.egreso+'&idproducto='+this.idproducto).subscribe(data => {
      console.log(data);  
     
      this.router.navigate(['/tab3']);
     
      }, () => {
       // this.presentAlert();
        
      this.limpiar();
      }
      );
    });
  }

limpiar(){
  this.Descripcion='';
  this.ingreso='0';
  this.fecha='';
  this.egreso='0';
  this.idproducto='';
}


}
