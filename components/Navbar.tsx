"use client";

import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="mb-4">
      <a
        className={`mr-4 ${pathname === "/" ? "text-white border-b" : ""}`}
        href="/"
      >
        🐶 Retrieval
      </a>
      <a
        className={`mr-4 ${
          pathname === "/retrieval_agents" ? "text-white border-b" : ""
        }`}
        href="/retrieval_agents"
      >
        🤖 Retrieval Agents
      </a>
    </nav>
  );
}
