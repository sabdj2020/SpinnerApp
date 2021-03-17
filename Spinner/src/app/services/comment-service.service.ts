import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {UrlService} from './url.service';
import { PostComment } from '../models/post-comment';

@Injectable({
    providedIn: 'root'
  })
export class CommentService {

    baseUrl: string;
    
    constructor(private http: HttpClient, private urlServ: UrlService) {
        this.baseUrl = this.urlServ.baseUrl;
    }

    add(postId: number): Observable<PostComment> {
        let commentString = (<HTMLInputElement>document.getElementById('new-comment')).value;
        (<HTMLInputElement>document.getElementById('new-comment')).value = "";

        let newComment = new PostComment();
        newComment.comment = commentString;

        return this.http.post(this.baseUrl + '/posts/comment/' + postId, newComment, {withCredentials: true}).pipe(map(response => response as PostComment));
    }

}
