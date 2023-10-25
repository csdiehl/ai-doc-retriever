"use client";

import React, { useEffect, useState } from "react";
import { string } from "zod";

interface DocumentData {
  name: string;
  created_at: string;
  pages: number;
}

const InfoCard = () => {
  const [documentList, setDocumentList] = useState<DocumentData | null>(null);
  useEffect(() => {
    const fetchAvailableDocuments = async () => {
      const res = await fetch("/api/documents", { method: "GET" });
      const data = await res.json();

      setDocumentList(data);
    };

    fetchAvailableDocuments();
  }, []);

  return (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">Document Retriever</h1>
      <h2>Available Documents</h2>
      <ul>
        {documentList &&
          documentList.map((d, i) => {
            return (
              <li key={d.name}>
                <p>{`${i + 1}. ${d.name}: ${d.pages} Pages`}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default InfoCard;
