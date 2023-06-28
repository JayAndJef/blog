"use client"; // Error components must be Client Components

import Link from "next/link";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex-col">
      <h2 className="h-screen flex justify-center items-center text-5xl">
        <Link href={"/"}>Blog page not found!</Link>
      </h2>
    </div>
  );
}
