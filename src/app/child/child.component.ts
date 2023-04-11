import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent {
  @Output() ChildProd:EventEmitter<IProduct[]> = new EventEmitter<IProduct[]>();
  setData()
  {
    this.ChildProd.emit([
      { ID: 1, Name: "Product 1", Quantity: 10, Price: 500, Img: "assets/images/product1.jpg" },
      { ID: 2, Name: "Product 2", Quantity: 5, Price: 700, Img: "assets/images/product2.jpg" },
      { ID: 3, Name: "Product 3", Quantity: 20, Price: 990, Img: "assets/images/product3.jpg" },
      { ID:4, Name:"Product4", Quantity:25 , Price:220,Img:"assets/images/product4.jpg"}
    ])
  }
}
