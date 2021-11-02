import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  @media(max-width:900px){
    height:100%;
  };

  p{
    display:flex;
    gap: 5px;
    align-items:center;
  }
`;