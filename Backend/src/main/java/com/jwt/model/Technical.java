package com.jwt.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity

public class Technical {
	
	@Id
	@Column(name = "Candidate ID")
	private int cid;
	
	@Column(name = "Candidate Name")
	private String cname;
	@Column(name = "Problem Solving")
	private int problem_solving;
	@Column(name = "Adaptability")
	private int adaptability;
	
	@Column(name = "Team Work")
	private int team_work;
	
	@Column(name = "final_rating")
	private int final_rating;

	public Technical() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Technical(int cid, String cname, int problem_solving, int adaptability, int team_work, int final_rating) {
		super();
		this.cid = cid;
		this.cname = cname;
		this.problem_solving = problem_solving;
		this.adaptability = adaptability;
		this.team_work = team_work;
		this.final_rating = final_rating;
	}

	public int getCid(){
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

	public int getProblem_solving() {
		return problem_solving;
	}

	public void setProblem_solving(int problem_solving) {
		this.problem_solving = problem_solving;
	}

	public int getAdaptability() {
		return adaptability;
	}

	public void setAdaptability(int adaptability) {
		this.adaptability = adaptability;
	}

	public int getTeam_work() {
		return team_work;
	}

	public void setTeam_work(int team_work) {
		this.team_work = team_work;
	}

	public int getFinal_rating() {
		return final_rating;
	}

	public void setFinal_rating(int final_rating) {
		this.final_rating = final_rating;
	}

	@Override
	public String toString() {
		return "Technical [cid=" + cid + ", cname=" + cname + ", problem_solving=" + problem_solving + ", adaptability="
				+ adaptability + ", team_work=" + team_work + ", final_rating=" + final_rating + "]";
	}


	
	
	

}
