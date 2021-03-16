import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-daily-question',
  templateUrl: './daily-question.component.html',
  styleUrls: ['./daily-question.component.css']
})
export class DailyQuestionComponent implements OnInit {
  baseUrl: string = 'http://localhost:8080/Spinner';
  dataAnswers: any;
  dataQuestion:any;
  question:String;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  dailyQuestion(){
    let url= this.baseUrl+"/dailyquestions";
    this.http.get(url).subscribe((result)=>{
      console.log(result);
      this.dataQuestion=result;
      this.dataAnswers=this.dataQuestion.responses;
    })
    let answerInput=document.getElementById('inputAnswer');
    answerInput.innerHTML= '<p>write your answer</p>'
    answerInput.innerHTML+='<textarea placeholder="write your answer here"> </textarea><br>'
    answerInput.innerHTML+='<button (click)="createAnswer()">submit you answer</button>'
    document.body.appendChild(answerInput);
  }

  createAnswer(){

    }
  

  

}
