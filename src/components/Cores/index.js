import React from 'react';

import Color from "./Color"
import { Container } from './style';

export default function Cores({ data, index, listIndex }) {
  return (
    <Container>
        <p>Cores Preferidas:
        <Color color1={data[0]} color2={data[1]}  color3={data[2]}  />
        </p>
    </Container>
  );
}