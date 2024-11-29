import React from "react";

const DownloadCVS = () => {
  // Table header and data
  const tableheader = [
    { column1: "Name", column2: "Age", column3: "Profile" },
  ];
  const tabledata = [
    { column1: "Jack", column2: "20", column3: "QA" },
    { column1: "Dom", column2: "18", column3: "Frontend" },
    { column1: "Max", column2: "22", column3: "Backend" },
  ];

  // Convert data to CSV
  const downloadCSV = () => {
    // Extract headers (keys from the first object in `tableheader`)
    const headers = Object.values(tableheader[0]).join(","); // "Name,Age,Profile"

    // Extract rows (values from each object in `tabledata`)
    const rows = tabledata.map((row) =>
      Object.values(row).join(",")
    ); // ["Jack,20,QA", "Dom,18,Frontend", "Max,22,Backend"]

    // Combine headers and rows into CSV format
    const csvContent = [headers, ...rows].join("\n");

    // Create a Blob with the CSV content
    const blob = new Blob([csvContent], { type: "text/csv" });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create an anchor element and trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = "MIS-Report.csv"; // Name of the downloaded file
    link.click();

    // Cleanup: Revoke the object URL
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Download CSV</h1>
      <button
        onClick={downloadCSV}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Download
      </button>
    </div>
  );
};

export default DownloadCVS;
