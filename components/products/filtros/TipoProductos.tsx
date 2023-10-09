"use client";

import type { ChangeEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const TipoProductos = ({
  selected,
  tipoProductos,
}: {
  selected: string | null;
  tipoProductos: any;
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
      current.delete("tipoProducto");
    } else {
      current.set("tipoProducto", event.target.value);
    }

    const search = current.toString();
    // tambien const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  return (
    <div>
      <label className="text-xs">Tipo de Productos</label>
      <select
        className="px-4 py-2 rounded border border-gray-400 w-full"
        value={selected ? selected : ""}
        onChange={onSelect}
      >
        <option value=""></option>
        {tipoProductos && tipoProductos.length > 0
          ? tipoProductos.map((tipo:any) => (
              <option key={tipo.id} value={tipo.attributes.slug}>
                {tipo.attributes.nombre}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};
