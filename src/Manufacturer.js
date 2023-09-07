import { useEffect, useState } from "react";
import sanityClient from "./client";

const Manufacturer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "manufacturer"]{
          _id,
          manufacturer
        }`
      )
      .then((data) => setCategories(data))
      .catch(console.error);
  }, []);

  return (
    <div className="col-span-2">
      <div className="fixed">
        <p className="font-bold text-lg text-left ml-8">Manufacturer</p>
        <ul className="mt-4">
          {categories.map(({ _id, manufacturer }) => {
            return (
              <li key={_id} className="ml-8 mb-2 text-left">
                <input className="mr-2" type="checkbox" name={manufacturer} id={manufacturer} />
                <label htmlFor={manufacturer}>{manufacturer}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Manufacturer;
