"use client";

import React from "react";
import { WebPDFLoader } from "langchain/document_loaders/web/pdf";

async function parsePDF(fileInput: any) {
  const blob = new Blob([fileInput], { type: "application/pdf" }); // e.g. from a file input
  const loader = new WebPDFLoader(blob, { splitPages: false });
  const docs = await loader.load();
  const content = docs[0]?.pageContent;

  if (content) {
    console.log({ content });
  }
}

const PdfUploader = () => {
  function handleFileChange(e: any) {
    let selectedFile = e.target.files[0];
    console.log(selectedFile);
    if (selectedFile) {
      parsePDF(selectedFile);
    }
  }

  return (
    <form>
      <input
        onChange={handleFileChange}
        className="grow mr-8 p-4 rounded"
        type="file"
      ></input>
    </form>
  );
};

export default PdfUploader;
