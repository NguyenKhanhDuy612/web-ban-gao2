import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
import ShoppingSteps from "@/components/sections/ShoppingSteps";

export const metadata: Metadata = {
  title: "Giới thiệu đại lý gạo – Bánh tráng Hiếu Út",
  description:
    "Tìm hiểu về Đại lý Gạo – Bánh tráng Hiếu Út, chuyên cung cấp gạo, nếp, tấm và bánh tráng tại Tuy Hòa.",
  alternates: {
    canonical: "/gioi-thieu",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#8B5E2B] px-5 py-20 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-100">
          Đại lý gạo – Bánh tráng Hiếu Út
        </p>
        <h1 className="mt-4 text-3xl font-bold md:text-5xl">
          Câu chuyện của chúng tôi
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-amber-50">
          Đồng hành cùng nhu cầu thực phẩm hằng ngày của gia đình và khách hàng.
        </p>
      </section>

      <AboutSection />
      <ShoppingSteps />
    </>
  );
}