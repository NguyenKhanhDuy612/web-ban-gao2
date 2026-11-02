import Link from "next/link";
import { branches } from "@/data/branches";
import { MapPin, Phone, ExternalLink } from "lucide-react";

export default function BranchSection() {
  return (
    <section className="section-padding bg-[#FAF8F3]">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#A4773F]">
            Hệ thống cửa hàng
          </span>

          <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-4xl">
            Ghé thăm cửa hàng Hiếu Út
          </h2>

          <p className="mt-4 text-stone-600">
            Hai địa điểm phục vụ khách hàng tại khu vực Tuy Hòa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">
          {branches.map((branch) => (
            <article
              key={branch.id}
              className="rounded-2xl border border-stone-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4EBDD] text-[#8B5E2B]">
                <MapPin size={25} />
              </div>

              <h3 className="text-xl font-bold text-stone-900">
                {branch.name}
              </h3>

              <p className="mt-4 flex gap-3 text-sm leading-7 text-stone-600">
                <MapPin className="mt-1 shrink-0" size={18} />
                {branch.address}
              </p>

              <a
                href={`tel:${branch.phone}`}
                className="mt-3 flex items-center gap-3 text-sm font-medium text-stone-700 hover:text-[#8B5E2B]"
              >
                <Phone size={18} />
                {branch.phone}
              </a>

              <Link
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#8B5E2B] px-5 py-2.5 text-sm font-semibold text-[#8B5E2B] transition hover:bg-[#8B5E2B] hover:text-white"
              >
                Xem đường đi
                <ExternalLink size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}