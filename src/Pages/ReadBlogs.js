/* eslint-disable jsx-a11y/img-redundant-alt */
import "../readBlogs.css";
import { useState} from "react";
import { HiChevronRight } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import { IconContext } from "react-icons";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import img_province  from "../image/dalat_title.png";
import img_custom_title from "../image/img_custom_title.png"
import img_post_author from "../image/Dalat.png"
import img_custom from "../image/img_custom.png"
//Chứa thông tin cơ bản của tác giả và tiêu đề bài post
const Post = {
  authorBlog_name: "Chó thích Review",
  authorBlog_img:
    "https://i.pinimg.com/564x/78/78/e3/7878e3e64ecb4571802998a85048fc27.jpg",
  date_update: "30/6/2002",
  name_province: "Dalat",
  img_province: img_province,
  img_post_author: img_post_author,
  title_post: "Top 10 địa điểm du lịch mới ở Đà Lạt",
  describe:
    "Địa điểm du lịch mới ở Đà Lạt năm 2022 sẽ đem đến cho bạn nhiều bất ngờ ấn tượng. Nếu như trước đây Đà Lạt nổi tiếng với những vườn hoa rực rỡ thì hiện tại, Đà Lạt sẽ cho bạn nhiều trải nghiệm hơn rất nhiều. Hãy cùng Cuồng Du Lịch điểm danh những địa điểm du lịch Đà Lạt mới nhất năm nay để note ngay vào sổ tay ăn chơi hết Đà Lạt nhé.",
  likes: 100,
  like_status: true,
};
//Nội dung bài post
const contents = [
  {
    title: "1. Khu du lịch Fresh Garden Đà Lạt",
    description:
      "Địa chỉ : 90 Vạn Thành, Phường 5, TP. Đà Lạt. Giá vé Fresh Garden Đà Lạt: 100.000đ/người lớn , 60.000đ/trẻ em (1m – 1m3). Tại địa điểm du lịch Đà Lạt này sẽ cho những nàng thơ những khung hình check in siêu chất. Fresh Garden Đà Lạt xung quanh là rừng nguyên sinh rộng bạt ngàn, với view toàn cảnh do có vị trí nằm trên một ngọn đồi xinh đẹp. Khi đến địa điểm du lịch Đà Lạt mới này, bạn sẽ được thư giãn giữa thiên nhiên rộng lớn và thơ mộng với muôn hoa đua sắc.",
    image1:
      "https://i.pinimg.com/564x/57/56/cf/5756cf00e633d0392e974faeb819ef14.jpg",
    image2:
      "https://i.pinimg.com/564x/3f/d7/f6/3fd7f678e9adb8b6a2c6d3570bf9b308.jpg",
  },
  {
    title: "2. Kombi Land Đà Lạt",
    description:
      "Địa chỉ: Mimosa, Phường 3, Thành phố Đà Lạt, Lâm Đồng. Giá vé Kombi Land Đà Lạt: 90.000đ/người (gồm một chai nước suối) Một điểm check in mới Đà Lạt đó chính là Kombi Land. Có rất nhiều bạn trẻ đã tìm đến địa điểm du lịch Đà Lạt này vì nó cực kỳ thuận tiện di chuyển do nằm ngay tại trung tâm thành phố. Kombi Land có không gian rất hoang dã với nhiều loại xương rồng khác nhau trở thành góc sống ảo cực chất. Địa điểm du lịch Đà Lạt này còn có một hồ nước êm dịu, tiệm café nhỏ rất lãng mạn và chill.",
    image1:
      "https://i.pinimg.com/564x/ea/60/95/ea60950ec8152eb684a50161f4e31ef3.jpg",
  },
];
//Các bài post liên quan
const relatedPosts =[
  {
    image: 'https://i.pinimg.com/564x/da/ca/ec/dacaecc0b7fe84c6bebf8c142033f265.jpg',
    title: 'Địa điểm săn mây Đà Lạt'
  },
  {
    image: 'https://i.pinimg.com/564x/6b/30/ef/6b30efc71a14e507e3821e5e6330ad30.jpg',
    title: 'Đà Lạt và những cung đường thơ mộng'
  },
  {
    image: 'https://i.pinimg.com/564x/af/b6/bd/afb6bd2c6c3efcb3fec27362febb8a58.jpg',
    title: 'Bộ ảnh Đà Lạt qua đôi mắt của những “kẻ mộng mơ'
  }
]
function ReadBlogs() {
  const [str, setStr] = useState(
    "https://vivureviews.com/wp-content/uploads/2022/08/avatar-vo-danh-9.png"
  );
  const [like, setLike] = useState(Post.likes);
  const [typeLike, setTypeLike] = useState(Post.like_status);
  const handleLike = () => {
    if (typeLike) {
      setTypeLike(false);
      setLike(like - 1);
    } else {
      setTypeLike(true);
      setLike(like + 1);
    }
  };
  return (
    <div>
      {/* Ảnh chính của bài post */}
      <div id="img_post">
        <img className="img_title" src={Post.img_post_author}></img>
        <img className="img_custom" src={img_custom}></img>
      </div>

      {/* Phần header cho bài post */}
      <div className="post-cover_content">
        <div className="post-cover_content-container">
          {/* Thanh địa chỉ */}
          <ul className="post-breadcrums_list">
            <li>
              <a href="">Home</a>
              <IconContext.Provider value={{ className: "icon_chevRight" }}>
                <HiChevronRight />
              </IconContext.Provider>
            </li>
            <li>
              <a href="">Blogs</a>
              <IconContext.Provider value={{ className: "icon_chevRight" }}>
                <HiChevronRight />
              </IconContext.Provider>
            </li>
            <li>
              <a href="">{Post.name_province}</a>
              <IconContext.Provider value={{ className: "icon_chevRight" }}>
                <HiChevronRight />
              </IconContext.Provider>
            </li>
          </ul>

          {/* Phần chứa thông về tác giả */}
          <div className="header-author">
            <a href="">
              <img src={Post.authorBlog_img} alt="Author's avatar"></img>
            </a>
            <div className="header-author_row2">
              <div className="author-name">{Post.authorBlog_name}</div>
              <div className="author-update-at">
                Last updated {Post.date_update}
              </div>
            </div>
            <div className="author-like">
              <button
                onClick={() => {
                  handleLike();
                }}
              >
                {!typeLike ? (
                  <IconContext.Provider
                    value={{ className: "icon_OutlineHeart" }}
                  >
                    <AiOutlineHeart />
                  </IconContext.Provider>
                ) : (
                  <IconContext.Provider value={{ className: "icon_FillHeart" }}>
                    <AiFillHeart />
                  </IconContext.Provider>
                )}
              </button>
              <div className="author-like-number">{like}</div>
            </div>
          </div>

          {/* Phần chứa tiêu đề và mô tả của bài post */}
          <h1 className="post-cover_title">{Post.title_post}</h1>
          <p>{Post.describe}</p>
        </div>
      </div>

      <div className="blog-container">
        {/* Phần chứa nội dung bài post */}
        <article className="blog-article">
          {contents.map((content, index) => (
            <div key={index}>
              <h2>{content.title}</h2>
              <p>{content.description}</p>
              {content.image2 ? (
                <div className="f-image2">
                  <img src={content.image1} alt="image of post"></img>
                  <img src={content.image2} alt="image of post"></img>
                </div>
              ) : (
                <div className="f-image1">
                  <img src={content.image1} alt="image of post"></img>
                </div>
              )}
            </div>
          ))}
        </article>

        {/* Phần chứa các bài viết liên quan */}
        <div className="sidebar-articles">
          <div className="sidebar-articles_title">Related Posts</div>
          <div className="sidebar-articles_container">
            {relatedPosts.map((relatedPost, index)=>(
              <a className="article-text-block" href="">
              <div className="article-text-block_image" key={index}>
                <img src={relatedPost.image} alt='image of post'></img>
              </div>
              <div className="article-text-block_content">
                <h2>{relatedPost.title}</h2>
              </div>
            </a>
            ))}
          </div>
        </div>
      </div>

      {/* Phần chứa thẻ liên kết ra blog */}
      <div className="related-category_link">
        <div className="related-category_card">
          <a href="">
            <h3>read all articles about</h3>
            <div className="related-category_title">
              <span className="text">{Post.name_province}</span>
            </div>
            <div className="circle-icon">
              <IconContext.Provider value={{ className: "icon_ArrowRight" }}>
                <FiArrowRight />
              </IconContext.Provider>
            </div>
            <img
              className="img_tilte_blog"
              src={Post.img_province}
              alt="image of province"
            ></img>
            <img
              className="img_tilte_custom"
              src={img_custom_title}
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ReadBlogs;
