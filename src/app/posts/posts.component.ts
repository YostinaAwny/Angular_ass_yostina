import { Component, OnInit } from '@angular/core';
import { IPost } from '../ipost';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit{
  postsList:IPost[] = [];
  constructor(private _PostsService:PostsService,private _router:Router)
  {

  }
  ngOnInit(): void {
  //  this.postsList = this._PostsService.Posts;
    this._PostsService.getPosts().subscribe((data)=>
  {
    this.postsList = data})
  }
  onSelected(post:any)
  {
    this._router.navigate([`/posts/${post.id}/comments)`])
  }

}
