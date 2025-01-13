import { FaStar } from "react-icons/fa";
import "./style.css";
import { useState } from "react";

const StarRating = ({ numStars = 5 }) => {
  // just for mapping to icon purposes
  const stars = Array(numStars).fill(0);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  const handleMouseEnter = (index) => {
    setHover(index + 1);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <div className="container">
      <div>Star Rating</div>
      <div>
        {/* interesting pattern */}
        {/* You need to spread the anonymous array to get 
            an array of undefines which can be mapped where as
            if you just did Array(length) you would get empty slots
            which cannot be mapped
        */}
        {stars.map((_, index) => (
          <FaStar
            key={index}
            size={40}
            className={index < (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRating;
