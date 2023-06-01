package com.jwt.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.jwt.helper.ExcelHelper;
import com.jwt.model.CandidateDetails;
import com.jwt.services.CandidateDetailsService;

@RestController
@CrossOrigin("*")
@RequestMapping("/dashboard")
public class CandidateDetailsController {
	
	@Autowired
	private CandidateDetailsService candidateDetailsService;
	
	
	@PostMapping("/upload")
	public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file){
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		if(ExcelHelper.checkExcelFormat(file)) {
			this.candidateDetailsService.save(file);
			return ResponseEntity.ok(Map.of("message", "File is Uploaded and Save to Database"));
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please Upload Excel File Only");
		
	}
	
	
	@GetMapping("/getCandidate")
	public List<CandidateDetails> getAllCandidates(){
		return this.candidateDetailsService.getAllCandidates();
	}
	
	@GetMapping("/getCandidateById")
	public CandidateDetails getCandidateById(@RequestParam Integer id) {
		return this.candidateDetailsService.getCandidateById(id);
	}
	
	@DeleteMapping("/deleteCandidate")
	public void deleteCandidate(@RequestParam Integer id) {
		candidateDetailsService.deleteCandidate(id);
	}
	
//	@GetMapping("/getCandidate/")
//	public List<CandidateDetails> getCandidate(){
//		return this.candidateDetailsService.getAllCandidates();
//	}
	

}
