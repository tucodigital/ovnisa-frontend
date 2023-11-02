"use client";

import type { ChangeEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Rubros = ({
  selected,
  rubros,
}: {
  selected: string | null;
  rubros: any;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    // objeto de URL para leer y escribir
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    // actualizar
    const value = event.target.value.trim();

    if (!value) {
      current.delete("rubro");
    } else {
      current.set("rubro", event.target.value);
    }

    const search = current.toString();
    // tambien const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  return (
    <div>
      <label htmlFor="rubros" className="text-xs font-bold">
        Rubros
      </label>
      <select
        id="rubros"
        className="px-4 py-2 rounded border border-blue-600 text-blue-600 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        value={selected ? selected : ""}
        onChange={onSelect}
      >
        <option value=""></option>
        {rubros && rubros.length > 0
          ? rubros.map((rubro: any) => (
              <option key={rubro.id} value={rubro.attributes.slug}>
                {rubro.attributes.nombre}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};
