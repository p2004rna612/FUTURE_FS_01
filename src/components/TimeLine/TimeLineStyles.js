import styled from 'styled-components';

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  padding: 0;
  list-style: none;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth; /* smooth slide */
  margin: 0 0 40px;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    padding-bottom: 8px;
  }
`;

export const CarouselMobileScrollNode = styled.div`
  min-width: 292px;

  @media ${(props) => props.theme.breakpoints.sm} {
    min-width: 120%;
  }
`;

export const CarouselItem = styled.li`
  background: ${({ active, index }) =>
    active === index
      ? 'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))'
      : 'rgba(255,255,255,0.02)'};
  border-radius: 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 260px;
  padding: 18px 18px 24px;
  margin-right: 40px;
  transition: all 0.3s ease;
  box-shadow: ${({ active, index }) =>
    active === index
      ? '0 0 25px rgba(0, 153, 255, 0.35)'
      : '0 0 0 rgba(0,0,0,0)'};
  transform: ${({ active, index }) =>
    active === index ? 'scale(1.02)' : 'scale(1)'};

  @media ${(props) => props.theme.breakpoints.md} {
    min-width: 220px;
    margin-right: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    min-width: 200px;
    margin-right: 20px;
    padding: 14px 14px 20px;
  }
`;

export const CarouselItemImg = styled.svg`
  margin-bottom: 8px;
`;

export const CarouselItemTitle = styled.h4`
  font-weight: 600;
  font-size: 20px;           /* smaller font so stays on one line */
  line-height: 26px;
  white-space: nowrap;       /* <<< keeps 2019–2020 on a single line */
  color: #ffffff;
  text-align: left;
  margin-bottom: 0.5rem;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 18px;
    line-height: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const CarouselItemText = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: 14px;
  line-height: 22px;
  max-width: 230px; /* narrower so text block looks tidy */

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 13px;
    line-height: 20px;
    max-width: 220px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    line-height: 18px;
    max-width: 210px;
  }
`;

export const CarouselButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  outline: none;
`;

export const CarouselButtonDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ active, index }) =>
    active === index ? '#fff' : 'rgba(255,255,255,0.35)'};
  transition: all 0.3s ease;
  transform: ${({ active, index }) =>
    active === index ? 'scale(1.2)' : 'scale(1)'};
`;

export const CarouselNav = styled.div``;
