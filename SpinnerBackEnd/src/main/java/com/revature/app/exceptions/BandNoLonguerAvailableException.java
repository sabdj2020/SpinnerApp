package com.revature.app.exceptions;

@SuppressWarnings("serial")
public class BandNoLonguerAvailableException extends Exception{
	public BandNoLonguerAvailableException () {
		super("The band you are trying to join is no longuer available");
	}

}
