package edu.neu.csye6200.LABDayCare;

import java.io.*;
import java.util.HashMap;

/**
 * FileAccess
 */
public class FileAccessor {

  //Map<String, Student> students;
  String path;

  public FileAccessor(String path, String model) {
    super();
    this.path = path;
    
  }

  private void init(String[] fiels) {
    Students.getInstance().getStudentMap().put(Integer.parseInt(fiels[0]), new Student(Integer.parseInt(fiels[0]), fiels[1], Integer.parseInt(fiels[2])));
    // System.out.println(students.size());
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
      System.out.println(e.getStackTrace());
    }
  }

  public Student getById(String id) {
    return students.get(id);
  }

  public HashMap<String, Student> lists() {
    return students;
  }

  public static void main(String[] args) {
    String path = "/Users/omnip/Programe/csye6200/LaBDayCare/src/main/java/edu/neu/csye6200/LABDayCare/roster.csv";
    FileAccessor fa = new FileAccessor(path, "Student");
    fa.open();
  }
}