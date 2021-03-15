package com.revature.app.services;

import java.util.Set;

import com.revature.app.beans.Band;
import com.revature.app.beans.User;

public interface BandService {
	
	public Integer addBand(Band b);
	
	public Set<Band> getAllBands();
	public Band getBandById(Integer id);
	
	public Set<Band> getBandsByUser(User u);

	public void deleteBand(Band band);
	
	public void joinBand(Band band, User u);


}
