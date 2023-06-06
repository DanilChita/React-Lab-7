import { useState, useEffect } from "react";
import axios from "axios";

const GetCategoriesData = () => {
  const [categories, setCategories] = useState(["all"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const uniqueCategories = new Set(
          response.data.map((product) => product.category)
        );
        setCategories(categories.concat(Array.from(uniqueCategories)));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return categories;
};

export default GetCategoriesData;
