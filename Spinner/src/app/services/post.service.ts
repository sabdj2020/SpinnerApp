import { Injectable } from '@angular/core';
import { Track } from '../models/result-model';
import { Post } from '../models/post';
import { Song } from '../models/song';
import { Band } from '../models/band';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl: string = 'http://localhost:8080/Spinner/posts';

  constructor(private http: HttpClient) { }

  public createPost(tracks: Track[], title: string, band: Band) {
    let post: Post = new Post;
    post.id = 0;
    post.likes = 0;
    post.title = title;
    tracks.forEach(function (track) {
      let song: Song = new Song();
      song.id = 0;
      song.songKey = track.id;
      post.songs.push(song);
    });
    post.band = band;

    this.http.post(this.baseUrl, post);
  }

  public getBandPosts(bandId: number) {
    let url = this.baseUrl + '/band/' + bandId;

    return this.http.get(url).pipe(
      map(resp => resp as Post[])
    );
  }

  public getPostsBySong(track: Track) {
    let url = this.baseUrl + '/song/' + track.id;

    return this.http.get(url).pipe(
      map(resp => resp as Post[])
    );
  }
}
