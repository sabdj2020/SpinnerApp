import { Component, OnInit, Input } from '@angular/core';
import { QuestionResponse } from '../models/question-response';
import { Track } from '../models/result-model';
import { GetTrackService } from '../services/get-track.service';

@Component({
  selector: 'app-response-item',
  templateUrl: './response-item.component.html',
  styleUrls: ['./response-item.component.css']
})
export class ResponseItemComponent implements OnInit {
  @Input() response: QuestionResponse;
  track: Track;

  constructor(private getTrackServ: GetTrackService) { }

  ngOnInit(): void {
    this.getTrackServ.getTrack(this.response.song.songKey).subscribe(
      resp => {
        this.track = resp;
      }
    );
  }

}
