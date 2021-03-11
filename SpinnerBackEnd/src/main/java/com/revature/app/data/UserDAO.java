package com.revature.app.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.app.beans.User;

@Repository
public interface UserDAO extends JpaRepository<User, Integer> {
	public User findByUsername(String username);
}
