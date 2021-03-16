package com.revature.app.data;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.app.beans.QuestionResponse;

public interface QuestionResponseDAO extends JpaRepository<QuestionResponse, Integer> {

}
