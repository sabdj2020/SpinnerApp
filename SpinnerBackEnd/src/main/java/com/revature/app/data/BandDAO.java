package com.revature.app.data;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.app.beans.Band;


public interface BandDAO extends JpaRepository<Band, Integer> {

}
