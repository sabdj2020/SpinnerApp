package com.revature.app.data;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.app.beans.Image;

public interface ImageDAO extends JpaRepository<Image, Long>{

}
