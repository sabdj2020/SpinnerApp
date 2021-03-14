import { Token } from '../models/token';
import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../models/result-model';
import { SpotifyService } from '../services/spotify.service';
import { SearchService } from '../services/search.service';
import { PostService } from '../services/post.service';
import { Band } from '../models/band';

@Component({
  selector: 'app-band-post',
  templateUrl: './band-post.component.html',
  styleUrls: ['./band-post.component.css']
})
export class BandPostComponent implements OnInit {
  token: Token;
  searchTracks: Track[];
  postTracks: Track[] = [];
  postTitle: string;
  @Input() band: Band;

  constructor(private spotifyServ: SpotifyService, private searchServ: SearchService, private postServ: PostService) { }

  ngOnInit(): void {
    this.spotifyServ.getKey().subscribe(
      resp => {
        this.token = resp;
      }
    );
  }

  public search(term: string): void {
    this.searchServ.getSearchResult(term, this.token).subscribe((data: any) => {
      this.searchTracks = data.tracks.items;
    }, (err) => {
      console.error(err.message);
    });
  }

  public addToPost(track: Track) {
    let isInPost: boolean = false;
    for (let i = 0; i < this.postTracks.length; i++) {
      if (this.postTracks[i].id == track.id) {
        isInPost = true;
      }
    }
    if (!isInPost) {
      this.postTracks.push(track);
    }
  }

  public removeFromPost(track: Track) {
    for (let i = 0; i < this.postTracks.length; i++) {
      if (this.postTracks[i].id == track.id) {
        this.postTracks.splice(i, 1);
        break;
      }
    }
  }

  public createPost() {
    this.postServ.createPost(this.postTracks, this.postTitle, this.band);
  }

}
