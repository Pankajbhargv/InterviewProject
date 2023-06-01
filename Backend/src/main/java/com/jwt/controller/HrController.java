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
import com.jwt.repo.HrRepo;



@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/dashboard")
public class HrController {

    @Autowired
    private HrRepo hrRepo;
    
    

    @PostMapping("/hr")
    public ResponseEntity<HR> createHr(@RequestBody HR hr) {
        System.out.println("hii reacghed");
        System.out.println(hr.toString());
        HR savedhr = hrRepo.save(hr);
        System.out.println("bhai agar ab nhi chla na!!!!!! to dekh liyo!!!!!!");
        return new ResponseEntity<HR>(savedhr, HttpStatus.OK);
    }


	@GetMapping("/hr/{id}")
	public ResponseEntity<Optional<HR>> getHrById(@PathVariable(value="id") Integer cid){
	 Optional<HR> hr =hrRepo.findById(cid);
	 return ResponseEntity.ok().body(hr);
	}
	
	
	
	
	
	}
