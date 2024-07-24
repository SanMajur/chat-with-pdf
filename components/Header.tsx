import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between p-5 border-b">
      <Link className="text-2xl" href="/dashboard">
        Chat to <span className="text-indigo-600">PDF</span>
      </Link>
      <SignedIn>
        <div className="flex items-center space-x-2">
          <Button asChild variant="link" className="hidden md:flex">
            <Link href="/dashboard/upgrade">Pricing</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard">My Documents</Link>
          </Button>
          <Button asChild variant="outline" className="border-indigo-600">
            <Link href="/dashboard/upload">
              <FilePlus2 className="text-indigo-600" />
            </Link>
          </Button>
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}
