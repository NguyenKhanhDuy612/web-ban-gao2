import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function FeaturedProducts() {
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 4);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#A4773F]">
              Sản phẩm tiêu biểu
            </p>

            <h2 className="mt-2 text-2xl font-bold text-stone-900 sm:text-3xl lg:text-4xl">
              Sản phẩm nổi bật
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-stone-500 sm:text-base">
              Tham khảo các sản phẩm tại Đại lý Gạo – Bánh tráng Hiếu Út.
            </p>
          </div>

          <Link
            href="/san-pham"
            className="inline-flex min-h-11 w-fit items-center gap-2 font-semibold text-[#8B5E2B] hover:text-[#70491F]"
          >
            Xem tất cả
            <ArrowRight size={18} />
          </Link>
        </div>

        {featuredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="rounded-xl bg-[#FAF8F3] p-6 text-center text-sm text-stone-500">
            Sản phẩm đang được cập nhật.
          </p>
        )}
      </div>
    </section>
  );
}