import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3">
      <a
        href={`tel:${siteConfig.phones[0]}`}
        aria-label="Gọi điện cho Hiếu Út"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition hover:scale-110"
      >
        <Phone size={24} />
      </a>

      <a
        href={`https://zalo.me/${siteConfig.zalo}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Liên hệ Zalo"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 font-bold text-white shadow-lg transition hover:scale-110"
      >
        Zalo
      </a>
    </div>
  );
}