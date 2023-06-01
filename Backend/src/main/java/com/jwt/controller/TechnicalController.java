package com.jwt.controller;

import java.util.List;
import java.util.Optional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.jwt.model.HR;
import com.jwt.model.Technical;
import com.jwt.repo.HrRepo;
import com.jwt.repo.TechnicalRepo;



@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/dashboard")
public class TechnicalController {

    @Autowired
    private TechnicalRepo technicalRepo;
    
    

    @PostMapping("/technical")
    public ResponseEntity<Technical> createHr(@RequestBody Technical technical) {
        System.out.println("hii reacghed");
        System.out.println(technical.toString());
        Technical savedtechnical = technicalRepo.save(technical);
        System.out.println("bhai agar ab nhi chla na!!!!!! to dekh liyo!!!!!!");
        return new ResponseEntity<Technical>(savedtechnical,HttpStatus.OK);
    }


	@GetMapping("/technical/{id}")
	public ResponseEntity<Optional<Technical>> getTechnicalById(@PathVariable(value="id") Integer cid){
	 Optional<Technical> technical=technicalRepo.findById(cid);
	 return ResponseEntity.ok().body(technical);
	}
	
	
	
	
	
	}
