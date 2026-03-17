import { Component, OnInit } from '@angular/core';
import { IonItem, IonInput, IonLabel, IonButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  imports: [ IonItem, IonInput, IonLabel, IonButton, FormsModule ]
})
export class AddProductComponent {
  nombre: string = ""
  precio: string = ""
  descripcion: string = ""
  urlImagen:string = ""
  puntuacion: string = ""
  cantPersonas:string = ""

  agregarProducto() 
  {
    console.log(this.nombre)
    console.log(this.precio)
    console.log(this.descripcion)
    console.log(this.urlImagen)
    console.log(this.puntuacion)
    console.log(this.cantPersonas)
  }
}
