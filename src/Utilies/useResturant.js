import { useState, useEffect } from "react";


const useResturant = (RESTURANT_LIST_URL) => {
  const [restaurant, setResturant] = useState(null);
  useEffect(() => {
    getResturantList();
  }, []);
  async function getResturantList() {
    const data = await fetch(RESTURANT_LIST_URL);
    const json = await data.json();
    setResturant(json);
  }
  return restaurant;
};
export default useResturant;
