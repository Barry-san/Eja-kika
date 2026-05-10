import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

export function Input({
  registration,
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  registration?: UseFormRegisterReturn;
}) {
  return (
    <input
      {...props}
      className="px-4 py-3 lg:py-4.5 lg:px-5 bg-divider rounded-xl"
      {...registration}
    />
  );
}
