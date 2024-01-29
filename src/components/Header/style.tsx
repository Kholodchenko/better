import Link from "next/link";
import styled from "styled-components";

export const Head = styled.div`
  height: 80px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  overflow: visible;
  position: relative;
  z-index: 99;
`

export const ButtonBlockNav = styled.div`
  display: flex;
  justify-content: center;
`

export const HeadBlockNav = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
`;
export const HeadBlockModalUl = styled(Link).attrs<{check: any}>(props => ({
  check: props.check,
}))`
  padding: 3px;
  text-decoration: none;
  color:rgba(0,0,0,.55);

  @media (max-width: 749px) {
    display: ${p => !p.check ? 'none' : 'block' || 'none'};
  };
`;

export const HeadModal = styled.div`
  width: 100px;
  height: 100%;
`;

export const HeadBlockUl = styled.div<{
  open?: any;
  check?: any;
}>`
  display: ${p => p.open === 'true' ? 'flex' : 'none' || 'none'};
  list-style: none;
  box-sizing: border-box;
`;

export const HeadDiv = styled.div<{
  check?: any;
}>`
  color: ${p => p?.check !== 'true' ? '#2e2e2e' : '#868686' || '#2e2e2e'};
`