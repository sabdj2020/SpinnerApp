import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DailyQuestion } from '../models/daily-question';
import { DailyQuestionService } from '../services/daily-question.service';
import { Track } from '../models/result-model';
import { SearchService } from '../services/search.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-daily-question',
  templateUrl: './daily-question.component.html',
  styleUrls: ['./daily-question.component.css']
})
export class DailyQuestionComponent implements OnInit {
  questionOtd: DailyQuestion;
  responseTrack: Track;
  searchTracks: Track[];

  constructor(private http: HttpClient, private dqServ: DailyQuestionService, private searchServ: SearchService, private modalServ: NgbModal) { }

  ngOnInit(): void {
    this.dqServ.getDailyQuestion().subscribe(
      resp => {
        this.questionOtd = resp;
      }
    );
  }

  search(term: string) {
    this.searchServ.getSearchResult(term).subscribe((data: any) => {
      this.searchTracks = data.tracks.items;
    }, (err) => {
      console.error(err.message);
    });
  }

  addToResponse(track: Track) {
    this.responseTrack = track;
    this.searchTracks = [];
  }

  createAnswer(){
    this.dqServ.createAnswer(this.responseTrack).subscribe(
      resp => {
        this.questionOtd.responses.push(resp)
      }
    );
    this.modalServ.dismissAll();
  }
  
  openModal(content) {
    this.modalServ.open(content, { centered: true, size: 'lg' });
  }
}
