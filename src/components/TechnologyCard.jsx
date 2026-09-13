const BADGE_COLORS = {
  Popular: "bg-sky-50 text-sky-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-600",
  "Full-Stack": "bg-violet-50 text-violet-600",
  Standard: "bg-emerald-50 text-emerald-600",
  Lightweight: "bg-sky-50 text-sky-600",
  "Top SQL": "bg-sky-50 text-sky-600",
  Cache: "bg-rose-50 text-rose-600",
  NoSQL: "bg-emerald-50 text-emerald-600",
  Ubiquitous: "bg-amber-50 text-amber-600",
  Essential: "bg-sky-50 text-sky-600",
  Robust: "bg-slate-100 text-slate-600",
  Modern: "bg-sky-50 text-sky-600",
  Containers: "bg-sky-50 text-sky-600",
};

export default function TechnologyCard({ technology, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = technology;
  const badgeClass = BADGE_COLORS[badge] || "bg-slate-100 text-slate-600";

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <img src={icon} alt={`${name} logo`} className="h-9 w-9 object-contain" loading="lazy" />
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${badgeClass}`}>
          {badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
          {category}
        </span>
        <span className="text-slate-500">{difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-slate-700">
          <span className="text-amber-400">★</span>
          {rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-xl py-2.5 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-slate-100 text-slate-400"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}