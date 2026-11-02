
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { newsArticles } from "@/data/news";

export const metadata: Metadata = {
  title: "Tin tức và kiến thức về gạo",
  description:
    "Cập nhật mẹo bảo quản gạo, kiến thức chọn gạo và thông tin hữu ích từ Đại lý gạo – Bánh tráng Hiếu Út.",
  alternates: {
    canonical: "/tin-tuc",
  },
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export default function NewsPage() {
  return (
    <>
      <section className="bg-[#FAF8F3] py-16 sm:py-20">
        <div className="container-custom">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A4773F]">
            Tin tức & kiến thức
          </p>

          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Góc chia sẻ của Hiếu Út
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
            Những thông tin và kiến thức hữu ích về gạo, nếp, tấm,
            bánh tráng và cách lựa chọn, bảo quản thực phẩm.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {newsArticles.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {newsArticles.map((article) => (
                <article
                  key={article.id}
                  className="group min-w-0 overflow-hidden rounded-2xl border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Link
                    href={`/tin-tuc/${article.slug}`}
                    className="block"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#F8F3E9]">
                      <Image
                        src={article.image || "/images/hero-rice.jpg"}
                        alt={article.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-5">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500">
                        <span className="rounded-full bg-[#F4EBDD] px-3 py-1 font-semibold text-[#8B5E2B]">
                          {article.category}
                        </span>

                        <span className="inline-flex items-center gap-1">
                          <CalendarDays size={14} />
                          {formatDate(article.publishedAt)}
                        </span>
                      </div>

                      <h2 className="mt-4 line-clamp-2 text-lg font-bold leading-7 text-stone-900 transition group-hover:text-[#8B5E2B]">
                        {article.title}
                      </h2>

                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-stone-500">
                        {article.excerpt}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#8B5E2B]">
                        Đọc bài viết
                        <ArrowRight
                          size={17}
                          className="transition group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-[#FAF8F3] px-6 py-16 text-center">
              <h2 className="text-xl font-bold text-stone-800">
                Chưa có bài viết
              </h2>
              <p className="mt-2 text-sm text-stone-500">
                Nội dung mới sẽ được cập nhật trong thời gian tới.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
