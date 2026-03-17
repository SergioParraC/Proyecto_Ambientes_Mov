import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonInput, IonLabel, IonItem, IonImg, IonButton} from '@ionic/angular/standalone';

// crear con el comando --> ionic g c info-usuario
@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.scss'],
  standalone: true,
  imports: [FormsModule, IonLabel, IonInput, IonItem, IonImg, IonButton, CommonModule]
})
export class InfoUsuarioComponent {
  nombre: string = "Kevin Alberto"
  direccion: string = "Calle 69 bis 111 a"
  telefono: string = "3203633542"
  fecha_nac: string = "08/11/1997"
  rute:string = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  validador: boolean = true

  lista = [
    {
      id: 1,
      nombre: "Sergio"
    },
    {
      id: 2,
      nombre: "Tatiana"
    },
    {
      id: 3,
      nombre: "Leidy"
    },
  ]

  texto:string = "Hola mundo"
  prueba()
  {
    console.log(this.texto)
  }
}
