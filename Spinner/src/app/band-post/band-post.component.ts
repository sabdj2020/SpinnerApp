import { Token } from '../models/token';
import { Component, OnInit } from '@angular/core';
import { Track } from '../models/result-model';
import { SpotifyService } from '../services/spotify.service';
import { SearchService } from '../services/search.service';
import { PostService } from '../services/post.service';

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
    console.log("add to post");
    this.postTracks.push(track);
  }

  public removeFromPost(track: Track) {
    
  }

  public createPost() {
    this.postServ.createPost(this.postTracks, this.postTitle);
  }

}
