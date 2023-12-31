import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 mt-10y px-4 text-center py-20 scroll-mt-  text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Goodluck. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Hook Form.
      </p>
    </footer>
  );
}