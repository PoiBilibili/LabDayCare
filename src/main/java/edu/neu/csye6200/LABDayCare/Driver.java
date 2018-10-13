package edu.neu.csye6200.LABDayCare;
import java.util.*;

public class Driver{

	public static void main(String[] args) {
		List<Student> students = new ArrayList<Student>();
		PrintTest.printstd("testout.out");
		students = ReadTest.readStudents("testout.out");
		Collections.sort(students, new Comparator<Student>() {
			public int compare(Student s1, Student s2) {
				return Double.compare(s1.getAge(), s2.getAge());
			}
		});
		for(Student std : students)
			System.out.println(std);
		System.out.println("----------------------");
		//students.sort(Student::compareByGpa);
		for(Student std : students)
			System.out.println(std);
		System.out.println("----------------------");
	}
}