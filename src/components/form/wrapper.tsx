import type { ReactNode } from "react";

export function FormGroup({
  children,
  error,
  className,
}: {
  className?: string;
  children: ReactNode;
  error?: string;
}) {
  return (
    <div className={className || ""}>
      {children}
      {error ? <p className={`text-red-500`}>{error}</p> : null}
    </div>
  );
}
