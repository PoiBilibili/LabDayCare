package edu.neu.csye6200.LABDayCare;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class PrintTest {

	public static void printstd(String fileName) {
		String[] names = { "Jimmy", "Sally", "Lizzy", "Markie", "Johnny", "Bobby", "Billy", "Evie", "Becky", "Jessie",
				"Jackie", "Laurie", "Cathey", "Millie", "Ruthie", "Stanley", "Mary", "Annie" };
		String[] gpas = { "12", "23", "62", "32", "12", "48", "26", "40", "29", "14", "12", "27", "12", "63", "34",
				"53", "41", "30" };
		String[] ages = { "12", "23", "62", "32", "12", "48", "26", "40", "29", "14", "12", "27", "12", "63", "34",
				"53", "41", "30" };

		// try with resources: all resources in () are closed at conclusion of try
		// clause
		try ( // open output stream to output file for writing.
				FileWriter fw = new FileWriter(fileName);
				BufferedWriter out = new BufferedWriter(fw);) {
			for (int i = 0; i < names.length; i++) {
				out.write(names[i] + "," + gpas[i] + "," + ages[i]);
				out.newLine();
			}
			out.flush();
		} catch (IOException e) {
			// catch IOException (and implicitly FileNotFoundException)
			e.printStackTrace();
		}
	}

}
