import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import icImg from "../../assets/BusinessSite/ic-img.svg";
import "./IntegrationsCard.scss";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const IntegrationsCard = ({ additionalClasses = "", onClick }) => {
  const [info, setInfo] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserInfo = localStorage.getItem("userInfo");

    if (token && storedUserInfo) {
      setInfo(JSON.parse(storedUserInfo));
    }
  }, []);
  function handleAuthorization() {
    toast.error("Unauthorized. Please login first!");
    setTimeout(() => {
      navigate("/business/log-in");
    }, 1000);
  }
  return (
    <div className={`integrations__card ${additionalClasses}`}>
      <div className="integrations__card__inner">
        <div className="in__card__img">
          <ReactSVG src={icImg} />
        </div>
        <h4>Dotdigital</h4>
        <p>Dotdigital is a leading cross-channel marketing automation technology that allows users to engage customers across all touchpoints,...</p>
        {info?.role_id === 3 && (
          <button onClick={onClick} data-bs-toggle="modal" data-bs-target="#integrationModal" className="default__btn mt-3 w-100 ">
            <span>Get Embedded Code</span>
          </button>
        )}
        {!info && (
          <button onClick={handleAuthorization} className="default__btn mt-3 w-100 ">
            <span>Get Embedded Code</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default IntegrationsCard;
