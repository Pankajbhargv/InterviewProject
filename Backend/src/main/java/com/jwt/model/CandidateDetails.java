package com.jwt.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CandidateDetails {
	
	@Id
	@Column(name = "id")
	private int cid;
	@Column(name = "Candidate Name")
	private String cname;
	@Column(name = "aptitude")
	private int aptitude;
	@Column(name = "Technical")
	private int Technical;
	@Column(name = "HR")
	private int hr;
	@Column(name = "CTO")
	private int cto;
	public CandidateDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CandidateDetails(int cid, String cname, int aptitude, int technical, int hr, int cto) {
		super();
		this.cid = cid;
		this.cname = cname;
		this.aptitude = aptitude;
		Technical = technical;
		this.hr = hr;
		this.cto = cto;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}
	public int getAptitude() {
		return aptitude;
	}
	public void setAptitude(int aptitude) {
		this.aptitude = aptitude;
	}
	public int getTechnical() {
		return Technical;
	}
	public void setTechnical(int technical) {
		Technical = technical;
	}
	public int getHr() {
		return hr;
	}
	public void setHr(int hr) {
		this.hr = hr;
	}
	public int getCto() {
		return cto;
	}
	public void setCto(int cto) {
		this.cto = cto;
	}
	
}
