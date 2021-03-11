package com.revature.app.controllers;

import java.net.URI;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.app.beans.Band;
import com.revature.app.services.BandService;


@RestController
//@CrossOrigin(origins="http://localhost:4200", allowCredentials="true")
@RequestMapping(path="/bands")

public class BandController {
	private final BandService bandServ;
	
	@Autowired
	public BandController(BandService b) {
		this.bandServ = b;
	}
	
	@PostMapping
	public ResponseEntity<Band> addBand(@RequestBody Band band) {
		Integer id = bandServ.addBand(band);
		return ResponseEntity.created(URI.create("http://localhost:8080/Spinner/bands/" + id)).build();
	}
	
	@GetMapping(path="/all")
	public ResponseEntity<Set<Band>> getAllBands() {
		Set<Band> bands = bandServ.getAllBands();
		return ResponseEntity.ok(bands);
	}
	
	@GetMapping(path="/{id}")
	public ResponseEntity<Band> getById(@PathVariable("id") Integer id) {
		Band band = bandServ.getBandById(id);
		if (band != null) {
			return ResponseEntity.ok(band);
		}
		return ResponseEntity.notFound().build();
	}
	
	@DeleteMapping(path="/{id}")
	public ResponseEntity<Void> deleteCat(@PathVariable("id") Integer id, @RequestBody Band band) {
		if (band != null && id.equals(band.getId())) {
			bandServ.deleteBand(band);
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.badRequest().build();
	}

}
