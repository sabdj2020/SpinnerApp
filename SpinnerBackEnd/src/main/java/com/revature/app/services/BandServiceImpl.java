package com.revature.app.services;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.app.beans.Band;
import com.revature.app.beans.User;
import com.revature.app.data.BandDAO;
import com.revature.app.data.UserDAO;


@Service
public class BandServiceImpl implements BandService {
	private BandDAO bandDao;
	private UserDAO userDao;
	
	@Autowired
	public BandServiceImpl(BandDAO b, UserDAO u) {
		bandDao = b;
		userDao = u;
		
	}

	@Override
	public Integer addBand(Band b) {
		// TODO Auto-generated method stub
		return bandDao.save(b).getId();
	}

	@Override
	public Set<Band> getAllBands() {
		// TODO Auto-generated method stub
		List<Band> bandList = bandDao.findAll();
		Set<Band> bandSet = new HashSet<>();
		bandSet.addAll(bandList);
		return bandSet;
	}
	
	@Override
	public Band getBandById(Integer id) {
		// TODO Auto-generated method stub
		return bandDao.findById(id).get();
	}


	@Override
	public void deleteBand(Band band) {
		// TODO Auto-generated method stub
		if (getBandById(band.getId()) != null)
			bandDao.delete(band);
		
	}

	@Override
	public void joinBand(Band band, User u) {
		// TODO Auto-generated method stub
		u = userDao.getOne(u.getId());
		Set<Band> bands = u.getBands();
		bands.add(band);
		u.setBands(bands);
		userDao.save(u);
		
	}

	@Override
	public Set<Band> getBandsByUser(User u) {
		// TODO Auto-generated method stub
		u = userDao.getOne(u.getId());
		Set<Band> bands = u.getBands();
		return bands;
	
	
	}

	
}
