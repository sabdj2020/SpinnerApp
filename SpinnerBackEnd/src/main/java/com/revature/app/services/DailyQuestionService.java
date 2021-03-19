package com.revature.app.services;

import com.revature.app.beans.DailyQuestion;
import com.revature.app.beans.QuestionResponse;
import com.revature.app.beans.User;

public interface DailyQuestionService {

	public DailyQuestion getDailyQuestionById(int dayOfMonth);

	public QuestionResponse addAnswer(QuestionResponse qr, User u);

	public QuestionResponse addLikeToResp(DailyQuestion dq, int dqrId, User loggedUser);
	
	

}
