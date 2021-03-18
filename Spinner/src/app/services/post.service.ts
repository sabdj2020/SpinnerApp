import { Injectable } from '@angular/core';
import { Track } from '../models/result-model';
import { Post } from '../models/post';
import { Song } from '../models/song';
import { Band } from '../models/band';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../services/url.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl: string;

  constructor(private http: HttpClient, private urlServ: UrlService) { 
    this.baseUrl = this.urlServ.baseUrl + '/posts';
  }

  public createPost(tracks: Track[], title: string, band: Band) {
    let post: Post = new Post;
    post.id = 0;
    post.likes = 0;
    post.title = title;
    let postSongs: Song[] = new Array();
    tracks.forEach(function (track) {
      let song: Song = new Song;
      song.id = 0;
      song.songKey = track.id;
      postSongs.push(song);
    });
    post.songs = postSongs;
    post.band = band;
    post.postTime = new Date();
    this.http.post(this.baseUrl, post, {withCredentials: true}).subscribe();
  }

  public getBandPosts(bandId: number) {
    let url = this.baseUrl + '/band/' + bandId;

    return this.http.get(url, {withCredentials: true}).pipe(
      map(resp => resp as Post[])
    );
  }

  public getPostsBySong(track: Track) {
    let url = this.baseUrl + '/song/' + track.id;

    return this.http.get(url, {withCredentials: true}).pipe(
      map(resp => resp as Post[])
    );
  }
}
