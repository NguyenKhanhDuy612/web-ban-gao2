
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowUpRight, Store } from "lucide-react";

import { branches } from "@/data/branches";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Hệ thống cửa hàng",
  description:
    "Thông tin địa chỉ và liên hệ các chi nhánh Đại lý gạo – Bánh tráng Hiếu Út tại Tuy Hòa.",
  alternates: {
    canonical: "/cua-hang",
  },
};

export default function StorePage() {
  return (
    <>
      <section className="bg-[#FAF8F3] py-16 sm:py-20">
        <div className="container-custom">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A4773F]">
            Hệ thống cửa hàng
          </p>

          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Ghé thăm cửa hàng Hiếu Út
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
            Hiếu Út cung cấp các mặt hàng gạo, nếp, tấm và bánh tráng.
            Bạn có thể liên hệ trước hoặc đến trực tiếp các địa chỉ bên dưới.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-wider text-[#A4773F]">
              Địa chỉ liên hệ
            </p>
            <h2 className="mt-2 text-2xl font-bold text-stone-900 sm:text-3xl">
              Các chi nhánh của chúng tôi
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {branches.map((branch) => (
              <article
                key={branch.id}
                className="rounded-3xl border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4EBDD] text-[#8B5E2B]">
                  <Store size={27} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-stone-900">
                  {branch.name}
                </h3>

                <div className="mt-5 flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-[#A4773F]"
                  />
                  <p className="text-sm leading-7 text-stone-600">
                    {branch.address}
                  </p>
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <Phone size={19} className="shrink-0 text-[#A4773F]" />
                  <a
                    href={`tel:${branch.phone}`}
                    className="text-sm font-semibold text-stone-700 transition hover:text-[#8B5E2B]"
                  >
                    {branch.phone}
                  </a>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`tel:${branch.phone}`}
                    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#8B5E2B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#70491F]"
                  >
                    <Phone size={17} />
                    Gọi cửa hàng
                  </a>

                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-[#8B5E2B] px-5 py-3 text-sm font-bold text-[#8B5E2B] transition hover:bg-[#FAF8F3]"
                  >
                    <MapPin size={17} />
                    Xem bản đồ
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#FAF8F3]">
        <div className="container-custom">
          <div className="rounded-3xl bg-[#342719] px-6 py-10 text-center sm:px-10 sm:py-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#D8B77F]">
              Đại lý gạo – Bánh tráng Hiếu Út
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Bạn cần tư vấn sản phẩm?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-stone-300">
              Liên hệ với cửa hàng để hỏi thông tin sản phẩm và giá bán.
            </p>

            <a
              href={`tel:${siteConfig.phones[0]}`}
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D8B77F] px-7 py-3 font-bold text-[#342719] transition hover:bg-white"
            >
              <Phone size={18} />
              {siteConfig.phones[0]}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
