package edu.neu.csye6200.LABDayCare;

import java.util.*;

public class Student extends Person implements Comparable<Student> {
	private int id;
	private Person[] parents;// father and mother
	private List<Registration> rglist = new Vector<>();;// registration date
	private List<Immunization> imlist = new Vector<>();;// immunization date

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

	public void registration() {
		Calendar cal = Calendar.getInstance();
		Registration nr = new Registration(cal.get(Calendar.MONTH),cal.get(Calendar.DATE),cal.get(Calendar.YEAR));
		this.rglist.add(nr);
	}

	public void registration(int month, int date, int year) {
		Registration nr = new Registration(month, date, year);
		System.out.println(rglist);
		this.rglist.add(nr);
	}

	public List<Registration> getRegistList() {
		return rglist;
	}

	public void immunization(String typename) {
		Calendar cal = Calendar.getInstance();
		Immunization nr = new Immunization(typename, cal.get(Calendar.MONTH),cal.get(Calendar.DATE),cal.get(Calendar.YEAR));
		this.imlist.add(nr);
	}

	public void immunization(String typename, int month, int date, int year) {
		Immunization nr = new Immunization(typename, month, date, year);
		this.imlist.add(nr);
	}

	public List<Immunization> getImmunizationList() {
		return imlist;
	}
}
