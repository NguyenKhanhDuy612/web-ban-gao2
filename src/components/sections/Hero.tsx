import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Leaf } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-stone-900 sm:min-h-[620px] lg:min-h-[700px]">
      <div
        className="hero-background absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-rice.jpg')",
        }}
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

      <div className="container-custom w-full py-20 sm:py-24 lg:py-28">
        <div className="hero-content max-w-3xl text-white">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide backdrop-blur-sm sm:text-sm">
            <Leaf size={16} />
            GẠO · NẾP · TẤM · BÁNH TRÁNG
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.2] tracking-tight sm:text-5xl lg:text-6xl">
            Chọn gạo ngon,
            <span className="mt-2 block text-amber-300">
              vun đắp bữa cơm nhà
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-8 text-white/85 sm:text-base lg:text-lg">
            Đại lý Gạo – Bánh tráng Hiếu Út cung cấp các sản phẩm gạo,
            nếp, tấm và bánh tráng, phục vụ nhu cầu gia đình và kinh doanh
            tại Tuy Hòa.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/san-pham"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-3 font-bold text-stone-950 transition hover:bg-amber-400"
            >
              Khám phá sản phẩm
              <ArrowRight size={18} />
            </Link>

            <a
              href={`tel:${siteConfig.phones[0]}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/70 px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-stone-900"
            >
              <Phone size={18} />
              Gọi tư vấn
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/85 sm:text-sm">
            <span className="flex items-center gap-2">
              <ShieldCheck size={17} className="text-amber-300" />
              Tư vấn tận tình
            </span>
            <span className="flex items-center gap-2">
              <Leaf size={17} className="text-amber-300" />
              Đa dạng sản phẩm
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}