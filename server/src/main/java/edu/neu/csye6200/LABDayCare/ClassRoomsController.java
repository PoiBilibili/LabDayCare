package edu.neu.csye6200.LABDayCare;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;

@RestController
public class ClassRoomsController {
  ClassRooms crs = new ClassRooms();

  String path = "./roster.csv";
  FileAccessor fa = new FileAccessor(path, "Student");

  @GetMapping("/classrooms")
  public HashMap<String, ClassRoom> classrooms() {
    return crs.list();
  }

  @PostMapping("/classrooms")
  public void classrooms(@RequestBody ClassRoom cr) {
    crs.add(cr, cr.getName());
  }

  @PostMapping("/addstudent")
  public void addstudent(@RequestParam("sid") String sid, @RequestParam("cid") String cid) {
    fa.open();
    crs.list().get(cid).addStudent(fa.getById(sid));
  }

}