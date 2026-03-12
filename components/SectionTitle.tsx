type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
        {title}
      </h2>

      {description ? (
        <p
          className={[
            "mt-4 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg",
            center ? "mx-auto" : "",
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}