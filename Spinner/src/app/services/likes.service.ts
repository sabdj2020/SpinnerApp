import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UrlService} from './url.service';
import { Post } from '../models/post';
import { PostComment } from '../models/post-comment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class LikesService {
  baseUrl: string;
    
    constructor(private http: HttpClient, private urlServ: UrlService) {
        this.baseUrl = this.urlServ.baseUrl;
    }

    addLike(postId: number): Observable<Post> {
        return this.http.put(this.baseUrl + '/posts/likes/' + postId, {}, {withCredentials: true}).pipe(map(response => response as Post));
    }

    addLikeComment(postCommentId: number): Observable<PostComment> {
      return this.http.put(this.baseUrl + '/posts/comments/' + postCommentId, {}, {withCredentials: true}).pipe(map(response => response as PostComment));
  }
}
