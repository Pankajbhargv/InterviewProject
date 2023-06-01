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

import com.jwt.model.Candidate;
import com.jwt.repo.CandidateRepo;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/dashboard")
public class CandidateController {

    @Autowired
    private CandidateRepo candidateRepo;
    
    

    @PostMapping("/candidates")
    public ResponseEntity<Candidate> createCandidate(@RequestBody Candidate candidate) {
        System.out.println("hii reacghed");
        System.out.println(candidate.toString());
        Candidate savedCandidate = candidateRepo.save(candidate);
        System.out.println("bhai agar ab nhi chla na!!!!!! to dekh liyo!!!!!!");
        return new ResponseEntity<Candidate>(savedCandidate, HttpStatus.OK);
    }


	@GetMapping("/candidates/{id}")
	public ResponseEntity<Optional<Candidate>> getCandidateById(@PathVariable(value="id") Integer cid){
	 Optional<Candidate> candidate = candidateRepo.findById(cid);
	 return ResponseEntity.ok().body(candidate);
	}
	
	
	
	
	
	}
