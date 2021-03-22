import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../models/result-model';

@Component({
  selector: 'app-post-song',
  templateUrl: './post-song.component.html',
  styleUrls: ['./post-song.component.css']
})
export class PostSongComponent implements OnInit {
  @Input() track: Track

  constructor() { }

  ngOnInit(): void {
  }

}
