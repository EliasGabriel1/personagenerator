import React from 'react';

import { Container } from './style';

export default function Side2({ data, index, listIndex }) {
  return (
    <Container>
      <header>
      </header>
      <p>{data.descricao}</p>
      <p>{data.valor}</p>

    </Container>
  );
}