import React from "react";
import "./FloatingBlogs.scss";
import { ReactSVG } from "react-svg";
import detailArrow from "../../assets/detail-arrow.svg";
import blogImg from "../../assets/BusinessSite/blogimg.png";
import { IMG_URL } from "../../constants/constants";
import { Link } from "react-router-dom";
import PlaceholderImg from "../PlaceholderImg/PlaceholderImg";

const FloatingBlogs = ({ data, key, stories }) => {
  const truncateText = (text, maxLength) => {
    if (!text) return ""; // Handle null or undefined text
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const truncatedContent = truncateText(data?.content, 100);

  return (
    <Link to={data?.type === "blog" ? `/blog/blog-detail/${data?.id}` : data?.type === "business_blog" ? `/business/blogs/blogs-detail/${data?.id}` : `/business/stories/stories-detail/${data?.id}`} className="tt_blog_box" key={key}>
      <div className="tt_blog_img">
        {stories !== true ? <>{data?.file_url === null && (data?.file_url ? <img src={IMG_URL + data?.file_url} alt="blogImg" /> : <PlaceholderImg />)}</> : <>{data?.imageUrl !== null && (data?.imageUrl ? <img src={IMG_URL + data?.imageUrl} alt="Blogimg" /> : <PlaceholderImg />)}</>}
        {stories === true && !data?.imageUrl ? <PlaceholderImg /> : ""}
      </div>
      <div className="tt_blog_content">
        <a href="#" className="tt_blog_tag">
          Trends in TrustyFeed
        </a>
        <h3>{data?.title}</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: truncatedContent, // Use the truncated content here
          }}
        />
        <div className="tt_blog_btn">
          <a href="/blog/blog-detail" className="tt_btn_text">
            Read Article{" "}
            <span>
              <ReactSVG src={detailArrow} />
            </span>
          </a>
        </div>
      </div>
    </Link>
  );
};

export default FloatingBlogs;
