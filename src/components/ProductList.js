import React from "react";
import ProductItem from "./ProductItem";
const ProductList = (props) => {
  const { list, handleMangeItem } = props;
  return (
    <div className="productList">
      <h3>More Items</h3>
      <div>
        {list.map((data) => (
          <ProductItem
            title={data.title}
            img={data.img}
            subTitle={data.subTitle}
            price={data.price}
            isAdded={data.isAdded}
            handleAddItem={() => handleMangeItem("productList",data.id)}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
