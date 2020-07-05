import * as React from "react";
import styled from "styled-components";
import { SketchPicker } from "react-color";
import { useRecoilState } from "recoil";

const Swatch = styled.div`
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  display: inline-block;
  cursor: pointer;
`;

const CurrentColor = styled.div.attrs(({ color }) => ({
  style: {
    backgroundColor: color,
  },
}))`
  width: 36px;
  height: 14px;
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
`;

const PopOver = styled.div`
  position: absolute;
  z-index: 2;
  right: 0;
`;

const Cover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Container = styled.div``;

function ColorPicker({ state }) {
  const [isOpen, setOpen] = React.useState(false);
  const [color, setColor] = useRecoilState(state);

  const onColorChange = ({ hex }) => {
    setColor(hex);
    window.localStorage.setItem(state.key, hex);
  };

  const toggleSwatch = () => setOpen(!isOpen);

  return (
    <Container>
      <Swatch onClick={toggleSwatch}>
        <CurrentColor color={color} />
      </Swatch>

      {isOpen && (
        <PopOver>
          <Cover onClick={toggleSwatch} />
          <SketchPicker color={color} onChange={onColorChange} />
        </PopOver>
      )}
    </Container>
  );
}

export default React.memo(ColorPicker);
