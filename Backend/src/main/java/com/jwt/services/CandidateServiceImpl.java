package com.jwt.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jwt.model.Candidate;
import com.jwt.repo.CandidateRepo;


@Service
public class CandidateServiceImpl {
	
	@Autowired
	private CandidateRepo candidateRepo;
	
	
	
}

