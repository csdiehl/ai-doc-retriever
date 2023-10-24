import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">Document Retriever</h1>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      placeholder={
        'I\'ve got a nose for finding the right documents! Ask, "What is a document loader?"'
      }
      emoji="🐶"
      titleText="Dana the Document-Retrieving Dog"
    ></ChatWindow>
  );
}
