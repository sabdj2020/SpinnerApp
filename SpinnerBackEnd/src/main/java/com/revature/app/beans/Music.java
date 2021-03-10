package com.revature.app.beans;

import javax.persistence.*;

@Entity
@Table
public class Music {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name="spotify_key")
	private String songKey;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getSongKey() {
		return songKey;
	}
	public void setSongKey(String songKey) {
		this.songKey = songKey;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((songKey == null) ? 0 : songKey.hashCode());
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
		Music other = (Music) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (songKey == null) {
			if (other.songKey != null)
				return false;
		} else if (!songKey.equals(other.songKey))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Music [id=" + id + ", songKey=" + songKey + "]";
	}
}
