package edu.neu.csye6200.LABDayCare;

import java.util.Comparator;

public class Person {
	private int age;
	private String name = null;

	public static Comparator<Person> sortByAge= sortByAge();
	public static Comparator<Person> sortByName= sortByName();


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

	private static Comparator<Person> sortByAge(){
		return new Comparator<Person>(){
			@Override
			public int compare(Person o1, Person o2) {
				return o1.getAge()  - o2.getAge();
			}
		};
	}

	private static Comparator<Person> sortByName(){
		return new Comparator<Person>(){
			@Override
			public int compare(Person o1, Person o2) {
				return o1.getName().compareTo(o2.getName());
			}
		};
	}
}
