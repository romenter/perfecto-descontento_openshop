import React, { Suspense } from "react";
import Loading from "../../molecules/Loading";
import { candles, paintings } from "../../productsData";
const Product = React.lazy(() => import("../../components/product/Product"));

import "./products.css";

const Products = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="container products">
        <Product product={candles} />
        <Product product={paintings} />
      </div>
    </Suspense>
  );
};

export default Products;
