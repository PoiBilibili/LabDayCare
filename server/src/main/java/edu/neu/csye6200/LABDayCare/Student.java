package edu.neu.csye6200.LABDayCare;

import java.util.Comparator;

public class Student extends Person implements Comparable<Student> {
	private int id;
	private Person[] parents;// father and mother

	public Student() {
		super();
		this.parents = new Person[2];
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

}
