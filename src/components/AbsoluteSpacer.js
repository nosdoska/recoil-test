import styled from "styled-components";

export const AbsoluteSpacer = styled.div(
  ({ top, right, bottom, left }) => `
  position: absolute;
  top: ${top ? `${top}rem` : "auto"};
  left: ${left ? `${left}rem` : "auto"};
  right: ${right ? `${right}rem` : "auto"};
  bottom: ${bottom ? `${bottom}rem` : "auto"};
`
);
