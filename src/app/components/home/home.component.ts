import { Component, OnInit } from '@angular/core';
import { postsAnimation } from 'src/animations';

import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'pb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ postsAnimation ]
})
export class HomeComponent implements OnInit {

  posts$ = this.postsService.getPosts();

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

}
