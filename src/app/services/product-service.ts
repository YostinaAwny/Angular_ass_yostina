import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {
  ProductList:IProduct[] =  [
    { ID: 1, Name: "Product 1", Quantity: 10, Price: 500, Img: "assets/images/product1.jpg" },
    { ID: 2, Name: "Product 2", Quantity: 5, Price: 700, Img: "assets/images/product2.jpg" },
    { ID: 3, Name: "Product 3", Quantity: 20, Price: 990, Img: "assets/images/product3.jpg" },
    { ID:4, Name:"Product4", Quantity:25 , Price:220,Img:"assets/images/product4.jpg"}
  ];
  constructor(_httpClient:HttpClient) { }
    ngOnInit()
    {
    }
  GetAllProducts():IProduct[]
  {
    return this.ProductList;
  }

  GetProductById(prdId:any):any
  {
    if(!isNaN(prdId))
    {
      const id = Number(prdId);
      return this.ProductList.find(p=>p.ID == id);
    }
    else
    {
      return null
    }
  }

}
