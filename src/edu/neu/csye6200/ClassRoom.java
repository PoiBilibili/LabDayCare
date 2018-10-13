package edu.neu.csye6200;

import java.util.*;

public class ClassRoom {
	private int capacity;
	private String name;
	private List<Group> groups = new Vector<>();
	
	public ClassRoom(String name, int capacity) {
		this.capacity = capacity;
		this.name = name;
	}
	public int getCapacity() {
		return this.capacity;
	}
	public boolean isFull(){
		if(capacity <= groups.size()) return true;
		return false;
	}
	private void addStudent(Group g) {
		if(!this.isFull())
			this.groups.add(g);
	}
	public String toString() {
		StringBuilder ret = new StringBuilder();
		ret.append("[Capacity of the class]"+ capacity +" Groups");
		ret.append("[Groups:]" + groups.size());
		return ret.toString();
	}
}
