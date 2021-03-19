package com.revature.app.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.revature.app.beans.Image;
import com.revature.app.data.ImageDAO;

@RestController
@CrossOrigin(origins="http://localhost:4200", allowCredentials="true")
@RequestMapping(path="/edit-profile")
public class ImageController {

	@Autowired
	ImageDAO imageDao;
	
	@PostMapping("/upload")
	public Image uploadImage(@RequestParam("myFile") MultipartFile file) throws IOException{
		Image img = new Image(file.getOriginalFilename(), file.getContentType(), file.getBytes());
		final Image savedImage = imageDao.save(img);
		System.out.println("Profile Picture is saved");
		return savedImage;
	}
}
