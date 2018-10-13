package edu.neu.csye6200.LABDayCare;

import java.util.*;

public class Manager {
  private List<ClassRoom> classrooms = new Vector<>();

  public Manager() {
    // classrooms.add(new ClassRoom("6-12", 3, 4));
    // classrooms.add(new ClassRoom("13-24", 3, 5));
    // classrooms.add(new ClassRoom("25-35", 3, 6));
    // classrooms.add(new ClassRoom("36-47", 3, 8));
    // classrooms.add(new ClassRoom("48-59", 2, 12));
    // classrooms.add(new ClassRoom("60 on up", 2, 15));
  }

  public void addStudents(List<Student> s) {
    for (Student st : s) {
      int c = st.getAge();
      if (6 <= c && c <= 12)
        classrooms.get(0).addStudent(st);
      else if (13 <= c && c <= 24)
        classrooms.get(1).addStudent(st);
      else if (25 <= c && c <= 35)
        classrooms.get(2).addStudent(st);
      else if (36 <= c && c <= 47)
        classrooms.get(3).addStudent(st);
      else if (48 <= c && c <= 59)
        classrooms.get(4).addStudent(st);
      else if (c >= 60)
        classrooms.get(5).addStudent(st);
    }
  }

  public void showTable() {
    for (ClassRoom cl : classrooms)
      System.out.println(cl);
  }
}
