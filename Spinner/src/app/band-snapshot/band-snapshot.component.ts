import { Component, OnInit, Input } from '@angular/core';
import { Band } from '../models/band';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-band-snapshot',
  templateUrl: './band-snapshot.component.html',
  styleUrls: ['./band-snapshot.component.css']
})
export class BandSnapshotComponent implements OnInit {
  @Input() band: Band;
  posts: Post[];
  isPost: boolean;

  constructor(public postServ: PostService) { }

  ngOnInit(): void {
    this.isPost = false;
    this.postServ.getBandPosts(this.band.id).subscribe(resp => {
      this.posts = resp;
    });
  }

  public closePost() {
    this.isPost = false;
  }

  public newPost(data) {
    this.isPost = true;
  }
}
