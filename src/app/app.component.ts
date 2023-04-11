import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { IProduct } from './Shared Classes and types/IProduct';

@Component({
  selector: 'myfirstapp-root ',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Lab_Project';

  // displayProducts:boolean = false;
  // appProducts:IProduct[]=[];
  // @ViewChild(ProductsComponent) productComponent!:ProductsComponent;

  // showProducts():void {
  //   this.displayProducts= !this.displayProducts;
  //   this.appProducts = this.productComponent.renderValues();
  // }

}
