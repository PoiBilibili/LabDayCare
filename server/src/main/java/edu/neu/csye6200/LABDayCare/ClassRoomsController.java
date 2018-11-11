package edu.neu.csye6200.LABDayCare;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
public class ClassRoomsController {
  ClassRooms crs = new ClassRooms();

  String path = "./roster.csv";
  FileAccessor fa = new FileAccessor(path, "Student");

  @GetMapping("/classrooms")
  public List<ClassRoom> classrooms() {
    return new ArrayList<ClassRoom>(crs.list().values());
  }

  @PostMapping("/classrooms")
  public void classrooms(@RequestBody ClassRoom cr) {
    crs.add(cr, cr.getName());
  }

  @PostMapping("/addstudent")
  public void addstudent(@RequestParam("cid") String cid, @RequestParam("sid") String sid) {
    fa.open();
    crs.list().get(cid).addStudent(fa.getById(sid));
  }

  @GetMapping("/groups")
  public List<Group> groups(@RequestParam("cid") String cid) {
    return crs.getByName(cid).getGroups();
  }

  @PostMapping("/addteacher")
  public void addTeacher(@RequestParam("cid") String cid, @RequestParam("name") String name) {
    crs.list().get(cid).assignTeacher(name, 17);
  }

}