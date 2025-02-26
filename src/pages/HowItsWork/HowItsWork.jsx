import React, { lazy, Suspense, useState, useEffect } from "react";

import Loader from "../../Shared/Loader/Loader";
import { ReactSVG } from "react-svg";
import ReviewCardLoader from "../../Shared/Loader/Home/ReviewCardLoader";
import howWork from "../../assets/How_works_img.png";
import hwone from "../../assets/hw-2.svg";
import hwboximg from "../../assets/How_works_box_img.png";
import "./HowItsWork.scss";
import { REACT_APP_API_URL } from "../../constants/constants";
import { apiGet } from "../../services/userAuth";
import useSEO from "../../helper/SEOHelper";
import SEO from "../../Shared/SEO/SEO";
const CompanyReviewBox = lazy(() => import("../../Shared/CompanyReviewBox/CompanyReviewBox"));
const Breadcrumb = lazy(() => import("../../Shared/BreadCrumb/BreadCrumb"));

const HowItsWork = () => {
  const reviewData = [
    { id: 1, content: "Review 1" },
    { id: 2, content: "Review 2" },
    { id: 3, content: "Review 3" },
  ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const { data: SeoData } = useSEO(`${REACT_APP_API_URL}page/single/?url=how-it-works`);

  const getReviews = async () => {
    setLoading(true);
    try {
      const URL = `${REACT_APP_API_URL}business`;
      const params = {
        limit: 3,
      };
      const response = await apiGet(URL, params);
      if (response.success === true) {
        const dbValues = response.data.payload.records;
        setData(dbValues);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className="HowItsWorl">
      <SEO title={SeoData?.meta_title || "TrustyFeed"} description={SeoData?.meta_description} keywords="TrustyFeed" />
      <div className="bg__animation__wrap">
        <div className="bg_circle_one"></div>
        <div className="bg_circle_two"></div>
        <div className="bg_circle_three"></div>
        <div className="bg_circle_four"></div>
      </div>
      <Suspense fallback={<Loader />}>
        <section className="how_works_hero">
          <div className="container">
            <div className="hows_work_top text-center">
              <div className="d-flex justify-content-center">
                <Breadcrumb active={"How it Works"} />
              </div>
              <h1>We're open to all.</h1>
              <p>A platform where customers rate businesses, sharing reviews to guide others and help companies improve.</p>
            </div>
            <div className="hw_hero_details">
              <div className="hw_image">
                <img src={howWork} alt=" {howWork}" />
              </div>
              <div className="hw_content">
                <h3>How do reviews get on TrustyFeedback?</h3>
                <p>
                  Reviews on TrustyFeedback are written by consumers from across the globe. Anyone who has had a recent buying or service experience can write a review, for free, as long as they have a TrustyFeedback user account, follow our Guidelines for Reviewers, and don’t have a conflict of
                  interest with the business they’re reviewing. A user account must be connected to an email address so we can get in touch for account- and service- related issues.
                </p>
                <p>All reviews about a business are shown on their profile page. This is where consumers can read and write reviews, and find other relevant information about the business, such as the overall TrustScore and star rating. A TrustyFeedback review can start in two ways:</p>
              </div>
            </div>
            <div className="hw__bottom row crbox__change">{loading ? <ReviewCardLoader /> : data && data.map((item, key) => <CompanyReviewBox data={item} key={key} />)}</div>
          </div>
        </section>
        <section className="how_works_icon_box">
          <div className="container">
            <div className="row flex-row flex-wrap">
              <div className="col-md-6">
                <div className="hw_ibx_details">
                  <div className="hw_ibx_header d-flex align-items-center">
                    <span>
                      <ReactSVG src={hwone} />
                    </span>
                    <h3>Being open is in our DNA</h3>
                  </div>
                  <div className="hw_text">
                    <p>
                      Trustpilot was created in 2007 as an independent, open platform that sits between businesses and consumers, and empowers both by enabling collaboration. We allow anyone to post a review, which prevents businesses from pre-screening or moderating what consumers actually read.
                      This is one of the key ways we’re different from ‘closed’ or pay-to-access platforms where companies collect reviews as marketing collateral and can publish the reviews they like and ‘unpublish’ those they don’t (either after the fact or by pre-screening). This is never the
                      case on Trustpilot. We welcome all reviews from consumers who've had a genuine experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="hw_ibx_details">
                  <div className="hw_ibx_header d-flex align-items-center">
                    <span>
                      <ReactSVG src={hwone} />
                    </span>
                    <h3>Consumers own their reviews</h3>
                  </div>
                  <div className="hw_text">
                    <p>
                      We consider reviews to be user-generated content owned by their author, and they are the only one who can edit or permanently delete their reviews. This can be done through their user account. Unless a user permanently deletes their individual reviews, we keep reviews for as
                      long as the user has a Trustpilot account. When a user deletes their account, all of their reviews are also permanently deleted. This is outlined in the 'How long do we store your personal data?' section of our Privacy Policy.This can be done through their user account. Unless
                      a user permanently deletes their individual reviews, we keep reviews for as long as the user has a Trustpilot account.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="hw_ibx_details">
                  <div className="hw_ibx_header d-flex  align-items-center">
                    <span>
                      <ReactSVG src={hwone} />
                    </span>
                    <h3>Fighting fake reviews</h3>
                  </div>
                  <div className="hw_text">
                    <p>
                      Trustpilot was created in 2007 as an independent, open platform that sits between businesses and consumers, and empowers both by enabling collaboration. We allow anyone to post a review, which prevents businesses from pre-screening or moderating what consumers actually read.
                      This is one of the key ways we’re different from ‘closed’ or pay-to-access platforms where companies collect reviews as marketing collateral and can publish the reviews they like and ‘unpublish’ those they don’t (either after the fact or by pre-screening). This is never the
                      case on Trustpilot. We welcome all reviews from consumers who've had a genuine experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="hw_ibx_details">
                  <div className="hw_ibx_header d-flex align-items-center">
                    <span>
                      <ReactSVG src={hwone} />
                    </span>
                    <h3>Flagging reviews</h3>
                  </div>
                  <div className="hw_text">
                    <p>
                      Trustpilot was created in 2007 as an independent, open platform that sits between businesses and consumers, and empowers both by enabling collaboration. We allow anyone to post a review, which prevents businesses from pre-screening or moderating what consumers actually read.
                      This is one of the key ways we’re different from ‘closed’ or pay-to-access platforms where companies collect reviews as marketing collateral and can publish the reviews they like and ‘unpublish’ those they don’t (either after the fact or by pre-screening). This is never the
                      case on Trustpilot. We welcome all reviews from consumers who've had a genuine experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="how_works_image_box">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="hw_image_content">
                  <h3>A neutral space for dialogue and collaboration</h3>
                  <p>"We're open to all. We believe this is the best way to help consumers make informed decisions when buying products and services."</p>
                  <h5>Ben Martin Director of Privacy</h5>
                </div>
              </div>
              <div className="col-md-6">
                <div className="hw_image_area">
                  <img src={hwboximg} alt={hwboximg} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </div>
  );
};

export default HowItsWork;
