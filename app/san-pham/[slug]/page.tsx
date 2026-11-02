
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone } from "lucide-react";

import { products } from "@/data/products";
import { siteConfig } from "@/config/site";
import ProductCard from "@/components/ui/ProductCard";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return { title: "Không tìm thấy sản phẩm" };
  }

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `/san-pham/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | ${siteConfig.shortName}`,
      description: product.description,
      type: "website",
      images: [product.image || "/images/hero-rice.jpg"],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category && item.slug !== product.slug,
    )
    .slice(0, 4);

  return (
    <>
      <section className="bg-[#FAF8F3] py-5 sm:py-8">
        <div className="container-custom">
          <Link
            href="/san-pham"
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition hover:text-[#8B5E2B]"
          >
            <ArrowLeft size={17} />
            Quay lại sản phẩm
          </Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-14">
            {/* Ảnh sản phẩm */}
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-[#F8F3E9]">
              <Image
                src={product.image || "/images/hero-rice.jpg"}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Thông tin */}
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase tracking-wider text-[#A4773F]">
                {product.category}
              </p>

              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-stone-900 sm:text-4xl">
                {product.name}
              </h1>

              <p className="mt-5 text-base leading-8 text-stone-600">
                {product.description}
              </p>

              <div className="mt-7 rounded-2xl bg-[#FAF8F3] p-5 sm:p-6">
                <p className="text-sm text-stone-500">Giá sản phẩm</p>
                <p className="mt-2 text-2xl font-extrabold text-[#8B5E2B]">
                  Liên hệ báo giá
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-500">
                  Giá bán có thể tùy thuộc vào loại sản phẩm và số lượng đặt.
                  Vui lòng liên hệ cửa hàng để được tư vấn.
                </p>
              </div>

              <a
                href={`tel:${siteConfig.phones[0]}`}
                className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#8B5E2B] px-6 py-3 font-bold text-white transition hover:bg-[#70491F] sm:w-fit"
              >
                <Phone size={19} />
                Gọi hỏi giá: {siteConfig.phones[0]}
              </a>

              <p className="mt-4 text-xs leading-6 text-stone-400">
                Thông tin sản phẩm sẽ được cập nhật chi tiết theo dữ liệu
                chính thức từ cửa hàng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="section-padding bg-[#FAF8F3]">
          <div className="container-custom">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-wider text-[#A4773F]">
                Có thể bạn quan tâm
              </p>
              <h2 className="mt-2 text-2xl font-bold text-stone-900 sm:text-3xl">
                Sản phẩm cùng danh mục
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
