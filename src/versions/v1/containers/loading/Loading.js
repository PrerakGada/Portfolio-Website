import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-[var(--color-icon-bg)] border-t-transparent"></div>
    </div>
  );
}
