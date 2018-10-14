package edu.neu.csye6200.LABDayCare;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

@RestController
public class StudentsController {

  String path = "./roster.csv";
  FileAccessor fa = new FileAccessor(path, "Student");

  @GetMapping("/students")
  public List<Student> students() {
    fa.open();
    return new ArrayList<Student>(fa.lists().values());
  }
}