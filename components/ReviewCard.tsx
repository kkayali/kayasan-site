type ReviewCardProps = {
  name: string;
  text: string;
  rating?: number;
};

export default function ReviewCard({
  name,
  text,
  rating = 5,
}: ReviewCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-3 text-lg text-zinc-900">{"★".repeat(rating)}</div>
      <p className="leading-7 text-zinc-600">“{text}”</p>
      <p className="mt-5 font-semibold text-zinc-900">{name}</p>
    </div>
  );
}