package com.jwt.repo;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jwt.model.Candidate;

@Repository
public interface CandidateRepo extends JpaRepository<Candidate, Integer>{

	
	
	
	
	
	
}
