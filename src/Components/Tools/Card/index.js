import React from "react";
import * as S from "./styles"

function Card({ img, name }) {
  return (
    <S.FlipContainer>
      <S.Flipper>
        <S.Front>
          <img src={img} alt={name} />
        </S.Front>
        <S.Back>
          <p>{name}</p>
        </S.Back>
      </S.Flipper>
    </S.FlipContainer>
  );
}

export default Card;
