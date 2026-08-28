interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, align = "center" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-[640px] text-center" : "max-w-[640px]"}>
      <p className="font-body text-sm font-bold uppercase tracking-wide text-teal">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
    </div>
  );
}
