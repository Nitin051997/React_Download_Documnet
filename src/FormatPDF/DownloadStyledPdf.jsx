import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const DownloadStyledPdf = () => {
  const tableheader = [
    { column1: "Name", column2: "Age", column3: "Profile" },
  ];
  const tabledata = [
    { column1: "Jack", column2: "20", column3: "QA" },
    { column1: "Dom", column2: "18", column3: "Frontend" },
    { column1: "Max", column2: "22", column3: "Backend" },
  ];

  const exportToPDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text("MIS-Report", 14, 15);

    // Define headers and data for the table
    const headers = [Object.values(tableheader[0])]; // Extract header row
    const data = tabledata.map((row) => Object.values(row)); // Extract data rows

    // Use AutoTable to generate the table
    doc.autoTable({
      startY: 20, // Start table below the title
      head: headers,
      body: data,
      styles: {
        fontSize: 10, // Font size for table text
        cellPadding: 4, // Cell padding
        valign: "middle", // Vertical alignment
        halign: "center", // Horizontal alignment
      },
      headStyles: {
        fillColor: [16, 44, 93], // Header background color (light blue)
        textColor: [255, 255, 255], // Header text color (white)
        fontSize: 12, // Header font size
        fontStyle: "bold", // Header font style
      },
      bodyStyles: {
        fillColor: [58, 86, 134], // Alternating row background color (light grey)
        textColor: [255, 255, 255], // Header text color (white)
      },
      alternateRowStyles: {
        fillColor: [58, 86, 134], // Alternating row background color (white)\
        textColor: [255, 255, 255], // Header text color (white)
      },
      margin: { top: 20 }, // Top margin
    });

    // Save the PDF
    doc.save("MIS-Report.pdf");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Download PDF</h1>
      <button
        onClick={exportToPDF}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Download
      </button>
    </div>
  );
};

export default DownloadStyledPdf;
