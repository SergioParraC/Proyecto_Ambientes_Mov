import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { InfoUsuarioComponent } from 'src/app/Components/info-usuario/info-usuario.component';

// Cuando se agregan un componente se debe tanto importar como añadir a los imports del decorador (IonButton en este caso)
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  // El standalone es para indicar que el componente es independiente y no necesita ser declarado en un modulo, se puede usar en cualquier parte de la aplicacion sin necesidad de importarlo en un modulo
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, InfoUsuarioComponent]
})
export class HomePage implements OnInit {
  // Interpolacion de datos, asignacion de valores
  nombre: string = "Sergio Parra"
  // Property binding propiedades dinamicas para elementos html
  bloqueado: boolean = false;
  constructor() { }
// el ngOnInit es un método que se ejecuta al inicio de toda la página, usado para cargar datos
  ngOnInit() {
  }
  // Eveent binding, acciones al realizar eventos
  bloquear() {
    this.bloqueado = !this.bloqueado;
  }

}
