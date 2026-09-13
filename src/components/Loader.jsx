export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500" />
      <p className="text-sm text-slate-500">Loading technologies…</p>
    </div>
  );
}