import { Component, EventEmitter, Output } from '@angular/core';
import { IonItem, IonInput, IonLabel, IonButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Product } from 'src/app/data/interfaces/product';

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
  mensaje: string = "Esto es un mensaje"
  productoNuevo: Product[] = [];
  @Output() eventoMensaje = new EventEmitter<string>;
  agregarProducto() 
  {
    const producto: Product = {
      title: this.nombre,
      price: Number(this.precio),
      description: this.descripcion,
      image: this.urlImagen,
      rating: {
        rate: Number(this.puntuacion),
        count: Number(this.cantPersonas)
      }
    }
  }

  enviarMensaje()
  {
    this.eventoMensaje.emit(this.mensaje);
  }
}
