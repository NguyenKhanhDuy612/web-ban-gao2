import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, Store, Truck } from "lucide-react";

const highlights = [
  "Đa dạng các loại gạo, nếp, tấm và bánh tráng",
  "Tư vấn sản phẩm phù hợp với nhu cầu sử dụng",
  "Thông tin sản phẩm rõ ràng",
  "Hai địa điểm thuận tiện tại Tuy Hòa",
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-[#FAF8F3]">
      <div className="container-custom grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-200 sm:rounded-3xl">
            <Image
                src="/images/about-rice.jpg"
                alt="Các sản phẩm tại Đại lý gạo Bánh tráng Hiếu Út"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
            />
            </div>

          <div className="absolute -bottom-5 -right-3 rounded-2xl bg-[#8B5E2B] p-5 text-white shadow-xl sm:-right-5">
            <p className="text-sm">Đại lý</p>
            <p className="text-2xl font-bold">Hiếu Út</p>
          </div>
        </div>

        <div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#A4773F]">
            Về chúng tôi
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-stone-900 md:text-4xl">
            Chọn thực phẩm chất lượng cho mỗi bữa cơm gia đình
          </h2>

          <p className="mt-5 leading-8 text-stone-600">
            Đại lý Gạo – Bánh tráng Hiếu Út chuyên cung cấp các sản phẩm
            gạo, nếp, tấm và bánh tráng, phục vụ nhu cầu của gia đình,
            quán ăn và khách hàng kinh doanh tại khu vực Tuy Hòa.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2
                  className="mt-1 shrink-0 text-[#A4773F]"
                  size={20}
                />
                <span className="text-sm leading-6 text-stone-700">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/gioi-thieu"
            className="mt-8 inline-flex rounded-full bg-[#8B5E2B] px-7 py-3 font-semibold text-white transition hover:bg-[#70491F]"
          >
            Tìm hiểu thêm
          </Link>
        </div>
      </div>
    </section>
  );
}