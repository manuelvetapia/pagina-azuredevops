
import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-50 rounded-2xl shadow-md transition transform hover:scale-105 hover:shadow-xl border border-blue-200">
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
