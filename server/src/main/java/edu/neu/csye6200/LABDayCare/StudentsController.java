package edu.neu.csye6200.LABDayCare;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.*;


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