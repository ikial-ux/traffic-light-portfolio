import React from 'react';
import { Document, Page } from 'react-pdf';

function PdfViewer({ pdfUrl }) {
  return (
    <div className="pdf-viewer">
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default PdfViewer;
