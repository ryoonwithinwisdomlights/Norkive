import React from "react";

export default function GeneralRecordTypePageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="w-full h-screen flex flex-row justify-between
     items-start "
    >
      {children}
    </div>
  );
}
