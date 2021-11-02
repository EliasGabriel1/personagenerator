import React from "react";

import { Container, Sep, Content,Content2 } from "./style";

import Side from "../Side";

import Side2 from "../Side2";

import Cores from "../Cores";

export default function List({ data, index: listIndex }) {
  return (
    <Container done={data.done}>
      <Content>
        <Content2>

      <Sep>
        <h2>Sobre profissão</h2>
        {data.side1.map((side, index) => (
          <Side key={side.about} data={side} />
        ))}
      </Sep>

      <header>
        <h2>{data.title}</h2>
        <h3>{data.profissao}</h3>
        <img src={data.img} alt="perfil" loading="lazy" />
        <Cores key={data.cores} data={data.cores} />
      </header>
      </Content2>
      <Sep>
        <h2>Sobre a pessoa</h2>
        {data.side2.map((side, index) => (
          <Side2 key={side.about} data={side} />
        ))}
      </Sep>
      </Content>
    </Container>
  );
}
