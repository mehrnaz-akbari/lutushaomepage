import React from "react";
import deleteIcon from "../Assets/trash-can.svg";
const ListBascketItem = (props) => {
  const { title, price, img, handleDelete } = props;

  return (
    <div className="listBascketItem">
      <div className="imageDiv">
        <img src={img} alt={title} />
      </div>
      <div className="infoDiv">
        <span>{title}</span>
        <span>{price}</span>
      </div>
      <button onClick={handleDelete}>
        <img src={deleteIcon} alt="deleteIcon" />
      </button>
    </div>
  );
};
export default ListBascketItem;
