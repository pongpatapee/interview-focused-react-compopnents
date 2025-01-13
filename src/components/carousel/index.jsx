import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

const Carousel = ({ apiUrl, page = 1, limit = 5 }) => {
  const [images, setImages] = useState([]);
  const [imgIdx, setImgIdx] = useState(0);
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    setImgIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setImgIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const fetchImages = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${apiUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrMsg(e);
    }
  };

  useEffect(() => {
    if (apiUrl !== "") {
      fetchImages();
    }
  }, [apiUrl]);

  if (loading) {
    return <div>The Carousel is loading</div>;
  }

  if (errMsg) {
    return <div>Error: {errMsg}</div>;
  }

  return (
    <div className="carousel-container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrev}
      />
      {images && images.length ? (
        <img
          src={images[imgIdx].download_url}
          alt="carousel image"
          className="carousel-img"
        />
      ) : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="carousel-index-indicator">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  index === imgIdx
                    ? "carousel-index"
                    : "carousel-index inactive-indicator "
                }
                onClick={() => setImgIdx(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default Carousel;
