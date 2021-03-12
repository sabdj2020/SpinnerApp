package com.revature.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.app.beans.User;
import com.revature.app.data.UserDAO;
import com.revature.app.exceptions.UsernameAlreadyTakenException;

@Service
public class UserServiceImp implements UserService {
	
	private UserDAO userDao;
	
	@Autowired
	public UserServiceImp(UserDAO userDao) {
		this.userDao = userDao;
	}
	
	@Override
	public void addUser(User t) throws UsernameAlreadyTakenException {
		try {userDao.save(t);}
		catch (Exception e) {
			throw new UsernameAlreadyTakenException();
		}
	}

	@Override
	public User getUserById(Integer id) {
		return userDao.getOne(id);
	}

	@Override
	public User getUserByUsername(String username) {
		return userDao.findByUsername(username);
	}

	@Override
	public void updateUser(User t) {
		if (userDao.getOne(t.getId()) !=  null)
			userDao.save(t);
	}

	@Override
	public void deletePerson(User t) {
		if (userDao.getOne(t.getId()) !=  null)
			userDao.delete(t);

	}

}
