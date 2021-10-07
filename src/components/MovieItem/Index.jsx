import React from "react";
import { Container, Poster } from "./styles";
import StarIcon from "@material-ui/icons/Star";

function Index({ name, star, img }) {
  return (
    <Container>
      {/* POSTER */}
      <Poster src={img} alt={name} />
      {/* DESCRIBE */}
      <div className="movieItem_describe">
        {/* Name */}
        <h4>{name}</h4>
        {/* Star */}
        <p>
          {Array(star)
            // fill : như kiểu là để in ra màn hình, còn map thì đùng duyệt thôi
            .fill()
            .map((index) => (
              <StarIcon />
            ))}
        </p>
      </div>
    </Container>
  );
}

export default Index;
