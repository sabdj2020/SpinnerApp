package com.revature.app.beans;

import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name="app_user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String username;
	@Column(name="passwd")
	private String password;
	@Column(name="first_name")
	private String firstName;
	@Column(name="last_name")
	private String lastName;
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name="band_mates",
			joinColumns=@JoinColumn(name="user_id"),
			inverseJoinColumns=@JoinColumn(name="band_id"))
	private Set<Band> bands;
	@OneToMany(fetch = FetchType.EAGER)
	@JoinColumn(name="user_id")
	private Set<Post> posts;
	@OneToMany(fetch = FetchType.EAGER)
	@JoinColumn(name="user_id")
	private Set<PostComment> comments;
	@OneToMany(fetch = FetchType.EAGER)
	@JoinColumn(name="user_id")
	private Set<QuestionResponse> qotdResponses;
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name="post_like",
			joinColumns=@JoinColumn(name="user_id"),
			inverseJoinColumns=@JoinColumn(name="post_id"))
	private Set<Post> likedPosts;
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name="comment_like",
			joinColumns=@JoinColumn(name="user_id"),
			inverseJoinColumns=@JoinColumn(name="comment_id"))
	private Set<PostComment> likedComments;
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name="qotd_like",
			joinColumns=@JoinColumn(name="user_id"),
			inverseJoinColumns=@JoinColumn(name="response_id"))
	private Set<QuestionResponse> likedQotdResponses;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public Set<Band> getBands() {
		return bands;
	}
	public void setBands(Set<Band> bands) {
		this.bands = bands;
	}
	public Set<Post> getPosts() {
		return posts;
	}
	public void setPosts(Set<Post> posts) {
		this.posts = posts;
	}
	public Set<PostComment> getComments() {
		return comments;
	}
	public void setComments(Set<PostComment> comments) {
		this.comments = comments;
	}
	public Set<QuestionResponse> getQotdResponses() {
		return qotdResponses;
	}
	public void setQotdResponses(Set<QuestionResponse> qotdResponses) {
		this.qotdResponses = qotdResponses;
	}
	public Set<Post> getLikedPosts() {
		return likedPosts;
	}
	public void setLikedPosts(Set<Post> likedPosts) {
		this.likedPosts = likedPosts;
	}
	public Set<PostComment> getLikedComments() {
		return likedComments;
	}
	public void setLikedComments(Set<PostComment> likedComments) {
		this.likedComments = likedComments;
	}
	public Set<QuestionResponse> getLikedQotdResponses() {
		return likedQotdResponses;
	}
	public void setLikedQotdResponses(Set<QuestionResponse> likedQotdResponses) {
		this.likedQotdResponses = likedQotdResponses;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((bands == null) ? 0 : bands.hashCode());
		result = prime * result + ((comments == null) ? 0 : comments.hashCode());
		result = prime * result + ((firstName == null) ? 0 : firstName.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((lastName == null) ? 0 : lastName.hashCode());
		result = prime * result + ((likedComments == null) ? 0 : likedComments.hashCode());
		result = prime * result + ((likedPosts == null) ? 0 : likedPosts.hashCode());
		result = prime * result + ((likedQotdResponses == null) ? 0 : likedQotdResponses.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((posts == null) ? 0 : posts.hashCode());
		result = prime * result + ((qotdResponses == null) ? 0 : qotdResponses.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (bands == null) {
			if (other.bands != null)
				return false;
		} else if (!bands.equals(other.bands))
			return false;
		if (comments == null) {
			if (other.comments != null)
				return false;
		} else if (!comments.equals(other.comments))
			return false;
		if (firstName == null) {
			if (other.firstName != null)
				return false;
		} else if (!firstName.equals(other.firstName))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (lastName == null) {
			if (other.lastName != null)
				return false;
		} else if (!lastName.equals(other.lastName))
			return false;
		if (likedComments == null) {
			if (other.likedComments != null)
				return false;
		} else if (!likedComments.equals(other.likedComments))
			return false;
		if (likedPosts == null) {
			if (other.likedPosts != null)
				return false;
		} else if (!likedPosts.equals(other.likedPosts))
			return false;
		if (likedQotdResponses == null) {
			if (other.likedQotdResponses != null)
				return false;
		} else if (!likedQotdResponses.equals(other.likedQotdResponses))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (posts == null) {
			if (other.posts != null)
				return false;
		} else if (!posts.equals(other.posts))
			return false;
		if (qotdResponses == null) {
			if (other.qotdResponses != null)
				return false;
		} else if (!qotdResponses.equals(other.qotdResponses))
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", bands=" + bands + ", posts=" + posts + ", comments=" + comments
				+ ", qotdResponses=" + qotdResponses + ", likedPosts=" + likedPosts + ", likedComments=" + likedComments
				+ ", likedQotdResponses=" + likedQotdResponses + "]";
	}
}
