import { Component, OnInit  , ViewChild} from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';
import { ICategory } from '../Shared Classes and types/ICategory';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers';
import { ProductService } from '../services/product-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})

export class ProductsComponent implements OnInit{
  Discount:DiscountOffers = DiscountOffers.FifteenPercent;
  Store_name:string = "RABA7";
  Store_Logo:string ="assets/logo.png";
  ClientName: string = "Prahim Mhmd";
  IsPurchased: boolean = true;
  ProductList:IProduct[] =[];
  prdId!:number;
  //   [{ ID: 1, Name: "Product 1", Quantity: 10, Price: 500, Img: "assets/images/product1.jpg" },
  //   { ID: 2, Name: "Product 2", Quantity: 5, Price: 700, Img: "assets/images/product2.jpg" },
  //   { ID: 3, Name: "Product 3", Quantity: 20, Price: 990, Img: "assets/images/product3.jpg" },
  //   { ID:4, Name:"Product4", Quantity:25 , Price:220,Img:"assets/images/product4.jpg"}
  // ];
  CategoryList:ICategory[]= [
    { ID: 1, Name: "Category 1" },
    { ID: 2, Name: "Category 2" },
    { ID: 3, Name: "Category 3" },
    { ID: 4, Name: "Category 4" }
  ];
  asd:string="";
  constructor(private _ProductService:ProductService, private router:Router,private _ActivatedRoute:ActivatedRoute)
  {

  }
  ngOnInit(): void {
     this.ProductList =this._ProductService.ProductList;
  }
  buyProduct()
  {
    this.IsPurchased = !this.IsPurchased;
  }

  oneProduct:any={};

  getById(id:any):IProduct
  {
    this.oneProduct=this._ProductService.GetProductById(id);
    return this.oneProduct;
  }
  renderValues():IProduct[]
  {

   this.ProductList= this._ProductService.GetAllProducts();
    return this.ProductList;
  }


  displayProducts:boolean = false;
  appProducts:IProduct[]=[];
  @ViewChild(ProductsComponent) productComponent!:ProductsComponent;

  showProducts():void {
    this.displayProducts= !this.displayProducts;
    this.productComponent.renderValues();
  }
  discount()
  {
    this.router.navigate(['discount'],{relativeTo:this._ActivatedRoute});
  }
  withoutdiscount()
  {
    this.router.navigate(['withoutdiscounts'],{relativeTo:this._ActivatedRoute});
  }

}
