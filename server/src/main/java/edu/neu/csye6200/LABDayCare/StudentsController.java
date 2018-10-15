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

  @PostMapping("/addRegistration")
  public void addRegistration(@RequestParam("sid") String sid, @RequestParam("month") int m, @RequestParam("day") int d, @RequestParam("year") int y) {
    fa.getById(sid).registration(m,d,y);;
  }

  @PostMapping("/addImmunization")
  public void addImmunization(@RequestParam("sid") String sid, @RequestParam("type") String str,@RequestParam("month") int m, @RequestParam("day") int d, @RequestParam("year") int y) {
    fa.getById(sid).immunization(str,m,d,y);;
  }


}