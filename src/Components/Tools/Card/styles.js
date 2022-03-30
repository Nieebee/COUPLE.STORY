import styled from "styled-components";

export const FlipContainer = styled.div`
  width: 300px;
  height: 200px;
  perspective: 1000px;
  border-radius: 50%;
  `;
export const Flipper = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  position: relative;
  :hover {
    transform: rotateY(180deg);
    color: red;
  }
`;
export const Front = styled.div`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height:100%;
  img {
    width: 100px;
  }
`;
export const Back = styled.div`
  background-color: black;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  width: 100px;
  height: 100px;
`;
