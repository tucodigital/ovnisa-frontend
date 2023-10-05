"use client";

import React, { useState, useEffect } from "react";
import { fetchAPI } from "../../lib/api";

export default function Productos() {
  const [searchWord, setSearchWord] = useState("");
  const [selectedCat, setSelectedCat] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getProductos();
  }, [searchWord]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const catRes = await fetchAPI("/categorias", {
        populate: {
          tipos_de_productos: "*",
        },
      });
      console.log(catRes);
    } catch (e: any) {
      console.error(e.response);
    }
  };

  const getProductos = async () => {
    try {
      if (searchWord) {
        const productRes = await fetchAPI("/productos", {
          filters: {
            $or: [
              {
                nombre: {
                  $contains: searchWord,
                },
              },
              {
                descripcion: {
                  $contains: searchWord,
                },
              },
            ],
            $and: [
              {
                categorias: {
                  $or: [
                    {
                      slug: {
                        $contains: selectedCat,
                      },
                    },
                  ],
                },
              },
            ],
          },
          pagination: {
            page: 1,
            pageSize: 10,
          },
          //sort: [`createdAt:${orderFecha}`, `title:${orderAlfabetico}`],
          populate: {
            imagen_principal: "*",
            categorias: "*",
          },
        });
        console.log(productRes);
      } else {
        const productRes = await fetchAPI("/productos", {
          //sort: [`createdAt:${orderFecha}`, `title:${orderAlfabetico}`],
          filters: {
            categorias: {
              $or: [
                {
                  slug: {
                    $contains: selectedCat,
                  },
                },
              ],
            },
          },
          pagination: {
            page: 1,
            pageSize: 10,
          },
          populate: {
            imagen_principal: "*",
            categorias: "*",
          },
        });
        console.log(productRes);
      }
    } catch (e: any) {
      console.error(e.response);
    }
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearchWord(searchInput);
    //setCurrentPage(1);
  };

  return (
    <div className="mt-16">
      <div className="PageMainContainer mx-auto px-4 xl:px-16 py-6">
        <div className="mb-4">
          <h1 className="font-bold text-black text-2xl xl:text-4xl lg:mx-auto">
            Carreras
          </h1>
        </div>
        <div className="block xl:flex xl:justify-between">
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
                className={`cursor-pointer px-5 py-2 rounded-md text-gray-200 bg-cm-primary hover:bg-cm-primaryLight hover:text-white font-bold transition duration-300 flex items-center`}
              >
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="PageMainContainer mx-auto px-4 xl:px-16 min-h-screen relative py-16"></div>
      </div>
    </div>
  );
}
