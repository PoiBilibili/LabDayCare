package edu.neu.csye6200;

import java.util.Comparator;

public class Student extends Person implements Comparable<Student>{
	double grade;
	Person[] parents;// father and mother
	
	public Student() {
		super();
		this.parents = new Person[2];
	}
	
	public Student(int age, String name, double grade) {
		super(age, name);
		this.grade = grade;
		this.parents = new Person[2];
	}
	public double getGrade() {
		return grade;
	}
	public void setGrade(int grade) {
		this.grade = grade;
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
		return "[Name:" + super.getName() +"]";
//				+ " [Age:" + super.getAge() +"]"
//				+ "[Parents: Father:"+this.getFather() +"Mother:"+this.getMohter()+"]";
	}
	
	public int compareTo(Student student2) {
		return Double.compare(this.getGrade(), student2.getGrade());
	}
	public static Comparator<Student> compareByGpa() {
		return null;

	}
	
	public int compareByAge(Student student2) {
		return Integer.compare(this.getAge(), student2.getAge());
	}
	
	public static void demo() {
		Student st = new Student(17, "Jing", 5);
		System.out.println(st);
	}
}
