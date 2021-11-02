import React from 'react';

import { Container } from './style';

export default function Side({ data, index, listIndex }) {
  return (
    <Container>
      <header>
      </header>
      <p>{data.about}</p>
      <p>{data.valor}</p>

    </Container>
  );
}