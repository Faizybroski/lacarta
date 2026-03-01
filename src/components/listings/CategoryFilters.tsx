import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";

const FILTERS = [
  "All",
  "Sports",
  "Tours",
  "Well Being",
  "Culture",
  "Events",
  "Nautical",
  "Nightlife",
];

export default function CategoryFilters({
  activeFilter,
  setActiveFilter,
  onClear,
}) {
  return (
    <div className="mb-2 sm:mt-0 mt-12 flex flex-wrap items-center justify-between gap-2">
      {/* LEFT FILTER TABS */}
      <div className="sm:flex sm:flex-wrap  hidden">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`font-antigua rounded-full px-7 py-1 text-sm font-bold transition
              ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-gold  to-gold-light text-white"
                  : "text-black hover:bg-gray-100"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* RIGHT ACTION BUTTONS */}
      <div className="flex items-center gap-2">
        <Button
          variant="destructive"
          onClick={onClear}
          className="rounded-full px-3 font-bold  bg-gradient-to-r from-red to-red-light font-antigua"
        >
          Clear Filters
        </Button>

        <Button className="rounded-full bg-gradient-to-r text-white font-bold font-antigua from-green to-green-light px-4 hover:brightness-110">
          <ListFilter size={30} /> Filters
        </Button>
      </div>
    </div>
  );
}
