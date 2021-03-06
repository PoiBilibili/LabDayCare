package edu.neu.csye6200.LABDayCare;

import java.util.*;

public class Students {// Singleton Class

  private static Map<Integer, Student> list = new HashMap<>();

  private static class StudentsHolder {
    private static final Students INSTANCE = new Students();
  }

  public static final Students getInstance() {
    return StudentsHolder.INSTANCE;
  }

  public void addStudent(Student s) {
    list.put(s.getID(), s);
  }

  public Map<Integer, Student> getStudentsMap() {
    return list;
  }
}