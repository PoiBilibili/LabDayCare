package edu.neu.csye6200.LABDayCare;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class PrintTest {

	public static void printstd(String fileName){
		// TODO Auto-generated method stub
		String[] names = {"Dan", "Jim", "Eve", "Ina", "Zhou"};
		String[] gpas = {"9.33","2.88", "3.99", "4.66", "5.00"};
		String[] ages = {"17", "67", "37", "47", "58"};

		// try with resources: all resources in () are closed at conclusion of try clause
		try (	// open output stream to output file for writing.
				FileWriter fw = new FileWriter(fileName);
				BufferedWriter out= new BufferedWriter(fw);
			   ) {
				for (int i = 0; i<names.length; i++) {
					out.write(names[i] + "," + gpas[i] + "," + ages[i] );
					out.newLine();
				}
				out.flush();
		}catch (IOException e) {
			// catch IOException (and implicitly FileNotFoundException)
			e.printStackTrace();
		}
	}

}
