import React, { useState } from "react";
import heart from "../../assets/icons/heart.svg";
import RedHeart from "../../assets/icons/redheart.png";

const LikeButton = () => {
  const [isFav, setIsFav] = useState(false);

  return (
    <div className="container_like">
      <button onClick={() => setIsFav(!isFav)} className="likeButton">
        {isFav ? (
          <img src={RedHeart} alt="heart icon" className="likeButton" />
        ) : (
          <img src={heart} alt="heart icon" className="likeButton" />
        )}
      </button>
    </div>
  );
};
export default LikeButton;
