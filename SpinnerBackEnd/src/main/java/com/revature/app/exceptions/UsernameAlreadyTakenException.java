package com.revature.app.exceptions;

@SuppressWarnings("serial")
public class UsernameAlreadyTakenException extends Exception {
	
	public UsernameAlreadyTakenException() {
		super("Username is unavailable");
	}

}
