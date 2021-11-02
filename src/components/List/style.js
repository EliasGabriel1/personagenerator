import styled from 'styled-components';

export const Container = styled.div`
  @media(min-width: 900px) {
    padding: 0 15px;
    height: 100%;
  }
  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h2 {
      font-weight: 700;
      font-size: 60px;
      padding: 0 10px;
      @media(max-width: 800px) {
        max-width:80vw;
      }
    }
    
    h3{
      font-size: 32px;
      font-weight:400;
      @media(min-width: 900px) {
        min-width: 570px;
        text-align: center;
      }

      @media(max-width: 800px) {
        max-width:90vw;
        text-align:center;
      }
      }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
    img{
      margin-top:50px;
      width: 450px;
      @media(max-width: 900px) {
        width: 100vw;
      }
    }
  }

  ul {
    @media(min-width: 900px) {
      margin-top: 30px;
      }
  }
`;

export const Sep = styled(Container)`
  display:flex;
  flex-direction:column;
  max-width:300px;
  
  @media(max-width: 800px) {
    max-width:80vw;
    &:nth-child(2n) {
      min-height:75vh;
    }
  }

  h2{
    margin-bottom: 20px;
  }
`;

export const Content = styled(Container)`
  display:flex;
  justify-content:space-between;
  align-items:center;

  @media(max-width: 900px) {
    flex-direction:column;
  }
`;
export const Content2 = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media(max-width: 900px) {
    flex-direction:column-reverse;
    display:flex;
    margin-bottom: 50px;
    margin-top: 70px;
  }
`;

