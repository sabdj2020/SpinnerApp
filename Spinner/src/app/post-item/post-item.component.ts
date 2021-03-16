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
  postTracks: Track[] = new Array();

  constructor(private getTrackServ: GetTrackService) { }

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
