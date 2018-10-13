package edu.neu.csye6200.LABDayCare;

import java.util.*;

public class Student extends Person implements Comparable<Student> {
	private int id;
	private Person[] parents;// father and mother
	private int y, m, d;// registration date
	private int imy, imm, imd;// immunization date

	public Student() {
		super();
		this.parents = new Person[2];
		this.y = 0;
		this.m = 0;
		this.d = 0;
	}

	public Student(int id, String name, int age) {
		super(age, name);
		this.id = id;
		this.parents = new Person[2];
	}

	public double getID() {
		return id;
	}

	public void setFather(Person father) {
		this.parents[0] = father;
	}

	public Person getFather() {
		return this.parents[0];
	}

	public void setMother(Person mother) {
		this.parents[1] = mother;
	}

	public Person getMohter() {
		return this.parents[1];
	}

	public String toString() {
		return "[" + this.id + " " + super.getName() + "]";
		// + " [Age:" + super.getAge() +"]"
		// + "[Parents: Father:"+this.getFather() +"Mother:"+this.getMohter()+"]";
	}

	public int compareTo(Student student2) {
		return Double.compare(this.getID(), student2.getID());
	}

	public static Comparator<Student> compareByGpa() {
		return null;

	}

	public int compareByAge(Student student2) {
		return Integer.compare(this.getAge(), student2.getAge());
	}

	public void regist() {
		Calendar cal = Calendar.getInstance();
		this.y = cal.get(Calendar.YEAR);
		this.m = cal.get(Calendar.MONTH);
		this.d = cal.get(Calendar.DATE);
	}

	public void regist(int month, int date, int year) {
		this.y = year;
		this.m = month;
		this.d = date;
	}

	public boolean registIsValid() {
		// 365 days
		Calendar cal = Calendar.getInstance();
		return (cal.get(Calendar.YEAR) - this.y) * 365 + (cal.get(Calendar.MONTH) - this.m) * 30
				+ (cal.get(Calendar.DATE) - this.d) <= 365;
	}

	public String getRegistDate() {
		StringBuilder ret = new StringBuilder();
		ret.append(m + "/" + d + "/" + y);
		return ret.toString();
	}

	public void immunizationNow() {
		Calendar cal = Calendar.getInstance();
		this.imy = cal.get(Calendar.YEAR);
		this.imm = cal.get(Calendar.MONTH);
		this.imd = cal.get(Calendar.DATE);
	}

	public void immunization(int month, int date, int year) {
		this.imy = year;
		this.imm = month;
		this.imd = date;
	}

	public int immunizationDays() {
		Calendar cal = Calendar.getInstance();
		return (cal.get(Calendar.YEAR) - this.imy) * 365 + (cal.get(Calendar.MONTH) - this.imm) * 30
				+ (cal.get(Calendar.DATE) - this.imd);
	}
}
