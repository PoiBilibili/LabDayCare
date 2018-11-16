package edu.neu.csye6200.LABDayCare;

import java.io.*;
import java.util.HashMap;

/**
 * FileAccess
 */
public class FileAccessor {

  HashMap<String, Student> students;
  String path;

  public FileAccessor(String path, String model) {
    super();
    this.path = path;
    this.students = new HashMap<String, Student>();
  }

  private void init(String[] fiels) {
    students.put(fiels[0], new Student(Integer.parseInt(fiels[0]), fiels[1], Integer.parseInt(fiels[2])));
  }

  public void open() {
    try {
      FileReader fr = new FileReader(this.path);
      BufferedReader in = new BufferedReader(fr);
      in.readLine(); // skip first line
      String thisLine = null;
      while ((thisLine = in.readLine()) != null) {
        init(thisLine.split(","));
      }
      in.close();
    } catch (Exception e) {
      System.err.println(e.getStackTrace());
    }
  }

  public Student getById(String id) {
    return students.get(id);
  }

  public HashMap<String, Student> lists() {
    return students;
  }

  public static void main(String[] args) {
    FileAccessor fa = new FileAccessor("./roster.csv", "Student");
    fa.open();

    fa.lists()
      .values()
      .stream()
      .sorted()
      .forEach(System.out::println);
  }
}