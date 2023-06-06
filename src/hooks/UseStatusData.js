import { useState, useEffect } from "react";

const useStatusData = (products) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (products.length > 0) {
      setStatus("Data loaded successfully.");
    } else {
      setStatus("Loading data...");
    }
  }, [products]);

  return status;
};

export default useStatusData;
