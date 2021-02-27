import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IPost } from 'src/app/post.model';
import { environment } from 'src/environments/environment';

const POSTS_URL = 'posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: IPost[];

  post$: Subject<IPost> = new Subject();

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    
    // if (this.posts) {
    //   return of(this.posts);
    // }
    
    return this.http.get<IPost[]>(`${environment.REST_URL}${POSTS_URL}`)
      .pipe(tap((posts) => this.posts = posts)
    );
  }

  getPost(id: number) {
    
    if (this.posts) {
      const post = this.posts.find(p => p.id === id);
      
      if (post) {
        this.post$.next(post);
      }
    }

    this.http.get<IPost>(`${environment.REST_URL}${POSTS_URL}/${id}`)
      .subscribe(post => this.post$.next(post));
  }
}