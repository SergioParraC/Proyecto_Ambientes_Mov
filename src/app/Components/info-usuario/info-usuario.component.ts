import { Component, OnInit } from '@angular/core';

// crear con el comando --> ionic g c info-usuario
@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.scss'],
  standalone: true,
})
export class InfoUsuarioComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
