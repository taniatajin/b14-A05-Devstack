export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length;

  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <h3 className="text-base font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-500">{count} Technology Selected</p>

      {count === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-slate-200 py-8 text-center">
          <p className="text-sm text-slate-400">
            No technologies added yet. Pick a few to build your stack.
          </p>
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          {stack.map((tech) => (
            <div key={tech.id} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
              <img src={tech.icon} alt={`${tech.name} logo`} className="h-8 w-8 object-contain" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">{tech.name}</p>
                <p className="text-xs text-slate-500">{tech.category}</p>
              </div>
              <button
                type="button"
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name} from stack`}
                className="rounded-full p-1 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {count > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-xl border border-rose-200 py-2.5 text-sm font-semibold text-rose-500 transition hover:bg-rose-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}