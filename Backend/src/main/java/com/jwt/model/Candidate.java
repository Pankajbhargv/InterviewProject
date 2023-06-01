package com.jwt.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Candidate {
	
	@Id
	@Column(name = "Candidate ID")
	private int cid;
	@Column(name = "Candidate Name")
	private String cname;
	
	@Column(name = "Interview Type")
	private String itype;
	
	@Column(name = "Interviewer Name")
	private String iname;

	@Column(name = "Interview Mode")
	private String imode;
	
	@Column(name = "Interview Date")
	private Date idate;

	public Candidate() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Candidate(int cid, String cname, String itype, String imode, String iname, Date idate) {
		super();
		this.cid = cid;
		this.cname = cname;
		this.itype = itype;
		this.imode = imode;
		this.iname = iname;
		this.idate = idate;
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

	public String getItype() {
		return itype;
	}

	public void setItype(String itype) {
		this.itype = itype;
	}

	public String getImode() {
		return imode;
	}

	public void setImode(String imode) {
		this.imode = imode;
	}

	public String getIname() {
		return iname;
	}

	public void setIname(String iname) {
		this.iname = iname;
	}

	public Date getIdate() {
		return idate;
	}

	public void setIdate(Date idate) {
		this.idate = idate;
	}

	@Override
	public String toString() {
		return "Candidate [cid=" + cid + ", cname=" + cname + ", itype=" + itype + ", imode=" + imode + ", iname="
				+ iname + ", idate=" + idate + "]";
	}
}
	