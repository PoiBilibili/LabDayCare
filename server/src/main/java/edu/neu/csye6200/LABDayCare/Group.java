package edu.neu.csye6200.LABDayCare;

import java.util.List;
import java.util.Vector;

public class Group {
	private int capacity = 0;
	private List<Student> students = new Vector<>();

	public Group(int capacity) {
		this.capacity = capacity;
	}

	public List<Student> getStudents() {
		return students;
	}

	public int addStudent(Student student) {
		if (this.isFull())
			return -1;
		else
			students.add(student);
		return 1;
	}

	public boolean isFull() {
		if (students.size() >= capacity)
			return true;
		return false;
	}

	public String toString() {
		StringBuilder ret = new StringBuilder();
		for (Student s : students) {
			ret.append(s.toString() + " ");
		}
		return ret.toString();
	}
}
