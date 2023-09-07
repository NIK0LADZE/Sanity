import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "./client";

const ProductList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"]{
          _id,
          name,
          sku,
          manufacture_date
        }`
      )
      .then((data) => setCategories(data))
      .catch(console.error);
  }, []);

  return (
    <div className="col-span-10 flex flex-wrap">
      {categories.map(({ _id, name, sku, manufacture_date }) => {
        return (
          <div key={_id} className="w-1/4 p-4">
            <div className="p-2 border">
              <div className="flex m-1 gap-x-1">
                <p>Product Name:</p>
                <Link to={sku}>{name}</Link>
              </div>
              <div className="flex m-1 gap-x-1">
                <p>Product SKU:</p>
                <p>{sku}</p>
              </div>
              <div className="flex m-1 gap-x-1">
                <p>Manufacture Date:</p>
                <p>{manufacture_date}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
