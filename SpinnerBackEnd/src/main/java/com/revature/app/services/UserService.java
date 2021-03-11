package com.revature.app.services;

import com.revature.app.beans.User;

public interface UserService {
	// create
	public void addUser(User t);
	// read
	public User getUserById(Integer id);
	public User getUserByUsername(String username);
	// update
	public void updateUser(User t);
	// delete
	public void deletePerson(User t);

}
