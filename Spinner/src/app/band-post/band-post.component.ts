import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Track } from '../models/result-model';
import { SearchService } from '../services/search.service';
import { PostService } from '../services/post.service';
import { Band } from '../models/band';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-band-post',
  templateUrl: './band-post.component.html',
  styleUrls: ['./band-post.component.css']
})
export class BandPostComponent implements OnInit {
  searchTracks: Track[];
  postTracks: Track[] = [];
  postTitle: string;
  @Input() band: Band;
  @Output() closePost = new EventEmitter();

  constructor(private searchServ: SearchService, private postServ: PostService, private modalServ: NgbModal) { }

  ngOnInit(): void {}

  public search(term: string): void {
    this.searchServ.getSearchResult(term).subscribe((data: any) => {
      this.searchTracks = data.tracks.items;
    }, (err) => {
      console.error(err.message);
    });
  }

  public addToPost(track: Track) {
    let isInPost: boolean = false;
    for (let i = 0; i < this.postTracks.length; i++) {
      if (this.postTracks[i].id == track.id) {
        isInPost = true;
      }
    }
    if (!isInPost) {
      this.postTracks.push(track);
    }
  }

  public removeFromPost(track: Track) {
    for (let i = 0; i < this.postTracks.length; i++) {
      if (this.postTracks[i].id == track.id) {
        this.postTracks.splice(i, 1);
        break;
      }
    }
  }

  public createPost() {
    this.band = new Band;
    this.band.id = 10;
    this.band.name = "my band";
    this.postServ.createPost(this.postTracks, this.postTitle, this.band);
    this.closePost.emit();
  }

  openModal(content) {
    this.modalServ.open(content, { centered: true, size: 'lg' });
  }

}
