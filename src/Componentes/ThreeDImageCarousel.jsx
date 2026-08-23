import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';


const ThreeDImageCarousel = ({
  slides = [],
  itemCount = 5,
  autoplay = false,
  delay = 3,
  pauseOnHover = true,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const total = slides.length;

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || isPaused) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(next, delay * 1000);
    return () => clearInterval(intervalRef.current);
  }, [autoplay, isPaused, delay, next]);

  if (!slides.length) return null;

  // Cuántos items a cada lado del activo
  const sideCount = Math.floor(itemCount / 2);

  // Genera la lista de índices visibles con su posición relativa
  const getVisibleItems = () => {
    const items = [];
    for (let offset = -sideCount; offset <= sideCount; offset++) {
      const idx = (activeIndex + offset + total) % total;
      items.push({ idx, offset });
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <CarouselWrapper
      className={className}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <Stage>
        {visibleItems.map(({ idx, offset }) => {
          const slide = slides[idx];
          const isCenter = offset === 0;
          const absOffset = Math.abs(offset);

          // Transformaciones 3D según posición
          const translateX = offset * (itemCount === 3 ? 160 : 130);
          const translateZ = isCenter ? 60 : -absOffset * 80;
          const rotateY = offset * (itemCount === 3 ? -25 : -20);
          const scale = isCenter ? 1 : 1 - absOffset * 0.12;
          const opacity = isCenter ? 1 : 1 - absOffset * 0.25;
          const zIndex = sideCount - absOffset + 1;

          const card = (
            <Card
              key={idx}
              $isCenter={isCenter}
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex,
              }}
              onClick={() => setActiveIndex(idx)}
            >
              <img src={slide.src} alt={`slide-${slide.id}`} />
              {isCenter && <Shine />}
            </Card>
          );

          return slide.href ? (
            <a key={idx} href={slide.href} style={{ textDecoration: 'none' }}>
              {card}
            </a>
          ) : (
            card
          );
        })}
      </Stage>

      <Controls>
        <ArrowBtn onClick={prev} aria-label="Anterior">&#8592;</ArrowBtn>
        <Dots>
          {slides.map((_, i) => (
            <Dot key={i} $active={i === activeIndex} onClick={() => setActiveIndex(i)} />
          ))}
        </Dots>
        <ArrowBtn onClick={next} aria-label="Siguiente">&#8594;</ArrowBtn>
      </Controls>
    </CarouselWrapper>
  );
};

/* ── Styled Components ─────────────────────────────────────── */

const shineAnim = keyframes`
  0%   { opacity: 0; transform: translateX(-100%) rotate(25deg); }
  50%  { opacity: 0.4; }
  100% { opacity: 0; transform: translateX(200%) rotate(25deg); }
`;

const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 20px 0 10px;
  user-select: none;
`;

const Stage = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  perspective: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  position: absolute;
  width: 140px;
  height: 210px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              opacity 0.5s ease,
              box-shadow 0.5s ease;
  box-shadow: ${({ $isCenter }) =>
    $isCenter
      ? '0 20px 50px rgba(0,0,0,0.55), 0 0 0 2px rgba(255,255,255,0.12)'
      : '0 8px 20px rgba(0,0,0,0.35)'};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
  }

  &:hover {
    box-shadow: 0 24px 60px rgba(0,0,0,0.65), 0 0 0 2px rgba(255,255,255,0.2);
  }
`;

const Shine = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 30%,
    rgba(255, 255, 255, 0.25) 50%,
    transparent 70%
  );
  animation: ${shineAnim} 2.5s ease-in-out infinite;
  pointer-events: none;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ArrowBtn = styled.button`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Dot = styled.div`
  width: ${({ $active }) => ($active ? '20px' : '8px')};
  height: 8px;
  border-radius: 4px;
  background: ${({ $active }) =>
    $active ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
`;

export default ThreeDImageCarousel;
