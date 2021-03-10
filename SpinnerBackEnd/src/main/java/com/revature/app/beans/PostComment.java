package com.revature.app.beans;

import java.time.LocalDateTime;

import javax.persistence.*;

@Entity
@Table(name="post_comment")
public class PostComment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name="comment_text")
	private String comment;
	@Column(name="comment_time")
	private LocalDateTime commentTime;
	private Integer likes;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public LocalDateTime getCommentTime() {
		return commentTime;
	}
	public void setCommentTime(LocalDateTime commentTime) {
		this.commentTime = commentTime;
	}
	public Integer getLikes() {
		return likes;
	}
	public void setLikes(Integer likes) {
		this.likes = likes;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((comment == null) ? 0 : comment.hashCode());
		result = prime * result + ((commentTime == null) ? 0 : commentTime.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((likes == null) ? 0 : likes.hashCode());
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
		PostComment other = (PostComment) obj;
		if (comment == null) {
			if (other.comment != null)
				return false;
		} else if (!comment.equals(other.comment))
			return false;
		if (commentTime == null) {
			if (other.commentTime != null)
				return false;
		} else if (!commentTime.equals(other.commentTime))
			return false;
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
		return true;
	}
	@Override
	public String toString() {
		return "PostComment [id=" + id + ", comment=" + comment + ", commentTime=" + commentTime + ", likes=" + likes
				+ "]";
	}
}
