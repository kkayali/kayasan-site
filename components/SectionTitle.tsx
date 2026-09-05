// Dosya: components/SectionTitle.tsx

import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  size?: "section" | "display";
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
  size = "section",
  tone = "dark",
  className = "",
}: SectionTitleProps) {
  const Heading = as;

  return (
    <div
      className={`${styles.root} ${styles[align]} ${styles[tone]} ${className}`}
    >
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <Heading className={`${styles.title} ${styles[size]}`}>{title}</Heading>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
}
