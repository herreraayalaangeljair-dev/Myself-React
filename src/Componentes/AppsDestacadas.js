import React from 'react';
import styled from 'styled-components';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260801_001207_ec20d138-aa45-4b2b-ab8c-bdc71607f240.mp4';

const AppsDestacadas = () => {
  return (
    <Container>
      {/* ── Background Video ── */}
      <BackgroundVideo
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />



      {/* ── Centered Content Group ── */}
      <ContentGroup>
        <Heading>404</Heading>
        <Divider />
        <Message>
          Explora todos mis proyectos y su código fuente en mi GitHub.
        </Message>
      </ContentGroup>
    </Container>
  );
};

/* ── Styled Components ──────────────────────────────────────── */

const Container = styled.main`
  position: relative;
  min-height: 100svh;
  width: 100%;
  background-color: #000000;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 1;
`;

const HeaderLogo = styled.div`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 233px;
  height: 40px;
  transform-origin: center;

  @media (max-width: 640px) {
    top: 32px;
    transform: translateX(-50%) scale(0.75);
  }
`;

const Mark = styled.svg`
  width: 54px;
  height: 40px;
  flex-shrink: 0;
`;

const Logotype = styled.svg`
  width: 165px;
  height: 100px;
  margin-left: 14px;
  flex-shrink: 0;
`;

const ContentGroup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 483px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 44px;

  @media (max-width: 640px) {
    width: min(100% - 40px, 360px);
    gap: 28px;
  }
`;

const Heading = styled.h1`
  font-family: "Geist Mono:SemiBold", monospace;
  font-weight: 600;
  font-style: normal;
  font-size: 295.751px;
  line-height: 1.1;
  letter-spacing: -24.6459px;
  text-align: center;
  margin: 0;
  padding-bottom: 20px; /* Room for baseline to avoid clipping */
  height: auto;
  min-height: 0;
  
  /* Gradient text */
  background: linear-gradient(
    247.3282658084845deg,
    rgb(255, 255, 255) 2.5334%,
    rgba(255, 255, 255, 0.4) 93.612%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;

  @media (max-width: 640px) {
    font-size: clamp(140px, 52vw, 200px);
    letter-spacing: -0.09em;
    padding-bottom: 12px;
  }
`;

const Divider = styled.div`
  width: 425px;
  height: 1px;
  background-color: #ffffff;
  flex-shrink: 0;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const Message = styled.p`
  font-family: "Geist Mono:SemiBold", monospace;
  font-weight: 600;
  font-style: normal;
  font-size: 24px;
  line-height: 1.1;
  letter-spacing: -2px;
  color: #ffffff;
  margin: 0;
  width: 100%;

  @media (max-width: 640px) {
    font-size: clamp(16px, 4.5vw, 20px);
    letter-spacing: -1.3px;
  }
`;

export default AppsDestacadas;