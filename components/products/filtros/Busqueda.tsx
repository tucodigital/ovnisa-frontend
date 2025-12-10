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
      <div className="mb-3 relative">
        <input
          className="px-4 py-2 rounded-lg w-full bg-white border-2 border-ov-primary text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          type="text"
          name="search"
          placeholder="Buscar..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit" className="absolute top-2 right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-6 h-6 text-ov-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
