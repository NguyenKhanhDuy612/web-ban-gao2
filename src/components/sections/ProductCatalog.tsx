"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [keyword, setKeyword] = useState("");

  const filteredProducts = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLowerCase();

    return products.filter((product) => {
      const matchCategory =
        selectedCategory === "Tất cả" ||
        product.category === selectedCategory;

      const matchKeyword =
        !normalizedKeyword ||
        product.name.toLowerCase().includes(normalizedKeyword) ||
        product.description.toLowerCase().includes(normalizedKeyword);

      return matchCategory && matchKeyword;
    });
  }, [selectedCategory, keyword]);

  const filters = ["Tất cả", ...categories.map((category) => category.name)];

  return (
    <div>
      {/* Tìm kiếm */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-md">
          <Search
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
          />

          <input
            type="search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="Tìm tên sản phẩm..."
            aria-label="Tìm sản phẩm"
            className="h-12 w-full rounded-xl border border-stone-200 bg-white pl-11 pr-11 text-sm outline-none transition focus:border-[#A4773F] focus:ring-2 focus:ring-[#A4773F]/15"
          />

          {keyword && (
            <button
              type="button"
              onClick={() => setKeyword("")}
              aria-label="Xóa từ khóa tìm kiếm"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-stone-400 hover:bg-stone-100"
            >
              <X size={17} />
            </button>
          )}
        </div>

        <p className="text-sm text-stone-500">
          Tìm thấy{" "}
          <strong className="text-stone-900">
            {filteredProducts.length}
          </strong>{" "}
          sản phẩm
        </p>
      </div>

      {/* Bộ lọc danh mục */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-stone-700">
          <SlidersHorizontal size={17} />
          Danh mục sản phẩm
        </div>

        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setSelectedCategory(filter)}
              aria-pressed={selectedCategory === filter}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                selectedCategory === filter
                  ? "border-[#8B5E2B] bg-[#8B5E2B] text-white"
                  : "border-stone-200 bg-white text-stone-600 hover:border-[#8B5E2B] hover:text-[#8B5E2B]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Danh sách */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-stone-300 bg-[#FAF8F3] px-5 py-14 text-center">
          <Search className="mx-auto text-stone-400" size={32} />
          <h3 className="mt-4 font-bold text-stone-800">
            Không tìm thấy sản phẩm
          </h3>
          <p className="mt-2 text-sm text-stone-500">
            Hãy thử từ khóa khác hoặc chọn danh mục khác.
          </p>
          <button
            type="button"
            onClick={() => {
              setKeyword("");
              setSelectedCategory("Tất cả");
            }}
            className="mt-5 rounded-full bg-[#8B5E2B] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#70491F]"
          >
            Xóa bộ lọc
          </button>
        </div>
      )}
    </div>
  );
}