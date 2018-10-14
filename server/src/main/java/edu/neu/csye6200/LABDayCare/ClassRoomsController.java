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
  public void addstudent(@RequestParam("sid") String sid, @RequestParam("cid") String cid) {
    fa.open();
    crs.list().get(cid).addStudent(fa.getById(sid));
  }

  @PostMapping("/addRegistration")
  public void addRegistration(@RequestParam("sid") Integer sid, @RequestParam("month") int m, @RequestParam("day") int d, @RequestParam("year") int y) {
    crs.getByStudentID(sid).registration(m,d,y);;
  }

  @PostMapping("/addImmunization")
  public void addImmunization(@RequestParam("sid") Integer sid, @RequestParam("type") String str,@RequestParam("month") int m, @RequestParam("day") int d, @RequestParam("year") int y) {
    crs.getByStudentID(sid).immunization(str,m,d,y);;
  }

  @GetMapping("/studentsInformation")
  public List<Student> students(@RequestParam("sid") int sid) {
    return null;
  }
  @GetMapping("/groups")
  public List<Group> groups(@RequestParam("cid") String cid) {
    return crs.getByName(cid).getGroups();
  }

}