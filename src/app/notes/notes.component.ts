import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NamesValidator,forbiddenUserName } from '../validations/userNameValidator';
import { IProduct } from '../Shared Classes and types/IProduct';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})
export class NotesComponent implements OnInit{


  products:IProduct[]=[];
  constructor(private fb:FormBuilder,private _ProductService:ProductService)
  {

  }
  productForm=this.fb.group({
    Name:['',[Validators.required,NamesValidator]],
    Products:[this.products],
    comments:this.fb.array([]),
    discountCheckbox:[''],
    discountValue:[''],

  })
  get prodName(){
    return this.productForm.get('Name');
  }
  ngOnInit(): void {
    this.products=this._ProductService.GetAllProducts();

  }
  get coments()
  {
    return this.productForm.get('comments') as FormArray;
  }
  addComment()
  {
    this.coments.push(this.fb.control(''));

  }
  removeComment(index:any)
  {
    this.coments.removeAt(index);
  }


}
