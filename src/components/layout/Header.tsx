"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Sản phẩm", href: "/san-pham" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Cửa hàng", href: "/cua-hang" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative z-50 w-full border-b border-stone-100 bg-white">
      <div className="container-custom">
        <div className="flex h-[72px] items-center justify-between gap-4 lg:h-[84px]">

          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-3"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8B5E2B] text-xl font-bold text-white">
              D
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-extrabold uppercase tracking-wide text-[#8B5E2B] sm:text-base">
                ĐẠI LÝ GẠO HIẾU ÚT
              </p>
              <p className="mt-0.5 text-[10px] font-medium text-stone-500 sm:text-xs">
                Gạo · Nếp · Tấm · Bánh tráng
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm font-semibold text-stone-700 transition hover:text-[#8B5E2B]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP PHONE */}
          <a
            href={`tel:${siteConfig.phones[0]}`}
            className="hidden shrink-0 items-center gap-2 rounded-full bg-[#8B5E2B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#70491F] lg:inline-flex"
          >
            <Phone size={17} />
            Gọi ngay
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stone-200 text-stone-800 transition hover:bg-stone-100 lg:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-navigation"
        className={`absolute left-0 right-0 top-full overflow-hidden border-t border-stone-100 bg-white shadow-xl transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "visible max-h-[520px] translate-y-0 opacity-100"
            : "invisible max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <nav className="container-custom py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="flex min-h-12 items-center justify-between border-b border-stone-100 py-3 text-sm font-semibold text-stone-700 transition hover:text-[#8B5E2B]"
            >
              {link.label}
              <ChevronRight size={17} className="text-stone-400" />
            </Link>
          ))}

          <a
            href={`tel:${siteConfig.phones[0]}`}
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#8B5E2B] px-5 py-3 font-bold text-white transition hover:bg-[#70491F]"
          >
            <Phone size={18} />
            Gọi tư vấn: {siteConfig.phones[0]}
          </a>
        </nav>
      </div>
    </header>
  );
}