package edu.neu.csye6200.LABDayCare;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;

@RestController
public class Controller {

  private static final String template = "Hello, %s!";
  private final AtomicLong counter = new AtomicLong();

  String path = "./roster.csv";
  FileAccessor fa = new FileAccessor(path, "Student");

  @RequestMapping("/hello")

  public String greeting(@RequestParam(value = "name", defaultValue = "World") String name) {

    return "周劲nb";
  }

  @GetMapping("/students/")
  public HashMap<String, Student> student() {

    fa.open();
    return fa.lists();
  }
}