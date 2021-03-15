package com.revature.app.services;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.revature.app.beans.DailyQuestion;
import com.revature.app.data.DailyQuestionDAO;

public class DailyQuestionServiceImpl implements DailyQuestionService {
	
private DailyQuestionDAO dqDao;
	
	@Autowired
	public DailyQuestionServiceImpl(DailyQuestionDAO dq) {
		this.dqDao = dq;
	}

	

	@Override
	public DailyQuestion getQuestionByDay(Integer id) {
		// TODO Auto-generated method stub
		return dqDao.findById(id).get();
	}

}
