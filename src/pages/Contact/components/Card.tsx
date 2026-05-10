import type { ReactNode } from "react";

export function ContactCard({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 p-7.5 items-center justify-center bg-secondary rounded-lg grow">
      <div className="rounded-full bg-accent-secondary p-2">
        <img src={icon} alt={title} height={25} width={25} />
      </div>
      <h3 className="font-semibold text-primary text-xl">{title}</h3>
      <p>{content}</p>
    </div>
  );
}
