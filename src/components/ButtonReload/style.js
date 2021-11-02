import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width:900px){
    display: flex;
    justify-content:end;
    margin-right:65px;
  }
  @media (max-width:900px){
      margin-top: 40px;
    }
`;

export const Button = styled.button`
  background:transparent;
  border:none;
  cursor: pointer;
  @media (max-width:900px){
    margin-left:75vw;
  }
  svg{
    fill: #000000;
    @media (max-width:900px){
        width: 50px;
        height: 50px;
    }
    g{
        mix-blend-mode: normal;
    }
  }
`;