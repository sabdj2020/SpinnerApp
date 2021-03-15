import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';
import { Track } from '../models/result-model';
import { Token } from '../models/token';
import { GetTrackService } from '../services/get-track.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  token: Token;
  postTracks: Track[];

  constructor(private getTrackServ: GetTrackService) { }

  ngOnInit(): void {
    this.post.songs.forEach(function(song) {
      this.getTrackServ.getTrack(song.songKey).subscribe(
        resp => {
          this.postTracks.push(resp);
        }
      )
    });
  }

}
