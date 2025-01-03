"use client";

import { useEffect, useState } from "react";
import { Toaster } from "sonner";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  // none of the modals are gonna be rendered unless we are fully on the client side.
  if (!isMounted) return null;

  return (
    <Toaster position="bottom-right" style={{ border: "1px solid black" }} />
  );
};
