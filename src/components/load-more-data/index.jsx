import { useEffect, useState } from "react";
import "./style.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  const limit = 20;
  const fakeApiLimit = 100;

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`,
      );
      const data = await response.json();
      console.log(data);

      if (data && data.products && data.products.length) {
        setProducts((products) => [...products, ...data.products]);
      }

      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleLoadMore = async () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  useEffect(() => {
    if (products && products.length >= fakeApiLimit) {
      setDisableBtn(true);
    }
  }, [products]);

  return (
    <div className="load-more-container">
      package
      <div className="product-container">
        {products
          ? products.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.title}</h3>
                <img src={product.thumbnail} alt={product.title} />
              </div>
            ))
          : null}

        {loading && <div>Product is loading</div>}
      </div>
      <div className="button-container">
        <button disabled={disableBtn} onClick={handleLoadMore}>
          Load more products
        </button>
        {disableBtn ? (
          <span>You have reached the limit of 100 products</span>
        ) : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
