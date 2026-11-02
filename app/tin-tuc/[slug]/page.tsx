
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft, CalendarDays } from "lucide-react";

import { newsArticles } from "@/data/news";
import { siteConfig } from "@/config/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((item) => item.slug === slug);

  if (!article) {
    return { title: "Không tìm thấy bài viết" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/tin-tuc/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | ${siteConfig.shortName}`,
      description: article.excerpt,
      type: "article",
      images: [article.image || "/images/hero-rice.jpg"],
    },
  };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

function NewsLoading() {
  return (
    <div className="container-custom py-20 text-center">
      <p className="text-sm text-stone-500">Đang tải bài viết...</p>
    </div>
  );
}

async function NewsDetailContent({ params }: Props) {
  const { slug } = await params;
  const article = newsArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);

  return (
    <>
      <section className="bg-[#FAF8F3] py-5 sm:py-8">
        <div className="container-custom">
          <Link
            href="/tin-tuc"
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition hover:text-[#8B5E2B]"
          >
            <ArrowLeft size={17} />
            Quay lại tin tức
          </Link>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-stone-500">
            <span className="rounded-full bg-[#F4EBDD] px-3 py-1 font-semibold text-[#8B5E2B]">
              {article.category}
            </span>

            <span className="inline-flex items-center gap-2">
              <CalendarDays size={16} />
              {formatDate(article.publishedAt)}
            </span>
          </div>

          <h1 className="text-3xl font-extrabold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <p className="mt-6 text-base leading-8 text-stone-600 sm:text-lg">
            {article.excerpt}
          </p>

          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#F8F3E9] sm:rounded-3xl">
            <Image
              src={article.image || "/images/hero-rice.jpg"}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          <div className="mx-auto mt-9 max-w-3xl">
            <div className="space-y-6">
              {article.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-8 text-stone-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-[#FAF8F3] p-6 sm:p-8">
              <h2 className="text-xl font-bold text-stone-900">
                Bạn cần tư vấn về sản phẩm?
              </h2>

              <p className="mt-3 text-sm leading-7 text-stone-600">
                Liên hệ Đại lý gạo – Bánh tráng Hiếu Út để hỏi thêm
                thông tin về các sản phẩm đang kinh doanh.
              </p>

              <a
                href={`tel:${siteConfig.phones[0]}`}
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-[#8B5E2B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#70491F]"
              >
                Gọi cửa hàng: {siteConfig.phones[0]}
              </a>
            </div>
          </div>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="section-padding bg-[#FAF8F3]">
          <div className="container-custom">
            <h2 className="mb-7 text-2xl font-bold text-stone-900 sm:text-3xl">
              Bài viết khác
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {relatedArticles.map((item) => (
                <Link
                  key={item.id}
                  href={`/tin-tuc/${item.slug}`}
                  className="group rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#A4773F]">
                    {item.category}
                  </span>

                  <h3 className="mt-3 text-lg font-bold leading-7 text-stone-900 transition group-hover:text-[#8B5E2B]">
                    {item.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-500">
                    {item.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default function NewsDetailPage({ params }: Props) {
  return (
    <Suspense fallback={<NewsLoading />}>
      <NewsDetailContent params={params} />
    </Suspense>
  );
}
