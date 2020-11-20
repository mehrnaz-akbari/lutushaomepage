import React, { useEffect, useState } from "react";
import ListBascketItem from "./ListBascketItem";
import bascketIcon from "../Assets/shopping-bag.svg";
import BagIcon from "./Buttons/BagIcon";
const ListBascketPopUp = (props) => {
  const { list, deleteFromList, display, popUpState } = props;
  const [showList, setShowList] = useState(false);
  useEffect(() => {
    if (showList) {
      window.addEventListener("click", closeMenu);
      console.log("menu 1");
    } else {
      window.removeEventListener("click", closeMenu);
      console.log("menu 2");
    }
  });
  const handleopen = () => {
    if (showList) {
      closeMenu();
    } else {
      setShowList(true);
      popUpState(true);
    }
  };
  const closeMenu = () => {
    setShowList(false);
    popUpState(false);
  };
  console.log(showList, props);

  return (
    <div onClick={(e) => e.stopPropagation()} className="shopContainer">
      <BagIcon onClick={handleopen} count={list.length} />
      <div
        className={showList ? "listBascketPopup show" : "listBascketPopup hide"}
       
      >
        {list.length > 0 ? (
          <React.Fragment>
            <div className="head">
              <span>Shop List</span>
              <span>Show</span>
            </div>
            <div className="list">
              {list.map((data) => (
                <ListBascketItem
                  title={data.title}
                  price={data.price}
                  img={data.img}
                  handleDelete={() => deleteFromList(data.id)}
                />
              ))}
            </div>
          </React.Fragment>
        ) : (
          <div className="emptyList">
            <img src={bascketIcon} alt="bascket" />
          </div>
        )}
      </div>
    </div>
  );
};
export default ListBascketPopUp;
