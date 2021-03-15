package com.revature.app.services;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.app.beans.Band;
import com.revature.app.beans.Music;
import com.revature.app.beans.Post;
import com.revature.app.beans.User;
import com.revature.app.data.MusicDAO;
import com.revature.app.data.PostDAO;
import com.revature.app.data.UserDAO;

@Service
public class PostServiceImpl implements PostService {
	private PostDAO postDAO;
	private UserDAO userDAO;
	private MusicDAO musicDAO;
	
	@Autowired
	public PostServiceImpl(PostDAO p, UserDAO u, MusicDAO m) {
		postDAO = p;
		userDAO = u;
		musicDAO = m;
	}

	@Override
	@Transactional
	public Integer addPost(Post p, User u) {
		Set<Music> songs = p.getSongs();
		Set<Music> addedSongs = new HashSet<>();
		for (Music s : songs) {
			if (musicDAO.findBySongKey(s.getSongKey()) != null) {
				addedSongs.add(musicDAO.save(s));
			} else {
				addedSongs.add(musicDAO.findBySongKey(s.getSongKey()));
			}
		}
		p.setSongs(addedSongs);
		p = postDAO.save(p);
		u = userDAO.getOne(u.getId());
		Set<Post> userPosts = u.getPosts();
		userPosts.add(p);
		u.setPosts(userPosts);
		userDAO.save(u);
		return p.getId();
	}

	@Override
	public Set<Post> getAllPosts() {
		List<Post> postList = postDAO.findAll();
		Set<Post> posts = new HashSet<>();
		posts.addAll(postList);
		return posts;
	}

	@Override
	public Set<Post> getPostsByBand(Band b) {
		return postDAO.findByBand(b);
	}

	@Override
	public void deletePost(Post p) {
		postDAO.delete(p);
	}

	@Override
	public Set<Post> getPostsBySong(Music m) {
		return postDAO.findBySongsContaining(m);
	}
	
	@Override
	public Set<Post> getPostsByUser(User u) {
		// TODO Auto-generated method stub
		u = userDAO.getOne(u.getId());
		Set<Post> posts = u.getPosts();
		return posts;
	
	
	}

}
