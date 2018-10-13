package edu.neu.csye6200.LABDayCare;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;

@RestController
public class StudentsController {

  String path = "./roster.csv";
  FileAccessor fa = new FileAccessor(path, "Student");

  @GetMapping("/students")
  public HashMap<String, Student> student() {
    fa.open();
    return fa.lists();
  }
}