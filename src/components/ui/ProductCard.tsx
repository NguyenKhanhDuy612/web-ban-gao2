
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group min-w-0 overflow-hidden rounded-2xl border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={`/san-pham/${product.slug}`}
        className="block"
        aria-label={`Xem chi tiết ${product.name}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#F8F3E9]">
          <Image
            src={product.image || "/images/hero-rice.jpg"}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          {product.featured && (
            <span className="absolute left-3 top-3 rounded-full bg-[#8B5E2B] px-3 py-1 text-[11px] font-semibold text-white">
              Nổi bật
            </span>
          )}
        </div>

        <div className="p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#A4773F]">
            {product.category}
          </p>

          <h3 className="mt-2 line-clamp-2 min-h-[3.25rem] text-base font-bold leading-6 text-stone-900 sm:text-lg">
            {product.name}
          </h3>

          <p className="mt-2 line-clamp-2 min-h-12 text-sm leading-6 text-stone-500">
            {product.description}
          </p>

          <div className="mt-4 flex items-center justify-between gap-2 border-t border-stone-100 pt-4">
            <span className="text-sm font-bold text-[#8B5E2B]">
              Liên hệ báo giá
            </span>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F4EBDD] text-[#8B5E2B] transition group-hover:bg-[#8B5E2B] group-hover:text-white">
              <ArrowUpRight size={18} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
