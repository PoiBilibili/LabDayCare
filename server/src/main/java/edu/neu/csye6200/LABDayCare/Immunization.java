package edu.neu.csye6200.LABDayCare;

public class Immunization {
    private String name;
    private int[] d = new int[3];// month/day/year

    public Immunization(String name, int m, int d, int y) {
        this.name = name;
        this.d[0] = m;
        this.d[1] = d;
        this.d[2] = y;
    }

    public String getName() {
        return this.name;
    }

    public int[] getDate() {
        int[] ret = new int[3];
        ret[0] = d[0];
        ret[1] = d[1];
        ret[2] = d[2];
        return ret;
    }
}