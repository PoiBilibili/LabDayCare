package edu.neu.csye6200;

public class Teacher extends Person implements Comparable<Teacher>{
	private int credits;
	
	public Teacher(int age, String name, int credits) {
		super(age, name);
		this.credits = credits;
	}
	public int compareTo(Teacher t2) {
		return this.getName().compareTo(t2.getName());
	}
	public int compareByName(Teacher t2) {
		return this.compareTo(t2);
	}
	public int compareByCredits(Teacher t2) {
		return Integer.compare(this.getCredits(), t2.getCredits());
	}
	public int getCredits() {
		return this.credits;
	}
	
}
