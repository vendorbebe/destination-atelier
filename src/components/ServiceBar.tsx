import { useState } from "react";
import { Bed, Plane, PlaneTakeoff, Car, Ticket, CarTaxiFront } from "lucide-react";

const SERVICES = [
  { id: "stays", label: "Pobyty", icon: Bed },
  { id: "flights", label: "Loty", icon: Plane },
  { id: "flight-hotel", label: "Lot + Hotel", icon: PlaneTakeoff },
  { id: "cars", label: "Wynajem samochodu", icon: Car },
  { id: "attractions", label: "Atrakcje", icon: Ticket },
  { id: "taxi", label: "Taksówki lotniskowe", icon: CarTaxiFront },
];

export function ServiceBar() {
  const [active, setActive] = useState("stays");

  return (
    <div className="w-full bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-3 lg:px-8">
        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "border-white text-white"
                    : "border-transparent text-white/85 hover:border-white/30 hover:bg-white/5"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="whitespace-nowrap">{s.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
