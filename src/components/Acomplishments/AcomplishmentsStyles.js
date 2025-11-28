import styled from 'styled-components';

export const SectionWrapper = styled.div`
  width: 100%;
`;

export const Boxes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  width: 100%;
  margin-top: 20px;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

export const Box = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 153, 255, 0.35);
    background: rgba(255, 255, 255, 0.06);
  }
`;

export const CertImage = styled.img`
  width: 100%;
  height: auto;               /* let full height show */
  max-height: 260px;          /* limit so it doesn’t become too huge */
  object-fit: contain;        /* show complete certificate, no crop */
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: #0f1624;        /* dark bg behind image if aspect ratio different */
`;

export const CertTitle = styled.h3`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;
