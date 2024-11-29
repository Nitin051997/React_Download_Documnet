import React from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

const DownloadStyledExcel = () => {
  const tableheader = [
    { column1: "Name", column2: "Age", column3: "Profile" },
  ];
  const tabledata = [
    { column1: "Jack", column2: "20", column3: "QA" },
    { column1: "Dom", column2: "18", column3: "Frontend" },
    { column1: "Max", column2: "22", column3: "Backend" },
  ];

  const downloadExcel = async () => {
    // Create a new workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Styled Table");

    // Add header row
    const header = Object.values(tableheader[0]);
    const headerRow = worksheet.addRow(header);

    // Apply styles to the header
    headerRow.eachCell((cell) => {
      cell.font = { bold: true, color: { argb: "FFFFFFFF" }, size: 14 };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "102C5D" }, // Light blue background
      };
      cell.alignment = { vertical: "middle", horizontal: "center" };
    });

    // Add table data
    tabledata.forEach((data) => {
      const row = Object.values(data);
      const dataRow = worksheet.addRow(row);

      // Apply styles to data rows
      dataRow.eachCell((cell) => {
        cell.font = { color: { argb: "FFFFFFFF" }, size: 12 };
        cell.fill = { 
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "3A5686" },
        }
        cell.alignment = { vertical: "middle", horizontal: "left" };
      });
    });

    // Adjust column widths
    worksheet.columns.forEach((column) => {
      column.width = 15; // Set a uniform width
    });

    // Save the file
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), "MIS-Report.xlsx");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Download Excel</h1>
      <button
        onClick={downloadExcel}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Download
      </button>
    </div>
  );
};

export default DownloadStyledExcel;
