package com.jwt.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jwt.model.Technical;

public interface TechnicalRepo extends JpaRepository<Technical, Integer>{

}
