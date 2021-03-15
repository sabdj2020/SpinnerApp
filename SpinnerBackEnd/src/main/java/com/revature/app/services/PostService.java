package com.revature.app.services;

import java.util.Set;

import com.revature.app.beans.Band;
import com.revature.app.beans.Music;
import com.revature.app.beans.Post;
import com.revature.app.beans.User;

public interface PostService {
	public Integer addPost(Post p, User u);
	public Set<Post> getAllPosts();
	public Set<Post> getPostsByBand(Band b);
	public Set<Post> getPostsBySong(Music m);
	public void deletePost(Post p);
	public Set<Post> getPostsByUser(User u);
}
