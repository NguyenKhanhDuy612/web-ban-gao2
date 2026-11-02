import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#A4773F]">
            Khách hàng
          </span>

          <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-4xl">
            Cảm nhận từ khách hàng
          </h2>

          <p className="mt-4 text-stone-600">
            Chúng tôi luôn trân trọng những ý kiến đóng góp để phục vụ tốt hơn.
          </p>
        </div>

        {testimonials.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-stone-100 bg-[#FAF8F3] p-7"
              >
                <div className="flex gap-1 text-amber-500">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star key={index} size={17} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-5 leading-7 text-stone-700">
                  “{item.content}”
                </p>

                <div className="mt-6 border-t border-stone-200 pt-4">
                  <p className="font-bold text-stone-900">
                    {item.customerName}
                  </p>
                  {item.location && (
                    <p className="mt-1 text-sm text-stone-500">
                      {item.location}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-dashed border-stone-300 bg-[#FAF8F3] px-6 py-10 text-center">
            <Star className="mx-auto text-[#A4773F]" size={30} />
            <p className="mt-4 font-semibold text-stone-800">
              Ý kiến khách hàng sẽ được cập nhật
            </p>
            <p className="mt-2 text-sm leading-6 text-stone-500">
              Hiếu Út luôn trân trọng những chia sẻ và góp ý từ khách hàng.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}