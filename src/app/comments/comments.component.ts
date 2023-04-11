import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment } from '../icomment';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit{
  postId! :any;
  comments:any;
  constructor(private _ActivatedRoute:ActivatedRoute , private _postsService:PostsService){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params => {
      this.postId = params.get('postId');
      this._postsService.getComments(this.postId).subscribe(comments => {
        this.comments = comments;
      });
    });
  }
}
