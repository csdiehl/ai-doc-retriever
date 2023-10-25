import { ChatWindow } from "@/components/ChatWindow";
import InfoCard from "@/components/InfoCard";

export default function AgentsPage() {
  return (
    <div>
      <InfoCard />
      <ChatWindow
        endpoint="api/chat/retrieval"
        showIngestForm={true}
        placeholder={
          "I can help you find anything in a document! Ask a question"
        }
        emoji="🕵️‍♀️"
        titleText="Document Detective"
      ></ChatWindow>
    </div>
  );
}
