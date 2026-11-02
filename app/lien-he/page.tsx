
import type { Metadata } from "next";
import { MapPin, Phone, MessageCircle, Store } from "lucide-react";

import { branches } from "@/data/branches";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Liên hệ Đại lý gạo – Bánh tráng Hiếu Út để được tư vấn về các sản phẩm gạo, nếp, tấm và bánh tráng.",
  alternates: {
    canonical: "/lien-he",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#FAF8F3] py-16 sm:py-20">
        <div className="container-custom">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A4773F]">
            Liên hệ với chúng tôi
          </p>

          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Hiếu Út luôn sẵn sàng hỗ trợ bạn
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
            Bạn muốn tìm hiểu về các loại gạo, nếp, tấm hoặc bánh tráng?
            Hãy liên hệ trực tiếp với cửa hàng để được tư vấn.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {siteConfig.phones.map((phone, index) => (
              <article
                key={phone}
                className="rounded-3xl border border-stone-200 p-6 sm:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4EBDD] text-[#8B5E2B]">
                  <Phone size={27} />
                </div>

                <h2 className="mt-5 text-xl font-bold text-stone-900">
                  Số điện thoại {index + 1}
                </h2>

                <a
                  href={`tel:${phone}`}
                  className="mt-3 block text-2xl font-extrabold text-[#8B5E2B] transition hover:text-[#70491F]"
                >
                  {phone}
                </a>

                <p className="mt-3 text-sm leading-7 text-stone-500">
                  Nhấn vào số điện thoại để gọi trực tiếp cho cửa hàng.
                </p>

                <a
                  href={`tel:${phone}`}
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#8B5E2B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#70491F]"
                >
                  <Phone size={17} />
                  Gọi ngay
                </a>
              </article>
            ))}

            <article className="rounded-3xl border border-stone-200 p-6 sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4EBDD] text-[#8B5E2B]">
                <MessageCircle size={27} />
              </div>

              <h2 className="mt-5 text-xl font-bold text-stone-900">
                Nhắn tin qua Zalo
              </h2>

              <p className="mt-3 text-sm leading-7 text-stone-500">
                Liên hệ qua Zalo để trao đổi và hỏi thông tin sản phẩm.
              </p>

              <a
                href={`https://zalo.me/${siteConfig.zalo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#8B5E2B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#70491F]"
              >
                <MessageCircle size={17} />
                Nhắn Zalo
              </a>
            </article>

            <article className="rounded-3xl border border-stone-200 p-6 sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4EBDD] text-[#8B5E2B]">
                <Store size={27} />
              </div>

              <h2 className="mt-5 text-xl font-bold text-stone-900">
                Đến cửa hàng
              </h2>

              <p className="mt-3 text-sm leading-7 text-stone-500">
                Hiếu Út hiện có các địa chỉ cửa hàng tại Tuy Hòa.
              </p>

              <div className="mt-5 space-y-4">
                {branches.map((branch) => (
                  <a
                    key={branch.id}
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm leading-6 text-stone-600 transition hover:text-[#8B5E2B]"
                  >
                    <MapPin
                      size={19}
                      className="mt-1 shrink-0 text-[#A4773F]"
                    />
                    <span>
                      <strong className="block text-stone-800">
                        {branch.name}
                      </strong>
                      {branch.address}
                    </span>
                  </a>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
