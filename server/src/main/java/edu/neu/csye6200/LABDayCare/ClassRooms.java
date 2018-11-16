package edu.neu.csye6200.LABDayCare;

import java.util.HashMap;

/**
 * ClassRooms
 */
public class ClassRooms {
  private HashMap<String, ClassRoom> crs;

  public ClassRooms() {
    super();
    crs = new HashMap<String, ClassRoom>();
  }

  public void add(ClassRoom cr, String name) {
    crs.put(name, cr);
  }

  public ClassRoom getByName(String key){
    return crs.get(key);
  }

  public Student getByStudentID( int sid ){
    for(ClassRoom cl : crs.values()){
      if(cl.hasStudent(sid))
        return cl.getByStudentID(sid);
    }
    return null;
  }
  public HashMap<String, ClassRoom> list() {
    return crs;
  }

}