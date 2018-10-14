package edu.neu.csye6200.LABDayCare;

import java.util.*;

public class ClassRoom {
	private int maxgroup;
	private String name;
	private List<Group> groups = new Vector<>();
	private int groupsize;
	private int minage;
	private int maxage;

	public ClassRoom(String name, int maxgroup, int groupsize, int minage, int maxage) {
		this.maxgroup = maxgroup;
		this.name = name;
		this.groupsize = groupsize;
		this.minage = minage;
		this.maxage = maxage;
	}

	public int getCapacity() {
		return this.maxgroup;
	}

	public String getName() {
		return name;
	}

	public int getGroupsize() {
		return groupsize;
	}

	public List<Group> getGroups() {
		return groups;
	}

	public int getMinAge() {
		return minage;
	}

	public int getMaxAge() {
		return maxage;
	}

	public void addStudent(Student s) {
		if (s.getAge() > maxage || s.getAge() < minage) {
			new IllegalArgumentException("Age is invalid");
		} else {
			if (groups.size() < 1 || groups.get(groups.size() - 1).isFull()) {
				groups.add(new Group(groupsize));
				groups.get(groups.size() - 1).addStudent(s);
			} else {
				groups.get(groups.size() - 1).addStudent(s);
			}
		}
	}

	public String toString() {
		StringBuilder ret = new StringBuilder();
		ret.append("Class" + this.name + ": ");
		int i = 0;
		for (Group gr : groups) {
			i++;
			ret.append("Group" + i + ":" + gr.toString() + " ");
		}
		return ret.toString();
	}
}
