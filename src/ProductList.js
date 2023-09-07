import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "./client";
import Pagination from "./Pagination";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [lastId, setLastId] = useState("");
  const [prevLastId, setPrevLastId] = useState("");
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await sanityClient.fetch(
        `*[_type == "product" && _id > $lastId] | order(_id) [0...12]{
          _id,
          name,
          sku,
          manufacture_date
        }`,
        { lastId }
      );

      const [lastItem = {}] = [...data].reverse();
      const { _id } = lastItem;

      const { length: nexPageDataLength } = await sanityClient.fetch(
        `*[_type == "product" && _id > $lastId] | order(_id) [0...1]{ }`,
        { lastId: _id }
      );

      const currentPageData = await sanityClient.fetch(
        `*[_type == "product" && _id <= $lastId] | order(_id desc) [0...13]{ _id }`,
        { lastId }
      );

      const { _id: prevPageLastId = "" } = currentPageData[12] || [];

      setProducts(data);
      setPrevLastId(prevPageLastId);
      setHasNextPage(() => nexPageDataLength > 0);
    })();
  }, [lastId, prevLastId]);

  return (
    <div className="col-span-10 flex flex-wrap">
      {products.map(({ _id, name, sku, manufacture_date }) => {
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
      <Pagination
        data={products}
        lastId={lastId}
        prevLastId={prevLastId}
        setLastId={setLastId}
        hasNextPage={hasNextPage}
      />
    </div>
  );
};

export default ProductList;
