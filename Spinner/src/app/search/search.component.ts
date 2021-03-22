import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  tracks: Track[] = [];
  @Output() newTrack = new EventEmitter<Track>();

  constructor(private spotifyServ: SpotifyService, private searchServ: SearchService) { }

  ngOnInit(): void {}

  public search(term: string): void {
    if (term.length > 0) {
      this.searchServ.getSearchResult(term).subscribe((data: any) => {
        this.tracks = data.tracks.items;
      }, (err) => {
        console.error(err.message);
      });
    } else {
      this.tracks = [];
    }
  }

  public outputTrack(track: Track) {
    this.newTrack.emit(track);
  }

}
