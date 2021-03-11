package com.revature.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.app.beans.User;
import com.revature.app.services.UserService;
/*
 * GET user/login user logs in
 * POST user/register register a user
 */
@RestController
//@CrossOrigin(origins="http://localhost:4200", allowCredentials="true")
@RequestMapping(path="/user")
public class UserController {
	private UserService userServ;
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	public UserController(UserService userServ) {
		this.userServ = userServ;
		this.bCryptPasswordEncoder = new BCryptPasswordEncoder();
	}
	
	@PostMapping("/register")
	public void register(@RequestBody User user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		userServ.addUser(user);
	}
}
