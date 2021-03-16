package com.revature.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.app.beans.DailyQuestion;
import com.revature.app.data.DailyQuestionDAO;

@Service
public class DailyQuestionServiceImpl implements DailyQuestionService{
	
private DailyQuestionDAO dqDao;
	
	@Autowired
	public DailyQuestionServiceImpl(DailyQuestionDAO dqd) {
		dqDao = dqd;
		
	}


	@Override
	public DailyQuestion getDailyQuestionById(int dayOfMonth) {
		// TODO Auto-generated method stub
		return dqDao.findById(dayOfMonth).get();
		
		
	}

}
