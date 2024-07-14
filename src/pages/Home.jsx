import React, { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import ProductTile from "../components/product-tile";
function Home() {
  const [Products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(true);

  async function fetchListOfProducts() {
    setLoading(true);
    try {
      const URL = "https://fakestoreapi.com/products";
      const res = await fetch(URL);
      const data = await res.json();
      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.error("error fetching products");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return Loading ? (
    <div className=" h-screen flex justify-center  p-20">
      <VscLoading className=" animate-spin size-16   " />
    </div>
  ) : Products && Products.length ? (
    <div className="py-8 min-h-[80svh] container mx-auto  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Products.map((ProductItem, index) => (
        <ProductTile key={index} Product={ProductItem} />
      ))}
    </div>
  ) : null;
}

export default Home;
