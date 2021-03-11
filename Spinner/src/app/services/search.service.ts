import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Track } from '../models/result-model';
import { Token } from '../models/token';
import { GetTrackService } from './get-track.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private spotifyServ: SpotifyService) { }

  public getSearchResult(term: string, token: Token): Observable<Track[]> {
    const searchUrl: string = `search?q=${term}&type=track&limit=10`;

    return this.spotifyServ.getQuery(searchUrl, token).pipe(
      map(resp => resp as Track[])
    );
  }
}
