import { Component, OnInit } from '@angular/core';
import { IUser } from '../iuser';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit{
  usersList:IUser[]=[];
  constructor(private _UsersService:UsersService)
  {
  }
  ngOnInit(): void {
    this._UsersService.getUsers().subscribe((data)=>{
    this.usersList=data});

  }


}
