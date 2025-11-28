import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    {/* Brand Name */}
    <Div1>
      <Link href="/">
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontSize: '1.4rem',
            fontWeight: '700',
          }}
        >
          Poornapragna
        </a>
      </Link>
    </Div1>

    {/* Navigation Links */}
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    {/* Social Icons */}
    <Div3>
      <SocialIcons href="https://github.com/p2004rna612" target="_blank" rel="noopener noreferrer">
        <AiFillGithub size="2.3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/poorna-pragna-88663126a" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size="2.3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram size="2.3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
