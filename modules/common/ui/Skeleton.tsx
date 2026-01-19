import React, { memo } from "react";
import { cn } from "@/lib/utils/utils";

const Skeleton = memo(function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/5", className)}
      {...props}
    />
  );
});

export { Skeleton };
