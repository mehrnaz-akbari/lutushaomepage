import React, { useState } from "react";
import SearchInput from "./SearchInput";

import diamonIcon from "../Assets/diamond.svg";
import ListBascketPopUp from "./ListBascketPopUp";
const Menu = (props) => {
  const { shopList, deleteFromList } = props;
  const [showList, setShowList] = useState(false);
  return (
    <div className="menu">
      <div className="logoDiv">
        <span>Lotus</span>
        <img src={diamonIcon} alt="diamonIcon" />
      </div>
      <div className="searchAndbag">
        <SearchInput handleSearch={(text) => console.log(text)} />
        <ListBascketPopUp
          list={shopList}
          deleteFromList={deleteFromList}
          display={showList}
          popUpState={(state) => setShowList(state)}
        />
      </div>
    </div>
  );
};
export default Menu;
