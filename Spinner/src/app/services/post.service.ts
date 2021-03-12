import { Injectable } from '@angular/core';
import { Track } from '../models/result-model';
import { Post } from '../models/post';
import { Song } from '../models/song';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl: string = '/Spinner';

  constructor(private http: HttpClient) { }

  public createPost(tracks: Track[], title: string) {
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
    
    let postUrl = this.baseUrl + '/Post';
    this.http.post(postUrl, post);
  }
}
