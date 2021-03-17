package com.revature.app.controllers;

import java.net.URI;
import java.time.LocalDate;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.app.beans.DailyQuestion;
import com.revature.app.beans.Post;
import com.revature.app.beans.QuestionResponse;
import com.revature.app.beans.User;
import com.revature.app.services.DailyQuestionService;

@RestController
@CrossOrigin(origins="http://localhost:4200", allowCredentials="true")
@RequestMapping(path="/dailyquestions")

public class DailyQuestionController {
	
	private final DailyQuestionService dqServ;
	
	@Autowired
	public DailyQuestionController(DailyQuestionService dq) {
		this.dqServ = dq;
	}
	
	@PostMapping
	public ResponseEntity<QuestionResponse> addAnswer(HttpSession session, @RequestBody QuestionResponse qr) {
		User user = (User) session.getAttribute("user");
		qr = dqServ.addAnswer(qr, user);
		return ResponseEntity.ok(qr);
	}
	
	@GetMapping()
	public ResponseEntity<DailyQuestion> getByDay() {
		DailyQuestion dQuestion = dqServ.getDailyQuestionById(LocalDate.now().getDayOfMonth());
		if (dQuestion != null) {
			return ResponseEntity.ok(dQuestion);
		}
		return ResponseEntity.notFound().build();
	}
	
	

}
