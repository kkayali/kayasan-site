// Dosya: components/ReviewCard.tsx

import styles from "./ReviewCard.module.css";

type ReviewCardProps = {
  name: string;
  text: string;
  rating?: number;
};

export default function ReviewCard({ name, text, rating = 5 }: ReviewCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.stars} aria-label={`${rating} yıldız`}>
        {"★".repeat(rating)}
      </div>
      <blockquote>“{text}”</blockquote>
      <p className={styles.name}>{name}</p>
    </article>
  );
}
