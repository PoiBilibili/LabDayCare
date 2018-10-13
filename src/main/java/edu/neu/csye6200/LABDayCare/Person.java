package edu.neu.csye6200.LABDayCare;

public class Person {
	private int age;
	private String name = null;
	public Person() {
		super();
		this.age = 17;
		this.name = "Dan";
	}
	public Person(int age, String name) {
		super();
		this.age = age;
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
//	@Override
//	public String toString() {
//		return "Person [age=" + age + ", name=" + name + "]";
//	}
	public static void demo() {
		System.out.println("Person demo starting...");
		Person dan = new Person(); // instantiate Person obj using default
		System.out.println(dan.getName());
		System.out.println("Person demo done");
	}
}
