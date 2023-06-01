package com.jwt.helper;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

import com.jwt.model.CandidateDetails;

public class ExcelHelper {
	

	
	public static boolean checkExcelFormat(MultipartFile file) {
		String contenttype =  file.getContentType();
		if(contenttype.equals("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")) {
			return true;
		}
		else {
			return false;
		}
	}
	
	
	//convert excel to list of product
	
	public static List<CandidateDetails> convertExceltoListofCandidates(InputStream is){
		
		List<CandidateDetails> list = new ArrayList<>();
		
		try {
			XSSFWorkbook workbook = new XSSFWorkbook(is);
			
			XSSFSheet sheet = workbook.getSheet("Details");
			
			
			int rowNumber =0;
			
//			Iterator<Row> iterator = sheet.iterator();
			Iterator<Row> iterator = sheet.iterator();
			
			//here we will extract the data row wise
			while(iterator.hasNext()) {
				
				Row row = iterator.next(); 
				
				if(rowNumber==0) {
					rowNumber++;
					continue;
				}
				
				//here we will extract the data column wise
				int cid = 0;
				CandidateDetails cd = new CandidateDetails();
			 Iterator<Cell> cells = row.iterator();
			 while(cells.hasNext()) {
				Cell cell = cells.next();
				
				switch(cid) {
				case 0:
					cd.setCid((int)cell.getNumericCellValue());
					break;
				case 1:
					cd.setCname((String)cell.getStringCellValue());
					break;
				case 2:
					cd.setAptitude((int)cell.getNumericCellValue());
					break;
				case 3:
					cd.setTechnical((int)cell.getNumericCellValue());
					break;
				case 4:
					cd.setHr((int)cell.getNumericCellValue());
					break;
				case 5:
					cd.setCto((int)cell.getNumericCellValue());
					break;
				default:
					break;
				
				}
				cid++;
			 }
			 list.add(cd);
				
			}
			
		}
		catch(Exception e){
			e.printStackTrace();
		}
		
		
		
		return list;
		
	}
}
