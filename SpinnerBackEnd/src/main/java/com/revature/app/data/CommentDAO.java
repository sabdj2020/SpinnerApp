package com.revature.app.data;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.app.beans.Post;
import com.revature.app.beans.PostComment;
import com.revature.app.beans.User;

public interface CommentDAO extends JpaRepository<PostComment, Integer> {
}
