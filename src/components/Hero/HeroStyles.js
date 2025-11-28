// src/components/Hero/HeroStyles.js
import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  /* small space between navbar and hero */
  padding: 0.4rem 0 1.5rem;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0.3rem 0 1.4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.2rem 0 1.2rem;
  }
`;

export const ProfileImage = styled.img`
  width: 260px;
  height: 260px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0.8rem 0 0.8rem;
  border: 3px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 16px 35px rgba(0, 0, 0, 0.45);

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 220px;
    height: 220px;
  }
`;

export const NameText = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 0.2rem;
  color: #ffffff;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
  }
`;

export const Tagline = styled.p`
  color: #c7d5ff;
  font-size: 15px;
  margin-bottom: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 0.3rem;
`;
