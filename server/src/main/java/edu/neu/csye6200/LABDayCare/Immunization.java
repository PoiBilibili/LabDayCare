package edu.neu.csye6200.LABDayCare;

public class Immunization {
    private String name;
    private String date;// month/day/year

    public Immunization(String name, String date) {
        this.name = name;
        this.date = date;
    }

    public String getName() {
        return this.name;
    }

    public String getDate() {
        return date;
    }
}