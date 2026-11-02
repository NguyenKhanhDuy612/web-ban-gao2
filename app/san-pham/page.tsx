import type { Metadata } from "next";
import ProductCatalog from "@/components/sections/ProductCatalog";

export const metadata: Metadata = {
  title: "Danh sách sản phẩm",
  description:
    "Khám phá các loại gạo, nếp, tấm và bánh tráng tại Đại lý Gạo – Bánh tráng Hiếu Út.",
  alternates: {
    canonical: "/san-pham",
  },
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-[#8B5E2B] px-4 py-14 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-100 sm:text-sm">
            Sản phẩm Hiếu Út
          </p>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Khám phá sản phẩm
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-amber-50 sm:text-base">
            Các sản phẩm gạo, nếp, tấm và bánh tráng phục vụ nhu cầu gia đình
            và kinh doanh.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#FAF8F3]">
        <div className="container-custom">
          <ProductCatalog />
        </div>
      </section>
    </>
  );
}