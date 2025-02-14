import React from "react";
import Footer from "./footer";

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-light-background flex flex-col justify-between">
      <div>{children}</div>
      <Footer />
    </div>
  );
}
