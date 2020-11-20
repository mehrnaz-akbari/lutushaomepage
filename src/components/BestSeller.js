import React from "react";
import BestSellerItem from "./BestSellerItem";
import minesBtn from "../Assets/minus.svg"
const BestSeller = (props) => {
  const {list, handleMangeItem } = props;
  return (
    <div className="bestSeller">
      <div className="head">
        <h3>Best Sellers</h3>
        <button onClick={() => {}}>
          <img src={minesBtn} alt="minesBtn" />
        </button>
      </div>
      <div className="listDiv">
        {list.map((data) => (
          <BestSellerItem
            title={data.title}
            img={data.img}
            subTitle={data.subTitle}
            desc={data.desc}
            price={data.price}
            isAdded={data.isAdded}
            handleMangeItem={() => handleMangeItem("bestSeller",data.id)}
          />
        ))}
      </div>
    </div>
  );
};
export default BestSeller;
