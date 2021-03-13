package com.revature.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.app.beans.Music;
import com.revature.app.data.MusicDAO;

@Service 
public class MusicServiceImpl implements MusicService {
	private MusicDAO musicDAO;
	
	@Autowired
	public MusicServiceImpl(MusicDAO m) {
		this.musicDAO = m;
	}

	@Override
	public Music getSongBySongKey(String songKey) {
		return musicDAO.findBySongKey(songKey);
	}

}
