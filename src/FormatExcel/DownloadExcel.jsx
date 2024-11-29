import React from "react";
import * as XLSX from "xlsx";

const DownloadExcel = () => {
  // Table header and data
  const tableheader = [
    { column1: "Name", column2: "Age", column3: "Profile" },
  ];
  const tabledata = [
    { column1: "Jack", column2: "20", column3: "QA" },
    { column1: "Dom", column2: "18", column3: "Frontend" },
    { column1: "Max", column2: "22", column3: "Backend" },
  ];

  const downloadExcel = () => {
    // Combine table header and data
    const worksheetData = [
      Object.values(tableheader[0]), // Extract header values
      ...tabledata.map((row) => Object.values(row)), // Extract row values
    ];

    // Create a worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

    // Create a workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Table Data");

    // Write the workbook and trigger the download
    XLSX.writeFile(workbook, "table-data.xlsx");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Download Table as Excel</h1>
      <button
        onClick={downloadExcel}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Download Excel
      </button>
    </div>
  );
};

export default DownloadExcel;
