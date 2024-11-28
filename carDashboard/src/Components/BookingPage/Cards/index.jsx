import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const Cards = ({ title, type, users, manual, price }) => {
  return (
    <>
      <div className="cards">
        <div className="card-top">
          <span>
            <h4>{title}</h4>
            {type}
          </span>
          <FavoriteBorderOutlinedIcon />
        </div>
        <img src="" alt="" />
        <div className="card-bottom">
          <div className="bottom-left">
            <img src="" alt="" />
            <span>{users}</span>
            <img src="" alt="" />
            <span>{manual}</span>
          </div>
          <div className="bottom-right">
            <span>{price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
