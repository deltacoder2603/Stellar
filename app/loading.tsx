"use client"; 

import React from "react";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black flex justify-center items-center z-50">
      <div className="flex gap-3">
        <div className="w-4 h-4 rounded-full bg-red-400 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-red-400 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-red-400 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
}
