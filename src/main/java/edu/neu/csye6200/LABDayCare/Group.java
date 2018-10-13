package edu.neu.csye6200.LABDayCare;

import java.util.List;
import java.util.Vector;

public class Group {
	private int size = 0;
	private	List<Student> students = new Vector<>();

	public Group(int size) {
		this.size = size;
	}
	public int addStudent(Student student) {
		if(this.isFull()) return -1;
		else students.add(student);
		return 1;
	}
	private boolean isFull() {
		if(students.size()>=size) return true;
		return false;
	}
}
