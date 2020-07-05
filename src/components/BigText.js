import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { textColorState } from "../atoms/style";

const HeadingOne = styled.h1.attrs(({ color }) => ({
  style: {
    color,
  },
}))``;

export function BigText({ children }) {
  const color = useRecoilValue(textColorState);

  return <HeadingOne color={color}>{children}</HeadingOne>;
}
