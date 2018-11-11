package edu.neu.csye6200.LABDayCare;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
public class StudentsController {

  private static class AddRegistration {
    private String sid;
    private String date;

    /**
     * @return the sid
     */
    public String getSid() {
      return sid;
    }

    /**
     * @param sid the sid to set
     */
    public void setSid(String sid) {
      this.sid = sid;
    }

    /**
     * @return the date
     */
    public String getDate() {
      return date;
    }

    /**
     * @param date the date to set
     */
    public void setDate(String date) {
      this.date = date;
    }

  }

  private static class AddImmunization {
    private String sid;
    private String type;
    private String date;

    /**
     * @return the sid
     */
    public String getSid() {
      return sid;
    }

    /**
     * @param sid the sid to set
     */
    public void setSid(String sid) {
      this.sid = sid;
    }

    /**
     * @return the sid
     */
    public String getType() {
      return type;
    }

    /**
     * @param sid the sid to set
     */
    public void setType(String type) {
      this.type = type;
    }

    /**
     * @return the date
     */
    public String getDate() {
      return date;
    }

    /**
     * @param date the date to set
     */
    public void setDate(String date) {
      this.date = date;
    }

  }

  FileAccessor fa = new FileAccessor("./roster.csv", "Student");

  public StudentsController() {
    super();
    fa.open();
  }

  @GetMapping("/students")
  public List<Student> students() {
    return new ArrayList<Student>(fa.lists().values());
  }

  @PostMapping("/addRegistration")
  public void addRegistration(@RequestBody AddRegistration body) {
    fa.getById(body.getSid()).registration(body.getDate());
  }

  @PostMapping("/addImmunization")
  public void addImmunization(@RequestBody AddImmunization body) {
    fa.getById(body.getSid()).immunization(body.getType(), body.getDate());
  }

}