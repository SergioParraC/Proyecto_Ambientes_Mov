import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss'],
})
export class PaginaComponent  {

  cuenta:string = "3203633542"
  numero:string = "6789876-98765678"
  fecha_pago:string = "03/02/2026"
  correo:string = "sparracu@uninpahu.edu.co"

}
