package com.jwt.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jwt.model.HR;

public interface HrRepo extends JpaRepository<HR, Integer> {

}
