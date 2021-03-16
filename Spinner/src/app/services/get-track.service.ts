import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpotifyService } from './spotify.service';
import { Track } from '../models/result-model';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class GetTrackService {

  constructor(private spotifyServ: SpotifyService) { }

  public getTrack(trackId: string): Observable<Track> {
    const getUrl: string = `tracks/${trackId}`;
    let token: Token = this.spotifyServ.getToken();

    return this.spotifyServ.getQuery(getUrl, token).pipe(
      map(resp => resp as Track)
    );
  }
}
