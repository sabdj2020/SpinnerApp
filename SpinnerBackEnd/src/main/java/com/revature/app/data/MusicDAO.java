package com.revature.app.data;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.app.beans.Music;

public interface MusicDAO extends JpaRepository<Music, Integer> {
	public Music findBySongKey(String songKey);
}
