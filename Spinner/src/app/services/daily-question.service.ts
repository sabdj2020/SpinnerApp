import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DailyQuestion } from '../models/daily-question';
import { QuestionResponse } from '../models/question-response';
import { Track } from '../models/result-model';
import { Song } from '../models/song';
import { UrlService } from './url.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DailyQuestionService {
  baseUrl: string;

  constructor(private http: HttpClient, private urlServ: UrlService, private userServ: UserService) { 
    this.baseUrl = this.urlServ.baseUrl + '/dailyquestions';
  }

  public getDailyQuestion(): Observable<DailyQuestion> {
    return this.http.get(this.baseUrl, {withCredentials: true}).pipe(
      map(resp=>resp as DailyQuestion)
    );
  }

  public createAnswer(track: Track): Observable<QuestionResponse> {
    let response: QuestionResponse = new QuestionResponse;
    response.id = 0;
    let song: Song = new Song;
    song.id = 0;
    song.songKey = track.id;
    response.song = song;
    response.likes = 0;
    response.questionDate = new Date();
    return this.http.post(this.baseUrl, response, {withCredentials: true}).pipe(
      map(resp => 
        resp as QuestionResponse
      )
    );
  }
}
