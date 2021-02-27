import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../core/services/posts.service';

@Component({
  selector: 'pb-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {
    
    this.postsService.post$.subscribe(data => {
      this.post = data;
    });
  }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.postsService.getPost(params.id);
    });
  }

}
