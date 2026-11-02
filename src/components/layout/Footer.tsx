import { siteConfig } from "@/config/site";
import { currentYear } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-white">
            {siteConfig.name}
          </h2>
          <p className="mt-3 text-sm leading-7 text-stone-400">
            Chuyên cung cấp gạo, nếp, tấm và bánh tráng.
            Phục vụ nhu cầu gia đình và kinh doanh.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Hệ thống cửa hàng</h3>

          {siteConfig.branches.map((branch) => (
            <div key={branch.name} className="mt-3 text-sm">
              <p className="font-medium text-white">{branch.name}</p>
              <p className="text-stone-400">{branch.address}</p>
            </div>
          ))}

          <div className="mt-4 space-y-2">
            {siteConfig.phones.map((phone) => (
              <p key={phone}>
                <a href={`tel:${phone}`} className="hover:text-amber-400">
                  {phone}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800 py-5 text-center text-xs text-stone-500">
        © {currentYear} Hiếu Út. All rights reserved.
      </div>
    </footer>
  );
}