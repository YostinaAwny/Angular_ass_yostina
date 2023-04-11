import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError} from 'rxjs/operators';

import { IPost } from './ipost';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService implements OnInit{
  // Posts:IPost[]=[
  //   {id:1,title:'prahim',
  //   body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsa dolores maxime iure porro soluta quasi alias, rem culpa iste.'},
  //   {id:2,title:'ahmed',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsa dolores maxime iure porro soluta quasi alias, rem culpa iste.'},
  //   {id:3,title:'Rabah',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsa dolores maxime iure porro soluta quasi alias, rem culpa iste.'},
  //   {id:4,title:'mohammed',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsa dolores maxime iure porro soluta quasi alias, rem culpa iste.'},
  //   {id:5,title:'moahmmoud',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsa dolores maxime iure porro soluta quasi alias, rem culpa iste.'},

  // ];

  constructor(private _HttpClient:HttpClient) { }
  ngOnInit(): void {
  }
  getPosts():Observable<any>
  {

    return this._HttpClient.get('https://jsonplaceholder.typicode.com/posts').pipe(

      catchError(err => {
        console.log(' error while fetching posts:', err);
        return [];
      })
    );
  };
  getComments(postId:number)
  {
    return this._HttpClient.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).pipe(
      catchError(err => {
        console.log(' error while fetching posts:', err);
        return [];
      })
    )
  }

}
