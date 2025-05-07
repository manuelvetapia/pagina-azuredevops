
import React from "react";

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition font-semibold shadow">
      {children}
    </button>
  );
}
