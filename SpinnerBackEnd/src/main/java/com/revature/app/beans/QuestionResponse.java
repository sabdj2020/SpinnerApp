package com.revature.app.beans;

import java.time.LocalDate;

import javax.persistence.*;

@Entity
@Table(name="qotd_response")
public class QuestionResponse {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="music_id")
	private Music song;
	private Integer likes;
	
	public Integer getId() {
		return id;
	}
	
	@Column(name="question_date")
	private LocalDate questionDate;

	public Music getSong() {
		return song;
	}

	public void setSong(Music song) {
		this.song = song;
	}

	public Integer getLikes() {
		return likes;
	}

	public void setLikes(Integer likes) {
		this.likes = likes;
	}

	public LocalDate getQuestionDate() {
		return questionDate;
	}

	public void setQuestionDate(LocalDate questionDate) {
		this.questionDate = questionDate;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((likes == null) ? 0 : likes.hashCode());
		result = prime * result + ((questionDate == null) ? 0 : questionDate.hashCode());
		result = prime * result + ((song == null) ? 0 : song.hashCode());
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
		QuestionResponse other = (QuestionResponse) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (likes == null) {
			if (other.likes != null)
				return false;
		} else if (!likes.equals(other.likes))
			return false;
		if (questionDate == null) {
			if (other.questionDate != null)
				return false;
		} else if (!questionDate.equals(other.questionDate))
			return false;
		if (song == null) {
			if (other.song != null)
				return false;
		} else if (!song.equals(other.song))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "QuestionResponse [id=" + id + ", song=" + song + ", likes=" + likes + ", questionDate=" + questionDate
				+ "]";
	}
	
	
	
}
