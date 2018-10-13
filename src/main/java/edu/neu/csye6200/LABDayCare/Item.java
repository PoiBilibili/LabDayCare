package edu.neu.csye6200.LABDayCare;

public class Item {
	// access, type name
	private int id;
	private int cat;
	private String name;

	public Item(int id, int cat, String s) {
		this.id = id; // assign supplied id param to object's id member
		this.cat = cat;
		this.name = s;
	}

	public static void demo() {
		Item itemObject = new Item(8,3276, "This is the name");

		System.out.println(itemObject.id + " " + itemObject.cat +" "+ itemObject.name);
	}
}
