import styled from 'styled-components';

const Navigacion = () => {
    return (
        <Nav>
            <NavInner>
                <Logo>
                    Herrera Jair
                </Logo>

                <NavLinks>
                    <NavLink href="#inicio">Inicio</NavLink>
                    <NavLink href="#apps-destacadas">App Destacadas</NavLink>
                    <NavLink href="#pasatiempos">Pasatiempos</NavLink>
                </NavLinks>
            </NavInner>
        </Nav>
    );
};


const Nav = styled.nav`
  position: relative;
  z-index: 10;
  width: 100%;
`;

const NavInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 80rem;
  margin: 0 auto;
  padding: 1.5rem 2rem;
`;

const Logo = styled.span`
  font-family: var(--font-display);
  font-size: 1.875rem;
  letter-spacing: -0.025em;
  color: var(--foreground);
  font-weight: 400;
  line-height: 1;
  user-select: none;
`;

const NavLinks = styled.div`
  display: none;
  gap: 2rem;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled.a`
  font-size: 0.875rem;
  color: var(--muted-foreground);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: var(--foreground);
  }
`;

export default Navigacion;