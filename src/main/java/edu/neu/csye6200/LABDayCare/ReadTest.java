package edu.neu.csye6200.LABDayCare;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class ReadTest {
	public static List<Student> readStudents(String fileName){
		List<Student> students = new ArrayList<Student>();
		try (BufferedReader inLine = new BufferedReader(new FileReader(fileName));
				) {
					String inputLine = null;	// read one line from file at a time
					while ((inputLine = inLine.readLine()) != null) {
						// Parse line converting each string token into a Student object field
						String[] fields = inputLine.split(",");
						String name = fields[0];
						double grade = new Double(fields[1]);
						int age = new Integer(fields[2]);
						// instantiate Student object from line in file and add to list
						students.add(new Student (age,name,grade));
					}
				} catch (IOException e) {
					// catch IOException (and implicitly FileNotFoundException)
					e.printStackTrace();
				}
		return students;
	}
}
