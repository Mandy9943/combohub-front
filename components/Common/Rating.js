import { calculateRating } from "@/utils/createRatings";
import { Box } from "@chakra-ui/react";

export default function Rating({ text }) {
  const rating = calculateRating(text);
  const stars = renderStars(rating);

  return (
    <Box as="ul" className="rating-list" mt={"10px !important"}>
      {stars}
    </Box>
  );
}

function renderStars(rating) {
  let stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <li key={i}>
          <i className="ri-star-fill"></i>
        </li>
      );
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <li key={i}>
          <i className="ri-star-half"></i>
        </li>
      );
    } else {
      stars.push(
        <li key={i}>
          <i className="ri-star-line"></i>
        </li>
      );
    }
  }

  return stars;
}
