package com.jwt.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jwt.model.CandidateDetails;

public interface CandidateDetailsRepo extends JpaRepository<CandidateDetails, Integer> {

}
