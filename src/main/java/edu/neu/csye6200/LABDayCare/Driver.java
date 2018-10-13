package edu.neu.csye6200.LABDayCare;

import java.util.*;

public class Driver {

    public static void main(String[] args) {
        List<Student> students = new ArrayList<Student>();
        PrintTest.printstd("testout.out");
        students = ReadTest.readStudents("testout.out");
        Manager m = new Manager();
        m.addStudents(students);
        m.showTable();
    }
}