import React from "react";

const DownloadStyledText = () => {
  const tableheader = [
    { column1: "Name", column2: "Age", column3: "Profile" },
  ];
  const tabledata = [
    { column1: "Jack", column2: "20", column3: "QA" },
    { column1: "Dom", column2: "18", column3: "Frontend" },
    { column1: "Max", column2: "22", column3: "Backend" },
  ];

  const exportToTxt = () => {
    // Create a string for the text file
    let txtContent = "";

    // Add headers
    txtContent += Object.values(tableheader[0]).join("\t") + "\n";

    // Add data rows
    tabledata.forEach((row) => {
      txtContent += Object.values(row).join("\t") + "\n";
    });

    // Create a Blob and URL for the file
    const blob = new Blob([txtContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    // Create a temporary <a> element to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = "table_data.txt";
    link.click();

    // Clean up the URL
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Download Text</h1>
      <button
        onClick={exportToTxt}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Download
      </button>
    </div>
  );
};

export default DownloadStyledText;
