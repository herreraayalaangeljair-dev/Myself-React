import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Navigacion = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('inicio');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            const sections = ['inicio', 'apps-destacadas', 'pasatiempos', 'mapa-curricular'];
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActive(id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Nav $scrolled={scrolled}>
            <NavInner>
                <Logo href="#inicio">Herrera Jair</Logo>

                <NavLinks>
                    <NavLink href="#inicio" $active={active === 'inicio'}>Inicio</NavLink>
                    <NavLink href="#apps-destacadas" $active={active === 'apps-destacadas'}>Apps</NavLink>
                    <NavLink href="#pasatiempos" $active={active === 'pasatiempos'}>Pasatiempos</NavLink>
                    <NavLink href="#mapa-curricular" $active={active === 'mapa-curricular'}>Mapa Curricular</NavLink>
                </NavLinks>
            </NavInner>
        </Nav>
    );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease;

  background: ${({ $scrolled }) =>
    $scrolled
      ? 'rgba(6, 43, 61, 0.72)'
      : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(16px)' : 'none')};
  -webkit-backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(16px)' : 'none')};
  border-bottom: ${({ $scrolled }) =>
    $scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent'};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? '0 4px 30px rgba(0,0,0,0.25)' : 'none'};
`;

const NavInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 80rem;
  margin: 0 auto;
  padding: 1.1rem 2rem;
`;

const Logo = styled.a`
  font-family: var(--font-display);
  font-size: 1.6rem;
  letter-spacing: -0.025em;
  color: var(--foreground);
  font-weight: 400;
  line-height: 1;
  user-select: none;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.75;
  }
`;

const NavLinks = styled.div`
  display: none;
  gap: 2.5rem;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled.a`
  font-size: 0.82rem;
  font-family: var(--font-body);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ $active }) => ($active ? 'var(--foreground)' : 'var(--muted-foreground)')};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    height: 1px;
    background: var(--foreground);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--foreground);
  }

  &:hover::after {
    width: 100%;
  }
`;

export default Navigacion;