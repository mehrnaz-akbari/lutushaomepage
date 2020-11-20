import React from "react";
import bascketIcon from "../../Assets/shopping-bag.svg"
const BagIcon = (props) => {
  const { onClick, count } = props;
  return (
    <div className="bagIcon" onClick={onClick}>
     {count > 0 && <span>{count}</span>}
     <img src={bascketIcon} alt="bascketIcon" />
    </div>
  );
};
export default BagIcon;
