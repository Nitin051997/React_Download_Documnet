import './App.css';
// import DownloadPdf from './FormatPDF/DownloadPdf';
import DownloadStyledPdf from './FormatPDF/DownloadStyledPdf';
import DownloadStyledText from './FormatTxt/DownloadStyledText';
// import DownloadExcel from './FormatExcel/DownloadExcel';
import DownloadStyledExcel from './FormatExcel/DownloadStyledExcel';
import DownloadCVS from './FormatCVS/DownloadCVS';
// import DownloadPdf from './PDF/DownloadPdf';

function App() {
  return (
    <div className="App">

      {/* Working */}
      <DownloadCVS />
      <DownloadStyledExcel />
      <DownloadStyledPdf />
      <DownloadStyledText />

      {/*Testing*/}
      {/* <DownloadExcel /> */}
      {/* <DownloadPdf /> */}

    </div>
  );
}

export default App;
