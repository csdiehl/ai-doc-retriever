"use client";

import type { Message } from "ai/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

export function ChatMessageBubble(props: {
  message: Message;
  aiEmoji?: string;
  sources: any[];
}) {
  const [copied, setCopied] = useState(false);
  const colorClassName =
    props.message.role === "user" ? "bg-sky-600" : "bg-[#25252d] text-white";
  const alignmentClassName =
    props.message.role === "user" ? "ml-auto" : "mr-auto";
  const prefix = props.message.role === "user" ? "🧑" : props.aiEmoji;
  return (
    <div
      className={`${alignmentClassName} ${colorClassName} rounded px-4 py-2 max-w-[80%] mb-8 flex`}
    >
      <div className="mr-2">{prefix}</div>
      <div className="whitespace-pre-wrap flex flex-col">
        <span>{props.message.content}</span>
        {props.message.role === "assistant" && (
          <CopyToClipboard
            text={`${props.message.content}\n\n Found on pages: ${props.sources
              .map((source) => source.metadata?.loc?.pageNumber)
              .join(",")}`}
            onCopy={() => setCopied(true)}
          >
            {/*@ts-ignore*/}
            <button className="border-slate-700 rounded w-[100px] bg-slate-600">
              {copied ? "Copied!" : "Copy this Answer"}
            </button>
          </CopyToClipboard>
        )}
        {props.sources && props.sources.length ? (
          <>
            <code className="mt-4 mr-auto bg-slate-600 px-2 py-1 rounded">
              <h2>🔍 Sources:</h2>
            </code>
            <code className="mt-1 mr-2 bg-slate-600 px-2 py-1 rounded text-xs">
              {props.sources?.map((source, i) => (
                <div className="mt-2" key={"source:" + i}>
                  {source.metadata?.loc?.pageNumber !== undefined ? (
                    <div>
                      {i + 1}.Found on{" "}
                      <strong>page {source.metadata?.loc?.pageNumber}:</strong>{" "}
                      &quot;
                      {source.pageContent}&quot;
                      <br />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </code>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
