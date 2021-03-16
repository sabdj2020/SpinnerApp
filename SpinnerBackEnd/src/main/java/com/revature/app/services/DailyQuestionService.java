package com.revature.app.services;

import com.revature.app.beans.DailyQuestion;
import com.revature.app.beans.QuestionResponse;
import com.revature.app.beans.User;

public interface DailyQuestionService {

	public DailyQuestion getDailyQuestionById(int dayOfMonth);

	Integer addAnswer(QuestionResponse qr, User u);
	
	

}
