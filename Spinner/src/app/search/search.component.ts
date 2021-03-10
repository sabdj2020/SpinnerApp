import { Component, OnInit } from '@angular/core';
import { Token } from '../models/token';
import { Track } from '../models/result-model';
import { SpotifyService } from '../services/spotify.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  token: Token;
  tracks: Track[] = [];

  constructor(private spotifyServ: SpotifyService, private searchServ: SearchService) { }

  ngOnInit(): void {
    this.spotifyServ.getKey().subscribe(
      resp => {
        this.token = resp;
      }
    );
  }

  public search(term: string): void {
    this.searchServ.getSearchResult(term, this.token).subscribe((data: any) => {
      this.tracks = data.tracks.items;
    }, (err) => {
      console.error(err.message);
    });
  }

}
