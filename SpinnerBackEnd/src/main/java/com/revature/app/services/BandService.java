package com.revature.app.services;

import java.util.Set;

import com.revature.app.beans.Band;

public interface BandService {
	
	public Integer addBand(Band b);
	
	public Set<Band> getAllBands();
	public Band getBandById(Integer id);

	public void deleteBand(Band band);


}
