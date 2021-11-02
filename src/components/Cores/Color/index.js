import React from 'react';

import {Paleta,Container} from './style';

export default function Color({ color1, color2, color3 }) {
  return (
      <>
        <Container>
        <Paleta style={{backgroundColor: color1}} />
        <Paleta style={{backgroundColor: color2}} />
        <Paleta style={{backgroundColor: color3}} />
        </Container>
      </>
  );
}