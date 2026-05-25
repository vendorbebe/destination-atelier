import { useState } from "react";
import { Bed, Plane, Globe, Car, Ticket, CarTaxiFront } from "lucide-react";

const SERVICES = [
  { id: "stays", label: "Pobyty", icon: Bed },
  { id: "flights", label: "Loty", icon: Plane },
  { id: "flight-hotel", label: "Lot + Hotel", icon: Globe },
  { id: "cars", label: "Wynajem samochodu", icon: Car },
  { id: "attractions", label: "Atrakcje", icon: Ticket },
  { id: "taxi", label: "Taksówki lotniskowe", icon: CarTaxiFront },
];

export function ServiceBar() {
  const [active, setActive] = useState("stays");

  return (
    <div className="w-full bg-[#003b95]">
      <div className="mx-auto max-w-7xl px-4 py-3 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto sm:gap-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-white transition-all ${
                  isActive
                    ? "border-white"
                    : "border-transparent hover:border-white/40 hover:bg-white/10"
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
