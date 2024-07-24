"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { PlusCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PlaceHolderDocuments() {
  const route = useRouter();
  const handleClick = () => {
    // check if user is free tier and if file limit, push to upgrade page
    route.push("/dashboard/upload");
  };
  return (
    <Button
      onClick={handleClick}
      className="flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400"
    >
      <PlusCircleIcon className="h-16 w-16" />
      <p>Add a document</p>
    </Button>
  );
}
