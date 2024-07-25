import Header from "@/components/Header";
import { ClerkLoaded } from "@clerk/nextjs";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkLoaded>
      <div className="flex-1 flex flex-col h-screen dark:bg-gray-800">
        <Header />
        <main className="flex-1 overflow-y-auto"> {children}</main>
      </div>
    </ClerkLoaded>
  );
}
