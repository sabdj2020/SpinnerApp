package com.revature.app.data;



import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.app.beans.DailyQuestion;

public interface DailyQuestionDAO extends JpaRepository<DailyQuestion, Integer>  {
	

}
