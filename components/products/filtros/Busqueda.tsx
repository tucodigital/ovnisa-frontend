"use client";
import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Busqueda = () => {
  const [searchInput, setSearchInput] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = (e: any) => {
    e.preventDefault();
    // objeto de URL para leer y escribir
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    // actualizar
    const value = searchInput.trim();

    if (!value) {
      current.delete("s");
    } else {
      current.set("s", searchInput);
    }

    const search = current.toString();
    // tambien const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <div className="flex gap-4">
        <input
          className="px-4 py-2 border border-gray-400 rounded"
          type="text"
          name="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          type="submit"
          className={`cursor-pointer px-5 py-2 rounded-md text-gray-200 bg-blue-500 hover:bg-blue-600 hover:text-white font-bold transition duration-300 flex items-center`}
        >
          Buscar
        </button>
      </div>
    </form>
  );
};
