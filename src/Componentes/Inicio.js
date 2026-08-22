import styled from 'styled-components';
import Navigacion from './Navegacion';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4';

const Inicio = () => {
  return (
    <HeroWrapper>
      {/* ── Video Background ── */}
      <BgVideo
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ── Navigation ── */}
      <Navigacion />

      {/* ── Hero Content ── */}
      <HeroContent>
        <HeroTitle className="animate-fade-rise">
          Si{' '}
          <em className="not-italic" style={{ color: 'var(--muted-foreground)' }}>
            lo
          </em>{' '}
          puedes imaginar{' '}
          <em className="not-italic" style={{ color: 'var(--muted-foreground)' }}>
            lo
          </em>{' '}
          puedes crear{' '}
        </HeroTitle>

        <HeroSub className="animate-fade-rise-delay">
          Esta página fue desarrollada con propósito de presentación propia.
        </HeroSub>
      </HeroContent>
    </HeroWrapper>
  );
};

/* ── Styled Components ──────────────────────────────────────── */

const HeroWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: var(--background);
`;

const BgVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;


const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 90px 1.5rem;
`;

const HeroTitle = styled.h1`
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(2.8rem, 8vw, 6rem);
  line-height: 0.95;
  letter-spacing: -2.46px;
  max-width: 80rem;
  color: var(--foreground);
  margin: 0;
`;

const HeroSub = styled.p`
  color: var(--muted-foreground);
  font-size: clamp(1rem, 2vw, 1.125rem);
  max-width: 42rem;
  margin-top: 2rem;
  line-height: 1.7;
  font-family: var(--font-body);
`;


export default Inicio;