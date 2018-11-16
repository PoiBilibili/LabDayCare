package edu.neu.csye6200.LABDayCare;

public class Registration {
    private String location;
    private String date; // month/day/year

    public Registration(String date) {
        this.location = "";
        this.date = date;
    }

    public Registration(String loc, String date) {
        this.location = loc;
        this.date = date;
    }

    public String getName() {
        return this.location;
    }

    public String getDate() {
        return this.date;
    }
}