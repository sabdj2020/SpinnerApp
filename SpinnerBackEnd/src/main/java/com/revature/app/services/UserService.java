package com.revature.app.services;

import com.revature.app.beans.User;
import com.revature.app.exceptions.UsernameAlreadyTakenException;

public interface UserService {
	// create
	public void addUser(User t) throws UsernameAlreadyTakenException;
	// read
	public User getUserById(Integer id);
	public User getUserByUsername(String username);
	// update
	public void updateUser(User t);
	// delete
	public void deletePerson(User t);

}
