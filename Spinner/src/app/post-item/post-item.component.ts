import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';
import { Track } from '../models/result-model';
import { Token } from '../models/token';
import { GetTrackService } from '../services/get-track.service';
import { CommentService } from '../services/comment-service.service';
import { LikesService } from '../services/likes.service';
import { PostComment } from '../models/post-comment';


@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Input() postComment: PostComment;
  token: Token;
  postTracks: Track[] = new Array();
  data:any;
  

  constructor(private getTrackServ: GetTrackService, private commentServ: CommentService, private likesServ: LikesService) { }

  addComment(): void {
    this.commentServ.add(this.post.id).subscribe(response => {this.post.comments.push(response)});
  }

  addLike(): void {
    this.likesServ.addLike(this.post.id).subscribe(response => {this.data=response});
  }

  addLikeComment(comment:any) {
    this.likesServ.addLikeComment(comment.id).subscribe(response => {this.data=response});
  }


  ngOnInit(): void {
    for (let i = 0; i < this.post.songs.length; i++) {
      let track: Track;
      this.getTrackServ.getTrack(this.post.songs[i].songKey).subscribe(
        resp => {
          track = resp;
          this.postTracks.push(track);
        }
      );
    }
  }

}
