package edu.neu.csye6200.LABDayCare;

import java.util.*;

public class Student extends Person implements Comparable<Student> {
	private int id;
	private Person[] parents;// father and mother
	private List<Registration> rglist = new Vector<>();// registration date
	private List<Immunization> imlist = new Vector<>();// immunization date

	public Student() {
		super();
		this.parents = new Person[2];
	}

	public Student(int id, String name, int age) {
		super(age, name);
		this.id = id;
		this.parents = new Person[2];
	}

	public int getID() {
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
	}

	public int compareTo(Student that) {
		return Double.compare(this.getID(), that.getID());
	}

	public void registration(String date) {
		Registration nr = new Registration(date);
		System.out.println(rglist);
		this.rglist.add(nr);
	}

	public List<Registration> getRegistList() {
		return rglist;
	}

	public void immunization(String typename, String date) {
		Immunization nr = new Immunization(typename, date);
		this.imlist.add(nr);
	}

	public List<Immunization> getImmunizationList() {
		return imlist;
	}
}
