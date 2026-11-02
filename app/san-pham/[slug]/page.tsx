
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone } from "lucide-react";

import { products } from "@/data/products";
import { siteConfig } from "@/config/site";
import ProductCard from "@/components/ui/ProductCard";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// Tạo trước các đường dẫn sản phẩm khi build
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// SEO cho từng sản phẩm
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm",
    };
  }

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `${siteConfig.url}/san-pham/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | ${siteConfig.shortName}`,
      description: product.description,
      images: [product.image || "/images/hero-rice.jpg"],
    },
  };
}

// Nội dung chi tiết sản phẩm
async function ProductDetailContent({ params }: Props) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.slug !== product.slug,
    )
    .slice(0, 4);

  return (
    <>
      {/* PRODUCT DETAIL */}
      <section className="section-padding bg-[#FAF8F3]">
        <div className="container-custom">
          {/* Back button */}
          <Link
            href="/san-pham"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition hover:text-[#8B5E2B]"
          >
            <ArrowLeft size={18} />
            Quay lại sản phẩm
          </Link>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-14">
            {/* Product image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-[#F8F3E9] shadow-sm">
              <Image
                src={product.image || "/images/hero-rice.jpg"}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Product information */}
            <div className="flex flex-col">
              <span className="mb-4 w-fit rounded-full bg-[#EDE2D0] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#8B5E2B]">
                {product.category}
              </span>

              <h1 className="text-3xl font-extrabold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
                {product.name}
              </h1>

              <div className="my-6 h-1 w-16 rounded-full bg-[#C49A5A]" />

              <p className="text-base leading-8 text-stone-600 sm:text-lg">
                {product.description}
              </p>

              <div className="mt-8 rounded-2xl border border-[#E9DFCF] bg-white p-5 sm:p-6">
                <h2 className="text-lg font-bold text-stone-900">
                  Bạn đang quan tâm sản phẩm này?
                </h2>

                <p className="mt-2 text-sm leading-6 text-stone-500">
                  Liên hệ trực tiếp với đại lý để được tư vấn thêm về sản
                  phẩm và nhu cầu sử dụng.
                </p>

                <a
                  href={`tel:${siteConfig.phones[0]}`}
                  className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#8B5E2B] px-5 py-3 font-bold text-white transition hover:bg-[#70491F]"
                >
                  <Phone size={19} />
                  Gọi tư vấn: {siteConfig.phones[0]}
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-stone-500">
                <span className="rounded-lg bg-white px-3 py-2">
                  Đại lý gạo Hiếu Út
                </span>
                <span className="rounded-lg bg-white px-3 py-2">
                  Tuy Hòa
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#8B5E2B]">
                  Khám phá thêm
                </p>

                <h2 className="text-2xl font-extrabold text-stone-900 sm:text-3xl">
                  Sản phẩm liên quan
                </h2>
              </div>

              <Link
                href="/san-pham"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#8B5E2B] transition hover:gap-3"
              >
                Xem tất cả
                <ArrowLeft size={17} className="rotate-180" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

// Loading fallback
function ProductLoading() {
  return (
    <div className="container-custom flex min-h-[400px] items-center justify-center">
      <p className="text-sm font-medium text-stone-500">
        Đang tải thông tin sản phẩm...
      </p>
    </div>
  );
}

// Page chính
export default function ProductDetailPage({ params }: Props) {
  return (
    <Suspense fallback={<ProductLoading />}>
      <ProductDetailContent params={params} />
    </Suspense>
  );
}
