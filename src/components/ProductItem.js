import React from "react";

const ProductItem = (props) => {
  const { title, price, img, subTitle, isAdded, handleAddItem } = props;
  return (
    <div className="productItem">
      <div className="btnDiv">
        <button
          className={isAdded ? "isAdded addBtn" : "addBtn"}
          onClick={handleAddItem}
        >
          +
        </button>
      </div>
      <div className="infoDiv">
        <div className="imageDiv">
          <img src={img} alt={title} />
        </div>
        <div className="titleDiv">
          <span className="title">{title}</span>
          <span className="subtitle">{subTitle}</span>
        </div>
      </div>
      <div className="priceDiv">
        <span>$ {price}</span>
      </div>
    </div>
  );
};
export default ProductItem;
