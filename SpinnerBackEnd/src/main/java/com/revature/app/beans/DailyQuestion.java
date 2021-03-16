package com.revature.app.beans;

import java.time.LocalDate;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name="question_otd")
public class DailyQuestion {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String question;
	
	@OneToMany
	@JoinColumn(name="question_id")
	private Set<QuestionResponse> responses;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public Set<QuestionResponse> getResponses() {
		return responses;
	}

	public void setResponses(Set<QuestionResponse> responses) {
		this.responses = responses;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((question == null) ? 0 : question.hashCode());
		result = prime * result + ((responses == null) ? 0 : responses.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		DailyQuestion other = (DailyQuestion) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (question == null) {
			if (other.question != null)
				return false;
		} else if (!question.equals(other.question))
			return false;
		if (responses == null) {
			if (other.responses != null)
				return false;
		} else if (!responses.equals(other.responses))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "DailyQuestion [id=" + id + ", question=" + question + ", responses=" + responses + "]";
	}
	
	
}
