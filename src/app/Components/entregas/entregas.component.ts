import { Component, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonInput, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.scss'],
  imports: [ IonItem, IonLabel, IonInput, IonButton ]
})
export class EntregasComponent {
  bloqueado: boolean = false;
  nombre:string = "Kevin Reyes"
  direccion:string = "calle 23 sur # 23 E - 23"
  telefono:string = "312132312312"
  ciudad:string = "Bogotá"
  
  bloquear() {
    this.bloqueado = !this.bloqueado;
  }

}