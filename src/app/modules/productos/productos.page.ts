import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AddProductComponent } from 'src/app/Components/add-product/add-product.component';
import { ShowProductsComponent } from 'src/app/Components/show-products/show-products.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, AddProductComponent, ShowProductsComponent ]
})
export class ProductosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }



}
