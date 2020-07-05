import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import ColorPicker from "./components/ColorPicker";
import { AbsoluteSpacer } from "./components/AbsoluteSpacer";
import { BigText } from "./components/BigText";
import { backroundColorState, textColorState } from "./atoms/style";

const Wrapper = styled.div.attrs(({ backgroundColor }) => ({
  style: {
    backgroundColor,
  },
}))`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

function App() {
  const backgroundColor = useRecoilValue(backroundColorState);

  return (
    <Wrapper backgroundColor={backgroundColor}>
      <BigText>This is a phrase</BigText>

      <AbsoluteSpacer top={1} right={1}>
        <ColorPicker state={backroundColorState} />
      </AbsoluteSpacer>

      <AbsoluteSpacer top={3} right={1}>
        <ColorPicker state={textColorState} />
      </AbsoluteSpacer>
    </Wrapper>
  );
}

export default App;
