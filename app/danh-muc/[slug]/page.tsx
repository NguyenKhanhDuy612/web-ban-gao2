import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { categories } from "@/data/categories";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return { title: "Không tìm thấy danh mục" };
  }

  return {
    title: category.name,
    description: category.description,
    alternates: {
      canonical: `/danh-muc/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(
    (product) => product.category === category.name,
  );

  return (
    <>
      <section className="bg-[#8B5E2B] px-4 py-14 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-100">
            Danh mục sản phẩm
          </p>

          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            {category.name}
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-amber-50 sm:text-base">
            {category.description}
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#FAF8F3]">
        <div className="container-custom">
          <Link
            href="/san-pham"
            className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-[#8B5E2B]"
          >
            <ArrowLeft size={17} />
            Tất cả sản phẩm
          </Link>

          {categoryProducts.length > 0 ? (
            <>
              <p className="mb-6 text-sm text-stone-500">
                Có {categoryProducts.length} sản phẩm trong danh mục này
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-2xl border border-dashed border-stone-300 bg-white px-5 py-14 text-center">
              <h2 className="font-bold text-stone-800">
                Sản phẩm đang được cập nhật
              </h2>
              <p className="mt-2 text-sm text-stone-500">
                Vui lòng liên hệ cửa hàng để được tư vấn.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}