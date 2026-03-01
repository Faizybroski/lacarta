import { Button } from "@/components/ui/button";
import { ListFilter} from 'lucide-react'

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
    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
      {/* LEFT FILTER TABS */}
      <div className="flex flex-wrap gap-1">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`font-serif rounded-full px-7 py-1 text-sm font-bold transition
              ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-[#E6B65C] via-[#D4A74A] to-[#B8902F] text-white"
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
          className="rounded-full px-3 font-bold  bg-gradient-to-r from-[#C62828] via-[#B71C1C] to-[#8E0000]"
        >
          Clear Filters
        </Button>

        <Button className="rounded-full bg-gradient-to-r text-white font-bold from-[#3BCF8E] via-[#2EB872] to-[#1E9E5A] px-4 hover:brightness-110">
          <ListFilter size={30}/> Filters
        </Button>
      </div>
    </div>
  );
}
