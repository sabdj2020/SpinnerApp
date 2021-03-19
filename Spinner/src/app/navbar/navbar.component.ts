import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { UserService } from '../services/user.service';
import { Track } from '../models/result-model';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tracks: Track[] = [];
  searchTrack: Track;
  searchPosts: Post[] = [];

  constructor(public userServ: UserService, public searchServ: SearchService, public postServ: PostService) { }

  ngOnInit(): void {
  }

  search(term: string) {
    if (!term || term == "") {
      this.tracks = [];
      return;
    }
    this.searchServ.getSearchResult(term).subscribe((data: any) => {
      this.tracks = data.tracks.items;
    }, (err) => {
      console.error(err.message);
    });
  }

  getPostsBySong(track: Track) {
    this.tracks=[];
    this.postServ.getPostsBySong(track).subscribe(
      resp => {
        this.searchPosts = resp;
      }
    )
  }
}
