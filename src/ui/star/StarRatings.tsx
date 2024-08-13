import { Star } from "lucide-react";
import { IStar } from "./starr.types";

function StarRatings({ defaultRating = 0 }:IStar) {

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          className={`w-4 h-4 cursor-pointer ${
            value <= defaultRating ? "text-yellow-500 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default StarRatings;
