import React from "react";

const DownloadPdf = () => {
  const handleDownload = () => {
    // Example PDF data (replace this with your PDF data)
    const pdfContent = {
      title: "Sample PDF",
      content: "This is a sample PDF created from an object.",
    };

    // Convert the object into a string (JSON format)
    const pdfString = JSON.stringify(pdfContent, null, 2);

    // Create a Blob with the stringified content
    const blob = new Blob([pdfString], { type: "application/json" });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create an anchor element and trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = "sample.pdf"; // Name of the downloaded file
    link.click();

    // Cleanup: Revoke the object URL
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Download PDF Example</h1>
      <button onClick={handleDownload} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Download PDF
      </button>
    </div>
  );
};

export default DownloadPdf;
