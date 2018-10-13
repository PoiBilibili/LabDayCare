package edu.neu.csye6200.LABDayCare;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;

@RestController
public class ClassRoomsController {
  ClassRooms crs = new ClassRooms();

  @GetMapping("/classrooms")
  public HashMap<String, ClassRoom> classrooms() {
    return crs.list();
  }

  @PostMapping("/classrooms")
  public void classrooms(@RequestBody ClassRoom cr) {
    crs.add(cr, cr.getName());
  }
}