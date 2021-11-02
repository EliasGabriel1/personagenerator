import styled from 'styled-components';

export const Header = styled.div`
  height: 80px;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content:space-between;
  
  @media (max-width:900px){
      margin-top: 30px;
      height:unset;
      display:grid;
      grid-template-areas: "tres" "um" "dois"
  }
  
  nav{
    @media (max-width:900px){
      grid-area:um;
    }
  }

  a{
    color: #00000090;
    text-decoration: none;
    font-size: 16px;
    }
    li{
      list-style:none;
    }
    h1{
      background: linear-gradient(to right, #000 48%, #00000070 0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media (max-width:900px){
        font-size:58px;
        grid-area:dois;
        padding: 90px 0;
        text-align:center;
      }
    }
`;

export const Flex = styled(Header)`
  display: flex;
  align-items: center;
  justify-content:space-between;
  gap:20px;

  @media (max-width:900px){
    grid-area:tres;
  }

  @media (min-width:900px){
    a{
      svg{
        &:hover{
          fill:#686868;
        }
      }
    }
  }
`;

export const Ul = styled(Header)`
  display: flex;
  align-items: center;
  justify-content:space-between;
  gap:20px;

  li{
    a{
      &:hover{
        color:#000;
      }
    }
  }
`;