import React from "react";
import { Button } from "../ui/button";
import { StarIcon } from "lucide-react";

const StarRating = ({ rating, handleRatingchange }) => {
  return [1, 2, 3, 4, 5].map((star, index) => (
    <Button
      className={`mr-1 rounded-full ${
        star <= rating
          ? "hover:bg-yellow-400 text-yellow-400"
          : "text-gray-900 hover:bg-primary hover:text-primary-foreground "
      }`}
      size={"icon"}
      variant={"outline"}
      key={index}
      onClick={() => (handleRatingchange ? handleRatingchange(star) : null)}
    >
      <StarIcon
        className={`w-5 h-5 ${star <= rating ? "fill-yellow-400" : ""}`}
      />
    </Button>
  ));
};

export default StarRating;
