
import Link from "next/link";
import {
  Wheat,
  Sprout,
  CookingPot,
  Utensils,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    name: "Các loại gạo",
    description: "Gạo thơm, gạo dẻo và nhiều lựa chọn",
    slug: "gao",
    icon: Wheat,
    number: "01",
  },
  {
    name: "Nếp",
    description: "Phù hợp nấu xôi và chế biến món ăn",
    slug: "nep",
    icon: Sprout,
    number: "02",
  },
  {
    name: "Tấm",
    description: "Phục vụ gia đình và kinh doanh",
    slug: "tam",
    icon: CookingPot,
    number: "03",
  },
  {
    name: "Bánh tráng",
    description: "Đa dạng sản phẩm bánh tráng",
    slug: "banh-trang",
    icon: Utensils,
    number: "04",
  },
];

export default function CategorySection() {
  return (
    <section className="bg-[#FAF8F3] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
              Danh mục sản phẩm
            </p>
            <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-5xl">
              Lựa chọn theo nhu cầu
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-stone-500">
              Khám phá các dòng sản phẩm tại Đại lý gạo – Bánh tráng Hiếu Út.
            </p>
          </div>

          <Link
            href="/san-pham"
            className="inline-flex items-center gap-2 font-semibold text-amber-800 transition hover:gap-3"
          >
            Xem tất cả sản phẩm <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.slug}
                href={`/danh-muc/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-800 transition duration-300 group-hover:bg-amber-700 group-hover:text-white">
                    <Icon size={28} strokeWidth={1.6} />
                  </div>
                  <span className="text-sm font-medium text-stone-300">
                    {category.number}
                  </span>
                </div>

                <h3 className="mt-9 text-xl font-bold text-stone-900">
                  {category.name}
                </h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-stone-500">
                  {category.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-5 text-sm font-semibold text-amber-800">
                  Khám phá
                  <ArrowUpRight
                    size={19}
                    className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-amber-50 opacity-0 transition duration-500 group-hover:opacity-100" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
