import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "./client";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "category"]{
          _id,
          category
        }`
      )
      .then((data) => setCategories(data))
      .catch(console.error);
  }, []);

  return (
    <ul className="flex justify-center gap-x-8 mt-4">
      {categories.map(({ _id, category }) => {
        return (
          <li key={_id}>
            <Link to={category.toLowerCase()}>{category}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Header;
