package com.jwt.services;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.jwt.helper.ExcelHelper;
import com.jwt.model.CandidateDetails;
import com.jwt.repo.CandidateDetailsRepo;

@Service
public class CandidateDetailsService {
	
	
	@Autowired
	private CandidateDetailsRepo candidateDetailsRepo;
	
	public void save(MultipartFile file) {
		try {
			List<CandidateDetails> candidates = ExcelHelper.convertExceltoListofCandidates(file.getInputStream());
			this.candidateDetailsRepo.saveAll(candidates);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	public List<CandidateDetails> getAllCandidates(){
		return this.candidateDetailsRepo.findAll();
		


}
	public void deleteCandidate(int id) {
		candidateDetailsRepo.deleteById(id);
	}
	
	public CandidateDetails getCandidateById(@RequestParam Integer id) {
		return this.candidateDetailsRepo.getOne(id);
	}
}
