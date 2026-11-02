import { Search, MessageCircle, PackageCheck, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Chọn sản phẩm",
    description: "Tham khảo các loại gạo, nếp, tấm và bánh tráng.",
    icon: Search,
  },
  {
    number: "02",
    title: "Liên hệ tư vấn",
    description: "Gọi điện để được tư vấn sản phẩm và giá bán.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Xác nhận đơn hàng",
    description: "Thống nhất sản phẩm, số lượng và địa điểm nhận.",
    icon: PackageCheck,
  },
  {
    number: "04",
    title: "Nhận hàng",
    description: "Nhận hàng theo thỏa thuận với cửa hàng.",
    icon: Truck,
  },
];

export default function ShoppingSteps() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#A4773F]">
            Hướng dẫn mua hàng
          </span>
          <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-4xl">
            Đặt hàng đơn giản, nhanh chóng
          </h2>
          <p className="mt-4 text-stone-600">
            Chỉ với vài bước, bạn có thể liên hệ và lựa chọn sản phẩm phù hợp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group rounded-2xl border border-stone-100 bg-[#FAF8F3] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-[#D7C2A3]">
                    {step.number}
                  </span>
                  <div className="rounded-xl bg-[#8B5E2B] p-3 text-white">
                    <Icon size={23} />
                  </div>
                </div>

                <h3 className="mt-7 text-xl font-bold text-stone-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}