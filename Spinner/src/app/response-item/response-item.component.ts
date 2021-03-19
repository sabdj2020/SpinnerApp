import { Component, OnInit, Input } from '@angular/core';
import { QuestionResponse } from '../models/question-response';
import { Track } from '../models/result-model';
import { GetTrackService } from '../services/get-track.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LikesService } from '../services/likes.service';


@Component({
  selector: 'app-response-item',
  templateUrl: './response-item.component.html',
  styleUrls: ['./response-item.component.css']
})
export class ResponseItemComponent implements OnInit {
  @Input() response: QuestionResponse;
  track: Track;

  constructor(private getTrackServ: GetTrackService, private likesServ: LikesService) { }

  ngOnInit(): void {
    this.getTrackServ.getTrack(this.response.song.songKey).subscribe(
      resp => {
        this.track = resp;
      }
    );
  }

  addLikeQuestionResp(resp:any): void{
    this.response.likes++;
    this.likesServ.addLikeQR(resp.id).subscribe(response => {this.response=response});
  }

}
