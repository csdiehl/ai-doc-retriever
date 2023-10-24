import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      showIngestForm={true}
      placeholder={"I can help you find anything in a document! Ask a question"}
      emoji="🐶"
      titleText="Dana the Document Retriever"
    ></ChatWindow>
  );
}
