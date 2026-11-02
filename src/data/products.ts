export type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  price?: number;
  featured: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Gạo thơm",
    slug: "gao-thom",
    category: "Gạo",
    description: "Gạo thơm phù hợp cho bữa cơm gia đình.",
    image: "/images/gao-thom.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Gạo đặc sản",
    slug: "gao-dac-san",
    category: "Gạo",
    description: "Các dòng gạo đặc sản được tuyển chọn.",
    image: "/images/gao-dac-san.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Nếp",
    slug: "nep",
    category: "Nếp",
    description: "Nếp dùng để nấu xôi và chế biến món ăn.",
    image: "/images/nep.jpg",
    featured: true,
  },
  {
    id: 4,
    name: "Tấm",
    slug: "tam",
    category: "Tấm",
    description: "Các loại tấm phục vụ nhu cầu gia đình và kinh doanh.",
    image: "/images/tam.jpg",
    featured: true,
  },
  {
    id: 5,
    name: "Bánh tráng",
    slug: "banh-trang",
    category: "Bánh tráng",
    description: "Bánh tráng phục vụ nhu cầu chế biến và sử dụng hằng ngày.",
    image: "/images/banh-trang.jpg",
    featured: true,
  },
];