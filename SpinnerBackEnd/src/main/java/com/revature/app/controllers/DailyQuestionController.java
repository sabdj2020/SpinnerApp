package com.revature.app.controllers;

import java.time.LocalDate;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.app.beans.DailyQuestion;
import com.revature.app.services.DailyQuestionService;


@RestController
@CrossOrigin(origins="http://localhost:4200", allowCredentials="true")
@RequestMapping(path="/questions")

public class DailyQuestionController {
	
	private final DailyQuestionService dqServ;
	
	@Autowired
	public DailyQuestionController(DailyQuestionService dq) {
		this.dqServ = dq;
	}
	

	
	@GetMapping(path="/questionday")
	public ResponseEntity<DailyQuestion> getQuestionByDay() {
		DailyQuestion question = dqServ.getQuestionByDay(LocalDate.now().getDayOfMonth());
		if (question != null) {
			return ResponseEntity.ok(question);
		}
		return ResponseEntity.notFound().build();
	}

}
