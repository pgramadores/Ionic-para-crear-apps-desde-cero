import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	//Declaración de variables
	nombre: string = "Pro-Gramadores";
	datos: any;
	ropa: Array<string> = ["polera", "pantalon"]; //arreglo de datos

	constructor(public navCtrl: NavController, public http: Http) {

		//consumir una api rest
		this.http.get("http://mindicador.cl/api")
			.map(res => res.json())
			.subscribe(data => {
				this.datos = JSON.stringify(data.dolar.valor);
			});
	}

	//función de onclick
	saludo() {
		this.nombre = "Hola a todos";
	}

	//función para agregar datos a una lista
	agregar() {
		this.ropa.push(this.nombre);
	}

	//función para eliminar datos de la lista
	eliminar() {
		this.ropa.pop();
	}

	//función que retorna un dato
	retorno() {
		return "esto";
	}
}
