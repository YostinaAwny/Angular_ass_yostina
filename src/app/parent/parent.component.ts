import { Component } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent {
  parentProds:IProduct[]=[];

}
