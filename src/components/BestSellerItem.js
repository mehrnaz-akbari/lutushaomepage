import React from "react";

const BestSellerItem = (props) => {
  const { title, img, subTitle, desc, price, isAdded, handleMangeItem } = props;
  return (
    <div className="bestSellerItem">
      <div className="imageDiv">
        <img src={img} alt={title} />
      </div>
      <div className="detailDiv">
        <div className="titleDiv">
          <h4>{title}</h4>
          <span>{subTitle}</span>
        </div>
        <p>{desc}</p>
        <div className="actionAndPrice">
          <span>{price} $</span>
          <button
            onClick={handleMangeItem}
            className={isAdded ? "isAdd addBtn" : "addBtn"}
          >+</button>
        </div>
      </div>
    </div>
  );
};
export default BestSellerItem;
