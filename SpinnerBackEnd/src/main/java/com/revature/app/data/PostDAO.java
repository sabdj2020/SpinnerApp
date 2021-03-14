package com.revature.app.data;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.app.beans.Band;
import com.revature.app.beans.Music;
import com.revature.app.beans.Post;

@Repository
public interface PostDAO extends JpaRepository<Post, Integer> {
	public Set<Post> findByBand(Band b);
	public Set<Post> findBySongsContaining(Music m);
}
