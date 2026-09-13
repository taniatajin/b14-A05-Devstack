import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import Loader from "./Loader";

export default function TechnologiesSection() {
  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load technologies");
        return res.json();
      })
      .then((data) => setTechnologies(data))
      .catch(() => setError("Couldn't load technologies. Please refresh."))
      .finally(() => setIsLoading(false));
  }, []);

  function handleAdd(tech) {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  }

  function handleRemove(id) {
    const tech = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack.`);
  }

  function handleRemoveAll() {
    setStack([]);
    toast.info("Your stack has been cleared.");
  }

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Explore the <span className="brand-gradient-text">Technologies</span>
      </h2>
      <p className="mt-2 text-slate-500">Pick one technology per category to build your ideal stack.</p>

      {isLoading && <Loader />}

      {!isLoading && error && (
        <p className="mt-10 rounded-xl bg-rose-50 p-4 text-sm text-rose-600">{error}</p>
      )}

      {!isLoading && !error && (
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                technology={tech}
                isAdded={stack.some((item) => item.id === tech.id)}
                onAdd={handleAdd}
              />
            ))}
          </div>

          <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
        </div>
      )}
    </section>
  );
}