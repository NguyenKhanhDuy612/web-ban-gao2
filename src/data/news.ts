
export type NewsArticle = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  image: string;
  content: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Cách bảo quản gạo đúng cách để giữ hương vị",
    slug: "cach-bao-quan-gao-dung-cach",
    excerpt:
      "Một số lưu ý đơn giản khi bảo quản gạo tại nhà, giúp hạn chế ẩm và giữ gạo sạch trong quá trình sử dụng.",
    category: "Mẹo hay",
    publishedAt: "2026-11-02",
    image: "/images/hero-rice.jpg",
    content: [
      "Gạo là thực phẩm được sử dụng thường xuyên trong nhiều gia đình. Việc bảo quản đúng cách giúp gạo hạn chế tiếp xúc với độ ẩm, bụi bẩn và các yếu tố bên ngoài.",
      "Nên đặt gạo ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và những khu vực thường xuyên có hơi nước.",
      "Sau khi mở bao, bạn có thể chuyển gạo vào thùng hoặc hộp đựng thực phẩm sạch, khô và có nắp đậy. Không nên dùng dụng cụ còn ẩm để lấy gạo.",
      "Khi mua gạo mới, nên sử dụng hết lượng gạo cũ trước khi đổ thêm gạo mới vào cùng vật chứa. Đồng thời, thường xuyên vệ sinh thùng đựng để giữ khu vực bảo quản sạch sẽ.",
    ],
  },
  {
    id: 2,
    title: "Những điều nên quan tâm khi chọn mua gạo",
    slug: "nhung-dieu-can-quan-tam-khi-chon-mua-gao",
    excerpt:
      "Tìm hiểu một số tiêu chí cơ bản để lựa chọn loại gạo phù hợp với nhu cầu và thói quen ăn uống của gia đình.",
    category: "Kiến thức về gạo",
    publishedAt: "2026-11-02",
    image: "/images/hero-rice.jpg",
    content: [
      "Mỗi gia đình có khẩu vị và nhu cầu sử dụng gạo khác nhau. Vì vậy, khi chọn mua gạo, bạn nên xác định trước loại cơm mình mong muốn và mục đích sử dụng.",
      "Có thể tham khảo thông tin về giống gạo, đặc điểm hạt, độ dẻo và cách chế biến được người bán tư vấn. Nếu chưa chắc chắn, hãy hỏi về đặc tính của từng loại trước khi chọn mua.",
      "Ngoài ra, nên quan tâm đến tình trạng bao bì, cách bảo quản và thông tin nguồn gốc sản phẩm do cửa hàng cung cấp.",
      "Lựa chọn lượng gạo phù hợp với khả năng sử dụng của gia đình cũng là cách giúp việc bảo quản thuận tiện hơn.",
    ],
  },
  {
    id: 3,
    title: "Gạo, nếp và tấm khác nhau như thế nào?",
    slug: "phan-biet-gao-nep-va-tam",
    excerpt:
      "Cùng tìm hiểu khái quát về gạo, nếp và tấm để dễ dàng lựa chọn sản phẩm theo nhu cầu nấu nướng.",
    category: "Kiến thức về gạo",
    publishedAt: "2026-11-02",
    image: "/images/hero-rice.jpg",
    content: [
      "Gạo, nếp và tấm là những loại nguyên liệu quen thuộc trong bữa ăn và các món chế biến của người Việt.",
      "Gạo thường được dùng để nấu cơm hằng ngày. Tùy từng giống, gạo có thể có đặc điểm khác nhau về độ mềm, độ dẻo và hương thơm.",
      "Nếp thường có độ dẻo kết dính đặc trưng, được sử dụng để nấu xôi, làm bánh và chế biến nhiều món ăn truyền thống.",
      "Tấm là phần hạt gạo bị vỡ trong quá trình xay xát, thường được sử dụng để nấu cơm tấm và một số món ăn khác.",
      "Tùy món ăn và khẩu vị, bạn có thể lựa chọn loại nguyên liệu phù hợp hoặc hỏi cửa hàng để được tư vấn thêm.",
    ],
  },
];
